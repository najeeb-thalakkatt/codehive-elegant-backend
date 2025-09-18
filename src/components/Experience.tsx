import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Enterprise Technology Company",
      position: "Senior Backend Developer",
      duration: "2020 - Present",
      location: "Remote",
      description: "Leading backend development for enterprise solutions, focusing on scalable system architecture and modern development practices.",
      highlights: [
        "Designed microservices architecture for high-traffic applications",
        "Implemented cloud-native solutions with modern frameworks",
        "Built robust APIs and data processing systems",
        "Optimized database performance and scalability",
        "Established DevOps practices and CI/CD pipelines"
      ],
      technologies: ["Python", "Golang", "Django", "FastAPI", "GraphQL", "PostgreSQL", "Docker", "Kubernetes"]
    },
    {
      company: "Gaming Technology Platform",
      position: "Backend Developer",
      duration: "2017 - 2020",
      location: "Remote",
      description: "Developed backend systems for high-performance gaming applications with global reach.",
      highlights: [
        "Built real-time backend systems for gaming platforms",
        "Implemented event-driven architecture patterns",
        "Developed containerized applications and microservices",
        "Optimized systems for high-concurrency scenarios",
        "Managed complex data processing workflows"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "RabbitMQ"]
    },
    {
      company: "Digital Solutions Provider",
      position: "Software Developer", 
      duration: "2015 - 2017",
      location: "Remote",
      description: "Built scalable backend solutions for enterprise clients across various industries.",
      highlights: [
        "Developed backend systems for data analytics platforms",
        "Created ETL processes for large-scale data processing",
        "Built REST APIs for client integrations",
        "Implemented database optimization strategies"
      ],
      technologies: ["Python", "Java", "SQL", "REST APIs", "Data Processing"]
    },
    {
      company: "Technology Consultancy",
      position: "Software Engineer",
      duration: "2012 - 2015", 
      location: "Remote",
      description: "Worked on enterprise solutions and cloud-based applications for digital transformation.",
      highlights: [
        "Developed enterprise backend applications", 
        "Built cloud-based services and APIs",
        "Implemented modern software development practices",
        "Contributed to system architecture decisions"
      ],
      technologies: ["Java", "Spring", "SQL", "Cloud Platforms", "Web Services"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Experience & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Years of experience building robust backend systems across various industries 
            and technology stacks, delivering scalable solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:shadow-medium transition-all duration-300 scale-in">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-card-foreground flex items-center gap-2">
                      <Building className="h-5 w-5 text-accent" />
                      {exp.company}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-muted-foreground mt-1">
                      {exp.position}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-muted-foreground text-sm">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;