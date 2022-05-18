// quản lý một thành phần trong trang web
//  var vm = new Vue({
// option
// })

var vueInstance = new Vue({
    // element => el 
    el: '#app',
    data: {
        title: 'Đây là title',
        name: 'Áo thun nam thể thao hàng VNXK vải dày min - Vải Đốm',
        url: 'https://www.google.com/',
        price: 10000,
        check: true,
        counter: 0,
        clientX: 0,
        clientY: 0,
        // đặt biến cho ví dụ computed
        message: "Đoàn",
        a: 0,
        b: 0,
        number: 20,
        isDisable: false,

        // khai báo biến cho ví dụng ràng buộc dữ liệu 2 chiều 
        firstName: '',

        // khai báo biến cho ví dụng ràng buộc class and style 
        textClass: 'active',
        isActive: true,
        isError: true,

        bg: 'https://images.pexels.com/photos/287263/pexels-photo-287263.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    methods: {
        say(text) {
            return "Hello " + text
        },
        formatPrice() {
            const number = this.price
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        // tăng giá trị
        handleClick(e, number) {
      
           let result = this.counter += number;
            result >=10 ? this.counter= "Hế nhô": result ;

           
        },
        // event di chuột
        handleMouseMove(e) {
            this.clientX = e.clientX;
            this.clientY = e.clientY;
        },
        // ngăn chặn sự kiện mặc định
        handleForm(e) {
            console.log(e)
        },
        //  ngăn chặn sự kiện nổi bọt 
        handleMouseMoveChild(e) {
            console.log("handleMouseMoveChild:", e.target)
        },

        // ràng buộc class and style
        handleChangeActive() {
            // true => false
            // false => true
            return this.isActive = !this.isActive
        },
        handleChangeError() {
            return this.isError = !this.isError
        },
    },

    // tác dụng của computed được thực thi khi có sự thay đổi , có sự tính toán trong Vue=> tối ưu hiệu năng cho người dùng
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('')
        },
        addA() {
            console.log("add A")
            return this.a + this.number
        },
        addB() {
            console.log("add B")
            return this.b + this.number
        },

        // 
        objClass() {
            return {
                //  key : value
                active: this.isActive,
                error: this.isError,
            }
        },

        objStyle() {
            return {
                backgroundImage: 'url(' + this.bg + ')',
                backgroundRepeat:'no-repeat',
                backgroundSize: 'contain',
                width: 'auto',
                height: '500px',
                marginTop: '20px',
            }
        }

    }
});
// hệ thống phản ứng 
setTimeout(() => {
    vueInstance.title = "Oke nhá"
}, 3000)
console.log(vueInstance);
