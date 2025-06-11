
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back button */}
        <Link to="/">
          <Button 
            variant="outline" 
            className="mb-8 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: June 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-white space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed">
              At RAVECAM, we collect information to provide better services to our users. This includes:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Concert videos and content you upload</li>
              <li>Profile information including username and email</li>
              <li>Usage data and app interactions</li>
              <li>Device information for app optimization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">2. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed">
              We use the collected information to:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Provide and maintain our service</li>
              <li>Connect you with artist communities</li>
              <li>Improve user experience and app features</li>
              <li>Send important updates about your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Content Sharing</h2>
            <p className="text-gray-300 leading-relaxed">
              When you upload concert videos to RAVECAM, you understand that:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Content may be visible to other users in artist communities</li>
              <li>Artists may view and interact with your content</li>
              <li>You retain ownership of your uploaded content</li>
              <li>You can delete your content at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement industry-standard security measures to protect your personal information and uploaded content. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              RAVECAM may integrate with third-party services for features like payment processing and analytics. These services have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-blue-400 mt-2">
              support@ravecam.app
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
