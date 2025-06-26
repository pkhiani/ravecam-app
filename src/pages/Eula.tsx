import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Eula = () => {
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
            End User License Agreement (EULA)
          </h1>
          <p className="text-gray-300 text-lg">
            Last updated: June 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-white space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">1. Acceptance</h2>
            <p className="text-gray-300 leading-relaxed">
              By installing, accessing, or using the RAVECAM application, you agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not install or use RAVECAM.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">2. License Grant</h2>
            <p className="text-gray-300 leading-relaxed">
              RAVECAM grants you a non-exclusive, non-transferable, revocable license to use the RAVECAM application solely for your personal, non-commercial purposes in accordance with this Agreement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">3. Restrictions</h2>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>You may not copy, modify, distribute, sell, or lease any part of RAVECAM or its included software.</li>
              <li>You may not reverse engineer, decompile, or attempt to extract the source code of RAVECAM, unless laws prohibit those restrictions.</li>
              <li>You may not use RAVECAM for any unlawful, harmful, or abusive purpose.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Ownership</h2>
            <p className="text-gray-300 leading-relaxed">
              RAVECAM and its licensors retain all rights, title, and interest in and to the RAVECAM application, including all intellectual property rights.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">5. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              This Agreement is effective until terminated. RAVECAM may terminate your access to the application at any time if you fail to comply with any term(s) of this Agreement. Upon termination, you must cease all use of RAVECAM and delete all copies from your devices.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">6. Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              RAVECAM is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">7. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              To the maximum extent permitted by law, RAVECAM and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use RAVECAM; (b) any unauthorized access to or use of our servers and/or any personal information stored therein.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">8. Changes to this Agreement</h2>
            <p className="text-gray-300 leading-relaxed">
              RAVECAM reserves the right to update or modify this Agreement at any time. Continued use of the application after changes constitutes acceptance of the new terms.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">9. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this EULA, please contact us at:
            </p>
            <p className="text-blue-400 mt-2">
              ravecamapp@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Eula; 