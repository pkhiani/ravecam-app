import React from "react";

const Eula: React.FC = () => (
  <div className="max-w-2xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-bold mb-6">End User License Agreement (EULA)</h1>
    <p className="mb-4">This End User License Agreement ("Agreement") is a legal agreement between you ("User") and RAVECAM ("Company") for the use of the RAVECAM application ("Software").</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance</h2>
    <p className="mb-4">By installing, accessing, or using the RAVECAM application, you agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not install or use RAVECAM.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">2. License Grant</h2>
    <p className="mb-4">RAVECAM grants you a non-exclusive, non-transferable, revocable license to use the RAVECAM application solely for your personal, non-commercial purposes in accordance with this Agreement.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">3. Restrictions</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>You may not copy, modify, distribute, sell, or lease any part of RAVECAM or its included software.</li>
      <li>You may not reverse engineer, decompile, or attempt to extract the source code of RAVECAM, unless laws prohibit those restrictions.</li>
      <li>You may not use RAVECAM for any unlawful, harmful, or abusive purpose.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">4. Ownership</h2>
    <p className="mb-4">RAVECAM and its licensors retain all rights, title, and interest in and to the RAVECAM application, including all intellectual property rights.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">5. Termination</h2>
    <p className="mb-4">This Agreement is effective until terminated. RAVECAM may terminate your access to the application at any time if you fail to comply with any term(s) of this Agreement. Upon termination, you must cease all use of RAVECAM and delete all copies from your devices.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">6. Disclaimer of Warranties</h2>
    <p className="mb-4">RAVECAM is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
    <p className="mb-4">To the maximum extent permitted by law, RAVECAM and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use RAVECAM; (b) any unauthorized access to or use of our servers and/or any personal information stored therein.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to this Agreement</h2>
    <p className="mb-4">RAVECAM reserves the right to update or modify this Agreement at any time. Continued use of the application after changes constitutes acceptance of the new terms.</p>
    <p className="mt-8 text-sm text-gray-500">RAVECAM &copy; {new Date().getFullYear()}</p>
  </div>
);

export default Eula; 