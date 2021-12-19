<template>
  <div>
       <div id="orderList">
    <div class="dashboard_section">
      <div class="container">
        <div class="row gx-5">        
          <div class="col-lg-12">
            <div class="order_title_wrapper">
              <h3 class="order_title">Your Orders</h3>
              <div class="search_wrapper">
                <input class="input_control" type="text" />
              </div>
            </div>
            <div class="order_table_wrapper">
              <table class="table table_bordered">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="text-align: center">
                    <td>#122</td>
                    <td>02/12/12</td>
                    <td>Processing</td>
                    <td>$125.00 for 2 item</td>
                    <td>
                      <div class="order_action_btn_group">
                        <a href="#">View</a>
                        <a href="#">Edit</a>
                        <a href="#">History</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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

}
</script>

<style>

</style>