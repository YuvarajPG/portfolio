"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*                          1. Skiper68 Typing Text                           */
/* -------------------------------------------------------------------------- */
interface Skiper68TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
  repeat?: boolean;
  delay?: number;
}

export function Skiper68TypingText({
  text,
  speed = 40,
  className = "",
  cursor = true,
  repeat = false,
  delay = 0,
}: Skiper68TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let index = 0;

    const startTyping = () => {
      setDisplayedText("");

      const type = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
          timeout = setTimeout(type, speed);
        } else if (repeat) {
          timeout = setTimeout(() => {
            index = 0;
            startTyping();
          }, 3000);
        }
      };

      type();
    };

    const initialTimer = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(timeout);
    };
  }, [text, speed, repeat, delay]);

  return (
    <span className={cn("inline-flex items-center text-theme-main", className)}>
      <span>{displayedText}</span>
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block w-[2px] h-[1.1em] bg-theme-main ml-1 shrink-0"
        />
      )}
    </span>
  );
}

import { AnimatePresence } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                         2. Skiper68 Form Input                             */
/* -------------------------------------------------------------------------- */
export interface Skiper68InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  id?: string;
  error?: string;
  inputValue?: string;
  setInputValue?: (val: string) => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (val: string) => void;
}

export function Skiper68Input({
  label,
  id,
  className,
  inputValue,
  setInputValue,
  value,
  onChange,
  onValueChange,
  onFocus,
  onBlur,
  error,
  placeholder,
  ...props
}: Skiper68InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const generatedId = React.useId();
  const inputId = id || generatedId;

  // Controlled value computation supporting both APIs seamlessly
  const currentValue = inputValue !== undefined ? inputValue : value !== undefined ? value : "";
  const hasValue = String(currentValue).length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (setInputValue) setInputValue(newValue);
    if (onValueChange) onValueChange(newValue);
    if (onChange) onChange(e);
  };

  const characters = String(currentValue).split("");

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
          className
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
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}

        {/* Input & Character Animation Layer Container */}
        <div className="relative w-full flex items-center min-h-[28px]">
          {/* Animated Character Layer */}
          <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden font-sans text-sm sm:text-base text-theme-main select-none z-10">
            <div className="flex items-center">
              <AnimatePresence mode="popLayout" initial={false}>
                {characters.map((char, index) => (
                  <motion.span
                    key={`${index}-${char}`}
                    initial={{ y: 10, opacity: 0, scale: 0.7 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -10, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block whitespace-pre"
                  >
                    {char}
                  </motion.span>
                ))}
              </AnimatePresence>

              {/* Animated Caret Cursor Indicator */}
              {isFocused && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-block w-[2px] h-[1.15em] bg-theme-main ml-0.5 shrink-0"
                />
              )}
            </div>
          </div>

          {/* Actual Native HTML Input (Handles focus, typing, keydown, accessibility) */}
          <input
            id={inputId}
            value={currentValue}
            onChange={handleInputChange}
            onFocus={(e) => {
              setIsFocused(true);
              if (onFocus) onFocus(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              if (onBlur) onBlur(e);
            }}
            placeholder={placeholder}
            className={cn(
              "w-full bg-transparent text-sm sm:text-base font-sans outline-none z-20 transition-colors",
              hasValue
                ? "text-transparent caret-transparent placeholder:text-transparent"
                : "text-theme-main placeholder:text-theme-muted/50 placeholder:font-normal"
            )}
            {...props}
          />
        </div>

        {/* Skiper68 Focus Bottom Indicator Line */}
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
}

/* -------------------------------------------------------------------------- */
/*                        3. Skiper68 Form Textarea                           */
/* -------------------------------------------------------------------------- */
export interface Skiper68TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  label?: string;
  id?: string;
  error?: string;
  inputValue?: string;
  setInputValue?: (val: string) => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onValueChange?: (val: string) => void;
}

export function Skiper68Textarea({
  label,
  id,
  className,
  inputValue,
  setInputValue,
  value,
  onChange,
  onValueChange,
  onFocus,
  onBlur,
  error,
  placeholder,
  rows = 4,
  ...props
}: Skiper68TextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const generatedId = React.useId();
  const inputId = id || generatedId;

  const currentValue = inputValue !== undefined ? inputValue : value !== undefined ? value : "";
  const hasValue = String(currentValue).length > 0;

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (setInputValue) setInputValue(newValue);
    if (onValueChange) onValueChange(newValue);
    if (onChange) onChange(e);
  };

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
          className
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
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}

        <textarea
          id={inputId}
          rows={rows}
          value={currentValue}
          onChange={handleTextareaChange}
          onFocus={(e) => {
            setIsFocused(true);
            if (onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) onBlur(e);
          }}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm sm:text-base font-sans text-theme-main outline-none resize-none placeholder:text-theme-muted/50 placeholder:font-normal transition-colors"
          {...props}
        />

        {/* Skiper68 Focus Bottom Indicator Line */}
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
}

export default Skiper68Input;
