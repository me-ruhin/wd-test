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
export default {};
</script>

<style>
</style>