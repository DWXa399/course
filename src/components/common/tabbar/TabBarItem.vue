<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon_active"></slot></div>
    <div :class="{active: isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:"TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch(err => err)
    }
  }

}
</script>

<style>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 10px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 26px;
    vertical-align: middle;
    margin-top: 4px;
    margin-bottom: 2px;
  }
  .active {
    color: #e33a3a;
  }
</style>