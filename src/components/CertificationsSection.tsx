import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Award, ExternalLink, Calendar } from "lucide-react";

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: "Deloitte Technology Job Simulation",
      issuer: "Deloitte via Forage",
      date: "2024",
      description: "Completed comprehensive technology consulting simulation covering data analysis, system design, and client presentation skills.",
      skills: ["Data Analysis", "Consulting", "Technology Strategy", "Client Communication"],
      credentialId: "DEL-2024-001",
      link: "#"
    },
    {
      title: "Google Analytics Individual Qualification",
      issuer: "Google",
      date: "2024",
      description: "Certified in Google Analytics implementation, configuration, and advanced analysis techniques for digital marketing insights.",
      skills: ["Google Analytics", "Digital Marketing", "Data Interpretation", "Web Analytics"],
      credentialId: "GA-IQ-2024",
      link: "#"
    },
    {
      title: "CISCO Python Essentials",
      issuer: "Cisco Networking Academy",
      date: "2024",
      description: "Comprehensive Python programming certification covering fundamentals, object-oriented programming, and practical applications.",
      skills: ["Python Programming", "Object-Oriented Programming", "Data Structures", "Algorithm Design"],
      credentialId: "CISCO-PY-2024",
      link: "#"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "Coursera",
      date: "2023",
      description: "Advanced certification in data structures, algorithm design, and computational complexity analysis.",
      skills: ["Data Structures", "Algorithms", "Problem Solving", "Computational Thinking"],
      credentialId: "DSA-2023-456",
      link: "#"
    },
    {
      title: "Blockchain Fundamentals",
      issuer: "IBM",
      date: "2023",
      description: "Comprehensive understanding of blockchain technology, smart contracts, and decentralized applications.",
      skills: ["Blockchain", "Smart Contracts", "Cryptography", "Distributed Systems"],
      credentialId: "IBM-BC-2023",
      link: "#"
    }
  ];

  const nextCertification = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCertification = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const getVisibleCertifications = () => {
    const visible = [];
    const itemsToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % certifications.length;
      visible.push({ ...certifications[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="netflix-red">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional certifications that validate my expertise and commitment to continuous learning
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <Button
              variant="netflixSecondary"
              size="icon"
              onClick={prevCertification}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="netflixSecondary"
              size="icon"
              onClick={nextCertification}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Desktop/Tablet View */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getVisibleCertifications().map((cert, index) => (
              <Card 
                key={`${cert.originalIndex}-${index}`}
                className="overflow-hidden surface-elevated border-border hover-lift transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-netflix-red/10 rounded-full">
                      <Award className="h-6 w-6 netflix-red" />
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-foreground leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-netflix-red font-medium mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {cert.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{cert.skills.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-mono">
                      ID: {cert.credentialId}
                    </span>
                    <Button variant="netflix" size="sm">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          <Card className="overflow-hidden surface-elevated border-border mb-6">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-netflix-red/10 rounded-full">
                  <Award className="h-6 w-6 netflix-red" />
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  {certifications[currentIndex].date}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {certifications[currentIndex].title}
              </h3>
              
              <p className="text-sm text-netflix-red font-medium mb-3">
                {certifications[currentIndex].issuer}
              </p>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {certifications[currentIndex].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {certifications[currentIndex].skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground font-mono">
                  ID: {certifications[currentIndex].credentialId}
                </span>
                <Button variant="netflix" size="sm">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Credential
                </Button>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} of {certifications.length}
                </span>
                <div className="flex gap-2">
                  <Button variant="netflixSecondary" size="sm" onClick={prevCertification}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="netflixSecondary" size="sm" onClick={nextCertification}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2">
          {certifications.map((_, index) => (
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

export default CertificationsSection;