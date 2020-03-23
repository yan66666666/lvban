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
*{padding: 0; margin: 0; box-sizing: border-box;}
body { font-size: 0.16rem; height: 100%;}
img{width: 100%; height: auto; vertical-align:middle;}
li{list-style: none;}
#app{
	height: 100%;
}
</style>
