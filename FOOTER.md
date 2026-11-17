# Animated footer

## Preview
Open https://aryanmaan452-bit.github.io/My-website-/#media and scroll below the navigation columns.
To preview locally, run `python3 -m http.server 8000` in the repository and visit http://localhost:8000/#media.

## Files
- index.html: adds the decorative SVG mascot below existing footer navigation and loads two relative assets. Existing sections and scripts are preserved.
- footer-mascot.css: scoped footer styling, responsive sizing, float/breathe/blink/hover animations and reduced-motion rules.
- footer-mascot.js: pointer-following eyes; one requestAnimationFrame per pointer update, no continuous JavaScript rendering loop. Pauses animations offscreen and in hidden tabs.
- style.css is unchanged.

The original SVG artwork uses gradients and static hair strokes for an illustrated fuzzy appearance. It is not a photorealistic furry 3D render. No dependencies, keys, external mascot requests or paid services are used.

## Optional licensed 3D/video integration
For authentic fur, supply your own licensed, optimized transparent WebM. Keep the SVG as the fallback, especially on browsers without alpha-video support. Example replacement inside .mascot-react:

```html
<video class="mascot-video" muted loop playsinline preload="none"
       aria-hidden="true" data-mascot-video>
  <source src="assets/mascot.webm" type="video/webm">
</video>
```

Use .mascot-video { display: block; width: 100%; height: auto; pointer-events: none; }.
Keep paths relative. Target a short, seamless 480–640px loop under about 2 MB; verify alpha support on your target browsers. Do not add autoplay blindly: use an IntersectionObserver to call play() only when visible and when prefers-reduced-motion is false, and pause on exit/visibilitychange. Catch play() failures and retain the static SVG fallback. Hide SVG only after a successful video playing event. Restore it for reduced motion, unsupported video or errors. Remove footer-mascot.js if replacing the SVG completely; cursor-tracking eyes require separate overlays or a rigged 3D asset.

## Checks
Desktop and 390px mobile layouts visually inspected. Main content, existing navigation and FAQ JavaScript are retained. Reduced-motion CSS disables float, blink, hover transforms and pupil motion; JS also disables cursor tracking. No 3D rendering or device performance benchmark is claimed.
