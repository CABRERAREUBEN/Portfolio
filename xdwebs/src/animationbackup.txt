import React, { useState, useEffect } from 'react';

function TypingAnimation({ words, typingSpeed }) {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let currentCharIndex = isDeleting ? currentWord.length : 0;
    const direction = isDeleting ? -1 : 1;

    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        const newText = isDeleting
          ? prevText.slice(0, -1)
          : currentWord.slice(0, currentCharIndex + 1);
        return newText;
      });

      currentCharIndex += direction;

      if (!isDeleting && currentCharIndex === currentWord.length) {
        setIsDeleting(true);
      }

      if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [words, currentWordIndex, typingSpeed, isDeleting]);

  return <span>{displayText}</span>;
}

export default TypingAnimation;
