const config = {
  mode: 'site',
  title: 'react guidebook',
  description: '这是一个描述',
  publicPath: '/',
  base: '/',
  exportStatic: {},
  dynamicImport: {},
  theme: {
    '@primary-color': '#00A7D6',
  },
  navs: [
    null
  ]
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
