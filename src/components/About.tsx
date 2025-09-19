import { Card } from "@/components/ui/card";
import { CheckCircle, Code, Database, Cloud } from "lucide-react";


const About = () => {
  const highlights = [
    "Expert backend development and architecture",
    "Specialization in scalable enterprise solutions", 
    "Cloud-native deployments and microservices",
    "Modern development practices and DevOps"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About CodeHive
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Specialized backend development consultancy focused on building robust, scalable systems. 
              From microservices to cloud deployments, we deliver solutions that scale with your business.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6">
              <Card className="p-4 text-center card-gradient border-border/50">
                <Code className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">Backend</div>
                <div className="text-sm text-muted-foreground">Development</div>
              </Card>
              <Card className="p-4 text-center card-gradient border-border/50">
                <Database className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">Scalable</div>
                <div className="text-sm text-muted-foreground">Architecture</div>
              </Card>
              <Card className="p-4 text-center card-gradient border-border/50">
                <Cloud className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-card-foreground">Cloud</div>
                <div className="text-sm text-muted-foreground">Solutions</div>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;