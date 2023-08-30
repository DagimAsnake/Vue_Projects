const app = Vue.createApp({
    // template: `<h2>This is Template</h2>`
    data() {
        return {
            url: "https://dagimasnake.netlify.app",
            title: "Vue counter",
            name: "Dagim",
            age: 22,
            show: true,
            x: 0,
            y: 0,
            books: [
                {title: "name of the wind", author: "patrick rothfuss", img: "assets/1.png", isFav: true },
                {title: "the way of kings", author: "brandon sanderson", img: "assets/2.png", isFav: false},
                {title: "the final empire", author: "brandon sanderson", img: "assets/3.png", isFav: true}
            ]
        }
    },
    methods: {
        addAge(num) {
            this.age = this.age + num
        },
        showContent() {
            this.show = !this.show
        },
        handlemouse(e, data) {
            console.log(e, e.type)
            if(data) {
                console.log(data)
            }
        },
        postionmouse(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toggleFav(index) {
            this.books[index].isFav = !this.books[index].isFav;
        }
    }
  });
  
  app.mount("#app");