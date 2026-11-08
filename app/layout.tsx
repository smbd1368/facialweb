import type { Metadata } from "next";
import "./globals.css";
import "./gallery.css";
import "./media-upgrade.css";
import "./performance.css";
import "./hq-sequence.css";
import "./mobile-responsive.css";
import "./blog.css";

export const metadata: Metadata = {
  title: "FaceShiraz | فیشال تخصصی در شیراز",
  description: "تجربه‌ای آرام و تخصصی برای پاکسازی، آبرسانی و شادابی پوست با مریم میرشکاری",
  verification: {
    google: "xhJG9NGcrdcEWgcIR-XC7BMDGGqCXCCoWD2lmsMnefw",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
