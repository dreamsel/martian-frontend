<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="wrapper">
      <div class="field">
        <table>
          <tr v-for="(row, rowindex) in field" :key="`row${rowindex}`">
            <td v-for="(el, colindex) in row" :key="`col${colindex}`">
              <cell :terrain="el.terrain" :resource="el.resource" :objects="el.objects" />
            </td>
          </tr>
        </table>
      </div>
      <div class="players-info">
        <div class="player-info">
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
    {terrain: TERRAIN.PLAIN, resource: 0, objects: []},
    {terrain: TERRAIN.PLAIN, resource: 0, objects: []}],
  [
    {terrain: TERRAIN.PLAIN, resource: 0, objects: []},
    {terrain: TERRAIN.BASE, resource: 0, objects: [OBJECTS.BASE, OBJECTS.ROVER]},
    {terrain: TERRAIN.HILLS, resource: RESOURCES.HOLE, objects: []},
    {terrain: TERRAIN.HILLS, resource: RESOURCES.HOLE, objects: []}],
  [{terrain: TERRAIN.PLAIN, resource: 0, objects: []},
    {terrain: TERRAIN.HILLS, resource: 2, objects: []},
    {terrain: TERRAIN.PLAIN, resource: 0, objects: [OBJECTS.ROVER]},
    {terrain: TERRAIN.RIVER, resource: 0, objects: []}],
  [{terrain: TERRAIN.RIVER, resource: 3, objects: []},
    {terrain: TERRAIN.MOUNTAIN, resource: 0, objects: []},
    {terrain: TERRAIN.PLAIN, resource: 0, objects: []},
    {terrain: TERRAIN.CRATER, resource: 4, objects: []}]
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
      return this.$store.state.field || sampleField
    },
    players() {
      return this.$store.state.players || []
    },
    player() {
      return this.$store.state.player || {}
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
  padding: 70pt;
  margin: auto;
  background: url('../assets/bg.png') center center no-repeat;
  background-size: contain;
  text-align: center;
}
.players-info {
  flex: 1 1 auto;
}
tr,td {
    height: 50px;
    border: none;
    margin: 0;
    padding: 0;
}
table {
  margin: auto;
  border-collapse: collapse;
  border: none;
  border-spacing: 0;
/*
  margin-left: 50px;
  margin-right: 50px;
  transform-style: preserve-3d;
  transform: rotateX(60deg) rotateZ(45deg);
*/
}
</style>
