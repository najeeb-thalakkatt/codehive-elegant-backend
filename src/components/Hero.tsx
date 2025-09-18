import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Cloud } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-background opacity-90"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-10 h-8 w-8 text-accent/30 animate-pulse" />
        <Database className="absolute top-32 right-16 h-6 w-6 text-accent/40 animate-pulse delay-1000" />
        <Cloud className="absolute bottom-40 left-20 h-10 w-10 text-accent/20 animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 text-shadow">
            Code<span className="text-accent">Hive</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">
            Backend Development Specialists
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            12+ years of expertise crafting robust backend systems for enterprise applications, 
            cloud solutions, and scalable architectures that drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-medium px-8 py-4 text-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="slide-up mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">12+</div>
            <div className="text-primary-foreground/70">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100+</div>
            <div className="text-primary-foreground/70">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-primary-foreground/70">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;