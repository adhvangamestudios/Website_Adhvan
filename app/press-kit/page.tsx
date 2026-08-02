import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { site } from "@/content/site";

export default function PressKit() {
  return (
    <main className="pressPage">
      <header className="pressNav">
        <Link href="/">
          <Image
            src="/images/adhvan-logo.png"
            alt="Adhvan Game Studios"
            width={90}
            height={90}
          />
        </Link>
        <Link href="/">Back to site</Link>
      </header>

      <section className="pressHero">
        <p className="label">Press Kit</p>
        <h1>Adhvan</h1>
        <p>
          Approved information and downloadable assets for publishers, media
          and partners.
        </p>
      </section>

      <section className="pressGrid">
        <article>
          <h2>Game overview</h2>
          <p><b>Genre:</b> Premium action-adventure</p>
          <p><b>Platforms:</b> PC and console</p>
          <p><b>Developer:</b> Adhvan Game Studios</p>
          <p><b>Status:</b> In development</p>
        </article>

        <article>
          <h2>About the game</h2>
          <p>
            Adhvan is a premium action-adventure set in an original world
            inspired by Indian philosophical thought. Rather than retelling
            mythology, it explores consciousness, inner conflict and
            transformation through exploration, combat and self-discovery.
          </p>
        </article>

        <article>
          <h2>Downloads</h2>
          <a href="/images/adhvan-logo.png" download>
            Logo PNG <Download size={17} />
          </a>
          <a href="/images/hero-poster.jpg" download>
            Hero image <Download size={17} />
          </a>
          <a href="/downloads/adhvan-fact-sheet.txt" download>
            Fact sheet <Download size={17} />
          </a>
          <a href={site.video.youtubeUrl} target="_blank" rel="noreferrer">
            Official Sneak Peek <span>↗</span>
          </a>
        </article>

        <article>
          <h2>Press contact</h2>
          <a href={`mailto:${site.contact.press}`}>{site.contact.press}</a>
        </article>
      </section>
    </main>
  );
}
