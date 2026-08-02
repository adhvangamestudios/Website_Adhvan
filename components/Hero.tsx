"use client";

import Link from "next/link";
import {
  ArrowDown,
  Instagram,
  Linkedin,
  Play,
  Youtube,
  X,
  Twitter,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "./Navigation";
import { site } from "@/content/site";

export function Hero() {
  const heroRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [revealOpen, setRevealOpen] = useState(false);

  const toggleSound = async () => {
    const hero = heroRef.current;
    if (!hero) return;

    const nextMuted = !muted;
    hero.muted = nextMuted;
    setMuted(nextMuted);

    try {
      await hero.play();
    } catch {
      // Playback may remain blocked until the browser receives a user gesture.
    }
  };

  const openReveal = () => {
    setRevealOpen(true);
    heroRef.current?.pause();
  };

  const closeReveal = () => {
    setRevealOpen(false);
    heroRef.current?.play().catch(() => undefined);
  };

  useEffect(() => {
    if (!revealOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeReveal();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [revealOpen]);

  const socials = [
    {
      href: site.socials.linkedin,
      label: "LinkedIn",
      icon: <Linkedin />,
    },
    {
      href: site.socials.youtube,
      label: "YouTube",
      icon: <Youtube />,
    },
    {
      href: site.socials.instagram,
      label: "Instagram",
      icon: <Instagram />,
    },
    {
      href: site.socials.x,
      label: "X",
      icon: <Twitter />,
    },
    {
      href: site.socials.discord,
      label: "Discord",
      icon: <MessageCircle />,
    },
  ].filter((social) => Boolean(social.href));

  return (
    <>
      <section className="hero" id="top">
        <Navigation muted={muted} onSound={toggleSound} />

        <video
          ref={heroRef}
          className="heroVideo"
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="heroShade" />

        <div className="heroCopy">
          <h1 className="heroAnimate heroDelay1">ADHVAN</h1>
          <p className="heroTagline heroAnimate heroDelay2">
            A Journey of Consciousness
          </p>

          <div className="actions heroAnimate heroDelay3">
            <Link className="btn light" href="#about">
              Discover Adhvan
            </Link>

            <button className="btn ghost" type="button" onClick={openReveal}>
              <Play size={17} fill="currentColor" />
              Watch Reveal
            </button>
          </div>
        </div>

        <Link className="scrollCue" href="#about">
          <span>Scroll to discover</span>
          <ArrowDown size={17} />
        </Link>

        <div className="social" aria-label="Adhvan social media">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>

      {revealOpen && (
        <div
          className="revealModal revealModalIn"
          role="dialog"
          aria-modal="true"
          aria-label="Adhvan Official Sneak Peek"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeReveal();
          }}
        >
          <button
            className="revealClose"
            type="button"
            onClick={closeReveal}
            aria-label="Close reveal"
          >
            <X />
          </button>

          <div className="revealPlayer revealPlayerIn">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${site.video.youtubeId}?autoplay=1&rel=0&playsinline=1`}
              title="Adhvan | Official Sneak Peek"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
