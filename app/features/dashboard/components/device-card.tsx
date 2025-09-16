import React from "react";

interface DeviceCardProps {
  title: string;
  status: string;
  icon: React.ReactNode;
  variant?: "active" | "add";
  className?: string;
}

export function DeviceCard({
  title,
  status,
  icon,
  variant = "active",
  className = "",
}: DeviceCardProps) {
  const isAdd = variant === "add";
  const baseClasses =
    "flex flex-col items-center justify-center gap-2 rounded-2xl p-4 transition-all";
  const variantClasses = isAdd
    ? "border-2 border-dashed border-gray-300 bg-transparent hover:bg-gray-50"
    : "bg-[var(--card-background)] soft-shadow hover:soft-shadow-lg";

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`}>
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-full ${
          isAdd ? "bg-gray-200" : ""
        }`}
      >
        {icon}
      </div>
      <p className={`font-semibold ${isAdd ? "text-gray-600" : ""}`}>{title}</p>
      <p
        className={`text-sm ${
          isAdd
            ? "text-gray-400"
            : "text-secondary-foreground hover:text-primary"
        }`}
      >
        {status}
      </p>
    </div>
  );
}
