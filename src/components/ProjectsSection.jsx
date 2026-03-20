import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    subtitle: "DevOps",
    title: "GCP CI/CD Pipeline",
    description: "Automated Deployment Pipeline on Google Cloud Platform. Implementation of a robust CI/CD workflow for cloud-native applications.",
    image: "/img/portfolio-1.jpg",
    tags: ["GCP", "CI/CD", "Docker"],
    demoUrl: "https://gcp-project5-612446050678.europe-west9.run.app/",
    githubUrl: "https://github.com/SEMGOODD/CICD_GCP",
  },
  {
    id: 2,
    subtitle: "DevOps / Infrastructure",
    title: "Automated Proxmox Deployment",
    description: "Infrastructure-as-Code project for Proxmox. Automates the provisioning of Ubuntu VMs with Terraform and configures a FastAPI/PostgreSQL stack using Ansible with secured secrets management.",
    image: "/img/portfolio-6.jpg",
    tags: ["Terraform", "Ansible", "Proxmox"],
    githubUrl: "https://github.com/SEMGOODD/Terraform_Ansible_TP"
  },
  {
    id: 3,
    subtitle: "Full Stack",
    title: "Pokemon Drafter",
    description: "Advanced drafting application built with a Java Spring Boot backend and a modern Angular frontend.",
    image: "/img/image.png", 
    tags: ["Spring Boot", "Angular", "API"],
    githubUrl: "https://github.com/SEMGOODD/PokemonDrafter",
  },
  {
    id: 4,
    subtitle: "Software Engineering",
    title: "Java Reactive Game",
    description: "Reactive programming project using Java to manage infinite concurrent players in a real-time environment.",
    image: "/img/portfolio-1.jpg", 
    tags: ["Java", "Reactive", "Concurrence"],
    githubUrl: "https://github.com/LF2Zetrei/offworld-trading-manager",
  },
  {
    id: 5,
    subtitle: "Backend",
    title: "RSS (Feeds) API",
    description: "High-performance API developed in Rust for managing and serving RSS data feeds efficiently.",
    image: "/img/portfolio-8.png", 
    tags: ["Rust", "API", "Backend"],
    githubUrl: "https://github.com/SEMGOODD/RSSFeedsAPI",
  },
  {
    id: 6,
    subtitle: "FinTech",
    title: "Web Development",
    description: "Developing real-time concurrent systems with Scala and Akka, applying financial data analysis algorithms. Building an interactive portfolio tracking web interface with React.",
    image: "/img/portfolio-7.png", 
    tags: ["Scala", "Akka", "React"],
  },
  {
    id: 7,
    subtitle: "Cybersecurity",
    title: "Secure Messaging App",
    description: "Ensuring GDPR compliance by developing a Django-based POC. Creation of a directory of anonymization solutions and a benchmarking analysis for secure platforms.",
    image: "/img/portfolio-9.png",
    tags: ["Django", "Pandas", "MySQL"],
    githubUrl: "https://github.com/abdemeh/PlateformeRGPD",
  },
  {
    id: 8,
    subtitle: "Development",
    title: "Academic Management",
    description: "Creation of a J2EE web application for academic management with features for students, teachers, and administrators. Versioned with Spring Boot.",
    image: "/img/portfolio-10.png",
    tags: ["J2EE", "Spring Boot", "Web"],
    githubUrl: "https://github.com/LIMAMMohamedlimam/Projet_J2EE",
    demoUrl: "https://github.com/SEMGOODD/Projet_J2EE_SpringBoot",
  },
  {
    id: 9,
    subtitle: "Systems & Rust",
    title: "Chess Engine",
    description: "A complete chess game logic implemented in Rust, focusing on memory safety and high-performance move calculation.",
    image: "/img/portfolio-2.jpg",
    tags: ["Rust", "GameDev", "Systems"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 10,
    subtitle: "Embedded Software",
    title: "Intelligent Road Lighting",
    description: "Model of an intelligent public lighting system that illuminates based on real-time road traffic needs to optimize energy consumption.",
    image: "/img/portfolio-3.jpg",
    tags: ["IoT", "Simulation", "Smart City"],
  },
  {
    id: 11,
    subtitle: "Development",
    title: "Programming Exercise App",
    description: "Graphical application using Java to verify and evaluate users solving various programming exercises in multiple languages.",
    image: "/img/portfolio-5.jpg",
    tags: ["Java", "Swing/FX", "Software"],
    githubUrl: "https://github.com/LIMAMMohamedlimam/CodYnGame",
  },
  {
    id: 12,
    subtitle: "Infrastructure",
    title: "Wireguard Command Tools",
    description: "Set of command-line tools for automated management and deployment of Wireguard VPN tunnels.",
    image: "/img/portfolio-2.jpg", 
    tags: ["Network", "VPN", "Security"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 13,
    subtitle: "Portfolio",
    title: "Modern React Portfolio",
    description: "Current iteration of my portfolio using React and Tailwind CSS, focused on performance and interactivity.",
    image: "/img/portfolio-10.png", 
    tags: ["React", "Tailwind", "Vite"],
    demoUrl: "https://porfolio-semgood.vercel.app/",
    githubUrl: "https://github.com/SEMGOODD/Modern-Portfolio",
  },
  {
    id: 14,
    subtitle: "Health / Web",
    title: "DoctoWorld - Teleconsultation Platform",
    description: "A multilingual teleconsultation app for international students featuring AI assistance, online payments, and digital QR code prescriptions.",
    image: "/img/portfolio-4.jpg",
    tags: ["PHP", "MySQL", "AI"],
    demoUrl: "https://youtu.be/1I2jQeSiz8k",
  },
  {
    id: 15,
    subtitle: "E-commerce",
    title: "CY Play - IT Hardware Store",
    description: "An IT e-commerce platform with secure authentication, dynamic product catalog, real-time stock management, and a functional shopping cart.",
    image: "/img/portfolio-5.jpg",
    tags: ["Web", "E-commerce", "JavaScript"],
    demoUrl: "https://youtu.be/BKDmPnVYSl8",
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
          {projects.map((project) => {
            const isActive = activeProjectId === project.id;
            
            return (
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
                  isActive ? "opacity-0 translate-y-10" : "opacity-100 group-hover:translate-y-10 group-hover:opacity-0"
                )}>
                  <p className="text-primary font-bold text-base uppercase tracking-widest mb-2">
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div className={cn(
                  "absolute inset-0 bg-primary/95 backdrop-blur-md transition-all duration-500 p-6 md:p-8 flex flex-col justify-between items-center text-center",
                  isActive ? "opacity-100 pointer-events-auto" : "opacity-0 md:group-hover:opacity-100 pointer-events-none"
                )}>
                  <div className="w-full">
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {project.tags?.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                    
                  <div className="w-full flex-grow overflow-y-auto mb-4 px-2 custom-scrollbar">
                    <p className="text-white/95 text-base md:text-lg leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-6 mt-auto shrink-0" onClick={(e) => {
                    if (!isActive && window.innerWidth < 768) {
                      e.preventDefault();
                      return;
                    }
                    e.stopPropagation();
                  }}>
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        tabIndex={isActive ? 0 : -1} 
                        className="p-4 bg-white text-primary rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}

                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        tabIndex={isActive ? 0 : -1}
                        className="p-4 bg-white text-primary rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
                      >
                        <Github size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-3 group px-8 py-4 text-lg"
            target="_blank"
            href="https://github.com/SEMGOODD"
          >
            Check My Github 
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.7);
        }
      `}</style>
    </section>
  );
};