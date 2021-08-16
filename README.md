## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

This a landing page website for a Digital media company.They offer services such as Graphic Design and Photography. There are very few challenges encountere in creating this website.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: (https://github.com/MashoAdo/Sunnyside-Agency-Landing-Page)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

I used the mobile first workflow. Followed by making the website more responsive to bigger screen. And i finally completed the development process by refactoring.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt to use mixins that use parametres. This makes it flexible and can therefore be used by multiple times in the scss.

I also learnt about the <picture> element in HTML. It takes the at least one <source> element and a default <img> element that acts as a fallback.
You can add multiple <source> elements that media attribute that specifies the screen width a photo will be displayed at. This element is useful in creating responsive images.

```html
<<picture>
	<source
		media="(min-width: 700px)"
		srcset="./src/images/desktop/image-transform.jpg"
	/>
	<source
		media="(max-width: 699px)"
		srcset="./src/images/mobile/image-transform.jpg"
	/>
	<img src="./src/images/mobile/image-transform.jpg" alt="cone" />
</picture>
```

```css
.proud-of-this-css @mixin flexCenter($direction, $justify) {
	display: flex;
	flex-direction: $direction;
	justify-content: $justify;
	align-items: center;
}
```

### Continued development

Websites are getting complex everyday and customer experience is a top priority for all websites. A nice, comprehensive layout is therefore necessary to achieves this. The Grid concept in css provides the solution to this. I am constantly improving on how to create complex grids.

## Author

Masho Ado Nache - Author

- Github - [@MashoAdo](https://github.com/MashoAdo)
