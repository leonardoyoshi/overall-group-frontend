<template>
  <div class="form-group">
    <div class="form" align="center">
      <label style="color: #323d7b; font-size: 30px; margin-bottom: 30px;">Nome do grupo</label>
      <input v-model="group.name" class="form-control" placeholder="Inserir nome do grupo..." autofocus>
    </div>
    <button style="width: 30%" type="submit" @click="registerGroup" class="btn btn-success">Enviar</button>
  </div>
</template>

<script>
// import http from '@/http'

export default {
  data () {
    return {
      group: {
        name: ''
      }
    }
  }

  /* methods: {
    registerGroup () {
      let headers = {'Content-Type': 'application/json'}
      let data = {'grupo': 'bredas', 'login': this.user.login, 'senha': this.user.password}
      var url = 'http://18.217.45.84/auth/'

      http.post(url, data, headers)
        .then((response) => {
          console.log(response.data)
          console.log(response.status)
          var auth = response.data
          console.log(auth.data.access_token)
          localStorage.setItem('token', auth.data.access_token)
          this.$router.go('/buscacep')
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  } */
}
</script>

<style lang="css" scoped>
.btn {
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 0px;
  margin-top: 30px;
  padding: 10px;
}
</style>
