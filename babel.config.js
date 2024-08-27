module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          src: "./src",
          assets: "./src/assets",
          comp: "./src/comp",
          editor: "./src/editor",
          utils: "./src/utils",
        },
      },
    ],
  ],
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
};
