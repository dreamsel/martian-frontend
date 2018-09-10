<template>
  <div id="app">
    <div> <p>Enter player id</p>
      <input placeholder="player_id" v-model="playerId"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      playerId: ''
    }
  },
  mounted() {
    setInterval(() => {
      if (this.playerId) {
        this.$store.dispatch('fetchField', this.playerId)
      }
    }, 1000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
