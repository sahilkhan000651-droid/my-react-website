import React from "react";

const animationStyles = `
  @keyframes quicker-logo-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.22; }
  }

  .quicker-logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    
    flex: 0 0 auto;
    color: #172554;
    text-decoration: none;
    animation: quicker-logo-pulse 2.4s ease-in-out infinite;
  }

  .quicker-logo-mark {
    display: block;
    width: 36px;
    height: 36px;
  }

  .quicker-logo-word {
    font-size: 21px;
    font-weight: 800;
    letter-spacing: -0.8px;
  }

  .quicker-logo-word span {
    color: #2563eb;
  }

  @media (prefers-reduced-motion: reduce) {
    .quicker-logo {
      animation: none;
    }
  }
`;

export default function Logo() {
  return (
    <>
      <style>{animationStyles}</style>
      <a className="quicker-logo" href="/" aria-label="Quicker home">
        <svg
          className="quicker-logo-mark"
          viewBox="0 0 40 40"
          role="img"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="quicker-logo-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <path
            d="M7 12h13M3 20h15M7 28h13"
            fill="none"
            stroke="url(#quicker-logo-gradient)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M23 8a12 12 0 1 1-8.49 3.51M22 18l7 2-2 7"
            fill="none"
            stroke="url(#quicker-logo-gradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.5"
          />
        </svg>
        <span className="quicker-logo-word">
          Quick<span>er</span>
        </span>
      </a>
    </>
  );
}
