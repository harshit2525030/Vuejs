const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: process.env.VUE_APP_API_URL,
    // proxy: 'http://restapi.adequateshop.com/api/',
  },
})

// const { defineConfig } = require('@vue/cli-service');
// const defaultSettings = require('./setting.js')

// const url = process.env.VUE_APP_API_URL + "/";
// const obj = {
//   proxy: url,
//   proxy: 'http://restapi.adequateshop.com/api/',
// }
// console.log("==== url", defaultSettings);
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ],
//   devServer: defaultSettings,
// })

// module.exports = {
//     transpileDependencies: [
//     'vuetify'
//   ],
//   devServer: defaultSettings
// };