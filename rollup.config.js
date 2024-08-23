// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/Editor/index.tsx", // Entry point
  output: [
    {
      file: "dist/index.js", // CommonJS output
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    {
      file: "dist/index.es.js", // ES module output
      format: "es",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react", "@babel/preset-env"],
      plugins: ["@babel/plugin-transform-runtime"],
      babelHelpers: "runtime",
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    terser(),
  ],
  external: ["react", "react-dom"], // Do not bundle React and ReactDOM
};
