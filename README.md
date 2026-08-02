# Adhvan Website v1.3

This update is intended to be copied over the existing WebStorm project.

## Included changes

- Fullscreen YouTube reveal player inside the website
- Uses the official video: `Adhvan | Official Sneak Peek`
- Removes the need to commit the large `reveal.mp4`
- Official LinkedIn and YouTube links
- General email changed to `adhvan@adhvanstudios.com`
- Press contact changed to `pr@adhvanstudios.com`
- Correct `metadataBase`, Open Graph and X/Twitter metadata
- Cleaner navigation logo crop and alignment
- Refined ADHVAN/title scale and matching tracking
- Hero remains exactly one viewport high
- White section begins only after scrolling
- Social icons remain above the hero edge
- Media section now opens the YouTube reveal
- Updated favicon and Apple touch icon
- Next.js version set to 15.1.11

## Install over the existing project

1. Commit the current project first.
2. Stop the development server with `Ctrl+C`.
3. Copy all files from this folder over the existing project.
4. Replace existing files.
5. Run:

```powershell
npm install
npm run build
npm run dev
```

6. Open `http://localhost:3000`.

## Publish

After reviewing locally:

```powershell
git add .
git commit -m "Add official reveal and website metadata"
git push
```

Vercel will deploy the update automatically.

## Add remaining social accounts

Edit `content/site.ts` and paste the URLs into:

- `instagram`
- `x`
- `discord`

Empty social links stay hidden automatically.
