import type { Metadata } from "next";
import { Kanit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-kanit",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Theerapong Thanarodpaibun | Operations Data Portfolio",
  description: "Portfolio of Theerapong Thanarodpaibun, an inventory, planning, and operations data specialist in Bangkok.",
  themeColor: "#0f172a",
  openGraph: {
    type: "website",
    title: "Theerapong Thanarodpaibun | Inventory & Planning Specialist",
    description: "Warehouse operations, planning analytics, Excel automation, Power Query, VBA, and inventory visibility.",
    url: "https://peichh.github.io/peach-portfolio/",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "Theerapong Thanarodpaibun Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${kanit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
