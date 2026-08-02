"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function Home() {
  const [mediaOpen, setMediaOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".revealOnScroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isVisible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mediaOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mediaOpen]);

  return (
    <>
      <section className="about" id="about">
        <div className="aboutInner revealOnScroll">
          <p className="label">What is Adhvan?</p>
          <h2>{site.about.title}</h2>
          <p className="bodyCopy">{site.about.body}</p>
          <Link className="textLink" href="#world">
            Continue the journey <ArrowDown size={16} />
          </Link>
        </div>
      </section>

      <section className="world" id="world">
        <div className="sectionHead revealOnScroll">
          <p className="label lightLabel">The World</p>
          <h2>Every place carries meaning.</h2>
        </div>

        <div className="cards">
          {site.worlds.map((world, index) => (
            <article
              className="card revealOnScroll"
              style={{ transitionDelay: `${index * 90}ms` }}
              key={world.n}
            >
              <Image
                src={world.image}
                alt={world.title}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div className="cardShade" />
              <div className="cardCopy">
                <span>{world.n}</span>
                <h3>{world.title}</h3>
                <p>{world.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="media" id="media">
        <div className="mediaIntro revealOnScroll">
          <p className="label">Media</p>
          <h2>See Adhvan in motion.</h2>
          <p>
            A cinematic glimpse into the world, movement and atmosphere of
            Adhvan.
          </p>
        </div>

        <button
          className="mediaFrame revealOnScroll"
          type="button"
          onClick={() => setMediaOpen(true)}
          aria-label="Play Adhvan Official Sneak Peek"
        >
          <Image
            src="/images/hero-poster.jpg"
            alt="Adhvan Official Sneak Peek"
            fill
            sizes="100vw"
          />
          <span className="mediaShade" />
          <span className="mediaPlay">
            <Play size={29} fill="currentColor" />
          </span>
          <span className="mediaCaption">Official Sneak Peek</span>
        </button>
      </section>

      <section className="press">
        <div className="revealOnScroll">
          <p className="label lightLabel">Press & Publishers</p>
          <h2>Everything important, in one place.</h2>
        </div>

        <div className="revealOnScroll">
          <p>
            Game overview, approved descriptions, studio information, contact
            details and downloadable assets.
          </p>
          <Link className="btn light" href="/press-kit">
            Open Press Kit <Download size={16} />
          </Link>
        </div>
      </section>

      <section className="studio" id="studio">
        <div className="revealOnScroll">
          <p className="label">Studio</p>
          <h2>
            Built with experience.
            <br />
            Guided by purpose.
          </h2>
        </div>

        <div className="revealOnScroll">
          <p>
            Adhvan Game Studios is an independent studio creating premium
            interactive experiences rooted in original worlds, meaningful
            themes and handcrafted gameplay.
          </p>
          <a className="textLink" href={`mailto:${site.contact.general}`}>
            Contact the studio <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {mediaOpen && (
        <div
          className="revealModal revealModalIn"
          role="dialog"
          aria-modal="true"
          aria-label="Adhvan Official Sneak Peek"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setMediaOpen(false);
          }}
        >
          <button
            className="revealClose"
            type="button"
            onClick={() => setMediaOpen(false)}
            aria-label="Close video"
          >
            ×
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
