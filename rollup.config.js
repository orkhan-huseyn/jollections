import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
    },
    {
      name: 'StdJs',
      file: 'dist/bundle.umd.js',
      format: 'umd',
    },
  ],
  plugins: [typescript()],
};
