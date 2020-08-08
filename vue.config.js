module.exports = {
  configureWebpack: {
    resolve: {
      // alias:别名的意思
      alias: {
        // 默认配置了src
        // 'src': '@'
        'assets': '@/assets',
        'components': '@/components',
        'common': '@/common',
        'network': '@/network',
        'views': '@/views'
        // router和store不配置
        // 因为router只在main.js文件里面引用
        // 而且在所有组件中都能通过this.$router和this.$store拿到这两个对象
      }
    }
  }
}