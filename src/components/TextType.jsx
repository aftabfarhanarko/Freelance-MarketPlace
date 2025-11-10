import React, { useState, useEffect } from "react";

const TextType = ({
  text = [],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = true,
  showCursor = true,
  cursorCharacter = "|",
  textColors = ["#fb923c", "#ffffff"],
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (!text.length) return;

    const currentText = text[index];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => currentText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentText) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % text.length);
      setColorIndex((prev) => (prev + 1) % textColors.length);
    }

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    text,
    index,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textColors,
  ]);

  return (
    <span
      className={className}
      style={{
        color: textColors[colorIndex],
        transition: "color 0.3s ease-in-out",
      }}
    >
      {displayText}
      {showCursor && <span className="text-white">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
