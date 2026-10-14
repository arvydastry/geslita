# Geslita: demo dizainas v1

Demonstracinė naujos **geslita.lt** svetainės versija. Galutinė svetainė bus **WordPress + Salient**, todėl kiekvienas blokas suplanuotas taip, kad jį būtų galima surinkti iš natyvių Salient elementų (žr. lentelę žemiau). Pirmoje iteracijoje: pradžios puslapis (prioritetas – paslaugų turinys iš geslita.lt/paslaugos) ir trys vidiniai puslapiai. Viso turinio nedarome.

Gyva demo versija: <https://arvydastry.github.io/geslita/>

Demo – statinis HTML / CSS / vanilla JS (GSAP ScrollTrigger parallax efektams). Forma niekur nesiunčia duomenų (rodomas pranešimas). Visi puslapiai turi `noindex, nofollow`. Visi judesio efektai paiso `prefers-reduced-motion`.

## Puslapiai

| Puslapis | Failas |
|---|---|
| Pradžia | `index.html` |
| Paslaugos ir kainos | `paslaugos.html` |
| Gesintuvų patikra (paslaugos detalė) | `gesintuvu-patikra.html` |
| Kontaktai | `kontaktai.html` |

Peržiūra: atidaryti `index.html` naršyklėje arba `python3 -m http.server 8123` ir <http://localhost:8123/> (`.claude/launch.json` jau sukonfigūruotas).

## Dizaino sistema

- **Logotipas:** originalus iš geslita.lt (`/uploads/Clean_Red/logo.png`). Tamsiam fonui sugeneruotas baltas variantas `assets/img/logo-geslita-balta.png` (liepsna originali), favicon iškirptas iš logotipo liepsnos.
- **Spalvos:** grafitas `#14161B` / `#171A20`, popierius `#F7F7F4` / `#EFEFE9`, vienas akcentas – signalinė raudona `#D93A2B` (hover `#B02D21`). Liepsnos oranžinė `#F08A24` naudojama tik logotipe ir linijų gradientuose, fosforo žalia `#93EA63` tik evakuacijos sekcijoje.
- **Šriftai (Google Fonts, latin-ext):** Archivo 500–800 (antraštės, tracking -0.02em), Manrope 400–700 (tekstas).
- **Formos:** kortelės ir medija 12 px, mygtukai ir laukeliai 7 px, žymos (chips, tel. mygtukas) pill.
- **Gylis:** sluoksniuotas hero (foto + panelė + chips skirtingu greičiu), fono parallax tamsiose juostose, dūmų video (screen blend) hero fone.

## Salient atitikmenys (geriausios praktikos iš themenectar.com/salient)

| Demo blokas | Salient įgyvendinimas |
|---|---|
| Fiksuota antraštė, permatoma virš hero | Theme Options → Header: Transparent + Sticky (shrink) |
| Hero su dūmų video ir sluoksniais | Row: Full Screen Row, Video Background (opacity), Column Parallax (chips ir foto stulpeliams) |
| Judanti paslaugų juosta po hero | Salient „Scrolling Text" elementas (nuorodos, pauzė ant hover) |
| Paslaugų kortelių tinklelis (3 stulpeliai, foto + tekstas) | WPBakery 3 kolonų eilutės su Image Box kortelėmis, hover „Grow", Animate on scroll |
| Evakuacijos „glow" juosta | Row BG: Parallax + tamsus overlay; planas – SVG paveikslėlis (Image element) |
| „Kaip viskas vyksta" maršruto kreivė | SVG kreivė (Raw HTML elementas) + Custom JS „draw" su ScrollTrigger; stotelės – Icon Box su Animate on scroll |
| Atsiliepimų marquee | Testimonial Carousel arba Scrolling Text su kortelėmis (auto-scroll, pauzė ant hover) |
| CTA juosta | Global Section (GS-Kvietimas) + Row BG Parallax |
| Poraštė | Global Section (GS-Poraštė): kontaktų pill mygtukai, didelis vandenženklis (Custom CSS) |
| Vidinių puslapių antraštės | Salient Page Header su BG image + Parallax |
| Paslaugų puslapis: sticky šoninė navigacija + kainų kortelė | WPBakery Row su „Column Sticky" (kairė kolona), anchor nuorodos; paryškinimas – Custom JS |
| Kontaktų „hub" kortelė, užslenkanti ant antraštės | Row su neigiama viršaus marža (Custom CSS klasė); kairė kolona – tamsus Column BG, dešinė – forma (WPForms/CF7) |
| Patikros puslapis: skeltinė antraštė + faktų juosta + „12 mėn." žiedas | Page Header su dviem kolonom; faktų Row su neigiama marža; žiedas – SVG (Raw HTML) + Custom JS „draw" |
| DUK akordeonas | Toggle Panels (FAQ) elementas |
| Atsiradimo animacijos | Elementų „Animate on scroll", CSS easing `cubic-bezier(0.22,1,0.36,1)` |
| Spalvos ir šriftai | Theme Options → Accent Color `#D93A2B`, Typography: Archivo / Manrope |

## Nuotraukos ir video

