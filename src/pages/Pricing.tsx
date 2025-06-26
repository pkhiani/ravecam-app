import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back button */}
        <Link to="/">
          <Button 
            variant="outline" 
            className="mb-8 border-white/20 text-black hover:bg-white/10 backdrop-blur-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pricing
          </h1>
          <p className="text-gray-300 text-lg">
            Choose the plan that fits your fan journey.
          </p>
        </div>

        {/* Pricing Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-white space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">🆓 Free</h2>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Upload 3 short videos/week</li>
              <li>Basic community access</li>
              <li>Comment & like videos</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-purple-400">💎 Pro Fan <span className='text-white text-lg font-normal'>($4.99/mo)</span></h2>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Unlimited uploads & longer videos</li>
              <li>Boost visibility to artists</li>
              <li>Custom badges & premium filters</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-pink-400">🎤 Coming Soon</h2>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>In-app tipping</li>
              <li>Creator revenue tools</li>
              <li>Sponsored content/events</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 