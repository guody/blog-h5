<template>
    <div id="app">
      <router-view/>
    </div>  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/scss/reset.scss';
  @import './assets/scss/tinyScreen.scss' screen and (max-device-width: 1000px);
  @import './assets/scss/tinyScreen.scss' screen and (max-device-width: 768px);


</style>
