import React from "react";
import Image from "next/image";

interface HeaderProps {
  userName: string;
  userImage: string;
}

export function Header({ userName, userImage }: HeaderProps) {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-secondary-foreground hover:text-primary">
          Welcome back,
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-primary-foreground">
          {userName}
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card soft-shadow">
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <Image
          alt="User profile"
          className="h-12 w-12 rounded-full object-cover"
          src={userImage}
          width={48}
          height={48}
        />
      </div>
    </header>
  );
}
