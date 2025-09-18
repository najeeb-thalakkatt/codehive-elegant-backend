import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Server, 
  Database, 
  Cloud, 
  Code2, 
  GitBranch, 
  Shield,
  Zap,
  Globe
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Backend Architecture",
      description: "Design and implement scalable backend systems using microservices architecture, Django, FastAPI, and Spring Boot frameworks.",
      features: ["Microservices Design", "API Development", "System Architecture", "Performance Optimization"]
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Expert database design and optimization for PostgreSQL, MongoDB, MySQL, and data warehousing solutions like Snowflake and Redshift.",
      features: ["Database Design", "Query Optimization", "Data Migration", "Backup Strategies"]
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Full-stack cloud solutions on AWS, GCP, and Azure with containerization using Docker and Kubernetes orchestration.",
      features: ["Cloud Migration", "Kubernetes Deployment", "Auto Scaling", "Cost Optimization"]
    },
    {
      icon: Code2,
      title: "API Development",
      description: "RESTful APIs and GraphQL services designed for performance, security, and seamless frontend integration.",
      features: ["REST & GraphQL APIs", "Authentication Systems", "Rate Limiting", "API Documentation"]
    },
    {
      icon: GitBranch,
      title: "DevOps Integration",
      description: "Complete CI/CD pipeline setup with Jenkins, GitHub Actions, and automated deployment strategies for reliable releases.",
      features: ["CI/CD Pipelines", "Automated Testing", "Deployment Automation", "Monitoring Setup"]
    },
    {
      icon: Shield,
      title: "Security & Monitoring",
      description: "Implement robust security measures and comprehensive monitoring solutions to protect and observe your systems.",
      features: ["Security Audits", "Performance Monitoring", "Log Management", "Alerting Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive backend development services designed to power your applications 
            with robust, scalable, and secure server-side solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 scale-in">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Zap className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Python", "Golang", "Java", "TypeScript", "Django", "FastAPI", 
              "Spring Boot", "PostgreSQL", "MongoDB", "Redis", "AWS", "GCP", 
              "Docker", "Kubernetes", "GraphQL", "RabbitMQ"
            ].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;