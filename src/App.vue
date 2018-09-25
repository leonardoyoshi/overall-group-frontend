<template>
  <div id="app">
    <HeaderComponent/>
    <main>
      <router-view/>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './shared/Header'
import FooterComponent from './shared/Footer'

export default {
  name: 'App',
  components: {
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
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
}
</style>
