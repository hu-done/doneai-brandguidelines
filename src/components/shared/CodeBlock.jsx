import React, { useState } from "react";
import styled from "styled-components";
import { Copy, Check } from "lucide-react";

const CodeBlockContainer = styled.div`
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: var(--space-4);
  box-shadow: var(--shadow-md);
`;

const CodeBlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  background: var(--color-midnight);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;

const LanguageLabel = styled.span`
  font-size: var(--text-body-small);
  color: var(--color-pearl);
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const CodeTitle = styled.span`
  font-size: var(--text-body);
  color: var(--color-pearl);
  font-weight: 500;
`;

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-md);
  color: var(--color-pearl);
  font-size: var(--text-body-small);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-default);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-violet), 0 0 0 4px rgba(106, 0, 213, 0.2);
  }
`;

const CodeContent = styled.pre`
  margin: 0;
  padding: var(--space-4);
  background: var(--color-midnight);
  color: var(--color-pearl);
  font-family: 'Courier New', Courier, monospace;
  font-size: var(--text-body-small);
  line-height: 1.6;
  overflow-x: auto;
  white-space: pre;

  /* Custom scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-sm);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const CodeBlock = ({ children, language, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <CodeBlockContainer>
      <CodeBlockHeader>
        <HeaderLeft>
          {language && <LanguageLabel>{language}</LanguageLabel>}
          {title && <CodeTitle>{title}</CodeTitle>}
        </HeaderLeft>
        <CopyButton onClick={handleCopy} aria-label={copied ? "Copied" : "Copy code"}>
          {copied ? (
            <>
              <Check size={16} strokeWidth={1.5} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} strokeWidth={1.5} />
              Copy
            </>
          )}
        </CopyButton>
      </CodeBlockHeader>
      <CodeContent>{children}</CodeContent>
    </CodeBlockContainer>
  );
};

export default CodeBlock;
