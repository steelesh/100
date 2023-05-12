module.exports = {
  plugins: [
    require('postcss-import')({
      cssnext: false,
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-url')({
      url: 'rebase',
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ]
}