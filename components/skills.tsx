"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code2, Cpu, Wrench, Zap } from "lucide-react"

const languages = [
  { name: "C#", level: 90, status: "Proficient" },
  { name: "C++", level: 85, status: "Proficient" },
  { name: "C", level: 70, status: "Intermediate" },
  { name: "Python", level: 65, status: "Intermediate" },
]

const engines = [
  { name: "Unity Engine", icon: "🎮" },
  { name: "Unreal Engine", icon: "🎯" },
]

const tools = [
  { name: "GIT", icon: "📦" },
  { name: "Photoshop", icon: "🎨" },
]

const competencies = [
  {
    title: "Game Systems Engineering",
    description: "Building modular, scalable game systems",
    icon: Cpu,
  },
  {
    title: "AI Implementation",
    description: "Creating intelligent NPC behaviors and pathfinding",
    icon: Zap,
  },
  {
    title: "Physics Interactions",
    description: "Realistic physics simulations and controls",
    icon: Wrench,
  },
  {
    title: "Performance Optimization",
    description: "Profiling and optimizing for smooth gameplay",
    icon: Code2,
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Skills
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-display)] mb-12">
          Technical Expertise
        </h3>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Languages */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Programming Languages
              </h4>
              <div className="space-y-5">
                {languages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {lang.status}
                      </Badge>
                    </div>
                    <Progress value={lang.level} className="h-2 bg-secondary [&>div]:bg-primary" />
                  </div>
                ))}
              </div>
            </div>

            {/* Engines & Tools */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Engines</h4>
                <div className="space-y-3">
                  {engines.map((engine) => (
                    <div
                      key={engine.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                    >
                      <span className="text-xl">{engine.icon}</span>
                      <span className="text-sm font-medium text-foreground">{engine.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Tools</h4>
                <div className="space-y-3">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                    >
                      <span className="text-xl">{tool.icon}</span>
                      <span className="text-sm font-medium text-foreground">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Core Competencies */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Core Competencies
            </h4>
            <div className="grid gap-4">
              {competencies.map((comp) => (
                <div
                  key={comp.title}
                  className="group p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <comp.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{comp.title}</h5>
                      <p className="text-sm text-muted-foreground">{comp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
