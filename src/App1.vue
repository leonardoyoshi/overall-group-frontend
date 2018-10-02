<template>
  <div id="ap">
    <InitialRootHeader />
      <div class="container">
          <HeaderComponent/>
          <main>
            <router-view />
          </main>
          <FooterComponent />
      </div>
  </div>
</template>
<script>

import InitialRootHeader from './components/root/initial'
import HeaderComponent from './shared/Header'
import FooterComponent from './shared/Footer'

export default {
  name: 'App1',
  components: {
    InitialRootHeader,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
body{
  margin: 0
}

#ap {
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
