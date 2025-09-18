import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import backendIllustration from "@/assets/backend-illustration.jpg";

const About = () => {
  const highlights = [
    "12+ years of backend development expertise",
    "Specialization in scalable enterprise solutions",
    "Expert in cloud platforms (AWS, GCP, Azure)",
    "Proven track record with Fortune 500 companies"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About CodeHive
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              CodeHive is a specialized backend development consultancy founded by Najeeb Thalakkatt, 
              a senior backend engineer with over 12 years of experience building robust, scalable 
              systems for the gaming industry, forestry technology, and enterprise applications.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We focus exclusively on backend development, delivering high-performance solutions 
              that power modern applications. From microservices architecture to cloud-native 
              deployments, we craft backend systems that scale with your business.
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
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </Card>
              <Card className="p-4 text-center card-gradient border-border/50">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Teams Worked With</div>
              </Card>
              <Card className="p-4 text-center card-gradient border-border/50">
                <Target className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="scale-in lg:order-last">
            <div className="relative">
              <img 
                src={backendIllustration} 
                alt="Backend Development Illustration" 
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;