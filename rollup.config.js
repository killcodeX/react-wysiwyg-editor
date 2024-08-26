// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss"; // Import the PostCSS plugin

export default {
  input: "src/Editor/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "dist/index.es.js",
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    // postcss({
    //   // Add this line to handle CSS imports
    //   extract: true, // Extract CSS to a separate file
    // }),
    typescript({
      tsconfig: "tsconfig.app.json",
      module: "esnext",
    }),
    babel({
      exclude: "node_modules/**",
      presets: [
        "@babel/preset-react",
        "@babel/preset-env",
        "@babel/preset-typescript",
      ],
      plugins: ["@babel/plugin-transform-runtime"],
      babelHelpers: "runtime",
    }),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    terser(),
  ],
  external: ["react", "react-dom"],
};
