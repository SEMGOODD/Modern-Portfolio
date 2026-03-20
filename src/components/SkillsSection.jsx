import { useState } from "react";
import { cn } from "@/lib/utils";
import { Rocket } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },
  { name: "Angular", level: 75, category: "frontend" },
  { name: "Next.js", level: 65, category: "frontend" },
  // Backend
  { name: "PHP", level: 75, category: "backend" },
  { name: "Java", level: 80, category: "backend" },
  { name: "C/C++", level: 75, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "Rust", level: 70, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "GraphQL", level: 70, category: "backend" },
  // Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "Kubernetes", level: 75, category: "tools" },
  { name: "Jenkins", level: 80, category: "tools" },
  { name: "StarUML", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Canva", level: 80, category: "tools" },
  { name: "Intellij", level: 75, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-primary"> Skills</span> & <span className="text-primary"> tools</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full transition-all duration-300 capitalize text-base font-semibold",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                  : "bg-secondary/70 text-foreground hover:bg-secondary border border-border/50"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* GRILLE : grid-cols-2 sur mobile, 5 sur desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-2xl border border-border/50 shadow-md hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between min-h-[160px]"
            >
              <div className="text-left mb-6">
                <h3 className="font-bold text-lg md:text-xl text-foreground/90 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="relative w-full bg-secondary/40 h-1.5 rounded-full">
                  {/* Barre de progression */}
                  <div
                    className="absolute top-0 left-0 bg-primary h-full rounded-full origin-left animate-[grow_2s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                  
                  {/* LE VAISSEAU (Fusée) */}
                  <div 
                    className="absolute top-[-10px] left-0 flex items-center justify-end animate-[grow_2s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  >
                    <Rocket 
                      size={20} 
                      className="text-primary rotate-90 transform translate-x-1/2 drop-shadow-[0_0_8px_rgba(139,92,246,0.9)]"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm md:text-base font-black text-muted-foreground group-hover:text-primary transition-colors">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes grow {
          from { width: 0%; opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};