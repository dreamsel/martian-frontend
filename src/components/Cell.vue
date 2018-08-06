<template>
  <div :class="['cell', terrainClass]">
    {{cellcontent}}
  </div>
</template>

<script>
import TERRAIN from '@/constants/terrain'
import RESOURCES from '@/constants/resources'
import OBJECTS from '@/constants/objects'

export default {
  name: 'Cell',
  props: ['terrain', 'resource', 'objects'],
  computed: {
    terrainClass() {
      switch (this.terrain) {
        case TERRAIN.PLAIN: return 'plain'
        case TERRAIN.HILLS: return 'hill'
        case TERRAIN.RIVER: return 'river'
        case TERRAIN.BASE: return 'base'
        default: return ''
      }
    },
    cellcontent() {
      if (this.objects.length > 0) {
        return this.objects.map(obj => obj === OBJECTS.ROVER ? '🚌' : obj === OBJECTS.BASE ? '🏡' : '').join('')
      } else if (this.resource) {
        return this.resource === RESOURCES.HOLE ? '🕳' : '🔮' // 🏮💎💧  // 🔶🔷🖲🗻🗳
      } else {
        return ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell {
  height: 50px;
  width: 50px;
  line-height:50px;
  margin: auto;
  padding: auto;
  color: white;
  font-weight:bold;
}
.hill {
  background-color: red;
}
.river {
  background-color: blue;
}
.plain {
  background-color: green;
}
.base {
  background-color: #bbb;
}
</style>
