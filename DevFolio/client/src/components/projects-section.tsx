import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "StepUpNow",
      description: "A platform that connects freshers with placed seniors for 1-on-1 mentorship, payments, reviews, and community chat.",
      tech: ["Next.js", "MongoDB", "Razorpay", "Firebase"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      github: "#",
      demo: "#"
    },
    {
      title: "Pavan Glass Works",
      description: "A professional business website for a glassworks company, showcasing services and contact details with a modern UI.",
      tech: ["Next.js", "Tailwind"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      github: "#",
      demo: "#"
    },
    {
      title: "FindScan",
      description: "A fintech frontend project implementing Bollinger Bands indicator using KLineCharts.",
      tech: ["Next.js", "TypeScript", "Tailwind", "KLineCharts"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      github: "#",
      demo: "#"
    }
  ];

  const techColors: Record<string, string> = {
    "Next.js": "bg-primary/10 text-primary",
    "MongoDB": "bg-green-500/10 text-green-400",
    "Razorpay": "bg-blue-500/10 text-blue-400",
    "Firebase": "bg-orange-500/10 text-orange-400",
    "Tailwind": "bg-cyan-500/10 text-cyan-400",
    "TypeScript": "bg-blue-500/10 text-blue-400",
    "KLineCharts": "bg-purple-500/10 text-purple-400",
    "Framer Motion": "bg-purple-500/10 text-purple-400"
  };

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications built with modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group bg-card border border-border rounded-xl p-6 hover:bg-accent/50 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${techColors[tech] || 'bg-gray-500/10 text-gray-400'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.github}
                  data-testid={`link-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={project.demo}
                  data-testid={`link-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
