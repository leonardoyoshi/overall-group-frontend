<template>
  <div id="app">
    <InitialRootHeader />
      <HeaderComponent />
        <main>
          <router-view />
        </main>
    <FooterComponent />
  </div>
</template>
<script>

import InitialRootHeader from './components/root/Initial.vue'
import HeaderComponent from './shared/Header'
import FooterComponent from './shared/Footer'

export default {
  name: 'App',
  components: {
    InitialRootHeader,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
