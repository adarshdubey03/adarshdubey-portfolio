import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground">
            © 2025 Adarsh Dubey. All Rights Reserved.
          </p>
          
          {/* Back to Top Button */}
          <div className="mt-8">
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              whileHover={{ y: -2 }}
              data-testid="button-back-to-top"
            >
              <ChevronUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
