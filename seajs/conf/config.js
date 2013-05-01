seajs.config({
  // 配置插件
  plugins: ['shim'],

  // 配置别名
  alias: {
    // 配置 jquery 的 shim 配置，这样我们就可以通过 require('jquery') 来获取 jQuery
    'jquery': {
      src: 'lib/jquery-1.9.1.min.js',
      exports: 'jQuery'
    },
    '_': {
      src: 'lib/underscore-1.4.4.min.js',
      exports: '_'
    },
    'backbone': {
      src: 'lib/backbone-1.0.0.min.js',
      exports: 'backbone'
    },
    'mustache': {
      src: 'lib/mustache.js',
      exports: 'mustache'
    },
    'handlebars': {
      src: 'lib/handlebars.js',
      exports: 'Handlebars'
    },
    'json': {
      src: 'lib/json2.js',
      exports: 'JSON'
    },
    'cookie': {
      src: 'lib/jquery.cookie.js',
      exports: 'cookie'
    }
  }
});