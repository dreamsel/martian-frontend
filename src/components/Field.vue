<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="wrapper">
      <table class="field">
        <tr v-for="(row, rowindex) in field" :key="`row${rowindex}`">
          <td v-for="(el, colindex) in row" :key="`col${colindex}`">
            <cell :terrain="el.terrain" :resource="el.resource" :objects="el.objects" />
          </td>
        </tr>
      </table>
      <div class="players-info">
        <div class="player-info" v-for="(player, index) in players" :key="`player${index}`">
          <player-info :player="player" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from '@/components/Cell'
import PlayerInfo from '@/components/PlayerInfo'
import TERRAIN from '@/constants/terrain'
import RESOURCES from '@/constants/resources'
import OBJECTS from '@/constants/objects'

const sampleField = [
  [{terrain: TERRAIN.PLAIN, resource: 1, objects: []},
    {terrain: TERRAIN.PLAIN, resource: 0, objects: []},
    {terrain: TERRAIN.PLAIN, resource: 0, objects: []}],
  [{terrain: TERRAIN.BASE, resource: 0, objects: [OBJECTS.BASE, OBJECTS.ROVER]},
    {terrain: TERRAIN.HILLS, resource: RESOURCES.HOLE, objects: []},
    {terrain: TERRAIN.HILLS, resource: RESOURCES.HOLE, objects: []}],
  [{terrain: TERRAIN.PLAIN, resource: 0, objects: []},
    {terrain: TERRAIN.HILLS, resource: 1, objects: [OBJECTS.ROVER]},
    {terrain: TERRAIN.RIVER, resource: 0, objects: []}],
  [{terrain: TERRAIN.RIVER, resource: 1, objects: []},
    {terrain: TERRAIN.RIVER, resource: 0, objects: []},
    {terrain: TERRAIN.PLAIN, resource: 1, objects: []}]
]

export default {
  name: 'Field',
  data() {
    return {
      msg: 'Martian surface'
    }
  },
  computed: {
    field() {
      // return sampleField
      return this.$store.state.field || sampleField
    },
    players() {
      return this.$store.state.players || []
    }
  },
  components: {
    cell: Cell,
    'player-info': PlayerInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.wrapper {
  display: flex;
}
.field {
  flex: 1 1 auto;
}
.players-info {
  flex: 1 1 auto;
}
</style>
