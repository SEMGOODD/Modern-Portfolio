import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_zu66ibp",
        "template_n8ejoon",
        formRef.current,
        "nyuQLIrjfEZc5CCZ7"
      )
      .then(
        (result) => {
          toast({
            title: "Message sent successfully ☑️",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast({
            variant: "destructive",
            title: "OOPs! SOMETHING WENT WRONG...",
            description: "Please try again later or contact me directly via email.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* COLONNE GAUCHE : Totalement centrée (h-full et justify-center sont CLÉS) */}
          <div className="flex flex-col items-center justify-center space-y-12 w-full h-full text-center">
            
            <div className="w-full flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-10">
                Contact Information
              </h3>

              <div className="space-y-10 w-full flex flex-col items-center">
                
                {/* MODIFICATION ICI : flex-col items-center pour un centrage complet */}
                {/* Email */}
                <div className="flex flex-col items-center space-y-4 w-full text-center max-w-[320px]">
                  <div className="p-4 rounded-full bg-primary/10 shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl">Email</h4>
                    <a
                      href="mailto:ayoubsemgat20@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors font-medium text-base md:text-lg"
                    >
                      ayoubsemgat20@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center space-y-4 w-full text-center max-w-[320px]">
                  <div className="p-4 rounded-full bg-primary/10 shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl">Phone</h4>
                    <a
                      href="tel:+33749949665"
                      className="text-muted-foreground hover:text-primary transition-colors font-medium text-base md:text-lg"
                    >
                      +33 749949665
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex flex-col items-center space-y-4 w-full text-center max-w-[320px]">
                  <div className="p-4 rounded-full bg-primary/10 shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl">Location</h4>
                    <span className="text-muted-foreground font-medium text-base md:text-lg">
                      Marseille, France
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect With Me */}
            <div className="pt-4 flex flex-col items-center w-full">
              <h4 className="font-bold text-xl mb-6 text-center">Connect With Me</h4>
              <div className="flex space-x-6 justify-center">
                <a href="https://www.linkedin.com/in/ayoub-semgat/" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Linkedin size={26} />
                </a>
                <a href="https://www.instagram.com/ayoub_smgt/" target="_blank" rel="noreferrer" className="p-4 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Instagram size={26} />
                </a>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Formulaire */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl h-fit border border-border/50">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8"> Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground/90"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  placeholder="John..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground/90"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-foreground/90"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  placeholder="Job Opportunity"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-foreground/90"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3.5 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-base"
                  placeholder="Hello, I'd like to talk about..."
                  rows={4}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-3 group py-4 text-lg",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};