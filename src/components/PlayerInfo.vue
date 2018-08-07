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
      </ul>
    </div>
    <div>Rovers</div><div>{{player.rovers}}</div>
  </div>
</template>

<script>
import RESOURCES from '@/constants/resources'

export default {
  name: 'PlayerInfo',
  props: ['player'],
  computed: {
    metal() {
      return this.player.resources[RESOURCES.METAL]
    },
    hydrates() {
      return this.player.resources[RESOURCES.HYDRATES]
    },
    rareearth() {
      return this.player.resources[RESOURCES.RAREEARTH]
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
}
</style>
