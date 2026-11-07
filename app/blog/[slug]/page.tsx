import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { authorName, blogPosts, siteUrl } from "@/lib/blog";

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    title: `${post.title} | FaceShiraz`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: post.title, description: post.description, publishedTime: `${post.date}T09:00:00+03:30`, authors: [authorName], locale: "fa_IR", siteName: "FaceShiraz" },
    twitter: { card: "summary", title: post.title, description: post.description },
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const url = `${siteUrl}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.description,
    datePublished: `${post.date}T09:00:00+03:30`, dateModified: `${post.date}T09:00:00+03:30`, inLanguage: "fa-IR",
    mainEntityOfPage: url, author: { "@type": "Organization", name: authorName, url: `${siteUrl}/blog` },
    publisher: { "@type": "Organization", name: "FaceShiraz", url: siteUrl }, articleSection: post.category,
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "خانه", item: `${siteUrl}/main` },
    { "@type": "ListItem", position: 2, name: "مجله", item: `${siteUrl}/blog` },
    { "@type": "ListItem", position: 3, name: post.title, item: url },
  ]};
  return <main className="blog-shell" dir="rtl">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema]).replace(/</g, "\\u003c") }} />
    <header className="blog-header"><Link href="/main" className="blog-brand">FaceShiraz <span>مجله مراقبت از پوست</span></Link><nav><Link href="/blog">همه مقاله‌ها</Link><Link href="/main#contact">رزرو فیشال</Link></nav></header>
    <article className="article-layout"><nav className="breadcrumbs" aria-label="مسیر صفحه"><Link href="/main">خانه</Link><span>/</span><Link href="/blog">مجله</Link><span>/</span><span>{post.category}</span></nav>
      <header className="article-heading"><span className="article-category">{post.category}</span><h1>{post.title}</h1><p className="article-description">{post.description}</p><div className="article-meta"><span>نویسنده: {authorName}</span><span>{post.minutes} دقیقه مطالعه</span><time dateTime={post.date}>{new Intl.DateTimeFormat("fa-IR", { dateStyle: "long", timeZone: "Asia/Tehran" }).format(new Date(post.date + "T12:00:00+03:30"))}</time></div></header>
      <div className="article-body"><p className="article-lead">{post.intro}</p>{post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((p) => <p key={p}>{p}</p>)}{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}
        <aside className="article-note"><strong>یادآوری مهم</strong><p>این مطلب برای آموزش عمومی است و جایگزین تشخیص یا توصیه پزشکی شخصی نیست. در صورت درد، التهاب شدید یا مشکل پوستی ماندگار با متخصص پوست مشورت کنید.</p></aside>
        <section className="article-faq"><h2>پرسش‌های متداول</h2>{post.faq.map(([q,a]) => <div key={q}><h3>{q}</h3><p>{a}</p></div>)}</section>
        <div className="article-cta"><h2>برای پوستت، آگاهانه انتخاب کن</h2><p>با خدمات مراقبت و فیشال FaceShiraz در شیراز بیشتر آشنا شو.</p><Link href="/main#services">مشاهده خدمات فیشال</Link></div>
      </div>
      <section className="related-articles"><h2>مطالعه مرتبط</h2><div>{blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2).map((item) => <Link key={item.slug} href={`/blog/${item.slug}`}><span>{item.category}</span><strong>{item.title}</strong><small>مطالعه مقاله ←</small></Link>)}</div></section>
      <footer className="article-bottom"><Link href="/blog">← بازگشت به مجله</Link><Link href="/main">صفحه اصلی FaceShiraz</Link></footer>
    </article>
    <footer className="blog-footer"><Link href="/main">FaceShiraz</Link><span>مراقبت تخصصی پوست با مریم میرشکاری</span><Link href="/main#contact">ارتباط و رزرو</Link></footer>
  </main>;
}
