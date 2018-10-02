<template>
  <div class="form-group" align="center">
    <div>
      <label style="color: #323d7b; font-size: 30px; margin-bottom: 140px; margin-top: 50px">Nome do Grupo</label>
      <input v-model="group.name" class="form-control" style="margin-bottom: 50px; margin-top: -10px" placeholder="Inserir nome do grupo..." autofocus>
    </div>
    <button style="width: 30%" type="submit" class="btn btn-success">Enviar</button>
    <!-- <button style="width: 30%" type="submit" @click="registerGroup" class="btn btn-success">Enviar</button> -->
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
}
</script>

<style lang="css" scoped>
.btn {
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 30px;
  margin-top: 90px;
  padding: 10px;
}
</style>
