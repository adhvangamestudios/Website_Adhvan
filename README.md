# Adhvan Website v1.1

This package includes the revised premium homepage, the real 10-second hero loop, the 58-second reveal video, responsive UI, icons, animations, and the press-kit page.

## Update your existing WebStorm project

1. Stop the running server with `Ctrl+C`.
2. Back up or commit your current version.
3. Copy the contents of this folder over your existing `Website_Adhvan` folder and allow replacement.
4. In the WebStorm terminal run:

```powershell
npm install
npm run dev
```

5. Open `http://localhost:3000`.

## Included interactions

- Fullscreen looping hero video
- Sound on/off control
- Animated ADHVAN title, one-line tagline, and buttons
- Fullscreen reveal-video lightbox with audio
- Continue Journey / Replay state when the reveal ends
- White translucent transition section
- Scroll reveal animations
- Card hover animations
- Responsive mobile navigation
- Press Kit page

## Content edits

Edit text in `content/site.ts`.

Update placeholder social URLs in:

- `components/Hero.tsx`
- `components/Footer.tsx`

The current World cards reuse the supplied hero imagery until final screenshots are supplied.


## v1.2 fixes
- Cropped and vertically aligned navigation logo
- Matched letter spacing between ADHVAN and tagline
- Removed initial white-section overlap
- Kept social icons above the transition layer
