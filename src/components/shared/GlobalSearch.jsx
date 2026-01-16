import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Fuse from "fuse.js";
import { searchIndex } from "../data/searchIndex";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(11, 4, 37, 0.5);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 15vh;
  animation: fadeIn var(--duration-normal) var(--ease-default);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  background-color: var(--color-surface-primary);
  width: 90%;
  max-width: 600px;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  animation: slideUp var(--duration-normal) var(--ease-out);

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: var(--space-4);
  border-bottom: 1px solid var(--color-border);
  gap: var(--space-3);
`;

const SearchIcon = styled(Search)`
  color: var(--color-text-secondary);
  flex-shrink: 0;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: var(--text-body);
  font-family: "DM Sans", sans-serif;
  background: transparent;
  color: var(--color-text-primary);

  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const KeyboardHint = styled.span`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  padding: 4px 8px;
  background-color: var(--color-surface-secondary);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  font-family: "SF Mono", "Monaco", "Consolas", monospace;
`;

const ResultsContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding: var(--space-2);
`;

const EmptyState = styled.div`
  padding: var(--space-8) var(--space-4);
  text-align: center;
  color: var(--color-text-secondary);
  font-size: var(--text-body-small);
`;

const CategoryGroup = styled.div`
  margin-bottom: var(--space-4);

  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryHeader = styled.div`
  font-size: var(--text-caption);
  font-weight: 600;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: var(--space-2) var(--space-3);
  margin-bottom: var(--space-1);
`;

const ResultItem = styled.div`
  padding: var(--space-3);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-default);
  background-color: ${(props) =>
    props.$active ? "var(--color-lavender)" : "transparent"};

  &:hover {
    background-color: var(--color-lavender);
  }
`;

const ResultTitle = styled.div`
  font-size: var(--text-body);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const CategoryBadge = styled.span`
  font-size: var(--text-caption);
  padding: 2px 8px;
  background-color: var(--color-surface-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  font-weight: 400;
`;

const ResultDescription = styled.div`
  font-size: var(--text-body-small);
  color: var(--color-text-secondary);
  line-height: 1.4;
`;

const MatchedText = styled.mark`
  background-color: transparent;
  color: var(--color-violet);
  font-weight: 500;
`;

const GlobalSearch = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Initialize Fuse.js with configuration
  const fuse = useRef(
    new Fuse(searchIndex, {
      keys: [
        { name: "title", weight: 2 },
        { name: "description", weight: 1.5 },
        { name: "keywords", weight: 1 },
        { name: "category", weight: 0.5 },
      ],
      threshold: 0.3,
      includeMatches: true,
      minMatchCharLength: 2,
    })
  ).current;

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const searchResults = fuse.search(query);
    setResults(searchResults);
    setSelectedIndex(0);
  }, [query, fuse]);

  // Group results by category
  const groupedResults = results.reduce((acc, result) => {
    const category = result.item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(result);
    return acc;
  }, {});

  // Handle navigation
  const handleNavigate = useCallback((path) => {
    navigate(path);
    onClose();
  }, [navigate, onClose]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (results.length > 0 && results[selectedIndex]) {
            handleNavigate(results[selectedIndex].item.path);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, results, selectedIndex, handleNavigate]);

  const highlightMatch = (text, matches) => {
    if (!matches || matches.length === 0) return text;

    const indices = matches[0].indices;
    let result = [];
    let lastIndex = 0;

    indices.forEach(([start, end]) => {
      result.push(text.substring(lastIndex, start));
      result.push(
        <MatchedText key={start}>{text.substring(start, end + 1)}</MatchedText>
      );
      lastIndex = end + 1;
    });

    result.push(text.substring(lastIndex));
    return result;
  };

  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <SearchInputWrapper>
          <SearchIcon size={20} strokeWidth={1.5} />
          <SearchInput
            ref={inputRef}
            type="text"
            placeholder="Search guidelines..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <KeyboardHint>⌘K</KeyboardHint>
        </SearchInputWrapper>

        <ResultsContainer>
          {query.trim() === "" && (
            <EmptyState>
              Type to search brand guidelines, components, and design tokens...
            </EmptyState>
          )}

          {query.trim() !== "" && results.length === 0 && (
            <EmptyState>No results found for "{query}"</EmptyState>
          )}

          {results.length > 0 &&
            Object.entries(groupedResults).map(
              ([category, categoryResults]) => {
                // Calculate the global index for each result
                let globalIndex = 0;
                for (const cat of Object.keys(groupedResults)) {
                  if (cat === category) break;
                  globalIndex += groupedResults[cat].length;
                }

                return (
                  <CategoryGroup key={category}>
                    <CategoryHeader>{category}</CategoryHeader>
                    {categoryResults.map((result, localIndex) => {
                      const currentGlobalIndex = globalIndex + localIndex;
                      const titleMatches = result.matches?.filter(
                        (m) => m.key === "title"
                      );

                      return (
                        <ResultItem
                          key={result.item.path}
                          $active={currentGlobalIndex === selectedIndex}
                          onClick={() => handleNavigate(result.item.path)}
                        >
                          <ResultTitle>
                            {titleMatches && titleMatches.length > 0
                              ? highlightMatch(
                                  result.item.title,
                                  titleMatches
                                )
                              : result.item.title}
                            <CategoryBadge>{result.item.category}</CategoryBadge>
                          </ResultTitle>
                          <ResultDescription>
                            {result.item.description}
                          </ResultDescription>
                        </ResultItem>
                      );
                    })}
                  </CategoryGroup>
                );
              }
            )}
        </ResultsContainer>
      </ModalContainer>
    </Backdrop>
  );
};

export default GlobalSearch;
