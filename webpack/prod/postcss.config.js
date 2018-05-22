module.exports = ({
  plugins: {
    'precss': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
      warnForDuplicates: false
    }
  },
});
