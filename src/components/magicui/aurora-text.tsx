import { ReactNode } from "react";

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
}

export function AuroraText({ children, className = "" }: AuroraTextProps) {
  return (
    <span
      className={`relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-aurora ${className}`}
      style={{
        backgroundSize: "200% auto",
      }}
    >
      {children}
      <span
        className="absolute inset-0 blur-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-aurora opacity-50"
        style={{
          backgroundSize: "200% auto",
        }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
}
