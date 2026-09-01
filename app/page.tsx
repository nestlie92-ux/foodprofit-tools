"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Ingredient = {
  id: number;
  name: string;
  packSize: string;
  packUnit: string;
  packPrice: string;
  amountUsed: string;
  amountUnit: string;
  yieldPercent: string;
};

type PackagingItem = {
  id: number;
  name: string;
  packSize: string;
  packPrice: string;
  amountUsed: string;
};

const unitGroups: Record<string, string> = {
  g: "weight",
  kg: "weight",
  oz: "weight",
  lb: "weight",

  ml: "volume",
  L: "volume",
  "fl oz": "volume",
  tsp: "volume",
  tbsp: "volume",
  cup: "volume",
  pint: "volume",
  quart: "volume",
  gallon: "volume",

  unit: "count",
};

const convertToBaseUnit = (value: number, unit: string) => {
  switch (unit) {
    case "g":
      return value;
    case "kg":
      return value * 1000;
    case "oz":
      return value * 28.349523125;
    case "lb":
      return value * 453.59237;

    case "ml":
      return value;
    case "L":
      return value * 1000;
    case "fl oz":
      return value * 29.5735295625;
    case "tsp":
      return value * 4.92892159375;
    case "tbsp":
      return value * 14.78676478125;
    case "cup":
      return value * 236.5882365;
    case "pint":
      return value * 473.176473;
    case "quart":
      return value * 946.352946;
    case "gallon":
      return value * 3785.411784;

    case "unit":
      return value;

    default:
      return value;
  }
};

const createIngredient = (): Ingredient => ({
  id: Date.now() + Math.random(),
  name: "",
  packSize: "",
  packUnit: "g",
  packPrice: "",
  amountUsed: "",
  amountUnit: "g",
  yieldPercent: "100",
});

const createPackaging = (): PackagingItem => ({
  id: Date.now() + Math.random(),
  name: "",
  packSize: "",
  packPrice: "",
  amountUsed: "",
});

