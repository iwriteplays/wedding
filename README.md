# Wedding Showcase
## Animated storytelling with typewriter effects and SVG animated sketches on scroll.

[View the demo](https://laurabirek.com/web-developer/portfolio/wedding/)

I originally built this little scrolling story in 2015 for my wedding site. Back then, I used [skrollr](https://github.com/Prinzhorn/skrollr) and meticulously animated each SVG path with different `stroke-dashoffset` and `stroke-dasharray` lengths. 

Thankfully, it's 2023 and we now have [GSAP](https://greensock.com/). Just for funsies, I converted my antique code to use ScrollTrigger and DrawSVGPlugin and it's so much better now!

Because this was just a fun project, I haven't killed myself trying to make all the timings perfect. If you scroll too fast, you might miss the SVG lines animating in. And the typewriter effect gets kinda jumbled if you scroll fast, because each of the elements is getting triggered quickly before the previous one ends. As a perfectionist, these things bother me. If this were for a client, I wouldn't have stopped until it was perfect.

But since it's just me tooling around for fun, I left it perfectly imperfect.
