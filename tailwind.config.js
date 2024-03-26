module.exports = {
  content: [
    './src/App.js',
    './src/components/Layouts/Header.js',
    './src/components/Layouts/Main.js',
    './src/components/Layouts/Footer.js',
    './src/components/RecentlyAdded.js',
    './src/components/TopCategories.js',
    './src/components/Newsletter.js',
    './src/components/First.js',
    './src/components/Second.js',
    './src/components/Feedback.js',
    './src/components/Dropdowns/MyDropdown.js',

  ], theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '54px': '54px',
    }, extend: {
      colors: {
        'orange-one': '#FF7B29',
        'color-inactive': '#949494',
        'color-china-blue': '#263FA3',
        'button-dark-blue':"#132742",
        'body-bg':'#fafafa'
      }
    },
  }, plugins: [],
}

