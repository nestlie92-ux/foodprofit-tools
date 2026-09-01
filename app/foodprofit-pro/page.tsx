import Link from "next/link";

export default function FoodProfitProPage() {
  const payhipUrl = "https://thebreakthroughpoint.sookulture.online/b/U9S4y";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold tracking-tight">
            FoodProfit Tools
          </Link>

          <nav className="flex items-center gap-5 text-sm font-medium">
            <Link
              href="/"
              className="transition hover:text-emerald-600"
            >
              Calculator
            </Link>

            <Link
              href="/resources"
              className="transition hover:text-emerald-600"
            >
              Resources
            </Link>

            <Link
              href="/foodprofit-pro"
              className="text-emerald-600"
            >
              FoodProfit Pro
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
          <div className="mb-5 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
            FoodProfit Tools
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            FoodProfit Recipe Costing Pack
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            A practical recipe costing toolkit designed to help small food
            businesses understand their real costs, price products properly,
            and protect their profit.
          </p>

          <div className="mt-8">
            <span className="text-5xl font-bold">$7</span>
            <span className="ml-2 text-slate-500">one-time purchase</span>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={payhipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 px-7 py-4 text-base font-bold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Get the Recipe Costing Pack →
            </a>

            <Link
              href="/"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Use the Free Calculator
            </Link>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Secure checkout through Payhip.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              What’s included
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Everything you need to start costing recipes more consistently
              and making better pricing decisions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Workbook */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 text-3xl">📊</div>

              <h3 className="text-xl font-bold">
                Recipe Costing Workbook
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A practical spreadsheet for recording ingredient prices,
                calculating recipe costs, accounting for yield and waste,
                and working out menu pricing.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li>✓ Ingredients cost calculator</li>
                <li>✓ Recipe costing</li>
                <li>✓ Yield & waste calculations</li>
                <li>✓ Menu pricing</li>
                <li>✓ Built-in formulas</li>
              </ul>
            </div>

            {/* Printable Sheet */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 text-3xl">📝</div>

              <h3 className="text-xl font-bold">
                Printable Recipe Costing Sheet
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A printable worksheet for costing recipes by hand or keeping
                physical records in your food business.
              </p>
            </div>

            {/* Ingredient Tracker */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 text-3xl">🥕</div>

              <h3 className="text-xl font-bold">
                Ingredient Price Tracker
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Keep track of ingredient prices so you can spot changes in
                your costs and update your recipes when needed.
              </p>
            </div>

            {/* Yield Worksheet */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 text-3xl">⚖️</div>

              <h3 className="text-xl font-bold">
                Yield & Waste Worksheet
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Record usable yield and waste to get a more realistic picture
                of what your ingredients actually cost.
              </p>
            </div>

            {/* Menu Pricing */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 text-3xl">💰</div>

              <h3 className="text-xl font-bold">
                Menu Pricing Worksheet
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Use your recipe costs and desired food cost percentage to
                calculate a suggested selling price.
              </p>
            </div>

            {/* Quick Guide */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 text-3xl">📖</div>

              <h3 className="text-xl font-bold">
                FoodProfit Quick Guide
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A simple guide explaining the key numbers behind recipe
                costing and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Know your numbers before you set your price.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Many small food businesses know what they charge customers but
            don't always know what each product actually costs them. FoodProfit
            helps you work through those numbers so your pricing decisions are
            based on your actual costs.
          </p>

          <div className="mt-10 grid gap-5 text-left sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-6">
              <div className="text-2xl font-bold text-emerald-600">
                01
              </div>
              <h3 className="mt-3 font-bold">Cost your recipe</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Record your ingredients, packaging, yield and portions.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <div className="text-2xl font-bold text-emerald-600">
                02
              </div>
              <h3 className="mt-3 font-bold">Understand your cost</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                See your true direct cost and cost per portion.
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-6">
              <div className="text-2xl font-bold text-emerald-600">
                03
              </div>
              <h3 className="mt-3 font-bold">Price with confidence</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use your desired food cost percentage to calculate a suggested
                selling price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold">
            Ready to take control of your recipe costs?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Get the complete FoodProfit Recipe Costing Pack for a simple
            one-time payment of $7.
          </p>

          <a
            href={payhipUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white transition hover:bg-emerald-400"
          >
            Get the Recipe Costing Pack →
          </a>

          <p className="mt-4 text-sm text-slate-400">
            Instant digital access after purchase.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} FoodProfit Tools. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/"
              className="transition hover:text-slate-900"
            >
              Calculator
            </Link>

            <Link
              href="/resources"
              className="transition hover:text-slate-900"
            >
              Resources
            </Link>

            <Link
              href="/foodprofit-pro"
              className="transition hover:text-slate-900"
            >
              FoodProfit Pro
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}