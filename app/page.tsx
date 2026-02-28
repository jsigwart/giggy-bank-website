import Link from "next/link";
import {
  DollarSign,
  Clock,
  Car,
  Smartphone,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "True Earnings",
    description:
      "See your real take-home pay after expenses. Know exactly what you're making per hour.",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description:
      "Log each trip in seconds. Track active time vs. waiting time to understand your true hourly rate.",
  },
  {
    icon: Car,
    title: "Mileage Tracking",
    description:
      "Automatic mileage logging helps you account for vehicle costs and maximize tax deductions.",
  },
  {
    icon: Smartphone,
    title: "Multi-Platform",
    description:
      "Works with Uber, Lyft, DoorDash, Instacart, Grubhub, Postmates, Amazon Flex, and more.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "No account required. No ads. All your data stays on your device—we never see it.",
  },
  {
    icon: Zap,
    title: "Instant Insights",
    description:
      "Get real-time stats on your earnings. Make smarter decisions about when and where to work.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          GiggyBank
        </h1>
        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-6">
          Know what you really earn.
        </p>
        <p className="max-w-2xl text-lg text-neutral-500 dark:text-neutral-400 mb-10 leading-relaxed">
          GiggyBank helps gig workers understand their true earnings across all
          the apps they work. Log trips in seconds, track mileage and time, and
          instantly see your Take-Home and True Hourly rate.
        </p>

        {/* Coming Soon Button */}
        <div className="inline-flex items-center gap-3 bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full opacity-75 cursor-not-allowed">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
          </svg>
          <span className="font-semibold">Coming Soon</span>
        </div>

        <p className="mt-8 text-sm text-neutral-400">
          Uber &bull; Lyft &bull; DoorDash &bull; Instacart &bull; Grubhub &bull; Postmates &bull; Amazon Flex
        </p>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Everything you need to track your gig earnings
          </h2>
          <p className="text-center text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
            Simple, powerful tools designed specifically for gig workers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-700"
              >
                <feature.icon className="w-10 h-10 mb-4 text-neutral-900 dark:text-white" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              Support
            </Link>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">
            Contact:{" "}
            <a
              href="mailto:dev@happychaos.com"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              dev@happychaos.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
