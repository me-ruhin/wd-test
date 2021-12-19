<template>
  <div class="cart_section">
        <div class="container">
            <div class="row gx-5">
                <div class="col-md-8">
                    <div class="cart_group">
                        <table class="table table_bordered">
                            <thead>
                                <tr>
                                    <th>Prodcut</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="produc_img_wrapper">
                                            <div class="cart_img">
                                                <img class="d-block" src="assets/images/course-image-1.jpg" alt="">
                                            </div>
                                            <p>Skills for Beginners</p>
                                        </div>
                                      
                                    </td>
                                    <td>
                                        <p class="product_price">$202</p>
                                    </td>
                                  
                                    <td>
                                        <div class="product_qty">
                                            <button class="decreament_btn">-</button>
                                            <span class="qty_number">5</span>
                                            <button class="increament_btn">+</button>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="total_price">$202</p>
                                    </td>
                                    <td>
                                        <div class="item_remove">
                                            <button > delete</button>
                                         </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="subtotal">
                                <h4 class="subtotal_text">Subtotal</h4>
                                <h4 class="subtotal_amount">$222</h4>
                            </div>
                            <div class="subtotal_btn_area">
                                <button class="add_to_cart_btn">Proceed to checkout</button>
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