"use client";

import React, { useState } from "react";
import { DEVELOPER_INFO } from "@/data/portfolio";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Reveal } from "@/components/primitives/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AnimatedLink } from "@/components/motion/AnimatedLink";
import { AnimatedInput } from "@/components/forms/AnimatedInput";
import { Skiper68Textarea } from "@/components/ui/skiper-ui/skiper68";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Check, Copy } from "lucide-react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const [countdown, setCountdown] = useState(5);

  React.useEffect(() => {
    if (!sent) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSent(false);
          return 5;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [sent]);

  const handleResetForm = () => {
    setSent(false);
    setCountdown(5);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        setSubmitError(
          "Something went wrong. Please try again or email me directly."
        );
      }
    } catch (err) {
      setSubmitError(
        "Something went wrong. Please try again or email me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-16">
      {/* Section Heading */}
      <SectionHeading number="06" title="CONTACT & INQUIRIES" tag="GET IN TOUCH" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Display CTA Headline & Quick Copy (7 cols) */}
        <Reveal className="lg:col-span-7 space-y-8">
          <TextReveal
            lines={["HAVE A PROJECT", "IN MIND?", "LET'S TALK."]}
            className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-theme-main uppercase leading-[0.98]"
            lineClassName="block"
          />

          <p className="text-theme-muted text-base max-w-lg leading-relaxed">
            I am open for software engineering opportunities, project inquiries, or technical collaborations.
          </p>

          {/* Quick Copy Email Box */}
          <div className="p-6 bg-theme-surface border border-theme space-y-3 max-w-md">
            <span className="text-xs font-mono text-theme-muted uppercase">DIRECT EMAIL</span>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm sm:text-base font-mono text-theme-main font-semibold">
                {DEVELOPER_INFO.socials.email}
              </span>
              <MagneticButton onClick={handleCopy} strength={0.3}>
                <div className="btn-primary inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold cursor-pointer shrink-0">
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              </MagneticButton>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-wider pt-2">
            <AnimatedLink href={DEVELOPER_INFO.socials.github} external showArrow={false}>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </div>
            </AnimatedLink>

            <AnimatedLink href={DEVELOPER_INFO.socials.linkedin} external showArrow={false}>
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </div>
            </AnimatedLink>
          </div>
        </Reveal>

        {/* Right: Skiper106 Powered Interactive Form (5 cols) */}
        <Reveal delay={0.15} className="lg:col-span-5 p-8 bg-theme-surface border border-theme space-y-6">
          <span className="text-xs font-mono text-theme-muted uppercase block">
            SEND A DIRECT MESSAGE
          </span>

          {sent ? (
            <div className="py-12 text-center space-y-3">
              <div className="text-sm font-mono text-emerald-500 font-semibold">✓ Message sent successfully.</div>
              <p className="text-xs text-theme-muted">Thank you for reaching out. I’ll get back to you shortly.</p>
              <button
                type="button"
                onClick={handleResetForm}
                className="text-xs font-mono text-theme-main underline underline-offset-4 pt-2 block mx-auto cursor-pointer transition-opacity hover:opacity-80"
              >
                Send another message · {countdown}s
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <AnimatedInput
                label="Name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                  if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                  if (submitError) setSubmitError("");
                }}
                placeholder="Your name"
                error={errors.name}
              />

              <AnimatedInput
                label="Email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                  if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                  if (submitError) setSubmitError("");
                }}
                placeholder="name@domain.com"
                error={errors.email}
              />

              <Skiper68Textarea
                label="Message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, message: e.target.value }));
                  if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                  if (submitError) setSubmitError("");
                }}
                placeholder="Project details or inquiry..."
                error={errors.message}
              />

              {submitError && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-xs font-mono text-red-500">
                  {submitError}
                </div>
              )}

              <MagneticButton strength={0.2} className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3.5 font-mono font-bold text-xs uppercase cursor-pointer px-3 disabled:opacity-50"
                >
                  {isSubmitting ? "SENDING..." : "Submit Message"}
                </button>
              </MagneticButton>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
