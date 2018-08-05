<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<table>
		<tr v-for="(row, rowindex) in field" :key="`row${rowindex}`">
			<td v-for="(el, colindex) in row" :key="`col${colindex}`">
			<cell :terrain="el" />
			</td>
		</tr>
	</table>
  </div>
</template>

<script>
import Cell from '@/components/Cell';


export default {
  name: 'Field',
  data () {
    return {
		msg: 'hello',
      field: [
	  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	  [1,1,2,1,1,1,1,3,3,1],
	  [1,2,2,2,1,1,1,3,1,1],
	  [1,1,2,1,1,1,1,3,1,1],
	  [1,1,1,1,1,1,3,1,1,1],
	  [1,1,1,1,3,3,1,1,1,1],
	  [1,1,3,3,1,1,2,2,1,1],
	  [1,1,3,1,1,2,2,2,2,1],
	  [1,1,3,1,1,2,2,2,2,1],
	  [1,1,1,1,1,1,2,2,1,1],
	  [1,1,1,1,1,1,1,1,1,1]
	  ]
    }
  },
  components: {
	cell: Cell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
