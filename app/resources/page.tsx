import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-bold text-emerald-700"
          >
            FoodProfit Tools
          </Link>

          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link
              href="/"
              className="text-slate-600 hover:text-emerald-700"
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
              className="text-slate-600 hover:text-emerald-700"
            >
              FoodProfit Pro
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Food Business Resources
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Practical food costing guidance for small food businesses.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Learn how to understand recipe costs, food cost
            percentage, yield, packaging and pricing so you
            can make better decisions about your food business.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-emerald-700">
              FOOD COSTING
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              How to Calculate Food Cost Percentage
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Understand what food cost percentage means,
              how to calculate it and why it matters when
              pricing your menu.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-slate-400">
              Coming soon
            </span>
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-emerald-700">
              RECIPE COSTING
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              How to Calculate the Cost of a Recipe
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Learn how to calculate the real direct cost
              of a recipe using ingredients, quantities,
              yield and packaging.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-slate-400">
              Coming soon
            </span>
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-emerald-700">
              YIELD & WASTE
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Understanding Usable Yield
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              See why the price you pay for an ingredient
              isn't always the same as the cost of the usable
              ingredient.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-slate-400">
              Coming soon
            </span>
          </article>

          <article className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-emerald-700">
              PRICING
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              How to Price Food for Profit
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Explore the difference between recipe cost,
              food cost percentage, selling price and actual
              business profit.
            </p>

            <span className="mt-5 inline-block text-sm font-semibold text-slate-400">
              Coming soon
            </span>
          </article>
        </div>

        <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Start with the calculator
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            See what your recipe really costs.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            Use the free FoodProfit recipe costing calculator
            to calculate ingredients, packaging, yield,
            portion cost and a suggested selling price.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500"
          >
            Use the Free Calculator
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
          FoodProfit Tools — Free practical tools for small food businesses.
        </div>
      </footer>
    </main>
  );
}