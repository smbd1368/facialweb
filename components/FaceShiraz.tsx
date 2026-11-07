"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, CalendarDays, Check, ChevronDown, Droplets, Instagram, Leaf, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Star, X } from "lucide-react";
import { useState } from "react";
import { CustomerStories } from "./CustomerStories";
import { FacialistShowcase } from "./FacialistShowcase";

const services = [
  ["فیشال پایه", "شروعی لطیف برای پاکسازی و بازگرداندن طراوت طبیعی پوست", Sparkles, "/images/facial-consultation.png"],
  ["پاکسازی عمیق", "پاکسازی هدفمند منافذ با رویکردی آرام و اصولی", ShieldCheck, "/images/facial-cleansing.png"],
  ["آبرسانی پوست", "رطوبت‌رسانی عمیق برای پوستی نرم، شفاف و شاداب", Droplets, "/images/facial-mask.png"],
  ["ماساژ صورت", "حرکات آرام‌بخش برای رهایی از تنش و حس سبکی", Leaf, "/images/facial-massage.png"],
  ["لایه‌برداری ملایم", "حذف لطیف سلول‌های مرده، متناسب با نیاز پوست", Sparkles, "/images/facial-steam.png"],
  ["مراقبت پوست حساس", "پروتکلی مینیمال و دقیق برای پوست‌های واکنش‌پذیر", ShieldCheck, "/images/skincare-products.png"],
];
const steps = ["بررسی نوع پوست", "پاکسازی اولیه", "آماده‌سازی و بخور", "لایه‌برداری ملایم", "ماسک و آبرسانی", "ماساژ و آرام‌سازی", "توصیه نهایی مراقبتی"];
const stepImages = ["facial-consultation", "facial-cleansing", "facial-steam", "facial-cleansing", "facial-mask", "facial-massage", "skincare-products"];
const faqs = [
  ["فیشال برای چه کسانی مناسب است؟", "برای بیشتر انواع پوست قابل انجام است؛ جلسه با بررسی دقیق پوست آغاز می‌شود تا مراحل و محصولات با نیاز واقعی شما هماهنگ شوند."],
  ["هر چند وقت یک‌بار فیشال انجام شود؟", "معمولاً هر چهار تا شش هفته، اما فاصله مناسب به نوع پوست، سبک زندگی و هدف مراقبتی شما بستگی دارد."],
  ["بعد از فیشال چه مراقبت‌هایی لازم است؟", "استفاده از ضدآفتاب، آبرسانی کافی و پرهیز کوتاه‌مدت از لایه‌بردارهای قوی توصیه می‌شود."],
  ["آیا برای پوست حساس مناسب است؟", "بله؛ با انتخاب محصولات ملایم و تنظیم مراحل، پروتکل اختصاصی پوست حساس اجرا می‌شود."],
  ["مدت زمان هر جلسه چقدر است؟", "بسته به نوع خدمات، هر جلسه معمولاً بین ۶۰ تا ۹۰ دقیقه زمان می‌برد."],
];
const reveal = { initial: { opacity: 0, y: 35 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: .75 } };

