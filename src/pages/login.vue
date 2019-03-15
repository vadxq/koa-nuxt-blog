<template>
  <v-container align-center align-content-center justify-center fluid>
    <v-form
      ref="form"
      lazy-validation
      v-model="valid"
    >
      <v-text-field
        v-model="username"
        label="userame"
        required
        :rules="usernameRules"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="password"
        required
        type="password"
        :rules="passwordRules"
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        @click="login"
      >
        登录
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
const Cookie = require('js-cookie')
  export default {
    data: () => ({
      valid: false,
      username: '',
      password: '',
      usernameRules: [
        v => !!v || 'userame is required'
      ],
      passwordRules: [
        v => !!v || 'password is required'
      ],
    }),

    methods: {
      async login() {
        if (this.username && this.password) {
          let res = await this.$axios.post('https://blog.vadxq.com/api/user/login', {
            username: this.username,
            password: this.password
          })
          if(res.data.status) {
            this.$store.commit('setAuth', res.data.msg)
            Cookie.set('auth', res.data.msg)
            localStorage.setItem('token', res.data.msg)
            this.$router.push('/admin')
          }
        }
      }
    }
  }
</script>
