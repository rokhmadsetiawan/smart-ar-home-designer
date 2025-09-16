import React from "react";

export function NavigationFooter() {
  return (
    <footer className="sticky bottom-0 border-t border-[var(--border-color)] bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl justify-around">
        <a
          className="flex flex-1 flex-col items-center gap-1 py-3 text-primary"
          href="#"
        >
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path>
          </svg>
          <span className="text-xs font-semibold">Home</span>
        </a>
        <a
          className="flex flex-1 flex-col items-center gap-1 py-3 text-secondary-foreground hover:text-primary transition-colors"
          href="#"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="text-xs font-semibold">Rooms</span>
        </a>
        <a
          className="flex h-16 w-16 -translate-y-6 transform items-center justify-center rounded-full bg-primary text-white soft-shadow-lg"
          href="#"
        >
          <svg
            className="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M12 2a1 1 0 011 1v8a1 1 0 11-2 0V3a1 1 0 011-1zM6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
              fillRule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          className="flex flex-1 flex-col items-center gap-1 py-3 text-secondary-foreground hover:text-primary transition-colors"
          href="#"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="text-xs font-semibold">Automations</span>
        </a>
        <a
          className="flex flex-1 flex-col items-center gap-1 py-3 text-secondary-foreground hover:text-primary transition-colors"
          href="#"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="text-xs font-semibold">Profile</span>
        </a>
      </nav>
    </footer>
  );
}