export function FaceShiraz() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const heroY = useTransform(scrollYProgress, [0, .18], [0, 90]);
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  return <main>
    <motion.div className="progress" style={{ scaleX: progress }} />
    <header className="nav"><a href="#home" className="logo"><i>F</i><span>FaceShiraz<small>پوستت را زندگی کن</small></span></a>
      <nav className={menu ? "links open" : "links"}>{[["خانه","home"],["خدمات","services"],["مزایا","benefits"],["مراحل فیشال","journey"],["نظرات","reviews"],["سوالات","faq"]].map(([t,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{t}</a>)}<a href="/blog" onClick={()=>setMenu(false)}>مجله پوست</a></nav>
      <a className="pill nav-cta" href="#contact"><CalendarDays size={17}/> رزرو وقت</a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="منو">{menu?<X/>:<Menu/>}</button>
    </header>

    <section id="home" className="hero">
      <motion.div className="hero-photo" style={{ y: heroY }}><Image src="/images/faceshiraz-hero.png" alt="فضای آرام فیشال FaceShiraz" fill priority sizes="100vw" /></motion.div>
      <div className="hero-shade"/><motion.div className="hero-copy" initial={{opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{duration:1}}>
        <span className="eyebrow"><Sparkles size={15}/> آیینِ آرامش و درخشش پوست</span>
        <h1>زیبایی تو، از پوستت آغاز می‌شود؛<br/><em>ما فقط بیدارش می‌کنیم.</em></h1>
        <p>تجربه‌ای آرام، حرفه‌ای و شخصی‌سازی‌شده برای پاکسازی، آبرسانی و بازگشت طراوت طبیعی پوست شما.</p>
        <div className="actions"><a className="pill dark" href="#contact">رزرو نوبت <ArrowLeft size={18}/></a><a className="text-link" href="#services">مشاهده خدمات <ChevronDown size={18}/></a></div>
        <div className="signature"><span>ارائه خدمات توسط</span><b>مریم میرشکاری</b></div>
      </motion.div><div className="scroll-cue"><span>کشف کنید</span><i/></div>
    </section>

    <section className="intro section"><motion.div {...reveal} className="section-label">01 — داستان ما</motion.div><div className="intro-grid">
      <motion.div {...reveal}><h2>هر پوست،<br/><em>داستانی برای شنیدن دارد.</em></h2></motion.div>
      <motion.div {...reveal} className="intro-text"><p>در FaceShiraz، مراقبت از پوست فقط یک روتین نیست؛ مکثی آگاهانه برای شنیدن نیاز پوست شماست. مریم میرشکاری با انتخاب دقیق مراحل و محصولات، تجربه‌ای امن، آرام و شخصی خلق می‌کند.</p><div className="ticks"><span><Check/> بررسی تخصصی پوست</span><span><Check/> محیط آرام و بهداشتی</span><span><Check/> پروتکل شخصی‌سازی‌شده</span></div></motion.div>
    </div></section>

    <section id="services" className="services section"><motion.div {...reveal} className="title-row"><div><span className="section-label">02 — خدمات</span><h2>مراقبتی به اندازه‌ی<br/><em>نیازِ پوست تو</em></h2></div><p>مجموعه‌ای از مراقبت‌های تخصصی؛ طراحی‌شده برای نیاز واقعی پوست، نه یک نسخه تکراری.</p></motion.div>
      <div className="service-grid">{services.map(([title,desc,Icon,image]:any,i)=><motion.article {...reveal} transition={{duration:.6,delay:i*.07}} key={title} className="service-card"><div className="service-image"><Image src={image} alt={title} fill sizes="(max-width: 650px) 82vw, 33vw"/></div><span>0{i+1}</span><Icon/><div><h3>{title}</h3><p>{desc}</p></div><ArrowLeft className="card-arrow"/></motion.article>)}</div>
    </section>

    <section id="benefits" className="benefits"><div className="benefit-photo"><Image src="/images/faceshiraz-hero.png" alt="پوست سالم و شاداب" fill sizes="50vw"/></div><motion.div {...reveal} className="benefit-copy"><span className="section-label">03 — حس خوب پوست سالم</span><h2>سبک‌تر، شفاف‌تر،<br/><em>نزدیک‌تر به خودت</em></h2><div className="benefit-list">{["شفافیت و روشنایی طبیعی","پاکسازی منافذ","کاهش خشکی و کشیدگی","لطافت و طراوت بیشتر","جذب بهتر محصولات مراقبتی"].map((x,i)=><div key={x}><b>۰{i+1}</b><span>{x}</span></div>)}</div></motion.div></section>

    <section id="journey" className="journey section"><motion.div {...reveal} className="journey-head"><span className="section-label">04 — سفر مراقبت</span><h2>هفت قدم، یک مقصد؛<br/><em>آرامشِ تو</em></h2><p>هر مرحله با توجه به واکنش پوست شما و با ریتمی آرام پیش می‌رود.</p></motion.div><div className="timeline">{steps.map((s,i)=><motion.div {...reveal} key={s} className="step"><b>{String(i+1).padStart(2,"0")}</b><span/><div><h3>{s}</h3><p>{i===0?"گفت‌وگو درباره دغدغه‌ها و مشاهده دقیق وضعیت پوست":i===6?"یک روتین ساده و کاربردی برای ادامه مراقبت در خانه":"اجرای آرام و دقیق مرحله، متناسب با نیاز پوست شما"}</p></div></motion.div>)}</div></section>

    <section className="result section"><motion.div {...reveal} className="result-card"><span className="eyebrow">زیبایی واقعی، بی‌نیاز از اغراق</span><h2>درخشش بیشتر.<br/>سنگینی کمتر.<br/><em>حالی که می‌ماند.</em></h2><div className="result-stats"><div><b>۱۰۰٪</b><span>مراقبت شخصی</span></div><div><b>۷</b><span>مرحله آرامش‌بخش</span></div><div><b>۱</b><span>تجربه مخصوص شما</span></div></div></motion.div></section>

    <section id="reviews" className="reviews section"><span className="section-label">05 — روایت شما</span><h2>حس خوب،<br/><em>از زبان شما</em></h2><div className="review-grid">{["بعد از فیشال حس سبکی و شادابی فوق‌العاده‌ای داشتم.","محیط بسیار آرام و حرفه‌ای بود؛ همه‌چیز با حوصله توضیح داده شد.","پوستم خیلی تمیزتر و لطیف‌تر شد؛ دقیقاً همان حس طبیعی که می‌خواستم."].map((x,i)=><motion.blockquote {...reveal} transition={{delay:i*.12}} key={x}><div>{[1,2,3,4,5].map(n=><Star key={n} fill="currentColor"/>)}</div><p>«{x}»</p><footer>مهمان FaceShiraz <span>— تجربه واقعی</span></footer></motion.blockquote>)}</div></section>

    <section className="social section"><div><span className="section-label">لحظه‌های FaceShiraz</span><h2>هر روز، کمی بیشتر<br/><em>پوستت را زندگی کن</em></h2></div><a href="https://instagram.com/FaceShiraz" target="_blank" rel="noreferrer"><Instagram/> @FaceShiraz <ArrowLeft/></a><div className="social-grid">{["skin","spa","serum","calm"].map((x,i)=><div key={x} className={`social-tile tile-${i}`}><Image src="/images/faceshiraz-hero.png" alt="نمایی از خدمات FaceShiraz" fill sizes="25vw"/></div>)}</div></section>

    <section id="faq" className="faq section"><div className="faq-head"><span className="section-label">06 — سوالات متداول</span><h2>سؤال تو،<br/><em>آغاز اعتماد ماست</em></h2></div><div className="accordions">{faqs.map(([q,a],i)=><article className={openFaq===i?"active":""} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><i>{openFaq===i?"−":"+"}</i></button><motion.div initial={false} animate={{height:openFaq===i?"auto":0,opacity:openFaq===i?1:0}}><p>{a}</p></motion.div></article>)}</div></section>

    <section id="contact" className="contact section"><motion.div {...reveal}><span className="eyebrow">این بار، نوبتِ توست</span><h2>یک قرار با خودت؛<br/><em>برای پوستت، برای آرامشت.</em></h2><p>مریم میرشکاری — FaceShiraz</p><div className="actions"><a className="pill light" href="https://instagram.com/FaceShiraz"><MessageCircle/> پیام در اینستاگرام</a><a className="outline-pill" href="tel:+989000000000"><Phone/> تماس</a></div></motion.div></section>
    <footer><a href="#home" className="logo"><i>F</i><span>FaceShiraz<small>پوستت را زندگی کن</small></span></a><p>مراقبت تخصصی پوست با مریم میرشکاری</p><a href="https://instagram.com/FaceShiraz">@FaceShiraz</a><span>© {new Date().getFullYear()} تمامی حقوق محفوظ است.</span></footer>
    <FacialistShowcase />
    <CustomerStories />
  </main>;
}

