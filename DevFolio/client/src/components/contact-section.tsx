import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactMessageSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="bg-card border border-border rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  placeholder="Your Name"
                  className="mt-2"
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...form.register("email")}
                  placeholder="your.email@example.com"
                  className="mt-2"
                  data-testid="input-email"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="mt-2 resize-none"
                  data-testid="textarea-message"
                />
                {form.formState.errors.message && (
                  <p className="text-destructive text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information & Social Links */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:adarshdubey2005@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      data-testid="link-email"
                    >
                      adarshdubey2005@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/adarshdubey03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  data-testid="link-github"
                >
                  <Github className="text-white text-xl" />
                </motion.a>
                
                <motion.a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  data-testid="link-linkedin"
                >
                  <Linkedin className="text-white text-xl" />
                </motion.a>
                
                <motion.a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 hover:bg-black rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  data-testid="link-twitter"
                >
                  <Twitter className="text-white text-xl" />
                </motion.a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="font-semibold text-green-400">Available for Projects</span>
              </div>
              <p className="text-muted-foreground">
                I'm currently open to new opportunities and exciting projects. Let's build something great together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
