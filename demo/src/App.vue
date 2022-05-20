
<template>
  <div id="app">
    <div class="container">
      <button v-on:click="title = 'Bạn đã die '">
        Ấn vào để đăng xuất thế giới
      </button>

      <!-- custom event của mình ->changeTitleEvent  -->
      <CompHeader
        v-bind:titleHeader="title"
        v-on:changeTitleEvent="handleTitle"
      />
      <CompListProduct />
      <CompListUser
        v-on:deleteUserEvent="handleDeleteUser"
        v-bind:listUser="listUser"
      />
      <CompFooter />
    </div>
  </div>
</template>



<script>
/*
App
 Header
 List Product
 ............
 Footer

*/
import CompHeader from "./component/CompHeader.vue";
import CompFooter from "./component/CompFooter.vue";
import CompListProduct from "./component/CompListProduct.vue";
import CompListUser from "./component/CompListUser.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: "Hello World!",
      listUser: [
        { id: 0, name: "Nguyễn Văn Bình" },
        { id: 1, name: "Trần Thị Kim" },
        { id: 2, name: "Phạm Thị Minh" },
        { id: 3, name: "Mai Hoàng Anh" },
        { id: 4, name: "Nguyễn Văn Bình" },
        { id: 5, name: "Trần Thị Kim" },
        { id: 6, name: "Phạm Thị Minh" },
        { id: 7, name: "Mai Hoàng Anh" },
      ],
    };
  },
  components: {
    CompHeader,
    CompFooter,
    CompListProduct,
    CompListUser,
  },

  methods: {
    handleTitle(e) {
      this.title = "Nụ cười của người nghiện";
      console.log("Hey !", e);
    },
    // data này được nhận từ listUser
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((user, idx)=>{
        console.log(user.id, idx, data.id)
        if(user.id === data.id){
          indexDelete =idx;
        }
      });
      if(indexDelete != -1){
        this.listUser.splice(indexDelete, 1);
      }
      console.log('indexDelete', indexDelete);
      console.log("handleDeleteUser", data);
    },
  },
};
//  Props Down => Truyền dữ liệu từ cha vào con -> Con chỉ được sử dụng và không được thay đỏi trực tiếp

//  Event Up => Truyền thông điệp (sự kiện) thống báo cho Component cha biết là nó muốn thay đổi dữ liệu -> Nhiệm vụ Component cho nhận được thông điệp và thay đổi => Custom Events trong VueJS
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  /* max-width: 1170px; */
  margin: 0 auto;
  padding: 0 15px;
  min-height: 3000px;
}
</style>
