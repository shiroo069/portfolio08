
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with user authentication, product management, and payment integration.",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "#",
      repoUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Tailwind CSS", "Responsive"],
      category: "frontend",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app for organizing tasks with drag-and-drop functionality and team collaboration.",
      imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "TypeScript", "Firebase", "DnD"],
      category: "fullstack",
      liveUrl: "#",
      repoUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with interactive maps and forecasts.",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["JavaScript", "API Integration", "Chart.js"],
      category: "frontend",
      liveUrl: "#"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A content management system with rich text editing and comment functionality.",
      imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB", "Rich Text"],
      category: "fullstack",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Mobile-friendly application for tracking workouts and visualizing progress.",
      imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      tags: ["React Native", "Firebase", "Health API"],
      category: "mobile",
      liveUrl: "#"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Full Stack" },
    { id: "mobile", name: "Mobile" }
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-gradient-to-b from-blue-50/50 to-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="mb-3">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and discover the projects I've built
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-muted rounded-full gap-1">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "ghost"}
                className={`rounded-full text-sm ${filter === category.id ? '' : 'hover:text-primary'}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${project.id * 100}ms` }}>
              <ProjectCard 
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                liveUrl={project.liveUrl}
                repoUrl={project.repoUrl}
                featured={project.featured}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
