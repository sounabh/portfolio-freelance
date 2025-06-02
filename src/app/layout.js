// app/layout.tsx
import localFont from "next/font/local";
import "./globals.css";




const apercu = localFont({
  src: [
    { path: "../../public/fonts/apercu_regular_pro.woff2" },
   
  ],
  variable: "--font-apercu",
});


const SFregular = localFont({
  src: [
    { path: "../../public/fonts/SFPRODISPLAYREGULAR.woff2" },
   
  ],
  variable: "--font-sfr",
});



export const metadata = {
  title: "My App",
  description: "With local fonts",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${apercu.variable} ${SFregular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}