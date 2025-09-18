import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "AFRY",
      position: "Senior Backend Developer",
      duration: "June 2024 - Present",
      location: "Stockholm, Sweden",
      description: "Leading backend development for Smart Forestry solutions, integrating GIS and forestry data with scalable backend systems.",
      highlights: [
        "Designed GraphQL APIs for GIS/forestry data integration",
        "Built microservices with Django and FastAPI",
        "Implemented RabbitMQ and Redis for async processing",
        "Optimized PostgreSQL database operations",
        "Developed Golang microservices for core functionality"
      ],
      technologies: ["Python", "Golang", "Django", "FastAPI", "GraphQL", "PostgreSQL", "RabbitMQ", "Redis"]
    },
    {
      company: "Evolution Gaming / NetEnt AB",
      position: "Senior Backend Developer",
      duration: "May 2017 - June 2024",
      location: "Stockholm, Sweden",
      description: "Built and maintained backend systems for global gaming platform serving millions of users worldwide.",
      highlights: [
        "Developed game information and release management systems",
        "Implemented domain-driven design and event-driven architecture",
        "Built containerized applications with Docker",
        "Managed asynchronous processing with Celery and RabbitMQ",
        "Optimized systems for high-traffic gaming applications"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Docker", "Celery", "RabbitMQ", "AngularJS"]
    },
    {
      company: "iQuanti Inc",
      position: "Senior Product Developer",
      duration: "November 2015 - March 2017",
      location: "Bangalore, India",
      description: "Developed proprietary tools for digital marketing solutions serving Fortune 500 companies.",
      highlights: [
        "Built scalable backend systems for marketing analytics",
        "Developed ETL processes for large-scale data processing",
        "Won Ingenious Award (2016) and Best Team Award (2015)",
        "Contributed to ROI optimization tools"
      ],
      technologies: ["Python", "Java", "SQL", "ETL", "Analytics"]
    },
    {
      company: "RapidValue Solutions",
      position: "Senior Software Engineer",
      duration: "January 2012 - October 2015",
      location: "Kochi, India",
      description: "Worked on enterprise mobility and cloud solutions for digital transformation projects.",
      highlights: [
        "Developed enterprise mobile backend solutions",
        "Built cloud-based services for digital transformation",
        "Won Multi Technocrat Award (2014)",
        "Recognized for Three Years of Excellence (2014)"
      ],
      technologies: ["Java", "Spring", "SQL Server", "Cloud Services"]
    }
  ];

  const awards = [
    { title: "Ingenious Award", company: "iQuanti Inc", year: "2016" },
    { title: "Best Team", company: "iQuanti Inc", year: "2015" },
    { title: "Multi Technocrat", company: "RapidValue Solutions", year: "2014" },
    { title: "Three Years of Excellence", company: "RapidValue Solutions", year: "2014" }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Experience & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Over a decade of experience building robust backend systems for gaming, 
            forestry technology, digital marketing, and enterprise applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:shadow-medium transition-all duration-300 scale-in">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-primary flex items-center gap-2">
                      <Building className="h-5 w-5 text-accent" />
                      {exp.company}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground mt-1">
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
                  <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-muted-foreground text-sm">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
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

        {/* Awards Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Recognition & Awards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="card-gradient border-border/50 hover:shadow-medium transition-all duration-300 p-6 text-center scale-in">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-semibold text-primary mb-1">{award.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{award.company}</p>
                <p className="text-xs text-accent font-medium">{award.year}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;