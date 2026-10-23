دقیقاً. این بخش را باید به پرامپت قبلی اضافه کنیم تا Codex فقط انیمیشن را نسازد، بلکه **خودش تمام Assetهای تصویری موردنیاز را هم تولید و داخل پروژه قرار دهد**.

فقط روی **Scroll Interaction سینمایی** تمرکز کن و تمام تصاویر موردنیاز این تجربه را نیز خودت تولید و داخل پروژه استفاده کن.

## 1. تولید تمام تصاویر

من نمی‌خواهم تصاویر را جداگانه در اختیار تو قرار بدهم.

**خودت با ابزارهای تولید تصویر در دسترس، تمام Image Assetهای موردنیاز این تجربه را تولید کن و در پروژه قرار بده.**

برای هر مدل، مجموعه‌ای از تصاویر متوالی تولید کن تا بتوانیم حرکت چرخش صورت را با Scroll شبیه یک فیلم واقعی نمایش دهیم.

برای هر شخص حداقل این فریم‌ها را تولید کن:

* Profile / 45° — BEFORE
* 35° — BEFORE
* 25° — BEFORE
* 15° — BEFORE
* Front — BEFORE
* Treatment — DURING
* Front — AFTER
* 15° — AFTER
* 30° — AFTER
* 45° — AFTER

اگر برای طبیعی‌تر شدن چرخش به فریم‌های بیشتری نیاز است، خودت تعداد فریم‌ها را افزایش بده.

---

# 2. حفظ هویت هر مدل

این قسمت بسیار مهم است.

تمام فریم‌های مربوط به یک مدل باید دقیقاً یک شخص باشند.

در تمام فریم‌ها باید ثابت بماند:

* Facial structure
* Face shape
* Eyes
* Nose
* Lips
* Skin tone
* Hair
* Hairstyle
* Age
* Clothing
* Background
* Camera perspective
* Lighting

نباید هنگام تغییر زاویه، صورت مدل تغییر کند یا شبیه فرد دیگری شود.

هدف این است که فریم‌ها وقتی پشت سر هم نمایش داده می‌شوند، مثل **یک ویدیوی واقعی از چرخش سر** دیده شوند.

---

# 3. مدل‌های مختلف

برای هر Facial Treatment یک فرد متفاوت ایجاد کن.

### Model 01

Deep Cleansing Facial

پوست Before:

* visible pores
* excess oil
* uneven texture
* minor imperfections

After:

* cleaner
* smoother
* refined pores
* natural glow

### Model 02

Hydra Glow Facial

Before:

* dry
* dull
* dehydrated

After:

* deeply hydrated
* radiant
* dewy
* healthy glow

### Model 03

Acne Clarifying Facial

Before:

* realistic acne
* blemishes
* redness
* uneven texture

After:

* calmer skin
* reduced visible blemishes
* balanced complexion

### Model 04

Anti-Aging Renewal

Before:

* natural fine lines
* texture
* subtle loss of firmness

After:

* smoother appearance
* refined texture
* firmer-looking skin

### Model 05

Brightening Facial

Before:

* uneven tone
* subtle dark spots
* dull complexion

After:

* more even tone
* luminous appearance
* brighter-looking skin

تغییرات باید **واقع‌گرایانه و ظریف** باشند.

از Beauty Filter شدید یا پوست پلاستیکی استفاده نکن.

---

# 4. فرمت تصاویر

تصاویر تولیدشده را برای Web بهینه کن.

ترجیحاً:

* WebP یا AVIF
* رزولوشن مناسب Desktop
* compression مناسب
* حفظ کیفیت پوست و جزئیات صورت

Assetها را به شکل منظم ذخیره کن.

مثلاً:

```text
/assets/facial-scroll/
    model-01/
        before-01.webp
        before-02.webp
        before-03.webp
        before-04.webp
        before-05.webp
        treatment.webp
        after-01.webp
        after-02.webp
        after-03.webp
        after-04.webp

    model-02/
        ...
```

---

# 5. ساخت Scroll Animation

صفحه نباید به شکل معمولی Scroll شود.

یک:

**Fullscreen Sticky Stage**

بساز.

Scroll فقط Timeline را کنترل کند.

یعنی:

**Scroll Down → Animation Forward**

**Scroll Up → Animation Reverse**

اگر کاربر Scroll را متوقف کرد، تصویر دقیقاً روی همان Frame متوقف شود.

---

# 6. چرخش صورت

وقتی کاربر Scroll می‌کند:

```text
45° BEFORE
↓
35° BEFORE
↓
25° BEFORE
↓
15° BEFORE
↓
FRONT BEFORE
↓
TREATMENT
↓
FRONT AFTER
↓
15° AFTER
↓
30° AFTER
↓
45° AFTER
```

این تغییر باید کاملاً Smooth باشد.

اگر تعداد فریم‌های تولیدشده برای حرکت طبیعی کافی نیست، خودت فریم‌های بیشتری تولید کن.

---

# 7. Transition بین مدل‌ها

بعد از کامل شدن مدل اول:

مدل اول به آرامی از صحنه خارج شود.

همزمان مدل دوم وارد شود.

Transition باید به شکل:

**Model 01 → cinematic exit → Model 02 cinematic entrance**

باشد.

از Cut ناگهانی استفاده نکن.

---

# 8. Mouse Interaction

Mouse movement فقط یک حرکت ظریف ایجاد کند.

Mouse X:

حرکت بسیار کم صورت یا Camera.

Mouse Y:

Parallax بسیار ظریف.

اما Scroll همچنان کنترل اصلی Animation باشد.

---

# 9. تکنولوژی

برای Animation از:

**GSAP + ScrollTrigger**

استفاده کن.

برای نمایش فریم‌ها در صورت نیاز از:

**HTML Canvas + image sequence**

استفاده کن تا تغییر فریم‌ها بسیار روان باشد.

Stage باید:

```text
position: sticky
height: 100vh
```

باشد.

Scroll container فقط برای ایجاد Timeline استفاده شود.

---

# 10. نتیجه‌ای که می‌خواهم

وقتی کاربر وارد این بخش می‌شود، فقط یک صحنه را می‌بیند.

یک شخص روبه‌روی اوست.

با Scroll:

**صورت می‌چرخد.**

سپس:

**Before → Treatment → After**

اتفاق می‌افتد.

با ادامه Scroll:

شخص اول خارج می‌شود.

شخص دوم وارد می‌شود.

دوباره:

**Face Rotation → Before → Treatment → After**

و این روند ادامه پیدا می‌کند.

**این یک Scroll-driven cinematic experience است، نه یک صفحه معمولی.**

مهم‌ترین وظیفه تو این است که:

1. تمام تصاویر لازم را خودت تولید کنی.
2. تصاویر هر مدل را از نظر هویت کاملاً consistent نگه داری.
3. تصاویر را داخل پروژه قرار دهی.
4. Scroll را به Timeline متصل کنی.
5. چرخش صورت و Before/After را کاملاً Smooth و Cinematic اجرا کنی.

فعلاً هیچ بخش دیگری از سایت را نساز. فقط همین **Cinematic Scroll Experience** را به صورت کامل و قابل اجرا پیاده‌سازی کن.
