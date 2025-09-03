import { motion } from "framer-motion";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black/80 backdrop-blur-md border border-gray-700 rounded-full px-8 py-4"
      >
        <ul className="flex items-center space-x-8 text-sm font-medium text-white">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              data-testid="nav-home"
              className="hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              data-testid="nav-about"
              className="hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md hover:bg-primary/10"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              data-testid="nav-projects"
              className="hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              data-testid="nav-experience"
              className="hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              data-testid="nav-contact"
              className="hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md hover:bg-primary/10"
            >
              Contact
            </button>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
}
