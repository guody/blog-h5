<template>
    <div id="app">
      <router-view v-wechat-title="$route.meta.title"/>
    </div>  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/scss/reset.scss';
  #app{
    width: 100%;
    height: 100%;
  }
</style>
