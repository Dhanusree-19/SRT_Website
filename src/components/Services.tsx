import { Car, MapPin, Clock, Shield } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Comfortable Vehicles",
    description: "Well-maintained, comfortable vehicles for all your travel needs",
  },
  {
    icon: MapPin,
    title: "Local & Outstation",
    description: "Travel anywhere within the city or plan long-distance journeys",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Round-the-clock service to accommodate your schedule",
  },
  {
    icon: Shield,
    title: "Safe & Reliable",
    description: "Experienced drivers ensuring your safety on every journey",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience comfort, safety, and reliability with every journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-fade-in"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both" 
              }}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
