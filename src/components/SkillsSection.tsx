import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Code, 
  BarChart3, 
  Shield, 
  Laptop, 
  Brain,
  TrendingUp,
  FileText
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Data Visualization", level: 80 },
        { name: "Statistical Analysis", level: 75 }
      ]
    },
    {
      title: "Programming & Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 75 },
        { name: "Java", level: 70 },
        { name: "C++", level: 65 }
      ]
    },
    {
      title: "Content & Analytics Tools",
      icon: <TrendingUp className="h-6 w-6" />,
      skills: [
        { name: "Google Analytics", level: 85 },
        { name: "Excel/Sheets", level: 90 },
        { name: "Tableau", level: 70 },
        { name: "Power BI", level: 65 }
      ]
    },
    {
      title: "Quality Assurance",
      icon: <Shield className="h-6 w-6" />,
      skills: [
        { name: "Test Automation", level: 85 },
        { name: "Selenium", level: 80 },
        { name: "Manual Testing", level: 90 },
        { name: "Bug Tracking", level: 85 }
      ]
    }
  ];

  const technicalTools = [
    "Python", "SQL", "JavaScript", "Git", "Docker", "AWS", 
    "Google Analytics", "Tableau", "Excel", "Selenium", 
    "JIRA", "Blockchain", "Smart Contracts", "QR Technology"
  ];

  const softSkills = [
    "Critical Thinking", "Problem Solving", "Communication", 
    "Team Collaboration", "Project Management", "Attention to Detail",
    "Content Strategy", "Data Storytelling"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="netflix-red">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit combining technical expertise with analytical thinking, 
            perfect for content analysis and data-driven decision making.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="p-6 surface-elevated border-border hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-netflix-red/10 rounded-lg netflix-red">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Tools */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 surface-elevated border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-netflix-red/10 rounded-lg netflix-red">
                <Laptop className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Technical Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technicalTools.map((tool) => (
                <Badge key={tool} variant="secondary" className="mb-2">
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 surface-elevated border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-netflix-red/10 rounded-lg netflix-red">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="mb-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;