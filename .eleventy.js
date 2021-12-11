module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addFilter("debugger", (...args) => {
      console.log(...args)
      debugger;
    })
    return {
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
        layouts: "_layouts"
      },
    };
  };