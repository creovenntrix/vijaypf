import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          My <span className="netflix-red">Resume</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Download my complete resume to see my detailed experience, education, and accomplishments. 
          Ready to bring my skills to Netflix's content analysis team.
        </p>

        <Card className="p-8 surface-elevated border-border max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="p-6 bg-netflix-red/10 rounded-full mb-6">
              <FileText className="h-12 w-12 netflix-red" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Professional Resume</h3>
            <p className="text-muted-foreground mb-8 text-center">
              Comprehensive overview of my experience, skills, and qualifications for the Content Analyst position at Netflix.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Button 
                variant="netflix" 
                size="lg" 
                className="flex-1"
                onClick={() => {
                  // In a real application, this would trigger a download
                  console.log("Downloading resume...");
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              
              <Button 
                variant="netflixSecondary" 
                size="lg"
                onClick={() => {
                  // In a real application, this would open the resume in a new tab
                  console.log("Opening resume preview...");
                }}
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Last updated: December 2024
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>• PDF Format</span>
                <span>• 2 Pages</span>
                <span>• Optimized for ATS</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-2xl font-bold netflix-red mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold netflix-red mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold netflix-red mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold netflix-red mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Passion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;