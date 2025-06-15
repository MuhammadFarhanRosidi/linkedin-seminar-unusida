import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import ErrorBoundary from "../components/ErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Workshop LinkedIn 2025 - UNUSIDA",
  description:
    "Membangun karir profesional di era digital melalui optimasi LinkedIn dan personal branding yang efektif",
  keywords:
    "LinkedIn, personal branding, karir digital, workshop, Indonesia, fresh graduate. UNUSIDA, UNU Sidoarjo, Universitas Nahdlatul Ulama Sidoarjo, UNUSIDA 2025, LinkedIn workshop, strategi LinkedIn, karir profesional, personal branding Indonesia, fresh graduate Indonesia, Fakultas Ilmu Komputer UNUSIDA, Fakultas Ilmu Komputer UNU Sidoarjo, Fakultas Ilmu Komputer Universitas Nahdlatul Ulama Sidoarjo, Fakultas Ilmu Komputer UNUSIDA 2025, BEM Fakultas Ilmu Komputer UNUSIDA, BEM Fakultas Ilmu Komputer UNU Sidoarjo, BEM Fakultas Ilmu Komputer Universitas Nahdlatul Ulama Sidoarjo, BEM Fakultas Ilmu Komputer UNUSIDA 2025, workshop LinkedIn Indonesia, personal branding Indonesia, karir digital Indonesia, fresh graduate Indonesia, strategi LinkedIn Indonesia, karir profesional Indonesia",
  authors: [{ name: "Tim Workshop LinkedIn" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "Workshop LinkedIn 2025 - UNUSIDA",
    description:
      "Pelajari strategi LinkedIn terbaru untuk membangun karir profesional yang sukses",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "UNUSIDA Workshop LinkedIn 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop LinkedIn 2025",
    description: "Strategi LinkedIn untuk karir profesional yang sukses",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/assets/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          <ThemeProvider>{children}</ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
