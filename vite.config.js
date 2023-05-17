import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'notes/overview.html': resolve(__dirname, 'notes/overview.html'),
        'notes/wk1.html': resolve(__dirname, 'notes/wk1.html'),
        'notes/wk2.html': resolve(__dirname, 'notes/wk2.html'),
        'notes/wk3.html': resolve(__dirname, 'notes/wk3.html'),
        'notes/wk4.html': resolve(__dirname, 'notes/wk4.html'),
        'notes/wk5.html': resolve(__dirname, 'notes/wk5.html'),
        'notes/wk6.html': resolve(__dirname, 'notes/wk6.html'),
        'notes/wk7.html': resolve(__dirname, 'notes/wk7.html'),
        'notes/wk8.html': resolve(__dirname, 'notes/wk8.html'),
        'notes/wk9.html': resolve(__dirname, 'notes/wk9.html'),
        'notes/wk10.html': resolve(__dirname, 'notes/wk10.html'),
        'notes/wk11.html': resolve(__dirname, 'notes/wk11.html'),
        'notes/wk12.html': resolve(__dirname, 'notes/wk12.html'),
        'notes/wk13.html': resolve(__dirname, 'notes/wk13.html'),
        'proj/wk1.html': resolve(__dirname, 'proj/wk1.html'),
        'proj/wk2.html': resolve(__dirname, 'proj/wk2.html'),
        'proj/wk3.html': resolve(__dirname, 'proj/wk3.html'),
        'proj/wk4.html': resolve(__dirname, 'proj/wk4.html'),
        'proj/wk5.html': resolve(__dirname, 'proj/wk5.html'),
        'proj/wk6.html': resolve(__dirname, 'proj/wk6.html'),
        'proj/wk7.html': resolve(__dirname, 'proj/wk7.html'),
        'proj/wk8.html': resolve(__dirname, 'proj/wk8.html'),
        'proj/wk9.html': resolve(__dirname, 'proj/wk9.html'),
        'proj/wk10.html': resolve(__dirname, 'proj/wk10.html'),
        'proj/wk11.html': resolve(__dirname, 'proj/wk11.html'),
        'proj/wk12.html': resolve(__dirname, 'proj/wk12.html'),
        'proj/wk13.html': resolve(__dirname, 'proj/wk13.html'),
      },
    }
  }
}