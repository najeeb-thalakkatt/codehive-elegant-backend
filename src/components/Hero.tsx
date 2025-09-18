import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Cloud } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-10 h-8 w-8 text-accent/30 animate-pulse" />
        <Database className="absolute top-32 right-16 h-6 w-6 text-accent/40 animate-pulse delay-1000" />
        <Cloud className="absolute bottom-40 left-20 h-10 w-10 text-accent/20 animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            Code<span className="text-accent">Hive</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Backend Development Specialists
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert backend development consultancy delivering robust, scalable solutions 
            that power modern applications and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-medium px-8 py-4 text-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-secondary px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="slide-up mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Expert</div>
            <div className="text-muted-foreground">Backend Development</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Scalable</div>
            <div className="text-muted-foreground">Cloud Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Modern</div>
            <div className="text-muted-foreground">Architecture</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;