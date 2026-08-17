"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  href: string;
  className?: string;
  variant?: string;
}

export default function PrimaryButton({
  text,
  href,
  variant,
  className = "",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`
      inline-flex items-center gap-3
      rounded-full
      bg-red-700
      px-6
      py-3 

      text-black
      font-semibold
      transition-all
      duration-300
      group
      shadow-lg
      ${className} ${variant === "transparent" ? "bg-transparent text-white hover:bg-transparent" : "text-black hover:text-white hover:bg-red-800"}`}
    >
      <span>{text}</span>

      <span
        className={`
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        transition-transform
        duration-300
        group-hover:rotate-45
        group-hover:scale-110
        ${variant === "transparent" ? "bg-red-700 text-white" : variant === "contact" ? "bg-red-700 text-white" : "bg-white text-red-700"}
      `}
      >
        <ArrowUpRight size={18} strokeWidth={2.5} />
      </span>
    </Link>
  );
}