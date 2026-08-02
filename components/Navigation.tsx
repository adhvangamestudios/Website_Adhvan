"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation({
  muted,
  onSound,
}: {
  muted: boolean;
  onSound: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 35);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <Link href="#top" className="brand" aria-label="Adhvan home">
        <Image
          src="/images/adhvan-logo.png"
          alt="Adhvan Game Studios"
          width={90}
          height={90}
          priority
        />
      </Link>

      <nav className="desktopNav" aria-label="Primary navigation">
        <Link href="#about">About</Link>
        <Link href="#world">World</Link>
        <Link href="#media">Media</Link>
        <Link href="/press-kit">Press Kit</Link>
        <Link href="#studio">Studio</Link>
      </nav>

      <div className="navTools">
        <button className="sound" type="button" onClick={onSound}>
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          <span>{muted ? "Enable sound" : "Sound on"}</span>
        </button>

        <button
          className="menu"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobileNav" aria-label="Mobile navigation">
          <Link onClick={() => setOpen(false)} href="#about">
            About
          </Link>
          <Link onClick={() => setOpen(false)} href="#world">
            World
          </Link>
          <Link onClick={() => setOpen(false)} href="#media">
            Media
          </Link>
          <Link onClick={() => setOpen(false)} href="/press-kit">
            Press Kit
          </Link>
          <Link onClick={() => setOpen(false)} href="#studio">
            Studio
          </Link>
        </nav>
      )}
    </header>
  );
}
