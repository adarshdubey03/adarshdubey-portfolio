import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiFirebase, 
  SiGit 
} from "react-icons/si";

export default function TechStackSection() {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500", description: "Modern ES6+ JavaScript" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", description: "Type-safe development" },
    { name: "React", icon: SiReact, color: "text-cyan-400", description: "Component-based UI" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", description: "Full-stack React framework" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500", description: "Server-side JavaScript" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600", description: "NoSQL database" },
    { name: "Express", icon: SiExpress, color: "text-gray-400", description: "Backend web framework" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400", description: "Utility-first CSS" },
    { name: "Firebase", icon: SiFirebase, color: "text-orange-500", description: "Backend as a Service" },
    { name: "Git/GitHub", icon: SiGit, color: "text-orange-600", description: "Version control" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack & Tools</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to bring ideas to life with clean, efficient, and scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card hover:border-primary/50 transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <motion.div
                className="flex flex-col items-center space-y-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`text-5xl tech-icon ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  animate={{ 
                    y: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 3 + index * 0.2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 
                  }}
                >
                  <skill.icon />
                </motion.div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {skill.description}
                  </p>
                </div>
              </motion.div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Also familiar with</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Mongoose", "REST APIs", "Authentication", "Payment Integration", "Responsive Design", "Performance Optimization"].map((skill, index) => (
              <motion.span
                key={skill}
                className="bg-muted/30 text-muted-foreground px-4 py-2 rounded-full text-sm border border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}