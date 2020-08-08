<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="item-icon_active" src="~assets/img/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/find.png" alt="">
        <img slot="item-icon_active" src="~assets/img/tabbar/find_active.png" alt="">
        <div slot="item-text">课程</div>
      </tab-bar-item>
      <tab-bar-item path="/table">
        <img slot="item-icon" src="~assets/img/tabbar/table.png" alt="">
        <img slot="item-icon_active" src="~assets/img/tabbar/table_active.png" alt="">
        <div slot="item-text">已报课程</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon_active" src="~assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>

  import TabBar from "@/components/common/tabbar/TabBar.vue"
  import TabBarItem from "@/components/common/tabbar/TabBarItem.vue"
  export default {
    name: "HomeTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>