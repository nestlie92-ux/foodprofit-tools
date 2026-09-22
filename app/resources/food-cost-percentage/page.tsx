import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate Food Cost Percentage | FoodProfit Tools",
  description:
    "Learn what food cost percentage means, how to calculate it, why it matters, and how to use it when pricing food for your small food business.",
};

export default function FoodCostPercentagePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="block">
            <p className="text-xl font-bold tracking-tight text-slate-900">
              FoodProfit Tools
            </p>
            <p className="text-xs text-slate-500">
              Free tools for small food businesses
            </p>
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
              className="text-slate-600 transition hover:text-slate-900"
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

      {/* Article Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Food Cost Percentage
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            How to Calculate Food Cost Percentage
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Food cost percentage helps you understand how much of your selling
            price is being used to cover the food cost of a product. It is one
            of the most useful numbers to understand when pricing food.
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

      {/* Article */}
      <article className="mx-auto max-w-4xl px-6 py-14 md:py-16">
        {/* What is Food Cost Percentage? */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900">
            What is food cost percentage?
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Food cost percentage shows the relationship between the cost of
              the food you use and the selling price of the product.
            </p>

            <p>
              In simple terms, it answers the question:
            </p>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <p className="font-semibold text-slate-900">
                “What percentage of my selling price is being used to cover my
                food cost?”
              </p>
            </div>

            <p>
              Understanding this percentage can help you evaluate your pricing
              and understand whether the price you are charging gives you
              enough room to cover your other business expenses and generate
              gross profit.
            </p>
          </div>
        </section>

        {/* Formula */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900">
            The food cost percentage formula
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The basic formula is:
          </p>

          <div className="mt-6 rounded-2xl bg-slate-900 p-7 text-center">
            <p className="text-xl font-bold text-white sm:text-2xl">
              Food Cost % = Food Cost ÷ Selling Price × 100
            </p>
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            For example, if a portion costs BWP 16.15 to produce and you sell
            it for BWP 53.83:
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-lg font-semibold text-slate-900">
              BWP 16.15 ÷ BWP 53.83 × 100
            </p>

            <p className="mt-3 text-lg font-semibold text-emerald-700">
              ≈ 30%
            </p>
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            That means approximately 30% of the selling price is represented
            by the direct food cost used to produce that portion.
          </p>
        </section>

        {/* Why it matters */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900">
            Why does food cost percentage matter?
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Knowing your food cost percentage gives you another way to look
              at your pricing.
            </p>

            <p>
              Two businesses could sell the same type of product at the same
              price but have very different costs. Their actual gross profit
              can therefore be very different.
            </p>

            <p>
              Food cost percentage helps you connect your recipe cost to your
              selling price instead of looking at the selling price on its own.
            </p>

            <p>
              It can also help you identify when ingredient prices, portions,
              packaging costs, or selling prices need to be reviewed.
            </p>
          </div>
        </section>

        {/* Desired food cost percentage */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900">
            What is a desired food cost percentage?
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              A desired food cost percentage is the percentage you are aiming
              for when setting or reviewing your selling price.
            </p>

            <p>
              For example, you may decide to work with a desired food cost
              percentage of 30%.
            </p>

            <p>
              If your direct cost per portion is BWP 16.15 and your desired
              food cost percentage is 30%, you can estimate the selling price
              using:
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-900 p-7 text-center">
            <p className="text-xl font-bold text-white sm:text-2xl">
              Suggested Selling Price = Direct Cost ÷ Desired Food Cost %
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-lg font-semibold text-slate-900">
              BWP 16.15 ÷ 0.30
            </p>

            <p className="mt-3 text-xl font-bold text-emerald-700">
              ≈ BWP 53.83
            </p>
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            This gives you a starting point for your selling price based on the
            desired percentage.
          </p>
        </section>

        {/* Important distinction */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900">
            Food cost percentage vs. desired food cost percentage
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid border-b border-slate-200 sm:grid-cols-2">
              <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r">
                <h3 className="text-xl font-bold text-slate-900">
                  Food Cost %
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The food cost percentage calculated from your actual food
                  cost and selling price.
                </p>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Desired Food Cost %
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  The percentage you choose to use as a pricing target when
                  calculating a suggested selling price.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            These two numbers are related, but they are not the same thing.
            Your desired percentage can be used to calculate a suggested
            selling price, while your actual food cost percentage can then be
            calculated from the price you ultimately decide to charge.
          </p>
        </section>

        {/* Other costs */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900">
            Remember that food cost is not your only business cost
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              A food cost percentage does not tell you the entire financial
              story of your business.
            </p>

            <p>
              You may also have costs such as labour, rent, utilities,
              transport, equipment, marketing, payment fees, licenses,
              cleaning supplies, and other operating expenses.
            </p>

            <p>
              This is why understanding your direct food cost is only one part
              of building a profitable food business.
            </p>

            <p>
              Your selling price needs to give your business enough room to
              cover the other costs involved in producing and selling your
              food.
            </p>
          </div>
        </section>

        {/* Packaging and yield */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900">
            Packaging and usable yield can affect your real cost
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              When calculating the cost of a food product, it is important not
              to look only at the purchase price of the ingredients.
            </p>

            <p>
              Packaging can add a meaningful cost to each portion. If you sell
              ten meals and each package costs BWP 2.50, packaging alone adds
              BWP 25 to the total direct cost.
            </p>

            <p>
              Usable yield matters too. If you purchase 1 kg of an ingredient
              but only 800 g is usable after trimming, cleaning, peeling, or
              other preparation, the full purchase price cannot simply be
              divided by 1 kg of usable product.
            </p>

            <p>
              These details are important when trying to understand what your
              recipe really costs.
            </p>
          </div>
        </section>

        {/* Example */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900">
            A simple example
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Imagine that the direct cost of producing one portion of your
              recipe is BWP 16.15.
            </p>

            <p>
              If you sell that portion for BWP 53.83, your food cost percentage
              is approximately 30%.
            </p>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Direct Cost
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                BWP 16.15
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Selling Price
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                BWP 53.83
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Food Cost
              </p>

              <p className="mt-2 text-2xl font-bold text-emerald-700">
                ≈ 30%
              </p>
            </div>
          </div>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            The remaining amount is not automatically “profit.” Your business
            still needs to cover its other operating expenses before you can
            determine your actual overall profit.
          </p>
        </section>

        {/* Practical steps */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-slate-900">
            How to use food cost percentage in your business
          </h2>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                1. Calculate your recipe cost
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Add the cost of the ingredients used in the recipe and account
                for usable yield and packaging where appropriate.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                2. Calculate your cost per portion
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Divide the direct recipe cost by the number of portions
                produced.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                3. Choose a desired food cost percentage
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Use a percentage that fits your pricing strategy and overall
                business cost structure.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                4. Calculate a suggested selling price
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Divide your direct cost per portion by your desired food cost
                percentage expressed as a decimal.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                5. Review the final price
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Consider your market, customers, portion size, competition,
                operating costs, and the value of your product before deciding
                on your final selling price.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-slate-900 px-6 py-12 text-center">
          <h2 className="text-3xl font-bold text-white">
            Calculate your food cost percentage
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Use the free FoodProfit Tools calculator to calculate your
            ingredient costs, packaging costs, direct cost per portion,
            suggested selling price, food cost percentage, and gross profit.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-lg bg-emerald-500 px-7 py-3 font-bold text-white transition hover:bg-emerald-400"
          >
            Open the Free Calculator →
          </Link>
        </section>

        {/* Related Resources */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900">
            Related FoodProfit Tools resources
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/resources/recipe-cost"
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="font-bold text-slate-900">
                How to Calculate the Cost of a Recipe
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn how ingredients, yield, packaging, and portions affect
                recipe cost.
              </p>
            </Link>

            <Link
              href="/resources/usable-yield"
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="font-bold text-slate-900">
                Understanding Usable Yield
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Learn why purchased quantity and usable quantity are not always
                the same.
              </p>
            </Link>

            <Link
              href="/resources/price-food-for-profit"
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="font-bold text-slate-900">
                How to Price Food for Profit
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore the relationship between cost, selling price, and gross
                profit.
              </p>
            </Link>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            FoodProfit Tools — Free practical tools for small food businesses.
          </p>

          <div className="flex gap-5">
            <Link href="/" className="hover:text-slate-900">
              Calculator
            </Link>

            <Link href="/resources" className="hover:text-slate-900">
              Resources
            </Link>

            <Link href="/foodprofit-pro" className="hover:text-slate-900">
              FoodProfit Pro
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}