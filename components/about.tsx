export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-48 h-48 rounded-lg overflow-hidden border-2 border-primary/30 shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20pic-mRapdCyc54FCzQXdXb4hSpId4BsSRp.jpg"
                alt="Aniket Raut - Game Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-primary" />
                <h2 className="text-sm font-medium uppercase tracking-widest text-primary">
                  About
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground font-[family-name:var(--font-display)] leading-tight">
                Building immersive gaming experiences through code and creativity
              </h3>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"I'm"} a <span className="text-foreground font-medium">Third Year Computer Engineering Undergrad</span> at 
                Ajeenkya D.Y. Patil School Of Engineering, SPPU, Pune. My journey in game development 
                blends technical precision with creative vision.
              </p>

              <p>
                I believe in <span className="text-foreground font-medium">continuous improvement</span>. 
                My finished prototypes of 2D and 3D games ensure my consistency, iteration, and pushing 
                beyond comfort zones.
              </p>

              <p>
                Currently, {"I'm"} focused on expanding my engine expertise across both{" "}
                <span className="text-primary font-medium">Unity</span> and{" "}
                <span className="text-primary font-medium">Unreal Engine</span>, 
                diving deeper into system architecture, AI programming, and performance optimization.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">2</div>
                <div className="text-sm text-muted-foreground">Game Engines</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
