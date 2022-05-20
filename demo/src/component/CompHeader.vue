<template>
<header>
   
    <h1>{{ titleHeader }}
        <br/>
         <button v-on:click="changeTitleHeader">Thay đổi title từ Component Header</button>
    </h1>
</header>

</template>

<script>
export default {
   name:'comp-header',
   props:{
       titleHeader: String,
   },
   data(){
       return {
       }
   },
   methods:{
       changeTitleHeader(){
        //    Không được phép thay đổi trực tiếp props từ component cha 
        // => Truyền thông báo ra bên ngoài 
        //  Kích hoạt sự kiện "changeTitleHeader" trong ComponentHeader
        // Khi kích hoạt function bên ngoài App nó sẽ chạy
        // Khi function được chạy thì nó sẽ thay đổi dữ liệu
        var data ={
            title:'Đây là event được tạo',
            width:'10px',
            clientX:'200px',
            clientY:'100px',
        }
        // có 2 tham số : tên sự kiện cần kích hoạt , các sự kiện được tạo ra 
         this.$emit('changeTitleEvent', data)
       }
   }
};
</script>
<style>
</style>