import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Price Food for Profit | FoodProfit Tools",
  description:
    "Learn how to price food using direct cost per portion, desired food cost percentage, suggested selling price, and gross profit.",
};

export default function PriceFoodForProfitPage() {
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
            Food Pricing
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            How to Price Food for Profit
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Setting a selling price should be more than choosing a number that
            feels affordable or copying a competitor. Understanding your
            direct cost and desired food cost percentage gives you a more
            informed starting point.
          </p>
        </div>

        <div className="space-y-12">
          {/* Section */}
          <section>
            <h2 className="text-3xl font-bold">
              Start with your true direct cost
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Before deciding what to charge, you need to understand what it
                costs to produce the food.
              </p>

              <p>
                For recipe costing, direct cost can include the ingredients
                used in the recipe and packaging directly associated with the
                product.
              </p>

              <p>
                Once the total direct cost is known, divide it by the number of
                portions produced.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold">
                Cost per portion
              </p>

              <p className="mt-3 font-mono text-lg text-emerald-700">
                True Direct Cost ÷ Number of Portions
              </p>
            </div>
          </section>

          {/* Food cost */}
          <section>
            <h2 className="text-3xl font-bold">
              What is food cost percentage?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Food cost percentage shows how much of the selling price is
              represented by the direct food cost.
            </p>

            <div className="mt-6 rounded-xl bg-slate-900 p-6 text-white">
              <p className="font-semibold">
                Food Cost %
              </p>

              <p className="mt-4 font-mono text-lg">
                Cost Per Portion ÷ Selling Price × 100
              </p>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              For example, if a portion costs BWP 15 to produce and sells for
              BWP 50:
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-mono text-lg text-emerald-700">
                BWP 15 ÷ BWP 50 × 100 = 30%
              </p>
            </div>
          </section>

          {/* Desired food cost */}
          <section>
            <h2 className="text-3xl font-bold">
              What is a desired food cost percentage?
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                Your desired food cost percentage is the percentage you want
                your direct food cost to represent in relation to your selling
                price.
              </p>

              <p>
                It is a pricing target rather than the actual result of a sale.
                Once you know your direct cost per portion, you can use your
                desired food cost percentage to calculate a suggested selling
                price.
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-emerald-50 p-6">
              <p className="font-semibold text-slate-900">
                Example
              </p>

              <p className="mt-3 text-lg leading-8 text-slate-700">
                If your direct cost per portion is BWP 16.15 and your desired
                food cost is 30%, your suggested selling price is:
              </p>

              <p className="mt-4 font-mono text-lg text-emerald-700">
                BWP 16.15 ÷ 0.30 = BWP 53.83
              </p>
            </div>
          </section>

          {/* Suggested price */}
          <section>
            <h2 className="text-3xl font-bold">
              What is a Suggested Selling Price?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A suggested selling price is a calculated starting point based
              on your direct cost and desired food cost percentage.
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-semibold">
                Suggested Selling Price Formula
              </p>

              <p className="mt-3 font-mono text-lg text-emerald-700">
                Cost Per Portion ÷ Desired Food Cost %
              </p>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The final selling price may also need to consider other business
              expenses, market conditions, customer expectations, taxes,
              delivery costs, promotions, and your overall pricing strategy.
            </p>
          </section>

          {/* Gross profit */}
          <section>
            <h2 className="text-3xl font-bold">
              What is Gross Profit Per Portion?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Gross Profit Per Portion is the amount left after subtracting the
              direct cost per portion from the selling price.
            </p>

            <div className="mt-6 rounded-xl bg-slate-900 p-6 text-white">
              <p className="font-semibold">
                Gross Profit Per Portion
              </p>

              <p className="mt-4 font-mono text-lg">
                Selling Price − Direct Cost Per Portion
              </p>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              For example, if a product sells for BWP 53.83 and the direct cost
              is BWP 16.15:
            </p>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-mono text-lg text-emerald-700">
                BWP 53.83 − BWP 16.15 = BWP 37.68
              </p>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This does not mean the entire BWP 37.68 is take-home profit. The
              business may still need to pay other operating expenses such as
              labour, rent, utilities, transport, marketing, equipment, taxes,
              and other overheads.
            </p>
          </section>

          {/* Target comparison */}
          <section>
            <h2 className="text-3xl font-bold">
              What happens when you change your desired food cost?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Changing the desired food cost percentage changes the suggested
              selling price.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-5 py-4 font-semibold">
                      Desired Food Cost
                    </th>
                    <th className="px-5 py-4 font-semibold">
                      Cost/Portion
                    </th>
                    <th className="px-5 py-4 font-semibold">
                      Suggested Price
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-slate-200">
                    <td className="px-5 py-4">25%</td>
                    <td className="px-5 py-4">BWP 16.15</td>
                    <td className="px-5 py-4 font-semibold">
                      BWP 64.60
                    </td>
                  </tr>

                  <tr className="border-t border-slate-200">
                    <td className="px-5 py-4">30%</td>
                    <td className="px-5 py-4">BWP 16.15</td>
                    <td className="px-5 py-4 font-semibold">
                      BWP 53.83
                    </td>
                  </tr>

                  <tr className="border-t border-slate-200">
                    <td className="px-5 py-4">35%</td>
                    <td className="px-5 py-4">BWP 16.15</td>
                    <td className="px-5 py-4 font-semibold">
                      BWP 46.14
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A lower desired food cost percentage produces a higher suggested
              selling price because more of the selling price is available
              beyond the direct food cost.
            </p>
          </section>

          {/* Practical pricing */}
          <section>
            <h2 className="text-3xl font-bold">
              Your calculated price is a starting point
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
              <p>
                A costing calculator can help you understand the numbers, but
                pricing is ultimately a business decision.
              </p>

              <p>
                You should also consider your customers, competitors, portion
                size, product quality, location, operating expenses, and the
                value your product provides.
              </p>

              <p>
                The goal is not simply to find the highest possible price. The
                goal is to understand your costs well enough to make an
                informed pricing decision.
              </p>
            </div>
          </section>
        </div>

        {/* Main CTA */}
        <section className="mt-14 rounded-2xl bg-slate-900 p-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Calculate your suggested selling price
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Enter your recipe costs, packaging, portions, and desired food
            cost percentage into the free FoodProfit Tools calculator.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100"
          >
            Use the Free Calculator →
          </Link>
        </section>

        {/* Product CTA */}
        <section className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Want a complete costing system?
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            FoodProfit Recipe Costing Pack
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
            Get the printable worksheets, costing workbook, ingredient price
            tracker, yield and waste worksheet, menu pricing worksheet, and
            quick guide for your food business.
          </p>

          <Link
            href="/foodprofit-pro"
            className="mt-6 inline-flex rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            View the Recipe Costing Pack →
          </Link>
        </section>

        {/* Related */}
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
              href="/resources/usable-yield"
              className="rounded-lg border border-slate-200 bg-white p-5 font-semibold hover:border-emerald-400"
            >
              Usable Yield →
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