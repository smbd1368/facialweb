import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, siteUrl } from "@/lib/blog";

export const metadata: Metadata = {
  title: "مجله مراقبت از پوست | فیشال و پاکسازی پوست در شیراز | FaceShiraz",
  description: "مقاله‌های کاربردی درباره فیشال، پاکسازی پوست، آبرسانی، پوست چرب و حساس؛ راهنمای مراقبت از پوست با تمرکز بر نیازهای شما در شیراز.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: { type: "website", url: `${siteUrl}/blog`, title: "مجله مراقبت از پوست FaceShiraz", description: "راهنماهای کاربردی فیشال و مراقبت از پوست" },
};

export default function BlogIndex() {
  const schema = { "@context": "https://schema.org", "@type": "Blog", name: "مجله مراقبت از پوست FaceShiraz", url: `${siteUrl}/blog`, inLanguage: "fa-IR" };
  return <main className="blog-shell" dir="rtl">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <header className="blog-header"><Link href="/main" className="blog-brand">FaceShiraz <span>مجله مراقبت از پوست</span></Link><nav><Link href="/main">صفحه اصلی</Link><Link href="/main#services">خدمات فیشال</Link></nav></header>
    <section className="blog-hero"><p className="blog-kicker">دانش مراقبت، انتخاب آگاهانه</p><h1>مجله مراقبت از پوست</h1><p>راهنماهای روشن و کاربردی برای شناخت نیاز پوست، انتخاب مراقبت مناسب و داشتن روتینی ساده و پایدار.</p><Link className="blog-cta" href="/main#contact">مشاوره و رزرو فیشال در شیراز</Link></section>
    <section className="blog-content"><div className="blog-intro"><span>راهنمای پوست شما</span><h2>از شناخت پوست تا مراقبت روزانه</h2><p>مقاله‌ها با زبان ساده نوشته شده‌اند و جایگزین تشخیص یا درمان پزشکی نیستند. در صورت وجود مشکل پوستی پایدار، از متخصص پوست راهنمایی بگیرید.</p></div>
      <div className="blog-grid">{blogPosts.map((post) => <article className="blog-card" key={post.slug}><div className="blog-card-top"><span>{post.category}</span><small>{post.minutes} دقیقه مطالعه</small></div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.description}</p><Link className="blog-read" href={`/blog/${post.slug}`}>مطالعه مقاله <span aria-hidden="true">←</span></Link></article>)}</div>
    </section>
    <footer className="blog-footer"><Link href="/main">FaceShiraz</Link><span>مراقبت تخصصی پوست با مریم میرشکاری</span><Link href="/main#contact">ارتباط و رزرو</Link></footer>
  </main>;
}
