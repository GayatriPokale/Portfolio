import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between z-10 gap-10">


  {/* === Left: Profile Image === */}
  <div className="aspect-square w-64 rounded-full overflow-hidden shadow-lg animate-fade-in shrink-">
    <img
      src="/projects/gayatri.jpeg" // Use correct file extension
      alt="Gayatri Pokale"
      className="w-full h-full object-cover"
    />
  </div>


  <div className="flex-1 flex flex-col justify-center space-y-6 text-center md:text-left">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
      <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
      <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Gayatri
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Pokale
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I craft seamless digital experiences using modern technologies. As a software and full-stack developer, I specialize in building intuitive, high-performance applications, from elegant front-end interfaces to robust back-end systems.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};