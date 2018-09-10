<template>
  <div class="player">
    <div>Name</div><div>{{player.name}}</div>
    <div>Points</div><div>{{player.points}}</div>
    <div>Resources</div>
    <div>
      <ul>
        <li>Metal {{metal}}</li>
        <li>Hydrates {{hydrates}}</li>
        <li>Rareearch {{rareearth}}</li>
        <li>Uranium {{uranium}}</li>
      </ul>
    </div>
    <div>Rovers</div>
    <div>
      <div v-for="rover in player.rovers" :key="rover.id">
        <div>energy: {{rover.energy}}</div>
        <div>load: {{rover.load}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import RESOURCES from '@/constants/resources'

export default {
  name: 'PlayerInfo',
  props: ['player'],
  computed: {
    metal() {
      return this.player.resources ? this.player.resources[RESOURCES.METAL] : '?'
    },
    hydrates() {
      return this.player.resources ? this.player.resources[RESOURCES.HYDRATES] : '?'
    },
    rareearth() {
      return this.player.resources ? this.player.resources[RESOURCES.RAREEARTH] : '?'
    },
    uranium() {
      return this.player.resources ? this.player.resources[RESOURCES.URANIUM] : '?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player {
  display: inline-grid;
  grid-template-columns: auto auto;
  border: 1px solid green;
  padding: 10pt;
  margin: 10pt;
  text-align: left;
}
</style>
