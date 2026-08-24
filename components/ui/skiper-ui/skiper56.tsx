"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Skiper56InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
}

export function Skiper56Input({ label, className = "", ...props }: Skiper56InputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const isFilled = value.length > 0;

  return (
    <div className="relative w-full">
      <motion.div
        animate={{
          scale: focused ? 1.01 : 1,
          borderColor: focused ? "var(--foreground)" : "var(--border)",
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative flex flex-col rounded-xl border border-theme bg-theme-surface p-3 transition-all duration-300",
          className
        )}
      >
        <label
          className={cn(
            "pointer-events-none text-xs font-mono uppercase tracking-wider transition-all duration-200",
            focused || isFilled
              ? "text-theme-main opacity-100 transform -translate-y-0.5"
              : "text-theme-muted opacity-60"
          )}
        >
          {label}
        </label>
        <input
          {...props}
          onFocus={(e) => {
            setFocused(true);
            if (props.onFocus) props.onFocus(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            if (props.onBlur) props.onBlur(e);
          }}
          onChange={(e) => {
            setValue(e.target.value);
            if (props.onChange) props.onChange(e);
          }}
          className="w-full bg-transparent pt-1 text-sm text-theme-main outline-none placeholder:text-transparent"
        />
        {/* Animated focus indicator line */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-3 right-3 h-[2px] bg-theme-main origin-left rounded-full"
        />
      </motion.div>
    </div>
  );
}

interface Skiper56TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  className?: string;
}

export function Skiper56Textarea({ label, className = "", ...props }: Skiper56TextareaProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const isFilled = value.length > 0;

  return (
    <div className="relative w-full">
      <motion.div
        animate={{
          scale: focused ? 1.01 : 1,
          borderColor: focused ? "var(--foreground)" : "var(--border)",
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative flex flex-col rounded-xl border border-theme bg-theme-surface p-3 transition-all duration-300",
          className
        )}
      >
        <label
          className={cn(
            "pointer-events-none text-xs font-mono uppercase tracking-wider transition-all duration-200",
            focused || isFilled
              ? "text-theme-main opacity-100 transform -translate-y-0.5"
              : "text-theme-muted opacity-60"
          )}
        >
          {label}
        </label>
        <textarea
          {...props}
          rows={props.rows || 4}
          onFocus={(e) => {
            setFocused(true);
            if (props.onFocus) props.onFocus(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            if (props.onBlur) props.onBlur(e);
          }}
          onChange={(e) => {
            setValue(e.target.value);
            if (props.onChange) props.onChange(e);
          }}
          className="w-full bg-transparent pt-1 text-sm text-theme-main outline-none resize-none placeholder:text-transparent"
        />
        {/* Animated focus indicator line */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-3 right-3 h-[2px] bg-theme-main origin-left rounded-full"
        />
      </motion.div>
    </div>
  );
}

export default Skiper56Input;
