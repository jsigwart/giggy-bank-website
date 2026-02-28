import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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

        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-8">
          Effective Date: {effectiveDate}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              By downloading, installing, or using GiggyBank (&quot;the App&quot;), you
              agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do
              not agree to these Terms, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Description of Service
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              GiggyBank is a personal earnings tracking tool designed for gig
              economy workers. The App allows you to log trips, track mileage and
              time, and calculate your true hourly earnings across multiple gig
              platforms. All data is stored locally on your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of the App</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              You agree to use GiggyBank only for its intended purpose of
              personal earnings tracking. You may not:
            </p>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 mt-4 space-y-2">
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>
                Use the App for any unlawful or unauthorized purpose
              </li>
              <li>
                Distribute, sublicense, or otherwise make the App available to
                third parties
              </li>
              <li>
                Modify or create derivative works based on the App
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Data and Privacy
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              All data you enter into GiggyBank is stored locally on your device.
              We do not collect, transmit, or have access to your personal data.
              For more details, please review our{" "}
              <Link
                href="/privacy-policy"
                className="text-neutral-900 dark:text-white underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Disclaimer of Warranties
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              GiggyBank is provided &quot;as is&quot; and &quot;as available&quot; without
              warranties of any kind, either express or implied. We do not
              guarantee the accuracy of any earnings calculations or that the App
              will meet your specific requirements. The App is a tracking tool
              and should not be relied upon as a sole source for tax reporting or
              financial decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Limitation of Liability
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              To the fullest extent permitted by law, GiggyBank and its
              developers shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including but not
              limited to loss of data, earnings, or profits, arising out of your
              use or inability to use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Intellectual Property
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              All intellectual property rights in the App, including its design,
              code, and content, are owned by GiggyBank. These Terms do not
              grant you any rights to use our trademarks, logos, or branding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              You may stop using GiggyBank at any time by uninstalling the App
              from your device. Since all data is stored locally, uninstalling
              the App will remove all your data unless you have a device backup.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Changes to These Terms
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We may update these Terms from time to time. Any changes will be
              reflected on this page with an updated effective date. Continued
              use of the App after changes constitutes acceptance of the revised
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:dev@happychaos.com"
                className="text-neutral-900 dark:text-white underline"
              >
                dev@happychaos.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
