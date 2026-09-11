import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Free Food Cost Calculator | FoodProfit Tools",
    template: "%s | FoodProfit Tools",
  },

  description:
    "Free food cost calculator for restaurants, caterers, bakers, food trucks and small food businesses. Calculate recipe costs, packaging costs, food cost percentage and suggested selling price.",

  keywords: [
    "food cost calculator",
    "recipe cost calculator",
    "food costing calculator",
    "restaurant food cost calculator",
    "recipe costing",
    "food cost percentage calculator",
    "menu pricing calculator",
    "food business calculator",
    "recipe pricing calculator",
  ],

  openGraph: {
    title:
      "Free Food Cost Calculator | FoodProfit Tools",

    description:
      "Calculate recipe costs, packaging costs, food cost percentage and suggested selling price for your food business.",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "i2cgVSOAsG227HEgsyv_bUuSWrKQmlrEoGBvXhA0J2k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}