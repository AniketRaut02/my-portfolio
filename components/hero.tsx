"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-10" />
        {/* Placeholder for showreel video */}
        <div className="w-full h-full bg-secondary flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
            <p className="text-sm">[Insert Showreel Video Placeholder]</p>
          </div>
        </div>
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 z-[5] opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px),
                              linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] z-[1]" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-[family-name:var(--font-display)]">
            <span className="text-foreground">Aniket Raut</span>
            <br />
            <span className="text-primary">Unity Game Developer</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Specializing in{" "}
            <span className="text-foreground font-medium">System Engineering</span>,{" "}
            <span className="text-foreground font-medium">Feature Implementation</span>, and{" "}
            <span className="text-foreground font-medium">Core Mechanics</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            >
              <a href="#projects">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-border text-foreground hover:bg-secondary hover:text-foreground px-8"
            >
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Scroll indicator - centered below buttons */}
          <div className="flex flex-col items-center gap-2 text-muted-foreground pt-12">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
