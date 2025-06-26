import { Button } from "@/components/ui/button";
import { Download, Smartphone, Star } from "lucide-react";
import { Link } from "react-router-dom";

const DownloadSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Connect
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Through Music?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of fans sharing their concert experiences. 
            Download RAVECAM and turn your fan moments into connections.
          </p>
        </div>

        {/* Download button */}
        <div className="flex justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-3 h-6 w-6" />
            Download for iOS
          </Button>
        </div>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Mobile First</h3>
            <p className="text-gray-400">Designed for your phone, optimized for concerts</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Premium Features</h3>
            <p className="text-gray-400">Unlock extended uploads and artist visibility</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Download className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Instant Upload</h3>
            <p className="text-gray-400">Share moments as they happen, no editing needed</p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 RAVECAM. Connecting fans through music.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/eula" 
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
