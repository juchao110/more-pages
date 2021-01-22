const BASE_URL = process.env.page == 'view' ? '' : process.env.page == 'index' ? '' : ''; //根据打包变量配置url

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  pages: resolvePages(process.env.page)
}

function resolvePages(page) {
  let index = {
      entry: 'src/pages/index/main.js',
      template: 'src/public/index.html',
      filename: 'index.html',
    },
    view = {
      entry: 'src/pages/views/main.js',
      template: 'src/public/view.html',
      filename: 'view.html',
    }
  if (page == 'index') return {
    index
  };
  else if (page == 'view') return {
    view
  };
  else return {
    index,
    view
  };
}