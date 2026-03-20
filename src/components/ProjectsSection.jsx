import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    subtitle: "FinTech",
    title: "Web Development",
    description: "Developed real-time concurrent systems with Scala and Akka, applying financial data analysis algorithms. Built an interactive portfolio tracking web interface with React.",
    image: "/assets/portfolio-7.png",
    tags: ["Scala", "Akka", "React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    subtitle: "Cybersecurity",
    title: "Secure Messaging App",
    description: "Ensured GDPR compliance by developing a Django-based POC. Created a directory of anonymization solutions and a benchmarking analysis for secure platforms.",
    image: "/assets/portfolio-9.png",
    tags: ["Django", "Pandas", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    subtitle: "Development",
    title: "Academic Management",
    description: "Creation of a J2EE web application for academic management with features for students, teachers, and administrators. Versioned with Spring Boot.",
    image: "/assets/portfolio-10.png",
    tags: ["J2EE", "Spring Boot", "Web"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    subtitle: "DevOps",
    title: "GCP CI/CD Pipeline",
    description: "Automated Deployment Pipeline on Google Cloud Platform. Implementation of a robust CI/CD workflow for cloud-native applications.",
    image: "/assets/portfolio-1.jpg",
    tags: ["GCP", "CI/CD", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    subtitle: "Systems & Rust",
    title: "Chess Engine",
    description: "A complete chess game logic implemented in Rust, focusing on memory safety and high-performance move calculation.",
    image: "/assets/portfolio-2.jpg",
    tags: ["Rust", "GameDev", "Systems"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    subtitle: "Embedded Software",
    title: "Intelligent Road Lighting",
    description: "Model of an intelligent public lighting system that illuminates based on real-time road traffic needs to optimize energy consumption.",
    image: "/assets/portfolio-3.jpg",
    tags: ["IoT", "Simulation", "Smart City"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    subtitle: "Development",
    title: "Programming Exercise App",
    description: "Graphical application using Java to verify and evaluate users solving various programming exercises in multiple languages.",
    image: "/assets/portfolio-5.jpg",
    tags: ["Java", "Swing/FX", "Software"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    subtitle: "Website Creation",
    title: "High Center Data Manager",
    description: "Optimized data exchange between center members. Managed multi-user tables and streamlined access to key information while ensuring data security.",
    image: "/assets/portfolio-6.jpg",
    tags: ["Web", "Data Management", "Security"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    subtitle: "Full Stack",
    title: "Pokemon Drafter",
    description: "Advanced drafting application built with a Java Spring Boot backend and a modern Angular frontend.",
    image: "/assets/portfolio-4.jpg", 
    tags: ["Spring Boot", "Angular", "API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    subtitle: "Backend",
    title: "RSS (Feeds) API",
    description: "High-performance API developed in Rust for managing and serving RSSI data feeds efficiently.",
    image: "/assets/portfolio-8.png", 
    tags: ["Rust", "API", "Backend"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 11,
    subtitle: "Software Engineering",
    title: "Java Reactive Game",
    description: "Reactive programming project using Java to manage infinite concurrent players in a real-time environment.",
    image: "/assets/portfolio-1.jpg", 
    tags: ["Java", "Reactive", "Concurrence"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 12,
    subtitle: "Infrastructure",
    title: "Wireguard Command Tools",
    description: "Set of command-line tools for automated management and deployment of Wireguard VPN tunnels.",
    image: "/assets/portfolio-2.jpg", 
    tags: ["Network", "VPN", "Security"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 13,
    subtitle: "Portfolio",
    title: "Modern React Portfolio",
    description: "Current iteration of my portfolio using React and Tailwind CSS, focused on performance and interactivity.",
    image: "/assets/portfolio-10.png", 
    tags: ["React", "Tailwind", "Vite"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 14,
    subtitle: "Portfolio",
    title: "Legacy HTML/CSS Portfolio",
    description: "My first personal website built with vanilla HTML, CSS, and basic JavaScript to showcase fundamental web skills.",
    image: "/assets/portfolio-7.png", 
    tags: ["HTML", "CSS", "Vanilla JS"],
    demoUrl: "#",
    githubUrl: "#",
  }
];

export const ProjectsSection = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);

  const toggleProject = (id) => {
    setActiveProjectId(activeProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          My Latest <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto italic text-lg leading-relaxed">
          "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => toggleProject(project.id)}
              className="group relative h-[450px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-primary/20 border border-border/50 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500" />

              <div className={cn(
                "absolute inset-0 p-8 flex flex-col justify-end transition-all duration-500",
                activeProjectId === project.id ? "opacity-0 translate-y-10" : "opacity-100 group-hover:translate-y-10 group-hover:opacity-0"
              )}>
                <p className="text-primary font-bold text-base uppercase tracking-widest mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className={cn(
                "absolute inset-0 bg-primary/95 backdrop-blur-md transition-all duration-500 p-6 md:p-8 flex flex-col justify-center items-center text-center",
                activeProjectId === project.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-white/95 text-base md:text-lg mb-8 leading-relaxed font-medium line-clamp-6">
                  {project.description}
                </p>

                <div className="flex gap-6" onClick={(e) => e.stopPropagation()}>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="p-4 bg-white text-primary rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110">
                    <ExternalLink size={24} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-4 bg-white text-primary rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-3 group px-8 py-4 text-lg"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github 
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};