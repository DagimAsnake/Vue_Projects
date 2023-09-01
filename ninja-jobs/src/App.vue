<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'jobs'}">Jobs</router-link>
    </nav>
    <button @click="redirect">Redirect</button>
    <button @click="goBack">Go Back</button>
    <button @click="goForward">Go Forward</button>

    <router-view/>
  </div>
</template>

<script>

export default ({
  methods: {
    redirect() {
      this.$router.push({name: 'home'})
    },
    goBack() {
      this.$router.go(-1)
    },
    goForward() {
      this.$router.go(1)
    }
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
