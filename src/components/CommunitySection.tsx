
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Music } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where Fans
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Become Family
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether it's that goosebump moment when the beat drops or a crowd-surfing blur of energy — 
            every video brings you closer to the music, the fans, and the artist.
          </p>
        </div>

        {/* Community showcase */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              💫 Experience the Magic
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              From intimate acoustic sets to massive festival stages, every moment matters. 
              Share your perspective, discover new angles, and relive the energy with fans worldwide.
            </p>
            
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
