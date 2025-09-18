import { LinkedinIcon, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">CodeHive</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Specialized backend development consultancy delivering robust, 
              scalable solutions for modern enterprises.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Backend Architecture</li>
              <li>Database Solutions</li>
              <li>Cloud Integration</li>
              <li>API Development</li>
              <li>DevOps Integration</li>
              <li>Security & Monitoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <a 
                  href="mailto:najeeb.1989@gmail.com" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  najeeb.1989@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <a 
                  href="tel:+460760025850" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +46 0760025850
                </a>
              </div>
              <div className="flex items-center">
                <LinkedinIcon className="h-4 w-4 mr-3 text-accent" />
                <a 
                  href="https://www.linkedin.com/in/najeeb-thalakkatt/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 CodeHive. All rights reserved.
          </div>
          <div className="text-primary-foreground/60 text-sm">
            Stockholm, Sweden • 12+ Years of Excellence
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;