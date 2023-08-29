const app = Vue.createApp({
    // template: `<h2>This is Template</h2>`
    data() {
        return {
            title: "Vue counter",
            name: "Dagim",
            age: 22,
            show: true
        }
    },
    methods: {
        addAge(num) {
            this.age = this.age + num
        },
        showContent() {
            this.show = !this.show
        }
    }
  });
  
  app.mount("#app");