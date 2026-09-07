import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Calculate Food Cost Percentage | FoodProfit Tools",
  description:
    "Learn what food cost percentage means, how to calculate it, and how it can help you price food products more confidently.",
};

export default function FoodCostPercentagePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
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

          <nav className="flex gap-4 text-sm font-medium">
            <Link href="/" className="text-slate-600 hover:text-emerald-700">
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
              className="text-slate-600 hover:text-emerald-700"
            >
              FoodProfit Pro
            </Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          Food Costing
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          How to Calculate Food Cost Percentage
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Food cost percentage helps you understand how much of your selling
          price is being used to cover the direct cost of the food you sell.
          It is one of the most useful numbers to understand when pricing
          recipes and menu items.
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold">
              What is food cost percentage?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Food cost percentage is the relationship between your food cost
              and your selling price. In simple terms, it tells you what
              percentage of the selling price is used to cover the direct cost
              of producing the food.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              In the FoodProfit calculator, direct cost includes the ingredients
              and packaging used for the recipe.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              The basic food cost percentage formula
            </h2>

            <div className="mt-5 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
              <p className="text-xl font-bold">
                Food Cost % = Direct Cost ÷ Selling Price × 100
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Example
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              Imagine one portion of your product costs $3.00 in ingredients
              and packaging. You sell that portion for $10.00.
            </p>

            <div className="mt-5 rounded-2xl bg-emerald-50 p-6">
              <p className="font-semibold text-emerald-900">
                $3.00 ÷ $10.00 × 100 = 30%
              </p>
            </div>

            <p className="mt-4 leading-8 text-slate-700">
              That means 30% of the selling price is being used to cover the
              direct ingredient and packaging cost.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              What is a desired food cost percentage?
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              A desired food cost percentage is a target you use when exploring
              a selling price. For example, if you choose 30%, you are
              exploring a price where your direct food and packaging cost
              represents about 30% of the selling price.
            </p>

            <p className="mt-4 leading-8 text-slate-700">
              It is important to remember that this is a pricing tool, not a
              complete profit calculation. Labor, rent, utilities, delivery,
              taxes, marketing, equipment, and other business expenses still
              need to be considered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Calculate your food cost percentage
            </h2>

            <p className="mt-4 leading-8 text-slate-700">
              The easiest way to put this into practice is to cost your actual
              recipe, including packaging and usable yield.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white hover:bg-emerald-700"
            >
              Use the Free Food Cost Calculator →
            </Link>
          </section>
        </div>
      </article>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
          FoodProfit Tools — Free practical tools for small food businesses.
        </div>
      </footer>
    </main>
  );
}