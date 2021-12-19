<template>
  <div id="admin">
    <div class="signin_section">
      <div class="container">
        <div class="row gx-5">
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="title_wrapper">
                  <p class="form_title">Login</p>
                </div>
                <form class="form" @submit.prevent="login()">
                  <div class="input_item">
                    <label for="email">Email</label>
                    <input
                      class="input_control"
                      id="email"
                      v-model="formData.email"
                      type="email"
                    />
                  </div>
                  <div class="input_item">
                    <label for="password">Password</label>
                    <input
                      class="input_control"
                      id="password"
                      type="password"
                      v-model="formData.password"
                    />
                  </div>
                  <div class="input_item submit_btn_wrapper">
                    <button class="submit_btn">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <div class="title_wrapper">
                  <p class="form_title">Register</p>
                </div>
                <form class="form" action="">
                  <div class="input_item">
                    <label for="email">Email</label>
                    <input class="input_control" id="email" type="email" />
                  </div>
                  <div class="input_item">
                    <label for="password">Password</label>
                    <input
                      class="input_control"
                      id="password"
                      type="password"
                    />
                  </div>
                  <div class="input_item submit_btn_wrapper">
                    <button class="submit_btn">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    hasUserLoggedIn() {
      let loggedStatus = this.$store.state.login.hasLogged;

      if (loggedStatus == true) {        
        if (this.getUserRoleId == 1) {
          this.$router.push("/admin/dashboard");
        }else{
            this.$router.push("/admin/dashboard");
        }
      }
    },
    async login() {
      await this.$store.dispatch("login/userLogin", this.formData);
      console.log(this.formData);
      this.hasUserLoggedIn();
    },
    getUserRoleId() {
      let data = JSON.parse(localStorage.getItem("loggedData"));
      return data.role_id;
    },
  },
};
</script>

<style>
</style>