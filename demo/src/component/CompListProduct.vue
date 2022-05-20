<template>
  <div class="listProduct">
      <h1 v-bind:style="style">{{ textListProduct }}</h1>
  </div>
</template>

<script>
export default {
    name:'comp-listProduct',
    data(){
        return {
            textListProduct:'ListProduct',
            style:{

                // backgroundColor:'red',
            }

        }
    }
}
</script>

<style>

</style>