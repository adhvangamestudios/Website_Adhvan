"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { useEffect } from "react";
import { site } from "@/content/site";

export function Home() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".revealOnScroll");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <>
    <section className="about" id="about">
      <div className="aboutInner revealOnScroll">
        <p className="label">What is Adhvan?</p>
        <h2>{site.about.title}</h2>
        <p className="bodyCopy">{site.about.body}</p>
        <Link className="textLink" href="#world">Continue the journey <ArrowDown size={16}/></Link>
      </div>
    </section>

    <section className="world" id="world">
      <div className="sectionHead revealOnScroll"><p className="label lightLabel">The World</p><h2>Every place carries meaning.</h2></div>
      <div className="cards">
        {site.worlds.map((w, i) => <article className="card revealOnScroll" style={{ transitionDelay: `${i * 90}ms` }} key={w.n}>
          <Image src={w.image} alt={w.title} fill sizes="(max-width:900px) 100vw, 33vw"/>
          <div className="cardShade"/><div className="cardCopy"><span>{w.n}</span><h3>{w.title}</h3><p>{w.text}</p></div>
        </article>)}
      </div>
    </section>

    <section className="media" id="media">
      <div className="mediaIntro revealOnScroll"><p className="label">Media</p><h2>See Adhvan in motion.</h2><p>A cinematic glimpse into the world, movement and atmosphere of Adhvan.</p></div>
      <div className="mediaFrame revealOnScroll"><video controls playsInline preload="metadata" poster="/images/hero-poster.jpg"><source src="/videos/reveal.mp4" type="video/mp4"/></video></div>
    </section>

    <section className="press">
      <div className="revealOnScroll"><p className="label lightLabel">Press & Publishers</p><h2>Everything important, in one place.</h2></div>
      <div className="revealOnScroll"><p>Game overview, approved descriptions, studio information, contact details and downloadable assets.</p><Link className="btn light" href="/press-kit">Open Press Kit <Download size={16}/></Link></div>
    </section>

    <section className="studio" id="studio">
      <div className="revealOnScroll"><p className="label">Studio</p><h2>Built with experience.<br/>Guided by purpose.</h2></div>
      <div className="revealOnScroll"><p>Adhvan Game Studios is an independent studio creating premium interactive experiences rooted in original worlds, meaningful themes and handcrafted gameplay.</p><a className="textLink" href="mailto:contact@adhvanstudios.com">Contact the studio <ArrowUpRight size={16}/></a></div>
    </section>
  </>;
}
