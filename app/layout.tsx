import type { Metadata } from "next";
import "./globals.css";
import "./gallery.css";
import "./media-upgrade.css";
import "./performance.css";
import "./hq-sequence.css";
import "./mobile-responsive.css";
import "./blog.css";
import "./home-seo.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://faceshiraz.vercel.app"),
  title: "FaceShiraz | فیشال و مراقبت پوست در شیراز",
  description:
    "FaceShiraz؛ آشنایی با خدمات فیشال، پاکسازی و آبرسانی پوست در شیراز، همراه با راهنماهای کاربردی مراقبت از انواع پوست.",
  applicationName: "FaceShiraz",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "FaceShiraz",
    title: "FaceShiraz | فیشال و مراقبت پوست در شیراز",
    description:
      "معرفی خدمات فیشال، پاکسازی و آبرسانی پوست در شیراز و راهنمای مراقبت متناسب با نیاز پوست.",
    url: "https://faceshiraz.vercel.app/",
  },
  verification: {
    google: "xhJG9NGcrdcEWgcIR-XC7BMDGGqCXCCoWD2lmsMnefw",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
