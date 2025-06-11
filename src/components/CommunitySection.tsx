
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Community stats */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30 p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">1M+</div>
                <div className="text-gray-300">Concert Clips Shared</div>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-300">Active Fans</div>
              </Card>
              
              <Card className="bg-gradient-to-br from-pink-500/20 to-red-500/20 border-pink-500/30 p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-300">Artist Communities</div>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30 p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Real-time Connection</div>
              </Card>
            </div>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                💫 Experience the Magic
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                From intimate acoustic sets to massive festival stages, every moment matters. 
                Share your perspective, discover new angles, and relive the energy with fans worldwide.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Music className="w-3 h-3 mr-1" />
                  Live Concerts
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Heart className="w-3 h-3 mr-1" />
                  Fan Moments
                </Badge>
                <Badge variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                  <Share2 className="w-3 h-3 mr-1" />
                  Instant Sharing
                </Badge>
              </div>
            </Card>
          </div>

          {/* Right side - Mock video feed */}
          <div className="space-y-4">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                <div>
                  <div className="text-white font-semibold">@musiclover23</div>
                  <div className="text-gray-400 text-sm">2 hours ago • Coachella</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Music className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-white text-sm">Epic bass drop moment! 🔥</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>1.2k</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>89</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>45</span>
                  </button>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mr-3"></div>
                <div>
                  <div className="text-white font-semibold">@ravefan_101</div>
                  <div className="text-gray-400 text-sm">5 hours ago • EDC Vegas</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-lg h-32 mb-4 flex items-center justify-center">
                <p className="text-white text-sm">Crowd-surfing through paradise! 🌟</p>
              </div>
              
              <div className="flex items-center justify-between text-gray-400">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>892</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>34</span>
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
