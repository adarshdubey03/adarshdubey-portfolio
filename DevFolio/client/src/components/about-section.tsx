import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-primary to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                <User className="text-6xl text-muted-foreground" data-testid="profile-placeholder" />
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I am a passionate Full Stack Developer and a first-year Integrated MSc Mathematics student at SVNIT Surat. 
              I specialize in building modern web applications using the MERN stack, TypeScript, and Next.js.
            </motion.p>

            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              With experience in authentication, payments, APIs, and real-world projects, I focus on delivering 
              professional-grade solutions that make a real impact. I love turning complex problems into 
              simple, beautiful, and intuitive designs.
            </motion.p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
