<template>
  <div>
    <h1>{{title}}</h1>
    <p>Welcome...</p>
    <!-- <input type="text" ref="name">
    <button @click="handleclick">click me</button> -->
    <div v-if="showModal">
      <!-- <Modal :header="header" :text="text" theme="sale" @close="toggleModal" /> -->
      <Modal theme="" @close="toggleModal">
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
        </template>
        <h1>Ninja Givaway!</h1>
        <p>Grab your ninja swag for half price!</p>
      </Modal>
      </div>
      <div v-if="showModalTwo">
       <Modal theme="" @close="toggleModalTwo">
        <h1>Sign up to the news letter</h1>
        <p>For update and promo codes!</p>
      </Modal>
      </div>
    <button @click="toggleModal">Show Modal One</button>
    <button @click="toggleModalTwo">Show Modal Two</button>

  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: "Hello Everyone sound of Dagim",
      // header: "Sign up for the Give Away",
      // text: "Grab your ninja swag for half price!",
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    // handleclick() {
    //   console.log(this.$refs.name)
    //   this.$refs.name.classList.add("active")
    //   this.$refs.name.focus()
    // }
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
