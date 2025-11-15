import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your journey? Contact us today!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
            <div
              className="group bg-card border-2 border-border hover:border-primary p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 animate-slide-in-left"
              style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            >
              <Phone className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground mb-3">Call us at</p>
              <a href="tel:9865553184" className="block text-xl font-semibold text-foreground hover:text-primary transition-colors mb-2">
                9865553184
              </a>
              <a href="tel:9965553184" className="block text-xl font-semibold text-foreground hover:text-primary transition-colors">
                9965553184
              </a>
            </div>

            <a
              href="mailto:sriradhatravelsbalu@gmail.com"
              className="group bg-card border-2 border-border hover:border-primary p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 animate-slide-in-right"
              style={{ animationDelay: "0.2s", animationFillMode: "both" }}
            >
              <Mail className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground mb-2">Email us at</p>
              <p className="text-lg font-semibold text-foreground break-all">
                sriradhatravelsbalu@gmail.com
              </p>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
          <p className="text-primary font-bold text-2xl mb-2">Happy Journey!</p>
          <p className="text-muted-foreground">
            © 2024 Sri Radha Travels and Transport. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
