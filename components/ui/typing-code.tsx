"use client";
import { useEffect, useState } from "react";
const lines = [
  [{ text: "// Hello, world!", color: "text-[#be9b7b]" }],
  [
    { text: "const ", color: "text-[#c792ea]" },
    { text: "developer", color: "text-[#23da90]" },
    { text: " = {", color: "text-[#fff4e6]" },
  ],
  [
    { text: "name: ", color: "text-[#fff4e6]" },
    { text: '"Karl Hen\'z"', color: "text-[#23da90]" },
    { text: ",", color: "text-[#fff4e6]" },
  ],
  [
    { text: "role: ", color: "text-[#fff4e6]" },
    { text: '"Software Engineer"', color: "text-[#23da90]" },
    { text: ",", color: "text-[#fff4e6]" },
  ],
  [{ text: "};", color: "text-[#fff4e6]" }],
];
const totalCharacters = lines.reduce(
  (total, line) =>
    total +
    line.reduce((lineTotal, segment) => lineTotal + segment.text.length, 0),
  0,
);
export default function TypingCode() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    let delay: number;
    if (!isDeleting && visibleCharacters === totalCharacters) {
      delay = window.setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && visibleCharacters === 0) {
      delay = window.setTimeout(() => setIsDeleting(false), 500);
    } else {
      delay = window.setTimeout(
        () => {
          setVisibleCharacters((current) => current + (isDeleting ? -1 : 1));
        },
        isDeleting ? 25 : 55,
      );
    }
    return () => window.clearTimeout(delay);
  }, [visibleCharacters, isDeleting]);
  return (
    <div className="space-y-2 font-mono text-xs">
      {lines.map((line, lineIndex) => {
        const lineStart = lines
          .slice(0, lineIndex)
          .flat()
          .reduce((total, segment) => total + segment.text.length, 0);
        return (
          <p key={lineIndex} className="min-h-lh whitespace-pre-wrap">
            {line.map((segment, segmentIndex) => {
              const start =
                lineStart +
                line
                  .slice(0, segmentIndex)
                  .reduce((total, previous) => total + previous.text.length, 0);
              const length = Math.max(
                0,
                Math.min(segment.text.length, visibleCharacters - start),
              );
              return (
                <span key={segmentIndex} className={segment.color}>
                  {" "}
                  {segment.text.slice(0, length)}{" "}
                </span>
              );
            })}{" "}
          </p>
        );
      })}
    </div>
  );
}
