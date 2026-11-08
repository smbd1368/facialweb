"use client";
import Link from "next/link";
import { ArrowUpLeft, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scroll-story.css";

const names = ["before-01", "before-02", "before-03", "before-04", "before-05", "treatment", "after-01", "after-02", "after-03", "after-04"];
const models = [
  { id: "01", en: "Deep Cleansing", fa: "نفسِ تازه برای پوست", before: "آغاز از یک پاکسازی عمیق و آگاهانه", after: "پوستی سبک‌تر، پاک‌تر و سرزنده‌تر" },
  { id: "02", en: "Hydra Glow", fa: "رطوبت، رازِ درخشش", before: "وقتی پوست تشنه‌ی طراوت است", after: "لطافت عمیق با درخششی از جنس خودت" },
  { id: "03", en: "Acne Clarifying", fa: "آرامش برای پوست", before: "مراقبتی ملایم برای پوست‌های پرچالش", after: "تعادل بیشتر، التهاب کمتر، حس بهتر" },
  { id: "04", en: "Anti-Aging Renewal", fa: "زمان، با پوست مهربان‌تر", before: "احترام به سن و داستان طبیعی پوست", after: "طراوتی ظریف، بدون تغییر هویت چهره" },
  { id: "05", en: "Brightening", fa: "روشنایی از درون", before: "خداحافظی با کدری و خستگی پوست", after: "شفاف‌تر، یکدست‌تر، همچنان خودِ تو" },
];

export function ScrollStory() {
  const root = useRef<HTMLElement>(null);
  const front = useRef<HTMLImageElement>(null);
  const back = useRef<HTMLImageElement>(null);
  const cache = useRef<HTMLImageElement[][]>([]);
  const [loaded, setLoaded] = useState(false);
  const [ui, setUi] = useState({ model: 0, frame: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let cancelled = false;
    cache.current = models.map(() => []);
    const loadModel = (m: number) =>
      Promise.all(names.map((n, i) => new Promise<void>((resolve) => {
        const img = new Image();
        img.src = `/assets/facial-scroll/model-${String(m + 1).padStart(2, "0")}/${n}.webp`;
        img.onload = () => { cache.current[m][i] = img; resolve(); };
        img.onerror = () => resolve();
      })));
    const preload = async () => {
      await loadModel(0);
      if (cancelled) return;
      setLoaded(true);
      for (let m = 1; m < models.length; m++) {
        if (cancelled) return;
        await loadModel(m);
      }
    };
    void preload();
    const total = 49;
    const trigger = ScrollTrigger.create({
      trigger: root.current,
      start: "top top",
      end: "bottom bottom",
      scrub: .12,
      onUpdate: (self) => {
        const index = Math.min(total, Math.round(self.progress * total));
        const m = Math.floor(index / 10), f = index % 10;
        setUi((p) => p.model === m && p.frame === f ? p : { model: m, frame: f });
      },
    });
    return () => { cancelled = true; trigger.kill(); };
  }, []);

  const current = models[ui.model];
  const src = `/assets/facial-scroll/model-${String(ui.model + 1).padStart(2, "0")}/${names[ui.frame]}.webp`;
  const phase = ui.frame < 5 ? "قبل از درمان" : ui.frame === 5 ? "در حال درمان" : "بعد از درمان";

  return (
    <main className="sequence-root hq-sequence" ref={root}>
      <div className="sequence-stage">
        <div className="portrait-backdrop" style={{ backgroundImage: `url('${src}')` }} />
        <div className="portrait-frame">
          <img ref={back} className="portrait-ghost" src={src} alt="" />
          <img ref={front} className="portrait-main" src={src} alt={`مدل ${current.fa}، ${phase}`} />
        </div>
        <div className="sequence-shade" />
        <div className="sequence-brand"><i>F</i><span>FaceShiraz</span></div>
        {!loaded && <div className="sequence-loader"><b>FaceShiraz</b><span>داستان پوستت در حال آغاز است</span></div>}
        <div className="model-copy" key={current.id}>
          <span className="model-count">MODEL {current.id} / 05</span>
          <small>{current.en}</small>
          <h1>{current.fa}</h1>
          <p>{ui.frame < 6 ? current.before : current.after}</p>
          {ui.model === 0 && ui.frame < 2 && (
            <div className="welcome-copy">
              <h2>کشف FaceShiraz</h2>
              <p>به دنیای مراقبت و پاکسازی پوست خوش آمدید</p>
              <Link href="/main" className="sequence-enter sequence-enter--hero">
                ورود به دنیای پاکسازی <ArrowUpLeft size={21} />
              </Link>
            </div>
          )}
        </div>
        <div className="phase">
          <span>{phase}</span><i><b style={{ width: `${(ui.frame + 1) * 10}%` }} /></i>
          <em>{String(ui.frame + 1).padStart(2, "0")} / 10</em>
        </div>
        <div className="sequence-hint"><ChevronDown /><span>داستان پوست را ورق بزن</span></div>
      </div>
      <nav className="contact-float" aria-label="راه‌های ارتباط با FaceShiraz">
        <a className="contact-float__whatsapp" href="https://wa.me/989173233606" target="_blank" rel="noopener noreferrer" aria-label="چت در واتساپ">
          <MessageCircle size={21} /><span>چت واتساپ</span><b>09173233606</b>
        </a>
        <a className="contact-float__bale" href="https://ble.ir" target="_blank" rel="noopener noreferrer" aria-label="ورود به پیام‌رسان بله">
          <MessageCircle size={20} /><span>چت در بله</span>
        </a>
        <a className="contact-float__call" href="tel:+989173233606" aria-label="تماس تلفنی با FaceShiraz">
          <Phone size={20} /><span>تماس</span>
        </a>
      </nav>
    </main>
  );
}
