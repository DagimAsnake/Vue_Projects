const app = Vue.createApp({
    // template: `<h2>This is Template</h2>`
    data() {
        return {
            title: "Vue counter",
            name: "Dagim",
            age: 22,
            show: true,
            x: 0,
            y: 0,
            books: [
                {title: "name of the wind", author: "patrick rothfuss"},
                {title: "the way of kings", author: "brandon sanderson"},
                {title: "the final empire", author: "brandon sanderson"}
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
        }
    }
  });
  
  app.mount("#app");