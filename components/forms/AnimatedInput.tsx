"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SmoothInput } from "@/components/ui/skiper-ui/skiper106";
import { cn } from "@/lib/utils";

export interface AnimatedInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
  type?: string;
}

export const AnimatedInput = ({
  label,
  error,
  id,
  className,
  wrapperClassName,
  required,
  value,
  type = "text",
  placeholder,
  onChange,
  onFocus,
  onBlur,
  ...props
}: AnimatedInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const hasValue = value !== undefined && value !== null && String(value).length > 0;

  return (
    <div className="relative w-full space-y-1">
      <motion.div
        animate={{
          borderColor: error
            ? "#ef4444"
            : isFocused
            ? "var(--foreground)"
            : "var(--border)",
          backgroundColor: isFocused ? "var(--elevated)" : "var(--surface)",
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative flex flex-col rounded-xl border border-theme p-3.5 transition-all duration-200 focus-within:ring-1 focus-within:ring-theme-main/20",
          wrapperClassName
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "pointer-events-none text-xs font-mono uppercase tracking-wider transition-all duration-200 origin-left select-none block pb-1",
              isFocused || hasValue
                ? "text-theme-main font-semibold opacity-100"
                : "text-theme-muted opacity-60"
            )}
          >
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}

        {/* Clean pass-through to official Skiper106 SmoothInput */}
        <SmoothInput
          id={inputId}
          type={(type as "text" | "password" | "email") || "text"}
          value={value}
          onChange={onChange}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          placeholder={placeholder}
          wrapperClassName="bg-transparent p-0 max-w-none rounded-none outline-none has-[:focus-visible]:outline-none"
          className={cn(
            "text-sm sm:text-base font-sans text-theme-main placeholder:text-theme-muted/50 placeholder:font-normal",
            className
          )}
          {...props}
        />

        {/* Focus Bottom Indicator Line */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFocused ? 1 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-3 right-3 h-[2px] bg-theme-main origin-left rounded-full motion-reduce:hidden pointer-events-none"
        />
      </motion.div>

      {error && (
        <span className="text-xs font-mono text-red-500 block pt-0.5 px-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default AnimatedInput;
