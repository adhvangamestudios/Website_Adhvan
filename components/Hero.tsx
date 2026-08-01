"use client";

import Link from "next/link";
import { ArrowDown, Instagram, Linkedin, Play, X, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "./Navigation";

export function Hero() {
  const heroRef = useRef<HTMLVideoElement>(null);
  const revealRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [revealOpen, setRevealOpen] = useState(false);
  const [revealFinished, setRevealFinished] = useState(false);

  const toggleSound = async () => {
    const hero = heroRef.current;
    if (!hero) return;
    const nextMuted = !muted;
    hero.muted = nextMuted;
    setMuted(nextMuted);
    try { await hero.play(); } catch {}
  };

  const openReveal = () => {
    setRevealFinished(false);
    setRevealOpen(true);
    heroRef.current?.pause();
  };

  const closeReveal = () => {
    setRevealOpen(false);
    setRevealFinished(false);
    if (revealRef.current) {
      revealRef.current.pause();
      revealRef.current.currentTime = 0;
    }
    heroRef.current?.play().catch(() => undefined);
  };

  useEffect(() => {
    if (!revealOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => revealRef.current?.play().catch(() => undefined), 180);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previous;
    };
  }, [revealOpen]);

  return (
    <>
      <section className="hero" id="top">
        <Navigation muted={muted} onSound={toggleSound} />
        <video ref={heroRef} className="heroVideo" autoPlay muted={muted} loop playsInline preload="auto" poster="/images/hero-poster.jpg">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="heroShade" />

        <div className="heroCopy">
          <h1 className="heroAnimate heroDelay1">ADHVAN</h1>
          <p className="heroTagline heroAnimate heroDelay2">A Journey of Consciousness</p>
          <div className="actions heroAnimate heroDelay3">
            <Link className="btn light" href="#about">Discover Adhvan</Link>
            <button className="btn ghost" type="button" onClick={openReveal}><Play size={17} fill="currentColor" /> Watch Reveal</button>
          </div>
        </div>

        <Link className="scrollCue" href="#about"><span>Scroll to discover</span><ArrowDown size={17} /></Link>
        <div className="social" aria-label="Social media">
          <a href="#" aria-label="LinkedIn"><Linkedin /></a>
          <a href="#" aria-label="YouTube"><Youtube /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
        </div>
      </section>

      {revealOpen && (
        <div className="revealModal revealModalIn">
          <button className="revealClose" type="button" onClick={closeReveal} aria-label="Close reveal"><X /></button>
          <div className="revealPlayer revealPlayerIn">
            <video ref={revealRef} controls playsInline preload="metadata" poster="/images/hero-poster.jpg" onEnded={() => setRevealFinished(true)}>
              <source src="/videos/reveal.mp4" type="video/mp4" />
            </video>
            {revealFinished && (
              <div className="revealEnd">
                <h2>Continue the Journey</h2>
                <div className="revealEndActions">
                  <button className="btn light" onClick={() => { closeReveal(); window.setTimeout(() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }), 220); }}>Explore Adhvan</button>
                  <button className="btn ghost" onClick={() => { if (revealRef.current) { revealRef.current.currentTime = 0; revealRef.current.play(); } setRevealFinished(false); }}>Replay</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
