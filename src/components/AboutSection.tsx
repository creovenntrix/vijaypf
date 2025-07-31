import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="netflix-red">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging data to uncover compelling stories and drive content strategy decisions. 
            Currently pursuing opportunities to contribute to Netflix's content analysis team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a data-driven professional with a passion for media and analytics, I bring a unique blend 
                of technical expertise and creative insight. My experience spans from blockchain technology 
                to quality assurance, always with a focus on extracting meaningful insights from complex data.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm particularly excited about the intersection of data science and content creation, 
                where analytics can inform storytelling decisions and help create more engaging viewer experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">Data Analysis</Badge>
              <Badge variant="secondary" className="text-sm">Content Strategy</Badge>
              <Badge variant="secondary" className="text-sm">Python</Badge>
              <Badge variant="secondary" className="text-sm">SQL</Badge>
              <Badge variant="secondary" className="text-sm">Blockchain</Badge>
              <Badge variant="secondary" className="text-sm">QA Testing</Badge>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 surface-elevated border-border hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-netflix-red/10 rounded-full">
                  <GraduationCap className="h-6 w-6 netflix-red" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Education</h4>
                  <p className="text-muted-foreground">
                    Computer Science & Engineering<br />
                    Focus on Data Structures, Algorithms, and Software Development
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 surface-elevated border-border hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-netflix-red/10 rounded-full">
                  <Briefcase className="h-6 w-6 netflix-red" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Experience</h4>
                  <p className="text-muted-foreground">
                    QA Analyst & Developer<br />
                    Specialized in testing methodologies, data validation, and quality assurance
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 surface-elevated border-border hover-lift">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-netflix-red/10 rounded-full">
                  <Target className="h-6 w-6 netflix-red" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Goal</h4>
                  <p className="text-muted-foreground">
                    Content Analyst at Netflix<br />
                    Combining analytical skills with media passion to drive content decisions
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

export default AboutSection;