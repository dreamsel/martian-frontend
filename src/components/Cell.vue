<template>
  <div :class="['cell', color]">
	{{resource}}
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: ['terrain'],
  computed: {
	color() {
		switch (this.terrain) {
			case 1: return 'green';
			case 2: return 'red';
			case 3: return 'blue';
			default: return '';
		}
	},
	resource() {
		return Math.random() > 0.5 ? 'o' : '*';
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
.red {
	background-color: red;
}
.blue {
	background-color: blue;
}
.green {
	background-color: green;
}
</style>
