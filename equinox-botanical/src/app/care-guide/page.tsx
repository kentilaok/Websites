import TextReveal from "@/components/ui/TextReveal";
import { Droplet, Sun, Wind, Scissors, Beaker, Sprout, CalendarDays } from "lucide-react";

const careTopics = [
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Illumination & Placement",
    description: "Most of our terrariums thrive in bright, indirect light. Avoid direct sun, which can magnify heat through the glass and scorch delicate foliage. North or east-facing windows are ideal."
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Hydration Guidelines",
    description: "Closed terrariums are self-sustaining and rarely need water. Open arrangements typically require watering every 2-3 weeks. Always check the soil moisture before adding water; it's better to underwater than overwater."
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Humidity Management",
    description: "Condensation is natural in closed systems. If large droplets persist obscuring the view, leave the lid off for 24 hours to balance the internal climate."
  },
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Pruning & Grooming",
    description: "Remove yellowing leaves immediately to prevent mold. Use sterilized, long-handled aquascaping scissors to trim overgrown foliage and maintain the intended aesthetic composition."
  },
  {
    icon: <Beaker className="w-6 h-6" />,
    title: "Soil Dynamics",
    description: "Our proprietary substrate includes activated charcoal to filter impurities and prevent bacterial growth. Repotting is generally unnecessary for 2-3 years."
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Pest Troubleshooting",
    description: "If you notice webbing or tiny spots, isolate the piece. A gentle application of neem oil or insecticidal soap on a cotton swab is usually sufficient for localized issues."
  },
  {
    icon: <CalendarDays className="w-6 h-6" />,
    title: "Seasonal Adjustments",
    description: "During winter dormancy, reduce watering frequency by half. Keep away from drafts, radiators, and heating vents which cause rapid temperature fluctuations."
  }
];

export default function CareGuide() {
  return (
    <div className="min-h-screen bg-earth-100">
      <header className="pt-24 pb-16 px-6 text-center max-w-3xl mx-auto">
        <TextReveal
          as="h1"
          text="Botanical Care Guide"
          className="text-4xl md:text-5xl font-serif text-sage-900 mb-6"
        />
        <TextReveal
          as="p"
          text="Master the delicate balance of nurturing your Equinox ecosystem."
          className="text-sage-700 text-lg"
        />
      </header>

      <div className="container mx-auto px-6 pb-24 max-w-4xl">
        <div className="space-y-8">
          {careTopics.map((topic, index) => (
            <div 
              key={index} 
              className="bg-earth-50 p-8 md:p-12 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow duration-300 border border-sage-100 flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="bg-sage-100 text-sage-700 p-4 rounded-full shrink-0">
                {topic.icon}
              </div>
              <div>
                <h2 className="text-2xl font-serif text-sage-900 mb-4">
                  {topic.title}
                </h2>
                <p className="text-sage-700 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-sage-600 mb-6 italic font-serif">Need specialized assistance?</p>
          <a 
            href="mailto:care@equinoxbotanical.com"
            className="inline-block border border-sage-900 px-8 py-4 uppercase tracking-widest text-sm text-sage-900 hover:bg-sage-900 hover:text-earth-50 transition-colors duration-500"
          >
            Contact our Horticulturists
          </a>
        </div>
      </div>
    </div>
  );
}
