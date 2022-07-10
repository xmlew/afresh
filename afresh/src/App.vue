<!-- <template>
  <div id="app">
    <router-view/>
  </div>
</template> -->

<template>
  <div id="app">
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/career">Career</router-link>
    <router-link to="/discover">Discover</router-link>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  width: 100vw;
  height: 100vh;
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
</style>
