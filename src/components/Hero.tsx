import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="animate-scale-in">
          <img 
            src={logo} 
            alt="Sri Radha Travels and Transport" 
            className="w-64 h-64 md:w-80 md:h-80 mx-auto object-contain"
          />
        </div>
        
        <div className="animate-fade-in space-y-4" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Sri Radha Travels and Transport
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Your Trusted Travel Partner
          </p>
        </div>

        <div className="animate-fade-in flex justify-center pt-4" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <a 
            href="tel:9865553184" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="w-6 h-6" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
