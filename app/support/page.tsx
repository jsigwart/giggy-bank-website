import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I log a trip?",
    answer:
      "Tap the '+' button on the main screen, enter your earnings, mileage, and time spent, then select which platform you worked for (Uber, DoorDash, etc.). Your trip will be saved instantly and factored into your earnings calculations.",
  },
  {
    question: "What is 'True Hourly' and how is it calculated?",
    answer:
      "True Hourly shows what you actually earn per hour after accounting for expenses like gas and vehicle wear. It's calculated by taking your net earnings (after estimated expenses) and dividing by the total time you spent working, including waiting time between trips.",
  },
  {
    question: "Does GiggyBank track my location?",
    answer:
      "No. GiggyBank does not access your location or GPS data. You manually enter your mileage for each trip. This keeps your privacy protected while still allowing you to track vehicle-related expenses.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes, you can export your trip history and earnings data for your records or tax purposes. Go to Settings and tap 'Export Data' to generate a file with all your logged information.",
  },
  {
    question: "Is my data backed up?",
    answer:
      "Your data is stored locally on your device. If you have iCloud backup enabled for your device, your GiggyBank data will be included in your device backup. We recommend keeping regular backups of your phone to prevent data loss.",
  },
  {
    question: "How do I edit or delete a trip?",
    answer:
      "Swipe left on any trip in your history to reveal edit and delete options. Tap 'Edit' to modify the trip details or 'Delete' to remove it entirely. Deleted trips cannot be recovered.",
  },
  {
    question: "Which gig platforms are supported?",
    answer:
      "GiggyBank works with all major gig platforms including Uber, Lyft, DoorDash, Instacart, Grubhub, Postmates, Amazon Flex, and more. You can also add custom platforms if you work for a service not listed.",
  },
];

export default function Support() {
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

        <h1 className="text-4xl font-bold mb-2">Support</h1>
        <p className="text-neutral-500 dark:text-neutral-400 mb-12">
          Find answers to common questions or get in touch with us.
        </p>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-neutral-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
          </p>
          <a
            href="mailto:dev@happychaos.com"
            className="inline-flex items-center justify-center bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Contact us at dev@happychaos.com
          </a>
        </section>
      </div>
    </div>
  );
}
