
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cinema-dark text-white">
      <header className="bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold bg-gold-gradient bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-cinema-gold mb-6">KeralaPrime Privacy Policy</h2>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Information We Collect</h3>
              <p>
                At KeralaPrime, we collect information you provide directly to us, such as when you create an account, 
                use our streaming services, or contact us for support. This may include your name, email address, 
                payment information, and viewing preferences.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>To provide and maintain our streaming services</li>
                <li>To personalize your viewing experience and recommendations</li>
                <li>To process payments and manage your subscription</li>
                <li>To communicate with you about our services and updates</li>
                <li>To improve our platform and develop new features</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Data Protection & Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. All video content is encrypted and protected against 
                unauthorized downloading or distribution.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Content Protection</h3>
              <p>
                All movies and web series on KeralaPrime are protected by digital rights management (DRM) technology. 
                Our content is encrypted and cannot be downloaded, copied, or distributed without authorization. 
                Any attempt to bypass these protections is strictly prohibited.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Cookies and Tracking</h3>
              <p>
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                and provide personalized recommendations. You can manage your cookie preferences through 
                your browser settings.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Third-Party Services</h3>
              <p>
                We may use third-party services for analytics, payment processing, and content delivery. 
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Your Rights</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at privacy@keralaprime.com or through our support center.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-white mb-4">Updates to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on this page and updating the "Last Updated" date below.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
