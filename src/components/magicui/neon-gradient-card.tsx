import { cn } from "../ui/utils";
import React from "react";

interface NeonGradientCardProps {
  children: React.ReactNode;
  className?: string;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: {
    firstColor: string;
    secondColor: string;
  };
}

export function NeonGradientCard({
  children,
  className,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff2975",
    secondColor: "#00FFF1",
  },
}: NeonGradientCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--border-radius)] p-[var(--border-size)]",
        className
      )}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
    >
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-[var(--border-radius)] opacity-100 transition-opacity duration-500 animate-spin"
        style={{
          background: `conic-gradient(from 0deg, ${neonColors.firstColor}, ${neonColors.secondColor}, ${neonColors.firstColor})`,
          animation: "spin 3s linear infinite",
        }}
      />
      
      {/* Inner content container */}
      <div
        className="relative rounded-[calc(var(--border-radius)-var(--border-size))] bg-white overflow-hidden"
        style={{
          margin: `${borderSize}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}