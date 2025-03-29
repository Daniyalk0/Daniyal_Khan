import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import Index from "@/components/header";
import localFont from "next/font/local";


const steelBlade = localFont({
  src: [
    {
      path: "./fonts/steel_blade_7.ttf",
      weight: "900",
      style: "normal",
    },
  ],
   variable: '--font-steel-blade'
});
const bladesingerbold = localFont({
  src: [
    {
      path: "./fonts/bladesingerbold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
   variable: '--font-blade-singer-bold'
});
const bladesingercond = localFont({
  src: [
    {
      path: "./fonts/bladesingercond.ttf",
      weight: "900",
      style: "normal",
    },
  ],
   variable: '--font-blade-singer-cond'
});
const blade = localFont({
  src: [
    {
      path: "./fonts/blade.ttf",
      weight: "900",
      style: "normal",
    },
  ],
   variable: '--font-blade'
});

export const metadata: Metadata = {
  title: "Daniyal Khan",
  description: "Front-end Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${steelBlade.variable} ${bladesingerbold.variable} ${bladesingercond.variable} ${blade.variable}   antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Index />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
