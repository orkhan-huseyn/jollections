import typescript from '@rollup/plugin-typescript';
import { uglify } from 'rollup-plugin-uglify';

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
      name: 'Jollections',
      file: 'dist/bundle.umd.js',
      format: 'umd',
    },
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), uglify()],
};
