// quản lý một thành phần trong trang web
//  var vm = new Vue({
    // option
// })

var vueInstance =  new Vue({
    // element => el 
    el:'#app',
    data: {
        title:'Đây là title',
        name:'Áo thun nam thể thao hàng VNXK vải dày min - Vải Đốm',
        url:'https://www.google.com/',
        price: 10000,
        check: true,
        counter: 0,
        clientX: 0,
        clientY: 0,
    },
    methods:{
        say(text) {
            return "Hello "  + text
        },
        formatPrice() {
            const number= this.price
             return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
// tăng giá trị
        handleClick(e,number){
           this.counter +=number ;
           console.log(e.target);
        },
        // event di chuột
        handleMouseMove(e){
            this.clientX= e.clientX;
            this.clientY    = e.clientY;
        },
        // ngăn chặn sự kiện mặc định
        handleForm(e){
            console.log(e)
        }, 
        //  ngăn chặn sự kiện nổi bọt 
        handleMouseMoveChild(e){
            console.log("handleMouseMoveChild:",e.target)
        }
    }
});
// hệ thống phản ứng 
setTimeout(()=>{
    vueInstance.title="Oke nhá"
}, 3000)
console.log(vueInstance);
