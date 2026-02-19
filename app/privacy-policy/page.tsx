import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8">
          Effective Date: {effectiveDate}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              GiggyBank is designed with your privacy as a top priority. We
              believe your earnings data is personal and should stay that way.
              This Privacy Policy explains how we handle your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Data Storage
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              All data you enter into GiggyBank is stored locally on your
              device. Your trip logs, earnings, mileage, and time tracking
              information never leave your phone. We do not have servers that
              store your personal data, and we cannot access your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              No Personal Data Collection
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We do not collect, transmit, or store any personal data. This
              includes but is not limited to:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 mt-4 space-y-2">
              <li>Your name or contact information</li>
              <li>Your location or GPS data</li>
              <li>Your earnings or financial information</li>
              <li>Your trip history or work patterns</li>
              <li>Device identifiers or usage data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              No Analytics or Tracking
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              GiggyBank does not use any analytics services, tracking pixels, or
              third-party SDKs that collect user data. We do not track how you
              use the app, which features you access, or any behavioral data.
              Your usage of GiggyBank is completely private.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              No Advertisements
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              GiggyBank does not display advertisements. Because we don&apos;t show
              ads, we have no need to collect data for advertising purposes or
              share information with ad networks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              No Account Required
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              You can use GiggyBank without creating an account or providing any
              personal information. Simply download the app and start tracking
              your earnings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Data Sharing
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Since we don&apos;t collect any data, we have nothing to share with
              third parties. Your information stays on your device and is never
              transmitted to us or anyone else.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us at{" "}
              <a
                href="mailto:dev@happychaos.com"
                className="text-neutral-900 dark:text-white underline"
              >
                dev@happychaos.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Changes to This Policy
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated effective date. We
              encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
