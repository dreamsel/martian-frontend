<template>
  <div :class="['cell', terrainClass]">
    <div v-if="!!cellobject" :class="['object', cellobject]"></div>
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
        case TERRAIN.PLAIN: return `plain t${Math.floor(Math.random() * 4 + 1)}`
        case TERRAIN.HILLS: return 'hill'
        case TERRAIN.RIVER: return 'river'
        case TERRAIN.CRATER: return 'crater'
        case TERRAIN.MOUNTAIN: return 'mountain'
        case TERRAIN.BASE: return 'base'
        default: return ''
      }
    },

    cellobject() {
      if (this.objects.includes(OBJECTS.BASE)) {
        return 'base'
      }
      if (this.objects.includes(OBJECTS.ROVER)) {
        return 'rover'
      }
      // use this.resource &&  this.objects
      if (this.resource == RESOURCES.HOLE) { // eslint-disable-line eqeqeq
        return 'hole'
      }
      if (this.resource == RESOURCES.RAREEARTH) { // eslint-disable-line eqeqeq
        return 'rareearth'
      }
      if (this.resource == RESOURCES.METAL) { // eslint-disable-line eqeqeq
        return 'metal'
      }
      if (this.resource == RESOURCES.HYDRATES) { // eslint-disable-line eqeqeq
        return 'hydrates'
      }
      if (this.resource == RESOURCES.URANIUM) { // eslint-disable-line eqeqeq
        return 'uranium'
      }
      return ''
      /*
      if (this.objects.length > 0) {
        return this.objects.map(obj => obj === OBJECTS.ROVER ? '🚌' : obj === OBJECTS.BASE ? '🏡' : '').join('')
      } else if (this.resource) {
        // eslint-disable-next-line eqeqeq
        return this.resource == RESOURCES.HOLE ? '🕳' : '🔮' // 🏮💎💧  // 🔶🔷🖲🗻🗳
      } else {
        return ''
      }
      */
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
  background-size:     contain;
  background-repeat:   no-repeat;
  background-position: center center;
  position:relative;
  overflow: hidden;
}
.plain, .plain.t1 {
  background-image: url(../assets/plain1.svg);
}
.plain.t2 {
  background-image: url(../assets/plain2.svg);
}
.plain.t3 {
  background-image: url(../assets/plain3.svg);
}
.plain.t4 {
  background-image: url(../assets/plain4.svg);
}
.hill {
  background-image: url(../assets/hill.png);
}
.river {
  background-image: url(../assets/desert.svg);
}
.crater {
  background-image: url(../assets/crater2.svg);
}
.mountain {
  background-image: url(../assets/crater.svg);
}
.base {
  background-image: url(../assets/plain4.svg);
}
.cell .object {
/*
  transform: rotateX(-60deg) rotateZ(-35deg) scaleY(1.6) skewY(-10deg);
  position: absolute;
  left:0;
  top:0;
  width: 50px;
  height: 50px;
  background-size:  100%;
*/
  width: 100%;
  height: 100%;
  background-size:     contain;
  background-repeat:   no-repeat;
  background-position: center center;
  font-size: 14pt;
}
.object.base {
  background-image: url(../assets/station.svg);
  transform: translateY(-4px);
}
.object.rover {
  background-image: url(../assets/rover.svg);
  transform: translateY(-2px);
}
.object.hole::before {
  content: '🕳';
  color: black;
  font-size: 24pt;
  line-height: 24pt;
}
.object.rareearth::before {
  content: '💎';
  color: blue;
}
.object.metal::before {
  content: '🏮';
}
.object.hydrates::before {
  content: '💧';
}
.object.uranium::before {
  content: '🔶';
}
</style>
