"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { DEVELOPER_INFO, SKILLS_CATEGORIES, PROJECTS_INDEX, ACADEMIC_JOURNEY } from "@/data/portfolio";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Check,
  Copy,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
  Layers,
  Briefcase,
  GraduationCap,
  MapPin,
  Maximize2,
  Minimize2,
  Eye,
} from "lucide-react";

gsap.registerPlugin(useGSAP);

type ActiveTab = "doc" | "summary" | "skills" | "projects" | "education";

interface ResumeSectionProps {
  onBackToPortfolio: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onBackToPortfolio }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [activeTab, setActiveTab] = useState<ActiveTab>("doc");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Resume Loader Animation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const startTime = performance.now();
    const duration = 350;

    const animateCounter = (now: number) => {
      const elapsed = Math.max(0, now - startTime);
      const pct = Math.max(0, Math.min(Math.floor((elapsed / duration) * 100), 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(animateCounter);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 150);
      }
    };

    const animId = requestAnimationFrame(animateCounter);
    return () => cancelAnimationFrame(animId);
  }, []);

  useGSAP(
    () => {
      if (loading || !containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(".gsap-fade-in");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
    },
    { scope: containerRef, dependencies: [loading] }
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEVELOPER_INFO.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.15, 1.8));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.15, 0.7));
  const handleResetZoom = () => setZoom(1);

  const resumeUrl = DEVELOPER_INFO.socials.resume;

  const tabs = [
    { id: "doc" as ActiveTab, label: "Official Document", icon: Eye },
    { id: "summary" as ActiveTab, label: "Overview", icon: Sparkles },
    { id: "skills" as ActiveTab, label: "Skills Stack", icon: Layers },
    { id: "projects" as ActiveTab, label: "Featured Work", icon: Briefcase },
    { id: "education" as ActiveTab, label: "Education", icon: GraduationCap },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-theme text-theme-main relative z-30"
    >
      {/* Resume Loader Component */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="resume-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-theme pt-24 pb-8 sm:pb-16 px-8 sm:px-16 select-none"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between font-mono text-xs text-theme-muted uppercase tracking-widest border-b border-theme/40 pb-6">
              <span>YUVARAJ PG — RESUME VIEWER</span>
              <span className="text-theme-main font-bold">LOADING CV</span>
            </div>

            {/* Middle Counter */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="font-mono text-6xl sm:text-9xl font-black text-theme-main tracking-tighter">
                {String(progress).padStart(2, "0")}%
              </div>
              <div className="w-48 h-1 bg-theme-surface rounded-full overflow-hidden border border-theme/40">
                <div
                  className="h-full bg-theme-main transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex items-center justify-between font-mono text-xs text-theme-muted uppercase tracking-widest border-t border-theme/40 pt-6">
              <span>BUILDING DIGITAL PRODUCTS</span>
              <span>INDEX 2025 — 2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Resume Viewer Content */}
      {!loading && (
        <div
          ref={containerRef}
          className={`min-h-screen ${
            isFullscreen ? "p-4 sm:p-6" : "pt-28 pb-20 px-6 sm:px-12 max-w-7xl mx-auto"
          } space-y-8`}
        >
          {/* Top Navigation & Action Controls Bar */}
          <div className="gsap-fade-in flex flex-wrap items-center justify-between gap-4 border-b border-theme pb-6">
            <button
              onClick={onBackToPortfolio}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-theme-muted hover:text-theme-main transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-mono border border-theme bg-theme-surface hover:bg-theme transition-colors rounded-xl text-theme-main cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider bg-theme-surface border border-theme text-theme-main hover:bg-theme transition-colors rounded-xl"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open PDF</span>
              </a>

              <a
                href={resumeUrl}
                download="Yuvaraj_PG_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider bg-theme-main text-theme-bg hover:opacity-90 transition-opacity rounded-xl"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Custom View Frame Container */}
          <div className="gsap-fade-in w-full rounded-2xl border border-theme bg-theme-surface overflow-hidden shadow-2xl space-y-0">
            {/* Frame Window Header Bar */}
            <div className="bg-theme/90 backdrop-blur-md px-6 py-3.5 border-b border-theme flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-theme-muted">
              {/* OS Window dots & title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-theme-main font-semibold truncate font-mono">
                  {DEVELOPER_INFO.name} — Resume.pdf
                </span>
              </div>

              {/* Navigation Tab Pills */}
              <div className="flex flex-wrap items-center gap-1 bg-theme border border-theme/60 p-1 rounded-xl">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isSelected = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono rounded-lg transition-all cursor-pointer ${
                        isSelected
                          ? "bg-theme-main text-theme-bg font-bold shadow-xs"
                          : "text-theme-muted hover:text-theme-main"
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Controls: Zoom & Fullscreen */}
              <div className="flex items-center gap-2">
                {activeTab === "doc" && (
                  <div className="flex items-center gap-1 border border-theme/60 bg-theme/40 px-2 py-1 rounded-xl">
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      aria-label="Zoom out"
                      className="p-1 hover:text-theme-main rounded transition-colors cursor-pointer"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono min-w-10 text-center text-theme-main">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      type="button"
                      onClick={handleZoomIn}
                      aria-label="Zoom in"
                      className="p-1 hover:text-theme-main rounded transition-colors cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleResetZoom}
                      aria-label="Reset zoom"
                      className="p-1 text-theme-muted hover:text-theme-main rounded transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setIsFullscreen((prev) => !prev)}
                  className="p-1.5 border border-theme/60 hover:bg-theme rounded-xl text-theme-muted hover:text-theme-main transition-colors cursor-pointer"
                  title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
                >
                  {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Frame Content Viewport */}
            <div className="bg-neutral-950 min-h-[700px] max-h-[80vh] overflow-auto flex justify-center items-start p-4 sm:p-8">
              {/* Tab 1: High-Res Document Preview */}
              {activeTab === "doc" && (
                <div
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: "top center",
                    transition: "transform 0.15s ease-out",
                  }}
                  className="w-full max-w-[850px] shadow-2xl rounded-lg overflow-hidden border border-white/10 bg-white"
                >
                  <Image
                    src="/resume-preview-1.png"
                    alt={`${DEVELOPER_INFO.name} Resume`}
                    width={2068}
                    height={2925}
                    priority
                    className="w-full h-auto block select-none"
                  />
                </div>
              )}

              {/* Tab 2: Overview / Summary */}
              {activeTab === "summary" && (
                <div className="w-full max-w-3xl space-y-6 text-theme-main font-mono py-4">
                  <div className="p-6 bg-theme-surface border border-theme rounded-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-theme pb-3">
                      <h3 className="font-bold text-lg text-theme-main uppercase tracking-wide">Developer Profile</h3>
                      <span className="text-xs text-theme-muted">{DEVELOPER_INFO.role}</span>
                    </div>
                    <div className="space-y-3 text-sm text-theme-muted leading-relaxed">
                      {DEVELOPER_INFO.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="pt-2 flex items-center gap-2 text-xs text-theme-main">
                      <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{DEVELOPER_INFO.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-theme-surface border border-theme rounded-2xl space-y-2">
                      <span className="text-xs uppercase text-theme-muted">Education</span>
                      <div className="font-bold text-sm text-theme-main">{DEVELOPER_INFO.education.degree}</div>
                      <div className="text-xs text-theme-muted">{DEVELOPER_INFO.education.institution} ({DEVELOPER_INFO.education.period})</div>
                    </div>

                    <div className="p-5 bg-theme-surface border border-theme rounded-2xl space-y-2">
                      <span className="text-xs uppercase text-theme-muted">Status</span>
                      <div className="font-bold text-sm text-emerald-500">Available for Opportunities</div>
                      <div className="text-xs text-theme-muted">Web Engineering & Frontend Development</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Skills Stack */}
              {activeTab === "skills" && (
                <div className="w-full max-w-3xl space-y-6 font-mono py-4">
                  <div className="border-b border-theme pb-2 flex items-center justify-between">
                    <h3 className="font-bold text-base text-theme-main uppercase">Technical Expertise</h3>
                    <span className="text-xs text-theme-muted">Repertoire</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {SKILLS_CATEGORIES.map((category) => (
                      <div key={category.title} className="p-5 bg-theme-surface border border-theme rounded-2xl space-y-3">
                        <h4 className="text-xs font-bold text-theme-main uppercase border-b border-theme pb-2">
                          {category.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {category.items.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 text-xs bg-theme border border-theme text-theme-muted rounded-lg"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Featured Projects */}
              {activeTab === "projects" && (
                <div className="w-full max-w-3xl space-y-4 font-mono py-4">
                  <div className="border-b border-theme pb-2 flex items-center justify-between">
                    <h3 className="font-bold text-base text-theme-main uppercase">Featured Applications</h3>
                    <span className="text-xs text-theme-muted">{PROJECTS_INDEX.length} Projects</span>
                  </div>
                  <div className="space-y-4">
                    {PROJECTS_INDEX.map((project) => (
                      <div key={project.id} className="p-5 bg-theme-surface border border-theme rounded-2xl space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-theme-muted">{project.number}</span>
                            <h4 className="font-bold text-sm text-theme-main">{project.title}</h4>
                          </div>
                          <span className="text-xs text-theme-muted uppercase">{project.year}</span>
                        </div>
                        <p className="text-xs text-theme-muted leading-relaxed">{project.summary}</p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.technologies.map((t) => (
                            <span key={t} className="text-[10px] px-2 py-0.5 bg-theme border border-theme text-theme-muted rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 5: Education */}
              {activeTab === "education" && (
                <div className="w-full max-w-3xl space-y-4 font-mono py-4">
                  <div className="border-b border-theme pb-2 flex items-center justify-between">
                    <h3 className="font-bold text-base text-theme-main uppercase">Academic Qualifications</h3>
                    <span className="text-xs text-theme-muted">Timeline</span>
                  </div>
                  <div className="space-y-4">
                    {ACADEMIC_JOURNEY.map((item) => (
                      <div key={item.id} className="p-5 bg-theme-surface border border-theme rounded-2xl space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-theme-main">{item.title}</h4>
                          <span className="text-xs text-emerald-500 font-semibold">{item.status}</span>
                        </div>
                        <div className="text-xs text-theme-muted">{item.institution} &middot; {item.period}</div>
                        <div className="text-[11px] text-theme-muted/80">{item.location}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Direct Action Block */}
          <div className="gsap-fade-in p-6 bg-theme-surface border border-theme rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-theme-muted">
            <span>Need a copy for your records or recruiter review?</span>
            <div className="flex items-center gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-theme bg-theme text-theme-main font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-theme-surface transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open PDF</span>
              </a>
              <a
                href={resumeUrl}
                download="Yuvaraj_PG_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-theme-main text-theme-bg font-bold rounded-xl text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};
