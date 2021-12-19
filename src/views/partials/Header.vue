<template>
  <div id="header">
    <header class="header_section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="nav_section">
              <li><router-link :to="{name:'Home'}">Homepage</router-link> </li>
              <li><router-link :to="{name:'adminDashboard'}">Dashboard</router-link> </li>
              <li><router-link :to="{name:'productCart'}">Cart</router-link></li>
              <li><router-link :to="{name:'Login'}">Sign In/ Sign Up</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>

</script>

<style>
</style>