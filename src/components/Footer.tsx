import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">
              VIJAY<span className="netflix-red">VASAMSETTY</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Aspiring Content Analyst<br />
              Data & Media Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-netflix-red/10 hover:text-netflix-red transition-colors"
              onClick={() => window.location.href = 'mailto:vijay.vasamsetty@email.com'}
            >
              <Mail className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-netflix-red/10 hover:text-netflix-red transition-colors"
              onClick={() => window.open('https://linkedin.com/in/vijayvasamsetty', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-netflix-red/10 hover:text-netflix-red transition-colors"
              onClick={() => window.open('https://github.com/vijayvasamsetty', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 netflix-red" /> for Netflix
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {currentYear} Vijay Vasamsetty. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-foreground transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.querySelector('#certifications')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-foreground transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4 max-w-2xl mx-auto">
            This portfolio showcases my qualifications for the Content Analyst position at Netflix. 
            Built with modern web technologies and inspired by Netflix's exceptional user experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;