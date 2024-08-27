module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          src: "./src",
          Assets: "./src/Assets",
          Components: "./src/Components",
          Editor: "./src/Editor",
        },
      },
    ],
  ],
  presets: ["@babel/preset-env"],
};
