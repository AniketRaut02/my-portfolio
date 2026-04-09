import { Badge } from "@/components/ui/badge"
import { Briefcase, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Junior Unity Developer Intern",
    company: "Vyorius Drones Pvt Ltd",
    companyUrl: "#",
    period: "Dec 2024 - Feb 2025",
    description:
      "Contributed to the development of the AI-enabled Vyorius Simulator, a cutting-edge drone simulation platform.",
    achievements: [
      "Led development of 3D scenes across multiple difficulty levels, ensuring progressive challenge and engagement",
      "Redesigned drone physics controls for enhanced realism and responsive user experience",
      "Implemented NPCs and general AI systems to bring environments to life",
      "Collaborated on AI-enabled features for the Vyorius Simulator platform",
    ],
    technologies: ["Unity", "C#", "AI Systems", "Physics", "3D Development"],
  },
  {
    title: "Unity Developer Intern",
    company: "Vanarlabs Pvt Ltd",
    companyUrl: "https://www.namasteabc.com/",
    period: "Jan 2026 - Apr 2026",
    description:
      "Contributed to the development of \"NamasteABC\", a kids learning app that ensures children do not forget their Indian culture and stay rooted towards it.",
    achievements: [
      "Led the development of 2D interactive platformer for immersive storytelling",
      "Contributed in making the system reusable",
      "Implemented NPCs, dialogue systems, and general interactions",
      "Worked closely on 2D character animations, animator overrides, and animator state machines",
    ],
    technologies: ["Unity", "C#", "2D Animation", "Dialogue Systems", "Educational"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/50"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm" />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-display)]">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
