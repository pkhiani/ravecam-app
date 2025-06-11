
import { Card } from "@/components/ui/card";
import { Upload, Users, Heart, Smartphone, Star, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Upload,
    title: "Upload Concert Clips",
    description: "Share videos directly from your phone — let your experience shine.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Join Artist Communities",
    description: "Each artist has a home. Discover fan content, leave comments, and react in real time.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Heart,
    title: "Like & Comment on Videos",
    description: "Support others in the community, find friends through shared hype, and be part of the conversation.",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: Star,
    title: "Boost Your Profile",
    description: "Stand out to artists, upload longer content, and increase visibility with optional upgrades.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Smartphone,
    title: "Simple & Fast Uploads",
    description: "Optimized for mobile. No editing required. Just vibes.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageCircle,
    title: "Real-time Reactions",
    description: "Connect instantly with fans during and after concerts. Feel the energy together.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🌟 Key Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every tool you need to connect with the music, the fans, and the artists you love
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl p-8"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
