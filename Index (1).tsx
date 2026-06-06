import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, ArrowUpRight, Cake, Leaf, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/la-cakery-logo.png";

import InstagramFeed from "@/components/InstagramFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-tight">
            La Cakery<span className="text-pink">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="https://lacakery-london.square.site/s/order" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors">Order London</a>
            <a href="https://lacakery-london.square.site/s/order" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors">Order Cambridge</a>
            <Link to="/8-inch-cakes" className="hover:text-pink transition-colors">8" Cakes</Link>
            <a href="#story" className="hover:text-pink transition-colors">Our Story</a>
            <a href="#visit" className="hover:text-pink transition-colors">Visit</a>
          </div>
          <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-pink hover:text-white px-5">
            <a href="/call">Call Us</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen bg-noir text-primary-foreground pt-16">
        {/* Big brand title */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 lg:pt-14">
          <h1 className="font-serif leading-[0.85] tracking-tight text-balance">
            <img src={logo} alt="La Cakery — Edible Art since 2012" className="w-full max-w-3xl h-auto" />
          </h1>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 lg:pt-12 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 z-10 animate-fade-up">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-pink-blush mb-8">
              <span className="h-px w-8 bg-pink" />
              London, Ontario · Since 2020
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-balance">
              Sweet things,<br />
              <span className="italic text-pink">made beautifully.</span>
            </h2>
            <p className="mt-8 text-lg text-pink-blush/80 max-w-md leading-relaxed">
              Supreme Cakes · Custom Cakes · Italian Pastries · Cupcakes · Donuts · Cookies · Macarons · Gluten Free · Vegan · Keto
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-pink hover:bg-pink-deep text-white px-8 h-12">
                <a href="https://lacakery-london.square.site/s/order" target="_blank" rel="noopener noreferrer">Order London <ArrowUpRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white px-8 h-12">
                <a href="https://wa.me/15196686045?text=Hi%20La%20Cakery%20London%2C%20I%27d%20like%20to%20order%20a%20custom%20cake" target="_blank" rel="noopener noreferrer">Custom Cake on WhatsApp <ArrowUpRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-primary/40 border border-white/10 rounded-sm p-10 lg:p-14 text-center">
              <div className="text-[10px] uppercase tracking-[0.3em] text-pink mb-4">★ 4.8</div>
              <div className="font-serif text-3xl md:text-4xl text-pink-blush leading-tight">
                Loved by hundreds of <span className="italic text-pink">London families</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 inset-x-0 border-t border-white/10 py-5 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap font-serif text-2xl text-pink-blush/80">
            {Array(2).fill(0).map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                {["Mango Cake", "Tuxedo", "Black Forest", "Macarons", "Cannoli", "Sfogliatelle", "Tiramisu", "Eclairs", "Butter Tarts", "Millefoglie"].map((item) => (
                  <span key={item} className="mx-8 italic">{item} <span className="text-pink not-italic mx-2">✦</span></span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIETARY BADGES */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Cake, title: "Custom Cakes", desc: "Birthdays, weddings & every celebration in between." },
              { icon: Leaf, title: "Always Inclusive", desc: "Vegan, gluten-free, sugar-free & keto-friendly options." },
              { icon: Heart, title: "Made with care", desc: "Friendly staff who help you find the perfect dessert." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-8 border border-border hover:border-pink hover:bg-pink-soft/30 transition-all duration-300 rounded-sm">
                <Icon className="h-8 w-8 text-pink mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-3xl mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CAMBRIDGE LOCATION INTRO */}
      <section className="py-20 bg-noir text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-pink mb-4">Cambridge, Ontario · Since 2022</div>
            <h2 className="font-serif text-5xl md:text-7xl leading-none text-balance">
              La Cakery <span className="italic text-pink">Cambridge</span>
            </h2>
            <p className="mt-6 text-pink-blush/80 leading-relaxed max-w-md">
              For years, La Cakery has been Cambridge's go-to spot for high quality cakes and pastries. We pride ourselves on baking with the freshest ingredients and creating something for everyone.
            </p>
            <p className="mt-4 text-pink-blush/80 leading-relaxed max-w-md">
              Supreme Cakes · Custom Cakes · Italian Pastries · Cupcakes · Donuts · Cookies · Macarons · Gluten Free · Vegan · Keto
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-pink hover:bg-pink-deep text-white px-8 h-12">
                <a href="https://lacakery-london.square.site/s/order" target="_blank" rel="noopener noreferrer">Order Cambridge <ArrowUpRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white px-8 h-12">
                <a href="https://wa.me/15192678045?text=Hi%20La%20Cakery%20Cambridge%2C%20I%27d%20like%20to%20order%20a%20custom%20cake" target="_blank" rel="noopener noreferrer">Custom Cake on WhatsApp <ArrowUpRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-sm overflow-hidden">
            <div className="bg-primary p-6">
              <MapPin className="h-5 w-5 text-pink mb-3" strokeWidth={1.5} />
              <div className="text-[10px] uppercase tracking-widest text-pink-blush/70 mb-1">Address</div>
              <p className="font-serif text-lg leading-snug">580 Hespeler Road<br />Cambridge, ON N1R 6J8</p>
            </div>
            <div className="bg-primary p-6">
              <Clock className="h-5 w-5 text-pink mb-3" strokeWidth={1.5} />
              <div className="text-[10px] uppercase tracking-widest text-pink-blush/70 mb-1">Hours</div>
              <p className="font-serif text-base leading-snug">Tue – Thu · 10 AM – 7 PM<br />Fri – Sat · 10 AM – 8 PM<br />Sun · 10 AM – 6 PM</p>
              <div className="mt-3 text-xs text-pink-blush/70">★ 4.2 · 410+ ratings</div>
            </div>
          </div>
        </div>
      </section>


      {/* GOOGLE REVIEWS — CAMBRIDGE */}
      <section id="reviews" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-pink mb-4">Reviews on Google</div>
            <h2 className="font-serif text-5xl md:text-7xl text-balance">
              Loved in <span className="italic text-pink">Cambridge</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Lynn Souliere",
                when: "a month ago",
                text: "We bought a wedding cake — and it was exquisite. Just as requested, yummy, not too sweet. Everyone raved about it. We knew we could count on La Cakery to make a once-in-a-lifetime day extra special. Thank you :-)",
                meta: "Food: 5 · Service: 5 · Atmosphere: 5",
              },
              {
                name: "Captain Hyderabad",
                when: "a month ago",
                text: "The best cake shop and bakery in Cambridge. They also have macarons and Italian bakery stuff too. They take orders on customized cakes and have nut-free cakes too — do give it a try.",
                meta: "Dinner · CA$60–70 · Food: 5 · Service: 5 · Atmosphere: 5",
              },
              {
                name: "Angela Asadoorian",
                when: "a month ago",
                text: "I ordered a Limoncello cake, picked it up fresh the next day. It was delicious. Very light. The baker behind the counter was super helpful to assist me in making my choice from the extended choices.",
                meta: "Take out · Food: 5 · Service: 5",
              },
            ].map((r) => (
              <article key={r.name} className="p-8 border border-border rounded-sm hover:border-pink hover:bg-pink-soft/20 transition-all duration-300 flex flex-col">
                <div className="text-pink text-lg mb-4">★★★★★</div>
                <p className="font-serif text-xl leading-snug text-balance flex-1">
                  "{r.text}"
                </p>
                <div className="mt-6 pt-6 border-t border-border/60">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{r.when} · on Google</div>
                  <div className="text-xs text-pink mt-2">{r.meta}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEEDS */}
      <section id="instagram" className="py-24 lg:py-32 bg-pink-soft/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-pink mb-4">Latest from Instagram</div>
            <h2 className="font-serif text-5xl md:text-7xl text-balance">
              Fresh out of <span className="italic text-pink">the oven</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Follow along for daily bakes, custom cakes, and behind-the-counter moments from both shops.
            </p>
          </div>

          <InstagramFeed
            handle="lacakerylondon"
            label="London · @lacakerylondon"
            postUrls={[
              "https://www.instagram.com/lacakerylondon/",
            ]}
          />

          <InstagramFeed
            handle="lacakerycambridge"
            label="Cambridge · @lacakerycambridge"
            postUrls={[
              "https://www.instagram.com/lacakerycambridge/",
            ]}
          />

          <p className="text-center text-xs text-muted-foreground mt-8">
            Want specific posts featured? Paste the post URLs and we'll embed them here.
          </p>
        </div>
      </section>

      {/* STORY / SHOP */}
      <section id="story" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-pink-soft/40 border border-pink/20 rounded-sm p-10 lg:p-14">
              <div className="text-[10px] uppercase tracking-[0.3em] text-pink mb-4">A neighbourhood favourite</div>
              <div className="font-serif text-3xl md:text-4xl leading-tight italic text-foreground">
                "The best birthday cake we've ever had."
              </div>
              <div className="text-xs mt-4 text-muted-foreground">— A happy London family</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="text-xs uppercase tracking-[0.25em] text-pink mb-4">Our Story</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-none text-balance">
              A neighbourhood bakery with <span className="italic">big dreams</span>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For years, La Cakery has been Wonderland Road's go-to spot for unforgettable cakes and pastries. We pride ourselves on baking with the freshest ingredients and creating something for everyone — from a light Chantilly cake for grandma's birthday to a show-stopping party centerpiece.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Walk in, say hi, and let our team help you pick the perfect treat.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="font-serif text-4xl text-pink">100+</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Cake designs</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-pink">6</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Days a week</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-pink">∞</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Smiles delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT / CONTACT */}
      <section id="visit" className="py-24 lg:py-32 bg-noir text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-pink mb-4">Come say hi</div>
            <h2 className="font-serif text-5xl md:text-7xl text-balance">
              Visit us in <span className="italic text-pink">London</span> &amp; <span className="italic text-pink">Cambridge</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                key: "london",
                eyebrow: "London · Wonderland Rd",
                address: "1021 Wonderland Rd S\nLondon, ON N6K 3V1",
                phone: "(519) 668-6045",
                tel: "5196686045",
                mapsQuery: "1021+Wonderland+Rd+S+London+ON",
                cta: "Visit London",
                hours: "Tue – Sun\n10 AM – 7 PM",
              },
              {
                key: "cambridge",
                eyebrow: "Cambridge · Hespeler Rd",
                address: "580 Hespeler Road\nCambridge, ON N1R 6J8",
                phone: "(519) 267-8045",
                tel: "5192678045",
                mapsQuery: "580+Hespeler+Road+Cambridge+ON",
                cta: "Visit Cambridge",
                hours: "Tue – Thu · 10 AM – 7 PM\nFri – Sat · 10 AM – 8 PM\nSun · 10 AM – 6 PM",
              },
            ].map((l) => (
              <div key={l.key} className="bg-primary p-8 lg:p-10 rounded-sm">
                <div className="text-[10px] uppercase tracking-[0.25em] text-pink mb-4">{l.eyebrow}</div>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-2">
                    <MapPin className="h-5 w-5 text-pink mb-3" strokeWidth={1.5} />
                    <div className="text-[10px] uppercase tracking-widest text-pink-blush/70 mb-1">Address</div>
                    <p className="font-serif text-xl leading-snug whitespace-pre-line">{l.address}</p>
                  </div>
                  <div>
                    <Clock className="h-5 w-5 text-pink mb-3" strokeWidth={1.5} />
                    <div className="text-[10px] uppercase tracking-widest text-pink-blush/70 mb-1">Hours</div>
                    <p className="font-serif text-base leading-snug whitespace-pre-line">{l.hours}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-pink" strokeWidth={1.5} />
                  <a href={`tel:${l.tel}`} className="font-serif text-lg hover:text-pink transition-colors">
                    {l.phone}
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full bg-pink hover:bg-pink-deep text-white px-6 h-12">
                    <a
                      href={`https://maps.google.com/?q=${l.mapsQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.cta} <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div id="order" className="mt-16 text-center">
            <h3 className="font-serif text-4xl md:text-5xl mb-4">Have a question?</h3>
            <p className="text-pink-blush/70 mb-8 max-w-xl mx-auto">Give us a ring — we're happy to help with custom orders, allergies and pickup times.</p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="tel:5196686045"
                className="group bg-primary/60 border border-white/10 hover:border-pink rounded-sm p-6 transition-all"
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-pink mb-2">London inquiries</div>
                <div className="flex items-center justify-center gap-2 font-serif text-2xl group-hover:text-pink transition-colors">
                  <Phone className="h-5 w-5 text-pink" strokeWidth={1.5} />
                  (519) 668-6045
                </div>
              </a>
              <a
                href="tel:5192678045"
                className="group bg-primary/60 border border-white/10 hover:border-pink rounded-sm p-6 transition-all"
              >
                <div className="text-[10px] uppercase tracking-[0.25em] text-pink mb-2">Cambridge inquiries</div>
                <div className="flex items-center justify-center gap-2 font-serif text-2xl group-hover:text-pink transition-colors">
                  <Phone className="h-5 w-5 text-pink" strokeWidth={1.5} />
                  (519) 267-8045
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-serif text-2xl">La Cakery<span className="text-pink">.</span></div>
          <p className="text-xs text-pink-blush/60 text-center">© {new Date().getFullYear()} La Cakery. Baked with love.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs">
            <a
              href="https://www.instagram.com/lacakerylondon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="La Cakery London on Instagram"
              className="inline-flex items-center gap-2 hover:text-pink transition-colors"
            >
              <Instagram className="h-4 w-4" /> @lacakerylondon
            </a>
            <a
              href="https://www.instagram.com/lacakerycambridge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="La Cakery Cambridge on Instagram"
              className="inline-flex items-center gap-2 hover:text-pink transition-colors"
            >
              <Instagram className="h-4 w-4" /> @lacakerycambridge
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
