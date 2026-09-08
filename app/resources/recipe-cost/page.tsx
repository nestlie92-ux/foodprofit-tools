import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate the Cost of a Recipe | FoodProfit Tools",
  description:
    "Learn how to calculate the true cost of a recipe using ingredient prices, quantities, usable yield, packaging, and portions.",
};

export default function RecipeCostPage() {
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
              className="text-slate-600 hover:text-slate-900"
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
            Recipe Costing
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            How to Calculate the Cost of a Recipe
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Knowing what a recipe costs to produce is one of the most
            important parts of running a profitable food business. The cost
            should include more than simply adding up the prices of the
            ingredients you purchased.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold">
              What is recipe costing?
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Recipe costing is the process of calculating how much it costs
                to produce a particular recipe or food product.
              </p>

              <p>
                A proper recipe cost should consider the quantity of each
                ingredient actually used, the price you paid for those
                ingredients, usable yield, packaging, and the number of
                portions produced.
              </p>

              <p>
                Once you know the cost per portion, you have a much stronger
                starting point for setting a selling price.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold">
              Step 1: Calculate the cost of each ingredient
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start with the pack size and purchase price of each ingredient.
              Then calculate the cost of the amount actually used in the
              recipe.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold text-slate-900">
                Basic ingredient cost formula
              </p>

              <p className="mt-3 font-mono text-lg text-emerald-700">
                Ingredient Cost = Pack Price ÷ Pack Size × Amount Used
              </p>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              For example, suppose you buy 5 kg of rice for BWP 95 and use
              1.2 kg in a recipe.
            </p>

            <div className="mt-6 rounded-xl bg-slate-900 p-6 text-white">
              <p className="font-mono text-lg">
                BWP 95 ÷ 5 kg × 1.2 kg = BWP 22.80
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold">
              Step 2: Consider usable yield
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Some ingredients are not completely usable. Vegetables may need
              trimming or peeling. Meat may have bones, skin, or trimming
              losses.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              If an ingredient has an 80% usable yield, the cost of the usable
              ingredient is higher than the simple purchase-price calculation
              suggests.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold">
                Example
              </p>

              <p className="mt-3 font-mono text-lg text-emerald-700">
                BWP 150 ÷ 2 kg × 1 kg ÷ 0.80 = BWP 93.75
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                The 80% yield means the recipe needs to account for the
                portion of the purchased ingredient that is not usable.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold">
              Step 3: Add the ingredient costs
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Once you have calculated the cost of every ingredient, add them
              together to get the total ingredient cost for the recipe.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Do not calculate the cost using the full purchase price of every
              pack. You only need to include the portion of each ingredient
              actually used by the recipe, adjusted for usable yield where
              necessary.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold">
              Step 4: Include packaging
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              If you sell takeaway meals, baked products, drinks, or other
              packaged food, packaging is part of the direct cost of producing
              the product.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Containers, cups, lids, bags, labels, and other packaging
              materials can add a meaningful amount to the cost of each
              portion.
            </p>

            <div className="mt-6 rounded-xl bg-emerald-50 p-6">
              <p className="font-semibold text-slate-900">
                Example
              </p>

              <p className="mt-3 leading-7 text-slate-700">
                If 10 takeaway containers cost BWP 25, the packaging cost for
                the recipe is BWP 25, or BWP 2.50 per portion when the recipe
                produces 10 portions.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold">
              Step 5: Calculate cost per portion
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              After adding ingredient costs and packaging, you can calculate
              the true direct cost of the recipe.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold">
                True Direct Cost
              </p>

              <p className="mt-3 font-mono text-lg text-emerald-700">
                Ingredient Cost + Packaging Cost
              </p>

              <p className="mt-6 font-semibold">
                Cost Per Portion
              </p>

              <p className="mt-3 font-mono text-lg text-emerald-700">
                True Direct Cost ÷ Number of Portions
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-3xl font-bold">
              Why accurate recipe costing matters
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Without recipe costing, it is easy to set a selling price
                based on what competitors charge or what feels reasonable.
              </p>

              <p>
                The problem is that a price that looks attractive to customers
                may not leave enough money to cover your actual costs and
                generate a healthy gross profit.
              </p>

              <p>
                Recipe costing gives you numbers you can use when making
                pricing decisions.
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <section className="mt-14 rounded-2xl bg-slate-900 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Calculate your recipe cost
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Use the free FoodProfit Tools calculator to calculate ingredient
            costs, packaging, direct cost per portion, suggested selling
            price, food cost percentage, and gross profit.
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
              href="/resources/usable-yield"
              className="rounded-lg border border-slate-200 bg-white p-5 font-semibold hover:border-emerald-400"
            >
              Understanding Usable Yield →
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