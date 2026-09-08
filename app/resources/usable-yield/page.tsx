import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Understanding Usable Yield in Food Costing | FoodProfit Tools",
  description:
    "Learn what usable yield means, how to calculate it, and why trimming, peeling, bones, and waste can change the true cost of ingredients.",
};

export default function UsableYieldPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            FoodProfit Tools
          </Link>

          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link href="/" className="text-slate-600 hover:text-slate-900">
              Calculator
            </Link>

            <Link href="/resources" className="text-slate-900">
              Resources
            </Link>

            <Link
              href="/foodprofit-pro"
              className="text-slate-600 hover:text-slate-900"
            >
              FoodProfit Pro
            </Link>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Usable Yield
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Understanding Usable Yield in Food Costing
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The amount of food you purchase is not always the amount that ends
            up in your recipe. Understanding usable yield helps you calculate
            the true cost of ingredients more accurately.
          </p>
        </div>

        <div className="space-y-12">
          {/* What is yield */}
          <section>
            <h2 className="text-3xl font-bold">
              What is usable yield?
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Usable yield is the percentage of a purchased ingredient that
                remains available for use after trimming, peeling, cleaning,
                deboning, or other preparation losses.
              </p>

              <p>
                An ingredient with a 100% yield means that the entire purchased
                amount is considered usable.
              </p>

              <p>
                An ingredient with an 80% yield means that approximately 80%
                of the purchased amount is usable.
              </p>
            </div>
          </section>

          {/* Example */}
          <section>
            <h2 className="text-3xl font-bold">
              A simple example
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Imagine buying 1 kg of carrots. After peeling and trimming them,
              you have 850 g available for the recipe.
            </p>

            <div className="mt-6 rounded-xl bg-white border border-slate-200 p-6">
              <p className="font-semibold">
                Yield calculation
              </p>

              <p className="mt-3 font-mono text-lg text-emerald-700">
                850 g ÷ 1,000 g × 100 = 85%
              </p>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The usable yield is therefore 85%.
            </p>
          </section>

          {/* Why it matters */}
          <section>
            <h2 className="text-3xl font-bold">
              Why usable yield matters
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                If you calculate ingredient costs using only the purchase price,
                you may underestimate the real cost of the ingredient.
              </p>

              <p>
                For example, if you pay BWP 25 for 1 kg of carrots but only
                850 g is usable, the recipe cannot treat the full 1 kg as
                available food.
              </p>

              <p>
                The cost of the usable portion is therefore higher than the
                basic purchase-price calculation.
              </p>
            </div>
          </section>

          {/* Formula */}
          <section>
            <h2 className="text-3xl font-bold">
              How yield affects ingredient cost
            </h2>

            <div className="mt-6 rounded-xl bg-slate-900 p-6 text-white">
              <p className="font-semibold">
                Example
              </p>

              <p className="mt-4 font-mono text-lg">
                BWP 25 ÷ 1 kg × 500 g ÷ 0.85
              </p>

              <p className="mt-4 font-mono text-lg text-emerald-300">
                = approximately BWP 14.71
              </p>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Without accounting for the 85% yield, the calculated cost would
              be lower than the cost of the usable ingredient.
            </p>
          </section>

          {/* Examples */}
          <section>
            <h2 className="text-3xl font-bold">
              Ingredients where yield can matter
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Meat with bones or trimming",
                "Vegetables that need peeling",
                "Fruits with skins or seeds",
                "Fresh produce with trimming loss",
                "Fish requiring cleaning",
                "Ingredients with preparation waste",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-semibold text-slate-900">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Practical advice */}
          <section>
            <h2 className="text-3xl font-bold">
              How to improve your costing accuracy
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                If you want accurate recipe costing, measure what you actually
                have available after preparation instead of relying only on
                the purchase quantity.
              </p>

              <p>
                You do not necessarily need to measure the yield of every
                ingredient every day. Start with ingredients where trimming,
                peeling, bones, or preparation losses have a noticeable
                impact.
              </p>

              <p>
                Recording these yields gives you better information for future
                recipe costing and pricing decisions.
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-14 rounded-2xl bg-slate-900 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Include usable yield in your costing
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            The free FoodProfit Tools calculator lets you enter a usable yield
            percentage for each ingredient so your direct cost calculation can
            account for preparation losses.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100"
          >
            Use the Free Calculator →
          </Link>
        </section>

        {/* Related Resources */}
        <section className="mt-12 border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold">
            Related Food Costing Guides
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <Link
              href="/resources/food-cost-percentage"
              className="rounded-lg border border-slate-200 bg-white p-5 font-semibold hover:border-emerald-400"
            >
              Food Cost Percentage →
            </Link>

            <Link
              href="/resources/recipe-cost"
              className="rounded-lg border border-slate-200 bg-white p-5 font-semibold hover:border-emerald-400"
            >
              Recipe Costing →
            </Link>

            <Link
              href="/resources/price-food-for-profit"
              className="rounded-lg border border-slate-200 bg-white p-5 font-semibold hover:border-emerald-400"
            >
              Price Food for Profit →
            </Link>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
          FoodProfit Tools — Free tools for small food businesses.
        </div>
      </footer>
    </main>
  );
}