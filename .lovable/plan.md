# Add Your 1 GB+ VSL Video to the Landing Page

## Problem
A 1 GB+ video file is too large to upload through chat or Lovable's CDN assets. It also would not stream well for visitors if served as a raw file. The right approach is to host it on a video platform built for streaming, then embed it on the page.

## Recommended approach
1. Upload the video to a streaming host (YouTube, Vimeo, Wistia, Bunny Stream, etc.).
2. Replace the current VSL placeholder in the hero section with an embedded player or HTML5 video element pointing at that hosted URL.
3. Update the "Watch the VSL" label and duration if needed.
4. Build and verify the page still loads correctly.

## What I need from you
Pick one of these and send me the resulting link or file:

- **YouTube** (free, easiest): upload as unlisted, copy the share link.
- **Vimeo** (cleaner player, paid plans): upload and copy the video link.
- **Direct MP4/WebM URL** (e.g., from Bunny Stream, AWS S3, or another CDN): copy the direct file URL.

## What I will change
- `src/routes/index.tsx`: swap the placeholder play button block for an embedded player or `<video>` element.
- Keep the existing glassmorphism frame and 16:9 aspect ratio.
- Preserve the rest of the page design.

## Technical notes
- YouTube/Vimeo: embed via an `<iframe>` with a 16:9 wrapper so it stays responsive.
- Direct file URL: use the HTML5 `<video>` tag with `controls`, `playsInline`, and `preload="metadata"`.
- I will not store the 1 GB file in the project repository.
