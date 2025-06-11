
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/d03977f9-e0b5-43ef-b37c-a9eff05de166.png" 
              alt="RAVECAM" 
              className="w-32 h-32 rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl" />
          </div>
        </div>

        {/* Badge */}
        <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-2 text-sm font-medium">
          🎤 Connect Through Concerts
        </Badge>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Share Your
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
            Fan Moments
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Turn your favorite concert moments into a platform for connection. 
          Upload videos from shows, join communities, and get seen by the artists you love.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <Download className="mr-2 h-5 w-5" />
            Download on App Store
          </Button>
        </div>

        {/* Phone mockup preview */}
        <div className="relative mx-auto max-w-sm">
          <div className="relative">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="bg-black rounded-[2.5rem] p-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2rem] h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-white text-sm">Concert clips coming to life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
