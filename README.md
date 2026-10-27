# Muralini Mohan: portfolio site

Plain HTML, CSS and JavaScript. No build step, no installs.

## Files

- `index.html`: all the text and structure
- `style.css`: colors, fonts and layout (colors are the tokens at the top)
- `script.js`: the filter buttons in the Work section

Open `index.html` in a browser to preview. The fonts load from Google Fonts, so you need an internet connection to see them as designed.

## Make it yours

1. Open `index.html` and search for `EDIT` and for the words `Placeholder`, `[Your`, `your.email` and `yourhandle`. Replace each one.
2. Make a folder called `images` next to `index.html` and put your photos in it.
3. In each work tile, replace the dashed placeholder block with your photo:

   ```html
   <!-- before -->
   <div class="swatch p-rings"><span class="slot mono">Your image here</span></div>

   <!-- after -->
   <img class="swatch" src="images/my-painting.jpg" alt="Describe the painting">
   ```

   Use photos around 1200 px wide, saved as JPG or WebP, and write a short `alt` description for each.
4. To add a tile, copy a whole `<figure class="tile">...</figure>` block. Keep `data-cat="painting"` or `data-cat="fashion"` so the filter buttons work.
5. For your coding projects, edit the two cards in the Code section. Delete the word "Planned" pill or change it to "Live" when a project is done, and add a real link.

## Publish it for free

- **GitHub Pages:** create a repository, upload these files, then turn on Pages in the repository settings.
- **Netlify Drop:** drag the folder onto app.netlify.com/drop.
- **Cloudflare Pages:** connect a repository or upload the folder.

For a custom address such as `muralinimohan.com`, buy the domain from a registrar, then add it in your host's domain settings.

## Resume

Once it is live, put the address under your name at the top of your resume, for example `muralinimohan.com`, and check that the link works on your phone.
