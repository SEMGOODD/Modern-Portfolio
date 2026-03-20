import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      // AJOUT DE pt-24 (padding-top 6rem) sur mobile, annulé par md:pt-0 sur desktop
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-24 md:pt-0"
    >
      <div className="container max-w-6xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-sm md:text-base text-primary uppercase tracking-widest opacity-0 animate-fade-in">
            Welcome To My World
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm</span>
            <br className="hidden md:block" />
            <span className="text-primary opacity-0 animate-fade-in-delay-2">
              {" "}Ayoub
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
              {" "}SEMGAT
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I am a <strong className="text-foreground font-semibold">Data Engineer</strong> with a robust background in <strong className="text-foreground font-semibold">Full Stack development</strong> and <strong className="text-foreground font-semibold">Cloud-native DevOps</strong> based in France. I build high-performance systems by bridging the gap between complex data pipelines and scalable, user-centric architecture.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-block">
              View My Work
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-2">
          {/* Outer ring with cosmic glow to match theme */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 bg-gradient-to-tr from-primary/30 to-transparent border border-primary/20 shadow-[0_0_40px_rgba(139,92,246,0.2)]">
            <img
              src="/img/image-pro_ayoubsemgat.jpg" // CORRIGÉ AVEC /img/
              alt="Ayoub Semgat"
              className="w-full h-full object-cover rounded-full border-4 border-background/50"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};