Visos nuotraukos ir video – iš [Pexels](https://www.pexels.com) (Pexels licencija; iliustracijos demo versijai, prieš paleidimą keistinos tikromis įmonės nuotraukomis). Failai `assets/img/`, atsisiųsti su `?auto=compress&cs=tinysrgb`.

| Failas | Pexels ID | Autorius |
|---|---|---|
| patikra-siena.jpg | [12072478](https://www.pexels.com/photo/12072478/) | Jan van der Wolf |
| patikra-balta.jpg | [12939477](https://www.pexels.com/photo/12939477/) | Mark John Hilario |
| signalizacija.jpg | [39183053](https://www.pexels.com/photo/39183053/) | Caleb Oquendo |
| vandentiekis.jpg | [189474](https://www.pexels.com/photo/189474/) | Duncan Oluwaseun |
| evakuacija-glow.jpg | [23877515](https://www.pexels.com/photo/23877515/) | Damir |
| laiptine.jpg | [11074978](https://www.pexels.com/photo/11074978/) | Artyusufpatel |
| mokymai.jpg | [32486734](https://www.pexels.com/photo/32486734/) | Shutterbug Aminul |
| cta-naktis.jpg | [29106030](https://www.pexels.com/photo/29106030/) | Lukhe |
| paslaugos-fonas.jpg | [9008241](https://www.pexels.com/photo/9008241/) | Jan van der Wolf |
| kontaktai-fonas.jpg | [14945296](https://www.pexels.com/photo/14945296/) | Jan van der Wolf |
| gesintuvas-vert.jpg | [4805958](https://www.pexels.com/photo/4805958/) | Ian Panelo |
| assets/video/smoke.mp4 | [7122113](https://www.pexels.com/video/7122113/) | (autorius Pexels puslapyje) |

Hero Lietuvos žemėlapio kontūras (su apskritimis) – iš [amCharts SVG maps](https://www.amcharts.com/svg-maps/) (nemokamas naudojimas su nuoroda); miestų taškai suprojektuoti Merkatoriaus projekcija pagal koordinates.

## Turinys, kurį reikia patvirtinti su klientu

- Pažadas „priminsime apie artėjančią patikrą" ir „didesnį kiekį pasiimame iš objekto" – ar įmonė taip dirba?
- Visi 5 atsiliepimai („Rasa N.", „Tomas Š.", „Ingrida P.", „Darius M.", „Jolanta K.") – išgalvoti demo reikmėms, keistini tikrais arba šalintini.
- Patikros periodiškumo formuluotė („ne rečiau kaip kartą per metus") – suderinti su galiojančiais teisės aktais.
- Papildomų paslaugų sąrašas (visuomenės sveikata, kenkėjų kontrolė, higienos mokymai) – patikslinti pagal faktinį sąrašą.
- Adresas Fabijoniškių g. 4A ir rekvizitai (įmonės kodas, PVM) – patikslinti.
- Visos kainos (gesintuvų, vandentiekio, signalizacijos, planų) – iš senojo kainoraščio su litais, būtina atnaujinti.

## v2 dizainas (lokalus eksperimentas)

Kataloge [`v2/`](v2/index.html) – drąsesnė to paties turinio versija (tie patys 4 puslapiai), šviesiu popieriaus fonu: tamsios liko tik firminės juostos (hero su „UGNIS NELAUKIA." – ugnies gradientas ir dūmai prasišviečia pro raides per mix-blend multiply, evakuacijos „glow" ir „12 mėn." žiedo juostos). Pilnas meniu antraštėje (mobiliame – fullscreen overlay), kontūrinio teksto marquee, horizontalus paslaugų „scroll-hijack" (mobiliame – vertikalus sąrašas), Lenis sklandus skrolas, raudonas CTA blokas, kontūriniai skaičiai ir vandenženkliai. Antraštėje logotipas keičiasi automatiškai (baltas ant tamsaus hero, originalus ant šviesaus fono). Peržiūra: `http://localhost:8123/v2/`. Nuotraukos naudojamos iš šakninio `assets/`. Salient kontekste hero kaukė, pan ir marquee būtų Custom CSS/JS sluoksnis (Theme Options), likusi struktūra – įprastos WPBakery eilutės. Į GitHub Pages nekeliama, kol klientas nepasirinks krypties.

## v3 eksperimentas (atmestas)

Kataloge `v3/` liko konservatyvios versijos eksperimentas; kryptis atmesta, o jam surinktas originalus geslita.lt turinys (kainoraščiai, tipai, periodiškumas, teisinis pagrindas) perkeltas į pagrindinę versiją: kainų žymės ir lentelės `paslaugos.html` blokuose, išskleidžiamas pilnas kainoraštis `gesintuvu-patikra.html`, kainų eilutės pradžios kortelėse.

**Svarbu dėl kainų:** originalioje svetainėje kainoraščiai dar su litais (iki 2015 m.), demo rodomos tik EUR „nuo" kainos. Prieš paleidžiant naują svetainę klientas privalo visas kainas peržiūrėti ir atnaujinti.

## v2 kandidatai

Prekių katalogo puslapis, „Saugos centras" ir „Naudinga informacija", tikros objektų nuotraukos, mega meniu su paslaugų stulpeliais, perkėlimas į Salient.
