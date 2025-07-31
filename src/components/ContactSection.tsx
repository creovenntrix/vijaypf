import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="netflix-red">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss how I can contribute to Netflix's content analysis team. 
            Let's start a conversation about data, media, and the future of entertainment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm actively seeking opportunities to join Netflix as a Content Analyst. 
                Whether you'd like to discuss my background, explore potential collaborations, 
                or simply connect about the intersection of data and entertainment, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 surface-elevated border-border hover-lift cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-netflix-red/10 rounded-full group-hover:bg-netflix-red/20 transition-colors">
                    <Mail className="h-6 w-6 netflix-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">vijay.vasamsetty@email.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 surface-elevated border-border hover-lift cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-netflix-red/10 rounded-full group-hover:bg-netflix-red/20 transition-colors">
                    <Linkedin className="h-6 w-6 netflix-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/in/vijayvasamsetty</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 surface-elevated border-border hover-lift cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-netflix-red/10 rounded-full group-hover:bg-netflix-red/20 transition-colors">
                    <Phone className="h-6 w-6 netflix-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">Available upon request</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 surface-elevated border-border hover-lift cursor-pointer group">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-netflix-red/10 rounded-full group-hover:bg-netflix-red/20 transition-colors">
                    <MapPin className="h-6 w-6 netflix-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Open to relocation for Netflix</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="lg:pl-8">
            <Card className="p-8 surface-elevated border-border">
              <div className="text-center">
                <div className="p-6 bg-netflix-red/10 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Send className="h-12 w-12 netflix-red" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm excited about the opportunity to bring my analytical skills and passion for content 
                  to Netflix. Let's discuss how I can contribute to your team's success.
                </p>

                <div className="space-y-4">
                  <Button 
                    variant="netflix" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.location.href = 'mailto:vijay.vasamsetty@email.com?subject=Content Analyst Opportunity&body=Hi Vijay, I saw your portfolio and would like to discuss...'}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  
                  <Button 
                    variant="netflixSecondary" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://linkedin.com/in/vijayvasamsetty', '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Response time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;