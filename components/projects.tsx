"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gamepad2 } from "lucide-react"

const projects = [
  {
    title: "Zombie Survival 3D Prototype",
    description:
      "A survival horror experience featuring realistic AI behavior, comprehensive inventory management, and intricate crafting systems. Built with optimized C# scripting for smooth gameplay performance.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-09%20121233-FcnLDb9bs4PVorCLTweJjwCUh96j1y.png",
    tags: ["Unity", "C#", "AI Systems", "Inventory", "Crafting"],
    featured: true,
  },
  {
    title: "2D Horror Adventure Prototype",
    description:
      "An atmospheric 2D horror game with a custom dialogue system, dynamic flashlight mechanics, and hand-crafted animations utilizing Unity's 2D rigging for character movements.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-09%20121413-GhL8lExJOBMAdKuV1HdR7SgGZJj3YQ.png",
    tags: ["Unity", "C#", "2D Rigging", "Dialogue System", "Animation"],
    featured: true,
  },
  {
    title: "Awaiting Discharge",
    description:
      "A 3D hospital horror experience focused on environmental storytelling and tension building. Currently in development, exploring atmospheric sound design and psychological horror elements.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Awainting%20Discharge-SZR4vXWKAPCFITefboXAPrhbRuvod4.png",
    tags: ["Unity", "C#", "3D", "Horror", "Environmental Design"],
    featured: true,
  },
  {
    title: "Custom Physics Unity",
    description:
      "A comprehensive physics system project showcasing custom physics implementation in Unity. Demonstrates advanced understanding of motion dynamics, collision detection, and physics-based interactions.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/custom%20physics.png-UIIlBcIFS2RrCwyMKPCJ7RLAVr1SPt.jpeg",
    tags: ["Unity", "C#", "Physics", "Simulation", "Mathematics"],
    featured: false,
  },
  {
    title: "Custom Behaviour Tree Unity",
    description:
      "An AI behavior tree system implementation showcasing advanced AI programming. Features hierarchical decision-making, node-based architecture, and reusable behavior patterns for intelligent NPC systems.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Custom%20BT.png-Bb52kYLCegz353Jo5HA0DdANRpDaNF.jpeg",
    tags: ["Unity", "C#", "AI", "Behavior Trees", "Systems Design"],
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-primary" />
          <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
            Projects
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-display)]">
            Featured Work
          </h3>
          <p className="text-muted-foreground max-w-md">
            A collection of game development projects showcasing mechanics-driven design and technical implementation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:-translate-y-1 ${
                project.featured && index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-secondary overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="gap-2 bg-background/90 text-foreground hover:bg-background"
                        asChild
                      >
                        <a href="https://github.com/AniketRaut02" target="_blank" rel="noopener noreferrer">
                          View Details
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <Gamepad2 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <span className="text-xs">[Insert Game Screenshot]</span>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="gap-2 bg-background/90 text-foreground hover:bg-background"
                        asChild
                      >
                        <a href="https://github.com/AniketRaut02" target="_blank" rel="noopener noreferrer">
                          View Details
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h4 className="text-xl font-bold text-foreground font-[family-name:var(--font-display)] group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
                      +{project.tags.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
