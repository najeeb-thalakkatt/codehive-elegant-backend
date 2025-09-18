import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, LinkedinIcon, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "najeeb.1989@gmail.com",
      href: "mailto:najeeb.1989@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+46 0760025850",
      href: "tel:+460760025850"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Stockholm, Sweden",
      href: null
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "najeeb-thalakkatt",
      href: "https://www.linkedin.com/in/najeeb-thalakkatt/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your backend infrastructure? Let's discuss your project 
            and explore how CodeHive can drive your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-gradient border-border/50 scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="border-border focus:border-accent"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="border-border focus:border-accent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Company</Label>
                <Input 
                  id="company" 
                  placeholder="Your company name" 
                  className="border-border focus:border-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project" className="text-foreground">Project Type</Label>
                <Input 
                  id="project" 
                  placeholder="e.g., API Development, Cloud Migration, System Architecture" 
                  className="border-border focus:border-accent"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Project Details</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project requirements, timeline, and goals..."
                  className="min-h-[120px] border-border focus:border-accent"
                />
              </div>
              <Button className="w-full bg-accent hover:bg-accent-hover text-accent-foreground">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need a complete backend overhaul or specific consulting services, 
                CodeHive is here to help. We specialize in scalable solutions that grow with your business.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="card-gradient border-border/50 hover:shadow-soft transition-all duration-300 scale-in">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mr-4">
                        <contact.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{contact.label}</div>
                        {contact.href ? (
                          <a 
                            href={contact.href} 
                            className="text-muted-foreground hover:text-accent transition-colors"
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-accent text-accent-foreground border-0 scale-in">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold mb-2">Ready to Start?</h4>
                <p className="mb-4 opacity-90">
                  Schedule a free consultation to discuss your backend needs.
                </p>
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;