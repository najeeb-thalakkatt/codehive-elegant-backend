import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dev@codehives.se",
      href: "mailto:dev@codehives.se"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Available Worldwide",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your backend development needs? Get in touch.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <div className="scale-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Specializing in scalable backend solutions that grow with your business.
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
                        <div className="font-medium text-card-foreground">{contact.label}</div>
                        {contact.href && contact.href !== "#" ? (
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
                  Let's discuss how we can help with your backend development needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;