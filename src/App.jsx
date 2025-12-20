import React, { useState, useEffect } from "react";
import HeroImage from "./assets/cover.png";
import TessPhoto from "./assets/meet-tess.png";
import Logo from "./assets/logo.jpg";
import TshaBadge from "./assets/tsha-badge.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Meet Tess", href: "#about" },
  { label: "Offerings", href: "#offerings" },
  { label: "What to Expect", href: "#experience" },
  { label: "Events & Sessions", href: "#events" },
  { label: "Stay Connected", href: "#newsletter" },
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-coconut">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <About />
        <Offerings />
        <PublicEvents />
        <Experience />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-coconut/80 backdrop-blur border-b border-moss/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {Logo && (
            <img
              src={Logo}
              alt="The Conscious Movement logo"
              className="h-20 w-20 rounded-full object-cover"
            />
          )}
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-moss/80 hover:text-mandarine transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex flex-col items-center justify-center rounded-full border border-moss/20 px-3 py-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="w-5 h-[2px] bg-moss" />
          <span className="w-5 h-[2px] bg-moss my-[3px]" />
          <span className="w-5 h-[2px] bg-moss" />
        </button>

        {open && (
          <div className="absolute top-full inset-x-0 bg-coconut border-t border-moss/10 md:hidden">
            <div className="flex flex-col px-4 py-3 space-y-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-1 text-moss/90"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

/**
 * HERO
 * - THE / Conscious / MOVEMENT over the cover image
 * - Image has subtle parallax on scroll
 */
function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageOffset = -(scrollY * 0.05);

  return (
    <section id="home" className="relative h-[80vh] md:h-screen flex items-center justify-center">
      {/* Background image with gentle parallax */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${HeroImage})`,
          transform: `translateY(${imageOffset}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-moss/70 via-moss/40 to-pistachio/30" />

      {/* Centered title text */}
      <div className="relative z-10 w-full px-6">
        <div className="max-w-3xl mx-auto text-center text-coconut">
          <p className="font-sans text-xs md:text-sm tracking-[0.6em] uppercase text-coconut mb-3 md:mb-4">
            THE
          </p>

          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-dustyPink leading-tight md:leading-none inline-block px-2">
            Conscious
          </h1>

          <p className="font-sans text-xs md:text-sm tracking-[0.6em] uppercase text-coconut mt-3 md:mt-4">
            MOVEMENT
          </p>
        </div>
      </div>
    </section>
  );
}

/**
 * INTRO SECTION
 * - Lives below the cover
 * - Contains your copy and CTAs
 */
function IntroSection() {
  return (
    <section className="py-12 md:py-16 bg-coconut">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-moss/70">
          Healing the Self to Awaken the Collective
        </p>

        <div className="space-y-4 text-sm md:text-base text-moss/90 leading-relaxed mb-8">
          <p>
            The Conscious Movement was created to guide us home to our true
            nature — a place of interconnection, higher awareness, and deep
            inner peace and love. Through sound healing, we can slow down, turn
            inward, and listen again to the quiet wisdom that has always lived
            within us.
          </p>
          <p>
            When we heal ourselves, that healing ripples outward, touching every
            life we meet. May we all continue to expand, evolve, and rise into
            new levels of awareness and connection.
          </p>
          <p>This is The Conscious Movement.</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://calendly.com/theconsciousmvt"
            target="_blank"
            className="px-6 py-3 rounded-full bg-mandarine text-coconut text-sm font-semibold shadow-md hover:bg-mandarine/90 transition"
          >
            Book a Sound Bath
          </a>
          <a
            href="#newsletter"
            className="px-6 py-3 rounded-full border border-moss/20 text-moss text-sm font-semibold hover:bg-coconut/60 transition"
          >
            Join the Email List
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-coconut">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.3em] text-moss/60 mb-3">
            Meet Tess
          </p>
          <h2 className="text-3xl md:text-4xl font-script text-moss mb-4">
            Sound Healing Practitioner
          </h2>
          <p className="text-sm md:text-base text-moss/90 leading-relaxed mb-4">
            Tess is a professionally certified Sound Healing Practitioner
            through The Sound Healers Academy and a certified Barre Yoga
            instructor. She blends sound and mindful intention to create
            immersive healing experiences that support emotional release,
            nervous system regulation, and deep inner alignment.
          </p>
          <p className="text-sm md:text-base text-moss/80 leading-relaxed mb-4">
            As the founder of The Conscious Movement, Tess’ work is rooted in
            healing the self to awaken the collective. When we raise our own
            vibration, we naturally create a ripple effect and uplift the
            vibrations of every person we come into contact with. This is the
            heart of The Conscious Movement: individual healing as a catalyst
            for collective transformation.
          </p>
          <p className="text-sm md:text-base text-moss/80 leading-relaxed mb-8">
            Her mission is to help others reconnect with their inner wisdom,
            soften what feels heavy, and expand into their most aligned selves.
            Her vision is a world where conscious living becomes a shared
            practice, where each person’s healing contributes to a more vibrant,
            compassionate, and awakened community.
          </p>
          <a
            href="https://calendly.com/theconsciousmvt"
            target="_blank"
            className="px-6 py-3 rounded-full bg-mandarine text-coconut text-sm font-semibold shadow-md hover:bg-mandarine/90"
          >
            Book a Sound Bath
          </a>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-pistachio/20" />
            <img
              src={TessPhoto}
              alt="Tess with sound bowls in the grass"
              className="relative rounded-[2rem] shadow-xl border border-coconut object-cover max-h-[420px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Offerings() {
  return (
    <section id="offerings" className="py-16 md:py-20 bg-pistachio/15">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-moss/60 mb-3">
          Offerings
        </p>

        <h2 className="text-3xl md:text-4xl font-script text-moss mb-4">
          Book A Sound Bath
        </h2>

        <p className="text-sm md:text-base text-moss/85 max-w-3xl mb-10 leading-relaxed">
          Welcome to your sound healing journey. Each session is designed to
          help you rebalance your energy, calm your nervous system, and return
          to alignment through the power of crystal singing bowls, breathwork,
          and intuitive guidance.
        </p>

        {/* Private Sessions */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <SessionCard
            title="Private 1-On-1 Sound Bath — $160"
            description="A deeply personalized sound healing experience designed to rebalance your energy, soothe your nervous system, and guide you back into alignment. Using crystal singing bowls, breathwork, and intuitive healing, I create a safe and nurturing space for you to release stress, reconnect with yourself, and receive what your mind, body, and spirit need."
            ctaLabel="Book Now"
            ctaHref="https://calendly.com/theconsciousmvt/private-sound-bath-1-hour?back=1"
          />

          <SessionCard
            title="Private Group Sound Bath (2 or more people) — $300"
            description="A calming, immersive sound healing journey using crystal singing bowls, breathwork, and guided relaxation. Perfect for couples, friends, teams, and small gatherings. Each session includes an optional closing roundtable for connection, reflection, and shared healing."
            ctaLabel="Book Now"
            ctaHref="https://calendly.com/theconsciousmvt/private-group-sound-bath?back=1"
          />
        </div>

        {/* Packages */}
        <div className="border-t border-moss/10 pt-10">
          <h3 className="text-lg md:text-xl font-semibold text-moss mb-3">
            Packages (Save When You Book More Than One)
          </h3>

          <p className="text-sm md:text-base text-moss/85 max-w-3xl mb-8 leading-relaxed">
            Deepen your healing journey with ongoing sound baths designed to
            support long-term alignment, emotional clarity, and nervous system
            regulation. Packages offer both savings and scheduling flexibility.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <PackageCard
              title="3-Session Package — $430 (Save $50)"
              description="A gentle introduction to consistent energetic work. Perfect for transitions, intention setting, and deeper emotional support."
            />
            <PackageCard
              title="5-Session Package — $700 (Save $100)"
              description="Strengthen your practice and create lasting shifts. Ideal for those seeking grounding, clarity, and regular energetic alignment."
            />
            <PackageCard
              title="10-Session Package — $1,350 (Save $250)"
              description="A full transformational journey. For those ready to make sound healing part of their wellness lifestyle."
            />
          </div>

          <p className="text-sm text-moss/85">
            Contact Me For Package Purchases{" "}
            <a
              href="mailto:theconsciousmvt@gmail.com"
              className="underline decoration-mandarine/60 underline-offset-2 hover:text-mandarine transition-colors"
            >
              (theconsciousmvt@gmail.com)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function SessionCard({ title, description, ctaLabel, ctaHref }) {
  return (
    <div className="h-full rounded-3xl bg-coconut shadow-sm border border-moss/10 p-6 flex flex-col">
      <h3 className="text-base md:text-lg font-semibold text-moss mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-sm text-moss/85 leading-relaxed mb-6 flex-1">
        {description}
      </p>
      <a
        href={ctaHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-mandarine text-coconut text-xs md:text-sm font-semibold shadow-md hover:bg-mandarine/90 transition"
      >
        {ctaLabel}
      </a>
    </div>
  );
}

function PackageCard({ title, description }) {
  return (
    <div className="rounded-3xl bg-coconut shadow-sm border border-moss/10 p-5 flex flex-col">
      <h4 className="text-sm md:text-base font-semibold text-moss mb-2">
        {title}
      </h4>
      <p className="text-xs md:text-sm text-moss/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function PublicEvents() {
  return (
    <section id="events" className="py-16 md:py-20 bg-coconut">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-moss/60 mb-3">
          Public Events
        </p>

        <h2 className="text-3xl md:text-4xl font-script text-moss mb-6">
          Attend a Community Sound Bath
        </h2>

        <p className="text-sm md:text-base text-moss/85 max-w-2xl mx-auto leading-relaxed mb-8">
          Join a scheduled sound bath in Los Angeles and nearby areas. These
          events are open to the public and an accessible way to experience the
          power of sound healing, community grounding, and gentle nervous system
          regulation.
        </p>

        <a
          href="https://www.eventbrite.com/o/tess-trotter-119759481951"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-mandarine text-coconut text-sm font-semibold shadow-md hover:bg-mandarine/90 transition"
        >
          View Upcoming Events on Eventbrite
        </a>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 bg-coconut">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-xs uppercase tracking-[0.3em] text-moss/60 mb-3">
          What to Expect
        </p>
        <h2 className="text-3xl md:text-4xl font-script text-moss mb-6">
          A soft landing for your whole self
        </h2>
        <div className="space-y-4 text-sm md:text-base text-moss/85 leading-relaxed">
          <p>
            Each session begins with gentle grounding, so your body has time to
            arrive. You&apos;ll be invited to rest comfortably—on a mat,
            bolster, or chair—while Tess guides you into a slower rhythm.
          </p>
          <p>
            Crystal alchemy bowls, chimes, and subtle sound textures create a
            layered, cinematic experience that supports your nervous system in
            shifting out of fight-or-flight and into deep rest.
          </p>
          <p>
            There&apos;s no way to do it wrong. You&apos;re welcome exactly as
            you are—tender, tired, curious, or anything in between.
          </p>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="py-16 md:py-20 bg-coconut">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-moss/60 mb-3">
          Stay Connected
        </p>
        <h2 className="text-3xl md:text-4xl font-script text-moss mb-4">
          Notes from The Conscious Movement
        </h2>
        <p className="text-sm md:text-base text-moss/80 mb-6">
          Occasional love notes with upcoming events, nervous-system friendly
          practices, and gentle reminders to slow down. No spam, just softness.
        </p>

        {/* MAILCHIMP FORM */}
        <form
          action="https://YOUR-DC-HERE.list-manage.com/subscribe/post?u=XXXX&amp;id=XXXX"
          method="post"
          target="_blank"
          noValidate
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 sm:items-center"
        >
          <label className="sr-only" htmlFor="mce-EMAIL">
            Email address
          </label>
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            required
            placeholder="you@example.com"
            className="flex-1 rounded-full border border-moss/20 bg-white/80 px-4 py-2.5 text-sm text-moss placeholder:text-moss/40 focus:outline-none focus:ring-2 focus:ring-mandarine/60"
          />

          <div aria-hidden="true" className="absolute left-[-5000px]">
            <input
              type="text"
              name="b_xxxx_xxxx"
              tabIndex="-1"
              defaultValue=""
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-mandarine text-coconut text-sm font-semibold px-6 py-2.5 hover:bg-mandarine/90 transition"
          >
            Join the List
          </button>
        </form>

        <p className="mt-3 text-xs text-moss/60">
          You can unsubscribe at any time with one click.
        </p>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-moss/10 bg-coconut py-8 mt-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xs text-moss/70 text-center md:text-left">
          <p>© {new Date().getFullYear()} The Conscious Movement · Tess</p>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center md:justify-start gap-4 mt-3">
            <a
              href="https://instagram.com/theconsciousmovement"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-moss/30 text-moss text-lg">
                <i className="fab fa-instagram" />
              </span>
            </a>

            <a
              href="https://www.youtube.com/@the-conscious-movement"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-80 transition"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-moss/30 text-moss text-lg">
                <i className="fab fa-youtube" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-moss/70 mt-6">
        Crafted with love and presence. |{" "}
        <a href="https://jasminweb.dev" target="_blank" rel="noreferrer">
          Website Developer: Jasmin Bergsgaard
        </a>
      </div>
    </footer>
  );
}
