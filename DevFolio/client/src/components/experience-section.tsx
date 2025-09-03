import { motion } from "framer-motion";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "2024 – Present",
      title: "Integrated MSc Mathematics",
      company: "SVNIT Surat",
      description: "Currently pursuing my integrated master's degree, combining mathematical foundations with practical software development.",
      type: "education"
    },
    {
      period: "2025 – Present",
      title: "Founder & Developer",
      company: "StepUpNow (Startup Project)",
      description: "Leading the development of a mentorship platform, handling full-stack development, UI/UX design, and business strategy.",
      type: "work"
    },
    {
      period: "2024 – 2025",
      title: "Freelance Developer",
      company: "Pavan Glass Works Website",
      description: "Developed a professional business website with modern UI/UX, responsive design, and optimized performance.",
      type: "work"
    },
    {
      period: "2023 – Present",
      title: "Self-Learning Journey",
      company: "MERN Stack & TypeScript",
      description: "Intensive self-study and practice with modern web technologies, building real-world projects and mastering full-stack development.",
      type: "learning"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/5">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            {/* Timeline Items */}
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <motion.div 
                    className="bg-card border border-border rounded-xl p-6 hover:bg-accent/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    data-testid={`experience-${index}`}
                  >
                    <div className="flex items-center mb-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {experience.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                    <p className="text-muted-foreground mb-1">{experience.company}</p>
                    <p className="text-sm text-muted-foreground">{experience.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
