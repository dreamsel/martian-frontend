<template>
  <div :class="['cell', terrainClass]">
    <div :class="terrainClass" />
    <div :class="['object', cellobject]"></div>
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
        case TERRAIN.HILLS: return 'plain'
        case TERRAIN.RIVER: return 'river'
        case TERRAIN.BASE: return 'base'
        default: return ''
      }
    },

    cellobject() {
      if (this.resource == RESOURCES.HOLE) {
        return 'hole'
      }
      if (this.terrain == TERRAIN.HILLS) {
        return 'hill'
      }
      if (this.terrain == TERRAIN.BASE) {
        return 'base'
      }
      return ''
      if (this.objects.length > 0) {
        return this.objects.map(obj => obj === OBJECTS.ROVER ? '🚌' : obj === OBJECTS.BASE ? '🏡' : '').join('')
      } else if (this.resource) {
        // eslint-disable-next-line eqeqeq
        return this.resource == RESOURCES.HOLE ? '🕳' : '🔮' // 🏮💎💧  // 🔶🔷🖲🗻🗳
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
  background-size:     cover;
  background-repeat:   no-repeat;
  background-position: center center;
  position:relative;
  overflow: hidden;
}
.plain {
  background-image: url(../assets/plain2.png);
}
.hill {

  background-image: url(../assets/plain2.png);
}
.river {
  background-image: url(../assets/desert.png);
}
.base {
  background-color: #bbb;
}
.cell .object {
  transform: rotateX(-60deg) rotateZ(-35deg) scaleY(1.6) skewY(-10deg);
  position: absolute;
  left:0;
  top:0;
  width: 50px;
  height: 50px;
}
.object.hole {
  background: url(../assets/hole.png) center center no-repeat;
  background-size:  100%;
}
.object.hill {
  background: url(../assets/hill.png) center center no-repeat;
  background-size:  120%;
}
.object.base {
  background: url(../assets/station.png) center center no-repeat;
  background-size:  120%;
}

</style>
