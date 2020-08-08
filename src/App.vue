<template>
  <div id="app">
    <router-view></router-view>
    <home-tab-bar></home-tab-bar>
  </div>
</template>

<script>

  import HomeTabBar from '@/components/content/mainTabBar/MainTabBar'

  export default {
    name: 'App',
    components: {
      HomeTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
