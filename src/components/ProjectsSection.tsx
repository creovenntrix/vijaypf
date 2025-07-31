import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Blockchain-Based Data Sharing",
      description: "A secure, decentralized platform for data sharing using blockchain technology. Implemented smart contracts for data integrity and access control.",
      tags: ["Blockchain", "Smart Contracts", "Data Security", "Web3"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Anti-Counterfeiting QR System",
      description: "QR code-based authentication system to prevent counterfeiting. Integrated with blockchain for immutable product verification.",
      tags: ["QR Technology", "Authentication", "Python", "Security"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Content Analytics Dashboard",
      description: "Interactive dashboard for analyzing content performance metrics. Built with Python and visualization libraries for data insights.",
      tags: ["Data Analytics", "Python", "Visualization", "Dashboard"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Quality Assurance Automation",
      description: "Automated testing framework for web applications. Improved testing efficiency by 70% and reduced manual testing time.",
      tags: ["QA Testing", "Automation", "Selenium", "Python"],
      image: "/api/placeholder/400/250",
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push({ ...projects[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Continue <span className="netflix-red">Building</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Recent projects showcasing my technical skills and problem-solving approach
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <Button
              variant="netflixSecondary"
              size="icon"
              onClick={prevProject}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="netflixSecondary"
              size="icon"
              onClick={nextProject}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {getVisibleProjects().map((project, index) => (
            <Card 
              key={`${project.originalIndex}-${index}`}
              className={`overflow-hidden surface-elevated border-border hover-lift cursor-pointer transition-all duration-300 ${
                index === 0 ? 'scale-105 ring-2 ring-netflix-red' : ''
              }`}
            >
              <div className="aspect-video bg-gradient-to-br from-netflix-red/20 to-surface-elevated flex items-center justify-center">
                <div className="text-center p-4">
                  <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">Project Visualization</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="netflix" size="sm" className="flex-1">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  <Button variant="netflixSecondary" size="sm">
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Card className="overflow-hidden surface-elevated border-border">
            <div className="aspect-video bg-gradient-to-br from-netflix-red/20 to-surface-elevated flex items-center justify-center">
              <div className="text-center p-4">
                <h4 className="font-semibold text-lg mb-2">{projects[currentIndex].title}</h4>
                <p className="text-sm text-muted-foreground">Project Visualization</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-foreground">{projects[currentIndex].title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {projects[currentIndex].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[currentIndex].tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 mb-4">
                <Button variant="netflix" size="sm" className="flex-1">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Project
                </Button>
                <Button variant="netflixSecondary" size="sm">
                  <Github className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} of {projects.length}
                </span>
                <div className="flex gap-2">
                  <Button variant="netflixSecondary" size="sm" onClick={prevProject}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="netflixSecondary" size="sm" onClick={nextProject}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-netflix-red w-8' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;