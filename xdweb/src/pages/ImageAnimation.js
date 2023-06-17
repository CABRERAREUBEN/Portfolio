import React, { useState, useEffect } from 'react';

function TypingAnimation({ content, typingSpeed, className }) {
  const [displayContent, setDisplayContent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [content.length, typingSpeed]);

  useEffect(() => {
    const currentContent = content[currentIndex];

    if (currentContent.type === 'image') {
      setDisplayContent(currentContent);
    }

    const timeout = setTimeout(() => {
      setDisplayContent(null);
    }, typingSpeed);

    return () => {
      clearTimeout(timeout);
    };
  }, [content, currentIndex, typingSpeed]);

  return (
    <div className={className}>
      {displayContent && displayContent.type === 'image' && (
        <img
          src={displayContent.src}
          alt={displayContent.alt}
          style={{ width: '200px' }}
        />
      )}
    </div>
  );
}

export default TypingAnimation;
