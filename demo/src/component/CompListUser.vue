<template>
  <div class="list-user">
    <div class="user">
      <User
        v-for="(user, index) in listUser"
        v-bind:key="index"
        v-bind:user="user"

        v-on:deleteUser="deleteUser"
      />

    </div>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  name: "list-user",
  data() {
    return {};
  },
  props: {
    listUser: {
      type: Array,
      default: [],
    },
  },
  components: {
    User,
  },
  methods:{
    // data này của User
    deleteUser(data){
        console.log('deleteUser ListUser', data);
        this.$emit('deleteUserEvent', data)
    }
  }
};
</script>

<style>
.list-user{
}
.list-user .user{
    flex-wrap: wrap;
    
    display: flex;
    padding: 30px;
    margin-bottom: 30px;
    margin-left: 20px;
    border: 1px solid orchid;
    /* width: calc(33.3333% - 20px); */
}
</style>