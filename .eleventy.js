const Image = require("@11ty/eleventy-img");
const lodash = require("lodash");
const eleventyAutoCacheBuster = require("eleventy-auto-cache-buster");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/css");

  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addPlugin(eleventyAutoCacheBuster);

  eleventyConfig.addShortcode("image", async function (src, alt = "", classes = "") {
		let metadata = await Image(src, {
			widths: [300],
			formats: ["jpeg"],
      outputDir: "_site/img/"
		});

		let data = metadata.jpeg[metadata.jpeg.length - 1];
		return `<img src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" class="${classes}" loading="lazy" decoding="async">`;
	});

  eleventyConfig.addShortcode("imageBig", async function (src, alt = "", classes = "") {
		let metadata = await Image(src, {
			widths: ["auto"],
			formats: ["png"],
      outputDir: "_site/img/",
      sharpPngOptions: {
        quality: 100,
      }
		});
		let data = metadata.png[metadata.png.length - 1];
		return `<img src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" class="${classes}" loading="lazy" decoding="async">`;
	});
  // lets show our data in a new order every time
  // obj is an object with key = file name, value = the data
  eleventyConfig.addNunjucksFilter("shuffle", (obj) => {
    const items = Object.values(obj);
    return lodash.shuffle(items);
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  }
};
