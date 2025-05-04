
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const About = () => {
  const skills = [
    { name: "HTML/CSS", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "TypeScript", percentage: 75 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "Node.js", percentage: 70 },
  ];

  const categories = [
    { name: "Frontend Development", items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind"] },
    { name: "UI/UX Design", items: ["Figma", "Adobe XD", "Wireframing", "Prototyping"] },
    { name: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] },
    { name: "Tools & Others", items: ["Git", "VS Code", "Responsive Design", "SEO"] },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-white to-blue-50/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-3">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my skills, experience, and the passion that drives my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6 animate-fade-up">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
              With over 6 years of experience in the digital space, I've developed a passion for creating beautiful, functional websites and applications that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground">
              I began my career as a graphic designer before transitioning into web development, giving me a unique perspective that bridges the gap between aesthetics and functionality.
            </p>
            <p className="text-muted-foreground">
              My approach combines technical expertise with creative problem-solving to deliver solutions that are both visually appealing and highly effective.
            </p>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-4">Skill Categories</h4>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <div key={category.name} className="bg-white rounded-lg p-4 shadow-sm border w-full md:w-[calc(50%-0.75rem)]">
                    <h5 className="font-medium mb-2 text-primary">{category.name}</h5>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-white rounded-lg p-6 shadow-sm border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8"></div>
              
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.percentage}%</span>
                    </div>
                    <Progress value={skill.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-blue-600 text-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Education & Certifications</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1 bg-white/30 rounded-full"></div>
                  <div>
                    <p className="font-semibold">BS in Computer Science</p>
                    <p className="text-white/80 text-sm">University of Technology • 2015-2019</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1 bg-white/30 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Web Development Bootcamp</p>
                    <p className="text-white/80 text-sm">Fullstack Academy • 2019</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-1 bg-white/30 rounded-full"></div>
                  <div>
                    <p className="font-semibold">UX Design Certification</p>
                    <p className="text-white/80 text-sm">Google • 2020</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
