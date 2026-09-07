import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Costing Resources for Small Food Businesses | FoodProfit Tools",
  description:
    "Practical guides to food cost percentage, recipe costing, usable yield, food pricing, packaging costs, and profit for small food businesses.",
};

const resources = [
  {
    category: "FOOD COSTING",
    title: "How to Calculate Food Cost Percentage",
    description:
      "Understand what food cost percentage means, how to calculate it, and how it can help you make better pricing decisions.",
    href: "/resources/food-cost-percentage",
  },
  {
    category: "RECIPE COSTING",
    title: "How to Calculate the Cost of a Recipe",
    description:
      "Learn how to calculate the direct cost of a recipe using ingredients, quantities, packaging, yield, and portions.",
    href: "/resources/recipe-cost",
  },
  {
    category: "YIELD & WASTE",
    title: "Understanding Usable Yield",
    description:
      "Learn why the amount you purchase is not always the amount you can use, and how yield affects your true ingredient cost.",
    href: "/resources/usable-yield",
  },
  {
    category: "PRICING",
    title: "How to Price Food for Profit",
    description:
      "Understand the relationship between recipe cost, food cost percentage, selling price, gross profit, and your other business expenses.",
    href: "/resources/price-food-for-profit",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="block">
            <p className="text-xl font-bold text-emerald-700">
              FoodProfit Tools
            </p>
            <p className="text-xs text-slate-500">
              Free tools for small food businesses
            </p>
          </Link>

          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link
              href="/"
              className="text-slate-600 transition hover:text-emerald-700"
            >
              Calculator
            </Link>

            <Link
              href="/resources"
              className="text-emerald-700"
            >
              Resources
            </Link>

            <Link
              href="/foodprofit-pro"
              className="text-slate-600 transition hover:text-emerald-700"
            >
              FoodProfit Pro
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Food Business Resources
          </p>

          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Learn how to understand your food costs and price with confidence.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Practical food costing guidance for home food businesses, food
            trucks, caterers, bakers, meal-prep businesses, and other small
            food businesses.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700"
            >
              Use the Free Food Cost Calculator →
            </Link>
          </div>
        </div>
      </section>

      {/* RESOURCE CARDS */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <article
                key={resource.href}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                  {resource.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  {resource.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {resource.description}
                </p>

                <Link
                  href={resource.href}
                  className="mt-6 inline-flex font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  Read the guide →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THESE NUMBERS MATTER */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">
            Your selling price starts with knowing your costs.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Ingredient prices, packaging, usable yield, portions, and food
            cost percentage all affect the price you need to charge. These
            resources explain the numbers behind your recipes so you can make
            better business decisions.
          </p>
        </div>
      </section>

      {/* CALCULATOR CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-6 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Want to calculate your recipe cost?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Use the free FoodProfit recipe costing calculator to calculate
            ingredients, packaging, cost per portion, food cost percentage,
            and a suggested selling price.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white transition hover:bg-emerald-400"
          >
            Use the Free Calculator →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            FoodProfit Tools — Free practical tools for small food businesses.
          </p>

          <div className="flex gap-5">
            <Link
              href="/"
              className="hover:text-slate-900"
            >
              Calculator
            </Link>

            <Link
              href="/resources"
              className="hover:text-slate-900"
            >
              Resources
            </Link>

            <Link
              href="/foodprofit-pro"
              className="hover:text-slate-900"
            >
              FoodProfit Pro
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}