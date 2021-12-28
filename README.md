# The Meadowcroft Chair

### <a href="https://daltonjmcgee.github.io/2021-12-24/" target="_blank">Live Demo</a>

### Technologies
* [ThreeJS](https://threejs.org/)
* [Svelte](https://svelte.dev/)
* [Blender](https://blender.org/)
* [Webpack](https://webpack.js.org/)

### Resources and details

This is a chair I designed for a friend and his wife who live in a different state from me. In order to pass along designs and make it a touch interactive, I built the chair in Blender and then exported it as a .glb file in order to import it into ThreeJS.

I utilized my [ThreeJS Boilerplate](https://github.com/daltonjmcgee/threejs_boilerplate) and added in Svelte to the mix for something new to try. However, other than their `use` tag and the component structure I didn't get to dig too far into it. For this simple use-case, though, I like it. It keeps the package size smaller than say React or Vue and doesn't bog you down with a ton of required boilerplate to get it working. I also really like scoped CSS. I like to use styled-components in React usually as well.

Other than the ThreeJS Model I needed an image gallery for hi-res renders I created in Blender. Note: I used the [Wood Fine Dark 004](https://www.poliigon.com/texture/wood-fine-dark-004) from Poliigon for the texture, normal map and gloss map.

Instead of downloading some other bloated and unnecessary gallery dependency, I decided to keep it simple and create it myself with only the features I wanted/needed. Super simple. Nothing wild. I did add a little bit of style/flair to the left/right buttons using `hover` and `active` pseudo-selectors in CSS. The JS is only 51 lines, comments included.

I also utilized some ideas I've learned from working with Chris Miller @ [Prolific Digital](https://github.com/prolific-digital/) ([github](https://github.com/millertchris) and [twitter](https://twitter.com/millertchris)) which is to use "[blocks](https://prolificdigital.gitbook.io/blocks/" to build pages. In this case I needed just three: Basic Content, Canvas, and Gallery.
