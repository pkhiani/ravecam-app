import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const SupportSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're here to support you on your RAVECAM journey. Get help, share feedback, or connect with our community.
          </p>
        </div>

        {/* Support contact */}
        <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            We're always here to help you connect through music. Reach out anytime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              onClick={() => window.location.href = 'mailto:support@ravecam.app'}
            >
              <Mail className="mr-2 h-4 w-4" />
              support@ravecam.app
            </Button>
            <span className="text-gray-400 text-sm">
              Response time: Usually within 24 hours
            </span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SupportSection;