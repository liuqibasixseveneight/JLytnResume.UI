// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       three: 'three',
//     },
//     dedupe: ['three'],
//   },
//   optimizeDeps: {
//     include: ['three'],
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

const threePath = path.resolve('./node_modules/three');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      three: threePath,
      'three/build/three.module.js': path.resolve(
        threePath,
        'build/three.module.js'
      ),
      'three/examples/jsm': path.resolve(threePath, 'examples/jsm'),
      'three/src': path.resolve(threePath, 'src'),
    },
    dedupe: ['three'],
  },
  optimizeDeps: {
    include: ['three'],
    exclude: ['@splinetool/runtime'],
  },
});