export default function Home() {
  // --------------------------------
  // RECIPE
  // --------------------------------

  const [recipeName, setRecipeName] = useState("");

  // --------------------------------
  // CURRENCY
  // --------------------------------

  const [currency, setCurrency] = useState("BWP");

  const currencySymbols: Record<string, string> = {
    BWP: "P",
    ZAR: "R",
    USD: "$",
    GBP: "£",
    EUR: "€",
    CAD: "C$",
    AUD: "A$",
    NZD: "NZ$",
    INR: "₹",
    NGN: "₦",
    KES: "KSh",
    GHS: "GH₵",
    ZMW: "ZK",
    ZWL: "Z$",
    UGX: "USh",
    TZS: "TSh",
  };

  const symbol = currencySymbols[currency] || currency;

  // --------------------------------
  // INGREDIENTS
  // --------------------------------

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    createIngredient(),
  ]);

  // --------------------------------
  // PACKAGING
  // --------------------------------

  const [packagingItems, setPackagingItems] = useState<
    PackagingItem[]
  >([createPackaging()]);

  // --------------------------------
  // PORTIONS
  // --------------------------------

  const [portions, setPortions] = useState("");

  // --------------------------------
  // DESIRED FOOD COST
  // --------------------------------

  const [desiredFoodCost, setDesiredFoodCost] = useState("30");

  // --------------------------------
  // UPDATE INGREDIENT
  // --------------------------------

  const updateIngredient = (
    id: number,
    field: keyof Ingredient,
    value: string
  ) => {
    setIngredients((current) =>
      current.map((ingredient) =>
        ingredient.id === id
          ? {
              ...ingredient,
              [field]: value,
            }
          : ingredient
      )
    );
  };

  // --------------------------------
  // ADD INGREDIENT
  // --------------------------------

  const addIngredient = () => {
    setIngredients((current) => [
      ...current,
      createIngredient(),
    ]);
  };

  // --------------------------------
  // REMOVE INGREDIENT
  // --------------------------------

  const removeIngredient = (id: number) => {
    if (ingredients.length === 1) return;

    setIngredients((current) =>
      current.filter((ingredient) => ingredient.id !== id)
    );
  };

  // --------------------------------
  // CALCULATE INGREDIENT COST
  // --------------------------------

  const calculateIngredientCost = (ingredient: Ingredient) => {
    const packSize = Number(ingredient.packSize);
    const packPrice = Number(ingredient.packPrice);
    const amountUsed = Number(ingredient.amountUsed);

    if (
      packSize <= 0 ||
      packPrice < 0 ||
      amountUsed <= 0
    ) {
      return 0;
    }

    const packGroup = unitGroups[ingredient.packUnit];
    const amountGroup = unitGroups[ingredient.amountUnit];

    if (
      !packGroup ||
      !amountGroup ||
      packGroup !== amountGroup
    ) {
      return 0;
    }

    const convertedPackSize = convertToBaseUnit(
      packSize,
      ingredient.packUnit
    );

    const convertedAmountUsed = convertToBaseUnit(
      amountUsed,
      ingredient.amountUnit
    );

    if (convertedPackSize <= 0) return 0;

    /*
      Yield adjustment

      Example:
      1 kg purchased
      80% usable yield
      = 800 g usable

      If 500 g usable product is required:

      500 / 800 × pack price
    */

    const yieldPercent = Math.min(
      100,
      Math.max(
        0.01,
        Number(ingredient.yieldPercent) || 100
      )
    );

    const usablePackSize =
      convertedPackSize * (yieldPercent / 100);

    if (usablePackSize <= 0) return 0;

    return (
      (convertedAmountUsed / usablePackSize) *
      packPrice
    );
  };

  // --------------------------------
  // TOTAL INGREDIENT COST
  // --------------------------------

  const totalIngredientCost = useMemo(
    () =>
      ingredients.reduce(
        (total, ingredient) =>
          total + calculateIngredientCost(ingredient),
        0
      ),
    [ingredients]
  );

  // --------------------------------
  // PACKAGING UPDATE
  // --------------------------------

  const updatePackaging = (
    id: number,
    field: keyof PackagingItem,
    value: string
  ) => {
    setPackagingItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  // --------------------------------
  // ADD PACKAGING
  // --------------------------------

  const addPackaging = () => {
    setPackagingItems((current) => [
      ...current,
      createPackaging(),
    ]);
  };

  // --------------------------------
  // REMOVE PACKAGING
  // --------------------------------

  const removePackaging = (id: number) => {
    if (packagingItems.length === 1) return;

    setPackagingItems((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  // --------------------------------
  // PACKAGING COST
  // --------------------------------

  const calculatePackagingCost = (
    item: PackagingItem
  ) => {
    const packSize = Number(item.packSize);
    const packPrice = Number(item.packPrice);
    const amountUsed = Number(item.amountUsed);

    if (
      packSize <= 0 ||
      packPrice < 0 ||
      amountUsed <= 0
    ) {
      return 0;
    }

    return (amountUsed / packSize) * packPrice;
  };

  // --------------------------------
  // TOTAL PACKAGING COST
  // --------------------------------

  const totalPackagingCost = useMemo(
    () =>
      packagingItems.reduce(
        (total, item) =>
          total + calculatePackagingCost(item),
        0
      ),
    [packagingItems]
  );

  // --------------------------------
  // TRUE DIRECT COST
  // --------------------------------

  const trueDirectCost =
    totalIngredientCost + totalPackagingCost;

  // --------------------------------
  // PORTIONS
  // --------------------------------

  const portionValue = Number(portions);

  const ingredientCostPerPortion =
    portionValue > 0
      ? totalIngredientCost / portionValue
      : 0;

  const packagingCostPerPortion =
    portionValue > 0
      ? totalPackagingCost / portionValue
      : 0;

  const trueDirectCostPerPortion =
    portionValue > 0
      ? trueDirectCost / portionValue
      : 0;

  // --------------------------------
  // PRICING
  // --------------------------------

  const foodCostPercentage =
    Number(desiredFoodCost);

  const suggestedSellingPrice =
    trueDirectCostPerPortion > 0 &&
    foodCostPercentage > 0 &&
    foodCostPercentage < 100
      ? trueDirectCostPerPortion /
        (foodCostPercentage / 100)
      : 0;

  const grossProfitPerPortion =
    suggestedSellingPrice > 0
      ? suggestedSellingPrice -
        trueDirectCostPerPortion
      : 0;

  const calculatedFoodCostPercentage =
    suggestedSellingPrice > 0
      ? (trueDirectCostPerPortion /
          suggestedSellingPrice) *
        100
      : 0;

  // --------------------------------
  // FORMAT MONEY
  // --------------------------------

  const formatMoney = (value: number) =>
    `${symbol}${value.toFixed(2)}`;

  // --------------------------------
  // RESET
  // --------------------------------

  const resetCalculator = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear this recipe and start again?"
    );

    if (!confirmed) return;

    setRecipeName("");
    setCurrency("BWP");
    setIngredients([createIngredient()]);
    setPackagingItems([createPackaging()]);
    setPortions("");
    setDesiredFoodCost("30");
  };

  // --------------------------------
  // PRINT / SAVE AS PDF
  // --------------------------------

  const printCostingSheet = () => {
    window.print();
  };

  // --------------------------------
  // DOWNLOAD CSV
  // --------------------------------

  const downloadCostingSheet = () => {
    const rows: string[][] = [];

    rows.push([
      "FOODPROFIT TOOLS - RECIPE COSTING SHEET",
    ]);

    rows.push([
      "Recipe",
      recipeName || "Unnamed Recipe",
    ]);

    rows.push([
      "Currency",
      currency,
    ]);

    rows.push([]);

    rows.push([
      "INGREDIENTS",
    ]);

    rows.push([
      "Ingredient",
      "Pack Size",
      "Pack Price",
      "Amount Used",
      "Yield %",
      "Cost",
    ]);

    ingredients.forEach((ingredient) => {
      rows.push([
        ingredient.name || "Unnamed ingredient",
        `${ingredient.packSize} ${ingredient.packUnit}`,
        `${symbol}${Number(
          ingredient.packPrice || 0
        ).toFixed(2)}`,
        `${ingredient.amountUsed} ${ingredient.amountUnit}`,
        `${ingredient.yieldPercent}%`,
        `${symbol}${calculateIngredientCost(
          ingredient
        ).toFixed(2)}`,
      ]);
    });

    rows.push([]);

    rows.push([
      "Total Ingredient Cost",
      formatMoney(totalIngredientCost),
    ]);

    rows.push([]);

    rows.push([
      "PACKAGING",
    ]);

    rows.push([
      "Packaging Item",
      "Pack Size",
      "Pack Price",
      "Amount Used",
      "Cost",
    ]);

    packagingItems.forEach((item) => {
      rows.push([
        item.name || "Unnamed packaging",
        item.packSize,
        `${symbol}${Number(
          item.packPrice || 0
        ).toFixed(2)}`,
        item.amountUsed,
        `${symbol}${calculatePackagingCost(
          item
        ).toFixed(2)}`,
      ]);
    });

    rows.push([]);

    rows.push([
      "Total Packaging Cost",
      formatMoney(totalPackagingCost),
    ]);

    rows.push([]);

    rows.push([
      "PRICING SUMMARY",
    ]);

    rows.push([
      "Portions",
      portions || "0",
    ]);

    rows.push([
      "True Direct Cost",
      formatMoney(trueDirectCost),
    ]);

    rows.push([
      "True Direct Cost Per Portion",
      formatMoney(trueDirectCostPerPortion),
    ]);

    rows.push([
      "Desired Food Cost %",
      `${desiredFoodCost}%`,
    ]);

    rows.push([
      "Suggested Selling Price",
      formatMoney(suggestedSellingPrice),
    ]);

    rows.push([
      "Food Cost %",
      `${calculatedFoodCostPercentage.toFixed(
        1
      )}%`,
    ]);

    rows.push([
      "Gross Profit Per Portion",
      formatMoney(grossProfitPerPortion),
    ]);

    const csv = rows
      .map((row) =>
        row
          .map((cell) => {
            const safeCell = String(cell ?? "");
            return `"${safeCell.replace(/"/g, '""')}"`;
          })
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    const safeRecipeName =
      recipeName
        .trim()
        .replace(/[^a-z0-9]+/gi, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase() || "recipe-costing";

    link.download = `${safeRecipeName}-costing.csv`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}

      <header className="border-b border-slate-200 bg-white print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <Link
            href="/"
            className="shrink-0"
         >
          <p className="text-xl font-bold text-emerald-700">
            FoodProfit Tools
          </p>

          <p className="text-xs text-slate-500">
            Free tools for small food businesses
          </p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
          <Link
            href="/"
            className="text-emerald-700"
        >
         Calculator
        </Link>

        <Link
          href="/resources"
          className="text-slate-600 hover:text-emerald-700"
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

          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            100% Free
          </span>
        </div>
      </header>

      {/* PRINT HEADER */}

      <div className="mx-auto hidden max-w-6xl px-6 pt-8 print:block">
        <h1 className="text-3xl font-bold text-slate-900">
          FoodProfit Tools
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Recipe Costing Sheet
        </p>

        <div className="mt-5 border-b border-slate-300 pb-4">
          <p className="text-lg font-semibold">
            {recipeName || "Unnamed Recipe"}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Currency: {currency}
          </p>
        </div>
      </div>

      {/* MAIN */}

      <section className="mx-auto max-w-6xl px-6 py-12 print:py-6">
        {/* INTRO */}

        <div className="max-w-3xl print:hidden">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Food Business Calculator
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Know what your recipe really costs.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Calculate your ingredient costs, packaging
            costs, cost per portion, and understand your
            food costs before setting your selling price.
          </p>
        </div>

        {/* RECIPE INFORMATION */}

        <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 print:mt-4 print:shadow-none print:ring-0">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Recipe Name
              </label>

              <input
                type="text"
                value={recipeName}
                onChange={(e) =>
                  setRecipeName(e.target.value)
                }
                placeholder="e.g. Chicken Pie"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 print:border-slate-300"
              />

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Give your recipe a name so it is easy to
                identify on your costing sheet.
              </p>
            </div>

            <div className="print:hidden">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Currency
              </label>

              <select
                value={currency}
                onChange={(e) =>
                  setCurrency(e.target.value)
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
              >
                <option value="BWP">
                  BWP — Pula
                </option>

                <option value="ZAR">
                  ZAR — Rand
                </option>

                <option value="USD">
                  USD — US Dollar
                </option>

                <option value="GBP">
                  GBP — Pound
                </option>

                <option value="EUR">
                  EUR — Euro
                </option>

                <option value="CAD">
                  CAD — Canadian Dollar
                </option>

                <option value="AUD">
                  AUD — Australian Dollar
                </option>

                <option value="NZD">
                  NZD — New Zealand Dollar
                </option>

                <option value="INR">
                  INR — Indian Rupee
                </option>

                <option value="NGN">
                  NGN — Nigerian Naira
                </option>

                <option value="KES">
                  KES — Kenyan Shilling
                </option>

                <option value="GHS">
                  GHS — Ghanaian Cedi
                </option>

                <option value="ZMW">
                  ZMW — Zambian Kwacha
                </option>

                <option value="ZWL">
                  ZWL — Zimbabwean Dollar
                </option>

                <option value="UGX">
                  UGX — Ugandan Shilling
                </option>

                <option value="TZS">
                  TZS — Tanzanian Shilling
                </option>
              </select>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Choose the currency used for the prices
                you enter.
              </p>
            </div>
          </div>
        </section>

        {/* ACTION BUTTONS */}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row print:hidden">
          <button
            type="button"
            onClick={printCostingSheet}
            className="rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-800"
          >
            🖨 Print / Save as PDF
          </button>

          <button
            type="button"
            onClick={downloadCostingSheet}
            className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            ↓ Download Costing Sheet
          </button>

          <button
            type="button"
            onClick={resetCalculator}
            className="rounded-xl border border-red-200 bg-white px-5 py-3 font-semibold text-red-600 transition hover:bg-red-50"
          >
            Reset Calculator
          </button>
        </div>

        {/* CALCULATOR */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px] print:block">
          {/* LEFT */}

          <div className="space-y-8">
            {/* INGREDIENTS */}

            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 print:shadow-none print:ring-0 print:p-0">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Ingredients
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Add the ingredients used in your
                    recipe.
                  </p>
                </div>

                <div className="hidden print:block">
                  <p className="text-sm text-slate-500">
                    Total Ingredient Cost
                  </p>

                  <p className="text-xl font-bold">
                    {formatMoney(totalIngredientCost)}
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {ingredients.map((ingredient, index) => {
                  const ingredientCost =
                    calculateIngredientCost(
                      ingredient
                    );

                  const packGroup =
                    unitGroups[ingredient.packUnit];

                  const amountGroup =
                    unitGroups[ingredient.amountUnit];

                  const unitsMismatch =
                    Boolean(
                      ingredient.packSize &&
                        ingredient.amountUsed &&
                        packGroup !== amountGroup
                    );

                  return (
                    <div
                      key={ingredient.id}
                      className="rounded-xl border border-slate-200 p-5 print:break-inside-avoid"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="font-semibold text-slate-800">
                          Ingredient {index + 1}
                        </h3>

                        {ingredients.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removeIngredient(
                                ingredient.id
                              )
                            }
                            className="text-sm font-medium text-red-500 hover:text-red-700 print:hidden"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="space-y-5">
                        {/* NAME */}

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Ingredient name
                          </label>

                          <input
                            type="text"
                            placeholder="e.g. Flour"
                            value={ingredient.name}
                            onChange={(e) =>
                              updateIngredient(
                                ingredient.id,
                                "name",
                                e.target.value
                              )
                            }
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-emerald-600 print:border-slate-300"
                          />

                          <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                            Enter the name of the
                            ingredient you are
                            costing.
                          </p>
                        </div>

                        {/* PACK SIZE + PRICE */}

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                              Pack size
                            </label>

                            <div className="flex">
                              <input
                                type="number"
                                min="0"
                                step="any"
                                placeholder="2000"
                                value={
                                  ingredient.packSize
                                }
                                onChange={(e) =>
                                  updateIngredient(
                                    ingredient.id,
                                    "packSize",
                                    e.target.value
                                  )
                                }
                                className="w-full rounded-l-lg border border-slate-300 px-4 py-3"
                              />

                              <select
                                value={
                                  ingredient.packUnit
                                }
                                onChange={(e) =>
                                  updateIngredient(
                                    ingredient.id,
                                    "packUnit",
                                    e.target.value
                                  )
                                }
                                className="rounded-r-lg border border-l-0 border-slate-300 bg-slate-50 px-3"
                              >
                                <optgroup label="Weight">
                                  <option value="g">
                                    g
                                  </option>
                                  <option value="kg">
                                    kg
                                  </option>
                                  <option value="oz">
                                    oz
                                  </option>
                                  <option value="lb">
                                    lb
                                  </option>
                                </optgroup>

                                <optgroup label="Volume">
                                  <option value="ml">
                                    ml
                                  </option>
                                  <option value="L">
                                    L
                                  </option>
                                  <option value="fl oz">
                                    fl oz
                                  </option>
                                  <option value="tsp">
                                    tsp
                                  </option>
                                  <option value="tbsp">
                                    tbsp
                                  </option>
                                  <option value="cup">
                                    cup
                                  </option>
                                  <option value="pint">
                                    pint
                                  </option>
                                  <option value="quart">
                                    quart
                                  </option>
                                  <option value="gallon">
                                    gallon
                                  </option>
                                </optgroup>

                                <optgroup label="Count">
                                  <option value="unit">
                                    unit
                                  </option>
                                </optgroup>
                              </select>
                            </div>

                            <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                              The amount contained in
                              the package you purchased.
                              Example: a 1 kg bag of
                              flour has a pack size of
                              1 kg.
                            </p>
                          </div>

                          <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                              Pack price
                            </label>

                            <input
                              type="number"
                              min="0"
                              step="any"
                              placeholder="40.00"
                              value={
                                ingredient.packPrice
                              }
                              onChange={(e) =>
                                updateIngredient(
                                  ingredient.id,
                                  "packPrice",
                                  e.target.value
                                )
                              }
                              className="w-full rounded-lg border border-slate-300 px-4 py-3"
                            />

                            <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                              The price you paid for
                              the entire package.
                            </p>
                          </div>
                        </div>

                        {/* AMOUNT USED */}

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Amount used in recipe
                          </label>

                          <div className="flex">
                            <input
                              type="number"
                              min="0"
                              step="any"
                              placeholder="500"
                              value={
                                ingredient.amountUsed
                              }
                              onChange={(e) =>
                                updateIngredient(
                                  ingredient.id,
                                  "amountUsed",
                                  e.target.value
                                )
                              }
                              className="w-full rounded-l-lg border border-slate-300 px-4 py-3"
                            />

                            <select
                              value={
                                ingredient.amountUnit
                              }
                              onChange={(e) =>
                                updateIngredient(
                                  ingredient.id,
                                  "amountUnit",
                                  e.target.value
                                )
                              }
                              className="rounded-r-lg border border-l-0 border-slate-300 bg-slate-50 px-3"
                            >
                              <optgroup label="Weight">
                                <option value="g">
                                  g
                                </option>
                                <option value="kg">
                                  kg
                                </option>
                                <option value="oz">
                                  oz
                                </option>
                                <option value="lb">
                                  lb
                                </option>
                              </optgroup>

                              <optgroup label="Volume">
                                <option value="ml">
                                  ml
                                </option>
                                <option value="L">
                                  L
                                </option>
                                <option value="fl oz">
                                  fl oz
                                </option>
                                <option value="tsp">
                                  tsp
                                </option>
                                <option value="tbsp">
                                  tbsp
                                </option>
                                <option value="cup">
                                  cup
                                </option>
                                <option value="pint">
                                  pint
                                </option>
                                <option value="quart">
                                  quart
                                </option>
                                <option value="gallon">
                                  gallon
                                </option>
                              </optgroup>

                              <optgroup label="Count">
                                <option value="unit">
                                  unit
                                </option>
                              </optgroup>
                            </select>
                          </div>

                          <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                            Enter the amount of this
                            ingredient that goes into
                            the recipe.
                          </p>
                        </div>

                        {/* YIELD */}

                        <div className="rounded-xl bg-blue-50 p-4">
                          <label className="mb-2 block text-sm font-semibold text-blue-900">
                            Usable Yield %
                          </label>

                          <div className="flex items-center gap-3 sm:max-w-xs">
                            <input
                              type="number"
                              min="0.01"
                              max="100"
                              step="1"
                              value={
                                ingredient.yieldPercent
                              }
                              onChange={(e) =>
                                updateIngredient(
                                  ingredient.id,
                                  "yieldPercent",
                                  e.target.value
                                )
                              }
                              className="w-full rounded-lg border border-blue-200 bg-white px-4 py-3"
                            />

                            <span className="font-semibold text-blue-800">
                              %
                            </span>
                          </div>

                          <p className="mt-2 text-xs leading-5 text-blue-800 print:hidden">
                            Usable Yield % tells the
                            calculator how much of the
                            purchased ingredient remains
                            usable after trimming,
                            peeling, bones, preparation,
                            or other losses. Use 100% if
                            there is no significant loss.
                          </p>

                          <p className="mt-2 text-xs leading-5 text-blue-800 print:hidden">
                            Example: if you buy 1 kg of
                            chicken and only 800 g is
                            usable, your yield is 80%.
                          </p>
                        </div>

                        {/* WARNING */}

                        {unitsMismatch && (
                          <p className="text-sm text-amber-600">
                            These units cannot be converted
                            directly. Use compatible
                            weight, volume, or count units.
                          </p>
                        )}

                        {/* COST */}

                        {ingredientCost > 0 && (
                          <div className="rounded-lg bg-emerald-50 p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-emerald-800">
                                Ingredient cost
                              </span>

                              <span className="font-bold text-emerald-800">
                                {formatMoney(
                                  ingredientCost
                                )}
                              </span>
                            </div>

                            <p className="mt-1 text-xs text-emerald-700 print:hidden">
                              The estimated cost of the
                              usable amount required by
                              this recipe.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={addIngredient}
                className="mt-6 w-full rounded-xl border-2 border-dashed border-emerald-300 px-4 py-3 font-semibold text-emerald-700 hover:bg-emerald-50 print:hidden"
              >
                + Add Another Ingredient
              </button>
            </section>

            {/* PACKAGING */}

            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 print:shadow-none print:ring-0 print:p-0 print:mt-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Packaging Costs
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Add the packaging used to serve or
                  sell your recipe.
                </p>
              </div>

              <div className="mt-5 rounded-xl bg-amber-50 p-4 print:hidden">
                <p className="font-semibold text-amber-900">
                  Why include packaging?
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-800">
                  Containers, cups, lids, bags, labels,
                  sauce containers, and other packaging
                  add to the cost of selling your food.
                </p>
              </div>

              <div className="mt-6 space-y-5">
                {packagingItems.map((item, index) => {
                  const packagingCost =
                    calculatePackagingCost(item);

                  return (
                    <div
                      key={item.id}
                      className="rounded-xl border border-slate-200 p-5 print:break-inside-avoid"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <h3 className="font-semibold text-slate-800">
                          Packaging {index + 1}
                        </h3>

                        {packagingItems.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              removePackaging(item.id)
                            }
                            className="text-sm font-medium text-red-500 print:hidden"
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="space-y-5">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Packaging item
                          </label>

                          <input
                            type="text"
                            placeholder="e.g. Takeaway container"
                            value={item.name}
                            onChange={(e) =>
                              updatePackaging(
                                item.id,
                                "name",
                                e.target.value
                              )
                            }
                            className="w-full rounded-lg border border-slate-300 px-4 py-3"
                          />

                          <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                            Enter the type of packaging
                            you are using.
                          </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                              Pack size
                            </label>

                            <div className="flex">
                              <input
                                type="number"
                                min="0"
                                step="any"
                                placeholder="100"
                                value={item.packSize}
                                onChange={(e) =>
                                  updatePackaging(
                                    item.id,
                                    "packSize",
                                    e.target.value
                                  )
                                }
                                className="w-full rounded-l-lg border border-slate-300 px-4 py-3"
                              />

                              <span className="flex items-center rounded-r-lg border border-l-0 border-slate-300 bg-slate-50 px-4 text-sm text-slate-600">
                                units
                              </span>
                            </div>

                            <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                              How many individual
                              pieces are in the package
                              you purchased.
                            </p>
                          </div>

                          <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                              Pack price
                            </label>

                            <input
                              type="number"
                              min="0"
                              step="any"
                              placeholder="200.00"
                              value={item.packPrice}
                              onChange={(e) =>
                                updatePackaging(
                                  item.id,
                                  "packPrice",
                                  e.target.value
                                )
                              }
                              className="w-full rounded-lg border border-slate-300 px-4 py-3"
                            />

                            <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                              The price you paid for the
                              entire package.
                            </p>
                          </div>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-700">
                            Amount used
                          </label>

                          <div className="flex">
                            <input
                              type="number"
                              min="0"
                              step="any"
                              placeholder="10"
                              value={item.amountUsed}
                              onChange={(e) =>
                                updatePackaging(
                                  item.id,
                                  "amountUsed",
                                  e.target.value
                                )
                              }
                              className="w-full rounded-l-lg border border-slate-300 px-4 py-3"
                            />

                            <span className="flex items-center rounded-r-lg border border-l-0 border-slate-300 bg-slate-50 px-4 text-sm text-slate-600">
                              units
                            </span>
                          </div>

                          <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                            How many pieces of this
                            packaging are used for the
                            recipe.
                          </p>
                        </div>

                        {packagingCost > 0 && (
                          <div className="rounded-lg bg-amber-50 p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-amber-800">
                                Packaging cost
                              </span>

                              <span className="font-bold text-amber-800">
                                {formatMoney(
                                  packagingCost
                                )}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={addPackaging}
                className="mt-6 w-full rounded-xl border-2 border-dashed border-amber-300 px-4 py-3 font-semibold text-amber-700 hover:bg-amber-50 print:hidden"
              >
                + Add Another Packaging Item
              </button>

              <div className="mt-8 rounded-xl bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Total Packaging Cost
                    </p>
                  </div>

                  <p className="text-xl font-bold text-slate-900">
                    {formatMoney(totalPackagingCost)}
                  </p>
                </div>
              </div>
            </section>

            {/* PORTIONS + PRICING */}

            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8 print:shadow-none print:ring-0 print:p-0 print:mt-8">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Number of portions produced
                </label>

                <input
                  type="number"
                  min="1"
                  step="1"
                  placeholder="10"
                  value={portions}
                  onChange={(e) =>
                    setPortions(e.target.value)
                  }
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 sm:max-w-xs"
                />

                <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                  Enter how many portions or servings
                  the entire recipe produces.
                </p>
              </div>

              <div className="mt-8 rounded-xl bg-emerald-50 p-5">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="font-semibold text-emerald-900">
                      True Direct Cost
                    </p>

                    <p className="mt-1 text-xs leading-5 text-emerald-700">
                      Ingredient cost plus packaging
                      cost for the entire recipe.
                    </p>
                  </div>

                  <p className="text-2xl font-bold text-emerald-900">
                    {formatMoney(trueDirectCost)}
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900">
                  Pricing & Profit
                </h2>

                <p className="mt-1 text-sm text-slate-500 print:hidden">
                  Use your true direct cost to explore a
                  possible selling price.
                </p>

                <div className="mt-6 rounded-xl bg-slate-50 p-5">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Desired Food Cost %
                  </label>

                  <div className="flex items-center gap-3 sm:max-w-xs">
                    <input
                      type="number"
                      min="1"
                      max="99"
                      step="1"
                      value={desiredFoodCost}
                      onChange={(e) =>
                        setDesiredFoodCost(
                          e.target.value
                        )
                      }
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3"
                    />

                    <span className="font-semibold text-slate-600">
                      %
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                    Your target ingredient-and-packaging
                    cost percentage. For example, a 30%
                    target means you want these direct
                    costs to represent about 30% of your
                    selling price.
                  </p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 p-5">
                    <p className="text-sm font-medium text-slate-500">
                      Suggested Selling Price
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      {formatMoney(
                        suggestedSellingPrice
                      )}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                      A starting price calculated from
                      your true direct cost and desired
                      food cost. Consider labor, overhead,
                      taxes, competition, and other
                      expenses before choosing your final
                      price.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-5">
                    <p className="text-sm font-medium text-slate-500">
                      Food Cost %
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      {calculatedFoodCostPercentage >
                      0
                        ? `${calculatedFoodCostPercentage.toFixed(
                            1
                          )}%`
                        : "0.0%"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-5">
                    <p className="text-sm font-medium text-slate-500">
                      Gross Profit Per Portion
                    </p>

                    <p className="mt-2 text-3xl font-bold text-emerald-700">
                      {formatMoney(
                        grossProfitPerPortion
                      )}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500 print:hidden">
                      Selling price minus ingredient and
                      packaging cost, before labor,
                      overhead, taxes, and other business
                      expenses.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-5">
                    <p className="text-sm font-medium text-slate-500">
                      True Direct Cost Per Portion
                    </p>

                    <p className="mt-2 text-3xl font-bold text-slate-900">
                      {formatMoney(
                        trueDirectCostPerPortion
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-emerald-50 p-5 print:hidden">
                  <p className="font-semibold text-emerald-900">
                    What is True Direct Cost?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-emerald-800">
                    True Direct Cost is the cost directly
                    connected to making and packaging your
                    product. In this calculator, it
                    includes your ingredients and
                    packaging.
                  </p>

                  <p className="mt-3 text-sm leading-6 text-emerald-800">
                    It does not yet include wages, rent,
                    electricity, equipment, delivery,
                    marketing, taxes, or other overhead
                    expenses.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* RESULTS */}

          <aside className="h-fit rounded-2xl bg-slate-900 p-7 text-white shadow-lg lg:sticky lg:top-6 print:static print:mt-8 print:bg-white print:p-0 print:text-slate-900 print:shadow-none">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 print:text-slate-500">
              Your Results
            </p>

            <div className="mt-7">
              <p className="text-sm text-slate-400 print:text-slate-500">
                Total Ingredient Cost
              </p>

              <p className="mt-2 text-3xl font-bold">
                {formatMoney(totalIngredientCost)}
              </p>
            </div>

            <div className="my-6 border-t border-slate-700 print:border-slate-300" />

            <div>
              <p className="text-sm text-slate-400 print:text-slate-500">
                Total Packaging Cost
              </p>

              <p className="mt-2 text-3xl font-bold">
                {formatMoney(totalPackagingCost)}
              </p>
            </div>

            <div className="my-6 border-t border-slate-700 print:border-slate-300" />

            <div>
              <p className="text-sm text-slate-400 print:text-slate-500">
                True Direct Cost
              </p>

              <p className="mt-2 text-3xl font-bold text-emerald-400 print:text-emerald-700">
                {formatMoney(trueDirectCost)}
              </p>
            </div>

            <div className="my-6 border-t border-slate-700 print:border-slate-300" />

            <div>
              <p className="text-sm text-slate-400 print:text-slate-500">
                True Direct Cost Per Portion
              </p>

              <p className="mt-2 text-2xl font-bold">
                {formatMoney(
                  trueDirectCostPerPortion
                )}
              </p>
            </div>

            <div className="mt-7">
              <p className="text-sm text-slate-400 print:text-slate-500">
                Suggested Selling Price
              </p>

              <p className="mt-2 text-2xl font-bold text-emerald-400 print:text-emerald-700">
                {formatMoney(
                  suggestedSellingPrice
                )}
              </p>
            </div>

            <div className="mt-7">
              <p className="text-sm text-slate-400 print:text-slate-500">
                Food Cost %
              </p>

              <p className="mt-2 text-2xl font-bold">
                {calculatedFoodCostPercentage > 0
                  ? `${calculatedFoodCostPercentage.toFixed(
                      1
                    )}%`
                  : "0.0%"}
              </p>
            </div>

            <div className="mt-7">
              <p className="text-sm text-slate-400 print:text-slate-500">
                Gross Profit Per Portion
              </p>

              <p className="mt-2 text-2xl font-bold text-emerald-400 print:text-emerald-700">
                {formatMoney(
                  grossProfitPerPortion
                )}
              </p>
            </div>

            <div className="mt-8 rounded-xl bg-slate-800 p-4 print:hidden">
              <p className="text-sm font-semibold text-emerald-400">
                Want to cost more than one recipe?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                We're building the FoodProfit Recipe Costing Pack
                with practical spreadsheets and worksheets for
                managing recipes, ingredient prices, yield, waste
                and menu pricing.
               </p>

            <Link
              href="/foodprofit-pro"
              className="mt-4 block rounded-lg bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-500"
           >
            Explore FoodProfit Pro →
          </Link>
        </div>

            <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-5 print:hidden">
              <p className="text-sm font-medium text-white">
                {trueDirectCost > 0
                  ? "Your true direct cost is calculated."
                  : "Your results will appear here"}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {trueDirectCost > 0
                  ? "Your calculation includes ingredients and packaging."
                  : "Enter your ingredients, packaging, and quantities to calculate your true direct cost."}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* PRINT NOTES */}

      <section className="mx-auto hidden max-w-6xl px-6 pb-10 print:block">
        <div className="border-t border-slate-300 pt-5">
          <p className="text-sm font-semibold text-slate-700">
            Pricing Note
          </p>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            The Suggested Selling Price is a starting
            price calculated from the recipe's True
            Direct Cost and Desired Food Cost %. It does
            not include labor, rent, utilities, taxes,
            delivery, marketing, equipment, or other
            overhead expenses.
          </p>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-slate-200 bg-white print:hidden">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-500">
          FoodProfit Tools — Free practical tools for
          small food businesses.
        </div>
      </footer>

      {/* PRINT STYLES */}

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }

          body {
            background: white !important;
          }

          input,
          select {
            color: #111827 !important;
            background: white !important;
          }

          button {
            display: none !important;
          }

          .print\\:break-inside-avoid {
            break-inside: avoid;
          }
        }
      `}</style>
    </main>
  );
}