import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food Costing Resources for Small Food Businesses | FoodProfit Tools",
  description:
    "Practical guides to food cost percentage, recipe costing, usable yield, food pricing, packaging costs, and profit for small food businesses.",
};

const resources = [
  {
    title: "How to Calculate Food Cost Percentage",
    description:
      "Learn what food cost percentage means, how to calculate it, and how to use it when pricing food products.",
    href: "/resources/food-cost-percentage",
    topic: "Food Cost Percentage",
  },
  {
    title: "How to Calculate the Cost of a Recipe",
    description:
      "Learn how to calculate the true direct cost of a recipe using ingredient prices, quantities, usable yield, packaging, and portions.",
    href: "/resources/recipe-cost",
    topic: "Recipe Costing",
  },
  {
    title: "Understanding Usable Yield",
    description:
      "Learn why the amount you buy is not always the amount you can use, and how usable yield affects your true ingredient cost.",
    href: "/resources/usable-yield",
    topic: "Usable Yield",
  },
  {
    title: "How to Price Food for Profit",
    description:
      "Learn how food cost, direct cost per portion, suggested selling price, and gross profit work together.",
    href: "/resources/price-food-for-profit",
    topic: "Food Pricing",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            FoodProfit Tools
          </Link>

          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link
              href="/"
              className="text-slate-600 transition hover:text-slate-900"
            >
              Calculator
            </Link>

            <Link
              href="/resources"
              className="text-slate-900"
            >
              Resources
            </Link>

            <Link
              href="/foodprofit-pro"
              className="text-slate-600 transition hover:text-slate-900"
            >
              FoodProfit Pro
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-700">
            FoodProfit Tools Resources
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Practical food costing guidance for small food businesses.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Understand your ingredient costs, food cost percentage, usable
            yield, recipe costs, pricing, packaging costs, and profit so you
            can make better decisions about what to charge for your food.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              Use the Free Food Cost Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((resource) => (
            <article
              key={resource.href}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                {resource.topic}
              </p>

              <h2 className="mt-3 text-2xl font-bold text-slate-900">
                {resource.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {resource.description}
              </p>

              <Link
                href={resource.href}
                className="mt-6 inline-flex font-semibold text-emerald-700 hover:text-emerald-900"
              >
                Read the guide →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Why Food Costing Matters */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-bold text-slate-900">
            Why food costing matters
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              It is possible to sell a food product every day and still not
              know whether you are making a healthy profit from it.
            </p>

            <p>
              Ingredient prices change. Portions can become larger than
              planned. Some ingredients are trimmed or wasted. Packaging adds
              another cost. When these costs are not included, your selling
              price may look profitable while the actual margin is much
              smaller.
            </p>

            <p>
              Food costing helps you understand what it really costs to
              produce a recipe and gives you better information when deciding
              what to charge.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to calculate your numbers?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Use the free FoodProfit Tools calculator to calculate ingredient
            costs, packaging costs, direct cost per portion, suggested selling
            price, food cost percentage, and gross profit.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Open the Free Calculator →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
          <p>FoodProfit Tools — Free tools for small food businesses.</p>
        </div>
      </footer>
    </main>
  );
}