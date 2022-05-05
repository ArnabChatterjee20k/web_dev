module.exports = {
  content: ["*/**.{html,js}"],
  theme: {
    extend: {
      spacing:{
        13:"12rem" // now we can use m-13 or mx-13 etc see how to extend tailwind.config.js from docs
      }
    },
  },
  plugins: [],
}
