import { useState, useRef } from "react";
import { Star, Rocket, Activity, Trophy, Telescope, BrainCircuit } from "lucide-react";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const scrollRef = useRef(null);

  const tabs = [
    { id: "certification", label: "Education" },
    { id: "language", label: "Languages" },
    { id: "experience", label: "Professional Experiences" },
    { id: "associative", label: "Associative" },
    { id: "interests", label: "Interests"},
    { id: "goals", label: "Future Goals"}
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveExpIndex(index);
    }
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5 sm:gap-1 text-yellow-500 mt-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 ${i < rating ? "fill-current" : "text-muted-foreground/30"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="relative pt-28 pb-24 md:py-24 px-4 bg-secondary/10">
      <div className="container max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">           
          <div className="space-y-6 lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-center">
              Data Engineer & Dev-MLOps
            </h3>
            <p className="text-muted-foreground leading-relaxed text-xl text-center">
              My approach combines the precision of <strong className="text-primary">Data Engineering</strong> with the mindset of a <strong className="text-primary">Full Stack developer</strong>. I don't only move data. I design architectures capable of handling massive flows while remaining accessible and high-performing for the end user.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg text-center">
              Specializing in <strong className="text-foreground">ETL pipeline optimization</strong> and <strong className="text-foreground">Cloud-native deployment</strong>, I transform complex infrastructures into fluid and automated systems. My goal is to ensure data integrity and security at every stage, from the server back-end to the final user interface.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <a href="#contact" className="cosmic-button text-center">Get In Touch</a>
              <a href="https://cv-ayoubsemgat.tiiny.site/" target="_blank" rel="noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center font-medium">Download CV</a>
            </div>
          </div>

          <div className="flex flex-col lg:col-span-7 w-full">
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-x-6 gap-y-4 border-b border-border/50 mb-8 pb-4 lg:pb-2 justify-start w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2 font-bold text-base md:text-xl transition-colors duration-300 relative ${activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {tab.label}
                  {activeTab === tab.id && <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary animate-fade-in" />}
                </button>
              ))}
            </div>

            <div className="min-h-[620px] h-auto lg:h-[550px] bg-card/30 border border-border/50 rounded-xl px-2 md:px-8 py-6 shadow-sm animate-fade-in text-left overflow-hidden relative flex flex-col justify-center">
                {/* Education and certifications */}
                {activeTab === "certification" && (
                  <div className="space-y-8 animate-fade-in px-4">
                    <div className="relative pl-6 border-l-2 border-primary/50">
                      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary"></span>
                      <h4 className="font-semibold text-foreground text-xl md:text-2xl">Computer Engineering Cycle <span className="text-primary text-sm md:text-base font-semibold ml-3 border border-primary/30 px-2 py-0.5 rounded-full inline-block mt-2 md:mt-0">Since 2023</span></h4>
                      <p className="text-muted-foreground text-base md:text-lg mt-2">CY Tech, Cergy/Pau, France.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-primary/50">
                      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary"></span>
                      <h4 className="font-semibold text-foreground text-xl md:text-2xl">MPSI-MP Prepas Classes <span className="text-primary text-sm md:text-base font-semibold ml-3 border border-primary/30 px-2 py-0.5 rounded-full inline-block mt-2 md:mt-0">2021 - 2023</span></h4>
                      <p className="text-muted-foreground text-base md:text-lg mt-2">Omar Ibn El Khattab High School, Meknes, Morocco.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-primary/50">
                      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary"></span>
                      <h4 className="font-semibold text-foreground text-xl md:text-2xl">Baccalaureate's Degree in Math Sciences <span className="text-primary text-sm md:text-base font-semibold ml-3 border border-primary/30 px-2 py-0.5 rounded-full inline-block mt-2 md:mt-0">2020 - 2021</span></h4>
                      <p className="text-muted-foreground text-base md:text-lg mt-2">Very good mention. 11 January High School, Ain Taoujdat, Morocco.</p>
                    </div>
                  </div>
                )}

                {/* Languages*/}
                {activeTab === "language" && (
                  <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in px-4">
                    <div className="flex items-center justify-between gap-6 md:gap-12 border-b border-border/50 pb-4 w-full max-w-sm">
                      <h4 className="font-medium text-lg md:text-xl min-w-[80px] md:min-w-[120px]">English</h4>
                      {renderStars(4)}
                    </div>
                    <div className="flex items-center justify-between gap-6 md:gap-12 border-b border-border/50 pb-4 w-full max-w-sm">
                      <h4 className="font-medium text-lg md:text-xl min-w-[80px] md:min-w-[120px]">French</h4>
                      {renderStars(4)}
                    </div>
                    <div className="flex items-center justify-between gap-6 md:gap-12 pb-2 w-full max-w-sm">
                      <h4 className="font-medium text-lg md:text-xl min-w-[80px] md:min-w-[120px]">Arabic</h4>
                      {renderStars(5)}
                    </div>
                  </div>
                )}

                {/* Professional Experiences */}
                {activeTab === "experience" && (
                  <div className="relative w-full h-full flex flex-col justify-between animate-fade-in">
                    <div 
                      ref={scrollRef}
                      onScroll={handleScroll}
                      className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 md:gap-6 items-stretch h-full pb-2 lg:px-[8%]"
                    >
                      {/* CARD 1 */}
                      <div className={`min-w-[100%] md:min-w-[97%] snap-center transition-all duration-300 transform ${activeExpIndex === 0 ? "opacity-100 scale-100" : "opacity-30 scale-[0.98]"}`}>
                        <div className="bg-primary/5 p-6 md:p-8 rounded-2xl border border-primary/20 shadow-xl h-full flex flex-col">
                          <div className="flex flex-col gap-1 mb-6 border-b border-primary/10 pb-5">
                            <span className="text-primary font-bold text-sm md:text-base tracking-widest uppercase">Data Engineer</span>
                            <h4 className="text-2xl md:text-3xl font-bold text-foreground">Data & DevOps Engineer</h4>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                              <span className="text-foreground/90 font-bold text-xl md:text-2xl italic">OpenMotion</span>
                              <span className="text-primary/80 font-medium text-lg md:text-xl">Oct 2025 - Sept 2026</span>
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col justify-center">
                            <ul className="text-lg md:text-xl text-muted-foreground space-y-5 list-none">
                              <li>Maintained and audited complex dev projects, optimizing <strong className="text-foreground border-b border-primary/30">data workflows</strong> and system performance.</li>
                              <li>Implemented Computer Vision solutions using <strong className="text-foreground border-b border-primary/30">TensorFlow Lite and YOLO</strong> for real-time image detection.</li>
                              <li>Improved infrastructure reliability through continuous monitoring and auditing of data pipelines.</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* CARD 2 */}
                      <div className={`min-w-[100%] md:min-w-[97%] snap-center transition-all duration-300 transform ${activeExpIndex === 1 ? "opacity-100 scale-100" : "opacity-30 scale-[0.98]"}`}>
                        <div className="bg-primary/5 p-6 md:p-8 rounded-2xl border border-primary/20 shadow-xl h-full flex flex-col">
                          <div className="flex flex-col gap-1 mb-6 border-b border-primary/10 pb-5">
                            <span className="text-primary font-bold text-sm md:text-base tracking-widest uppercase">Research & Development</span>
                            <h4 className="text-2xl md:text-3xl font-bold text-foreground">R&D BI/AI Solution Developer</h4>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                              <span className="text-foreground/90 font-bold text-xl md:text-2xl italic">Le Matin</span>
                              <span className="text-primary/80 font-medium text-lg md:text-xl">May - Aug 2025</span>
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col justify-center">
                            <ul className="text-lg md:text-xl text-muted-foreground space-y-5 list-none">
                              <li>Design of an <strong className="text-foreground">AutoML pipeline</strong> (classification/regression) including hyperparameter tuning and deployment.</li>
                              <li>Developed advanced decision tools using <strong className="text-foreground">tabular/vector RAG with LLMs</strong> and Fine-Tuning (<strong className="text-primary">QLoRA/SFT</strong>).</li>
                              <li>Industrialized solutions via <strong className="text-foreground">CI/CD (Jenkins, Docker, GitLab)</strong>.</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* CARD 3 */}
                      <div className={`min-w-[100%] md:min-w-[97%] snap-center transition-all duration-300 transform ${activeExpIndex === 2 ? "opacity-100 scale-100" : "opacity-30 scale-[0.98]"}`}>
                        <div className="bg-primary/5 p-6 md:p-8 rounded-2xl border border-primary/20 shadow-xl h-full flex flex-col">
                          <div className="flex flex-col gap-1 mb-6 border-b border-primary/10 pb-5">
                            <span className="text-primary font-bold text-sm md:text-base tracking-widest uppercase">Web Engineering</span>
                            <h4 className="text-2xl md:text-3xl font-bold text-foreground">Full Stack Developer</h4>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                              <span className="text-foreground/90 font-bold text-xl md:text-2xl italic">Pythagore High Center</span>
                              <span className="text-primary/80 font-medium text-lg md:text-xl">Jul - Aug 2024</span>
                            </div>
                          </div>
                          <div className="flex-grow flex flex-col justify-center">
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                              Built a multi-user management platform using <strong className="text-foreground">PHP/MySQL & React</strong>. Focused on secure data exchange, <strong className="text-primary">SQL injection prevention</strong>, and optimized database administration for scale.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 mt-4 mb-1">
                      <div className="flex gap-2">
                        {[0, 1, 2].map((idx) => (
                          <div key={idx} className={`h-2.5 rounded-full transition-all duration-500 ${activeExpIndex === idx ? "bg-primary w-10 shadow-[0_0_15px_rgba(139,92,246,0.8)]" : "bg-primary/20 w-2.5"}`} />
                        ))}
                      </div>
                      <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] animate-pulse flex items-center gap-2">
                        {activeExpIndex > 0 && <span>←</span>}
                        SWIPE TO SEE MORE
                        {activeExpIndex < 2 && <span>→</span>}
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "associative" && (
                  <div className="space-y-10 animate-fade-in px-4 py-2">
                    <div className="relative pl-6 border-l-2 border-primary/50">
                      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary"></span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h4 className="font-semibold text-foreground text-xl md:text-2xl">Resto du Cœur Volunteer</h4>
                        <span className="text-primary text-sm md:text-base font-semibold border border-primary/30 px-3 py-0.5 rounded-full w-fit">2024 - 2025</span>
                      </div>
                      <p className="text-base md:text-xl text-foreground/80 mt-2 font-medium italic">Persan, France</p>
                      <p className="text-base md:text-lg text-muted-foreground mt-2 leading-relaxed">
                        Distributed meals, collected donations and organized logistics to support people in need.
                      </p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-primary/50">
                      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary"></span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h4 className="font-semibold text-foreground text-xl md:text-2xl">Little Journalists</h4>
                        <span className="text-primary text-sm md:text-base font-semibold border border-primary/30 px-3 py-0.5 rounded-full w-fit">2018</span>
                      </div>
                      <p className="text-base md:text-xl text-foreground/80 mt-2 font-medium italic">Tarik Ibn Ziyad middle school, Morocco</p>
                      <p className="text-base md:text-lg text-muted-foreground mt-2 leading-relaxed">
                        Go on a field trip to take notes and document lectures.
                      </p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-primary/50">
                      <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-background border-2 border-primary"></span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h4 className="font-semibold text-foreground text-xl md:text-2xl">Environmental Ambassador</h4>
                        <span className="text-primary text-sm md:text-base font-semibold border border-primary/30 px-3 py-0.5 rounded-full w-fit">2016 - 2018</span>
                      </div>
                      <p className="text-base md:text-xl text-foreground/80 mt-2 font-medium italic">Tarik Ibn Ziyad middle school, Morocco</p>
                      <p className="text-base md:text-lg text-muted-foreground mt-2 leading-relaxed">
                        Facilitated a conference on the need for wastewater purification to solve drought issues.
                      </p>
                    </div>
                  </div>
                )}

                {/* Interests & Hobbies */}
                {activeTab === "interests" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in px-4">
                    
                    {/* Card 1: Astronomy */}
                    <div className="group flex flex-col h-full p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary transition-all duration-300 shadow-lg">
                      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <Telescope className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Astronomy</h4>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        Passionate about space exploration and celestial mechanics. This interest inspired the entire "Cosmic" design of this portfolio.
                      </p>
                    </div>

                    {/* Card 2: Sport & Football */}
                    <div className="group flex flex-col h-full p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary transition-all duration-300 shadow-lg">
                      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <Activity className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Sport & Football</h4>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        A passionate football player and sports enthusiast in general. Playing team sports has allowed me to develop my teamwork skills, discipline, and sense of collective effort.
                      </p>
                    </div>

                    {/* Card 3: Strategy Games */}
                    <div className="group flex flex-col h-full p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary transition-all duration-300 shadow-lg sm:col-span-2 lg:col-span-1">
                      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <Trophy className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">Strategy Games</h4>
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        Playing chess and strategy games to sharpen problem-solving skills and long-term planning mindset.
                      </p>
                    </div>

                  </div>
                )}

                {/* Future Goals / Learning Path */}
                {activeTab === "goals" && (
                  <div className="space-y-8 animate-fade-in px-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
                      <Rocket className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold">Advanced MLOps Pipeline</h4>
                        <p className="text-muted-foreground italic">Short-term Goal (Q3 2026)</p>
                        <p className="mt-2 text-lg">Aiming to build a fully automated deployment pipeline for LLMs using Kubernetes and Kubeflow to handle real-time inference at scale.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border-l-4 border-primary/50">
                      <BrainCircuit className="w-8 h-8 text-primary/70 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold">Cloud Architect Certification</h4>
                        <p className="text-muted-foreground italic">Professional Development</p>
                        <p className="mt-2 text-lg">Preparing for the AWS Certified Solutions Architect exam to deepen my expertise in cloud-native infrastructure and security, same for others cetifications.</p>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};