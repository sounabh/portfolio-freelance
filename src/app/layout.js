// app/layout.tsx
import React, { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

// Load your local fonts with CSS variables for easy use
const apercu = localFont({
  src: [
    {
      path: "../../public/fonts/apercu_regular_pro.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-apercu",
  display: "swap", // recommended for performance
});

const sfRegular = localFont({
  src: [
    {
      path: "../../public/fonts/SFPRODISPLAYREGULAR.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sfr",
  display: "swap",
});

export const metadata = {
  title: "My App",
  description: "With local fonts using Next.js 15",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en"  name="viewport" content="width=device-width, initial-scale=1" >
      <body
        className={`${apercu.variable} ${sfRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
