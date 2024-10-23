$(document).ready(function () {
  $("#nav-btn").click(function () {
    $("#offcanvas").toggle(1000, function () {
      if ($(this).is(":visible")) {
        $("#main_page").removeClass("full-width");
      } else {
        $("#main_page").addClass("full-width");
      }
    });
  });

  $(window).resize(function () {
    if ($(window).width() > 994) {
      $("#offcanvas").show();
      $("#main_page").removeClass("full-width");
    } else {
      $("#offcanvas").hide();
      $("#main_page").addClass("full-width");
    }
  });

  $("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase(); 
    $("#main_table tbody tr").filter(function() { 
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) 
    });
  });
  
});



function product_image(img_src) {
  document.getElementById("main_image").src = img_src;
}

document.getElementById("products").addEventListener("click", function () {
  document.getElementById("main_content").innerHTML = `
    <h4 class="text-secondary m-2">Products</h4>
    
          <div class="shadow-lg p-4">
  
            <table class="table table-hover p-2 bg-light">
              
              <thead>
                <div class="input-group mb-3 grid gap-2">
                  <form class="d-flex" role="search">
                    <input
                      id="searchInput"
                      class="form-control me-2 border-white"  
                      style="background-color: #f4f7f9;"
                      type="search"
                      placeholder="Search Projects.."
                      aria-label="Search"
                    />
                  </form>
                  <button type="button" class="btn" style="background-color: #EFF2F6; font-size: 13px;"><i class="bi bi-cloud-download"></i> Export</button>
                  <button type="button" class="btn" style="font-size: 12px; background-color: #3F80EA; color: white;"><i class="bi bi-plus"></i>New Product</button>
                </div>
                <tr>
                  <th scope="col"><input type="checkbox" name="" id=""></th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Category</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td><img src="imgs/51Nnp56PlbL._AC_SL1001_.jpg" width="50px" height="50px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>$ 1,399.00	</td>
                  <td>@Tablets</td>
                  <td><i class="bi bi-star-fill text-warning p-1"></i>7.8</td>
                      <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
              
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td><img src="imgs/natural-titanium-1.webp" width="50px" height="50px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>$ 1,399.00	</td>
                  <td>@Tablets</td>
                  <td><i class="bi bi-star-fill text-warning p-1"></i> 7.8</td>
                      <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
              
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td><img src="imgs/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-1TB-Deep-Purple-MQ953LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.webp" width="50px" height="50px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>$ 1,399.00	</td>
                  <td>@Tablets</td>
                  <td><i class="bi bi-star-fill text-warning p-1"></i> 7.8</td>
                      <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
              
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td><img src="imgs/SOYES-XS14-Pro-Mini-Smartphone-3-0Inch-4G-LTE-Quad-Core-3GB-64GB-Android-9-0-2600mAh-Face-Recoginition-Small-Cell-Phone-WIFI-GPS_5ef0b18c-48ff-4477-b83e-1cd9174059d4.b54b6c3d41936528b510c2e862ad5.webp" width="50px" height="50px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>$ 1,399.00	</td>
                  <td>@Tablets</td>
                  <td><i class="bi bi-star-fill text-warning p-1"></i> 7.8</td>
                      <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
              
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td><img src="imgs/51nrKJxBsjL._AC_SL1000_.jpg" width="50px" height="50px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>$ 1,399.00	</td>
                  <td>@Tablets</td>
                  <td> <i class="bi bi-star-fill text-warning p-1"></i> 7.8</td>
                  <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
  
                </tr>
              
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td><img src="imgs/natural-titanium-1.webp" width="50px" height="50px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>$ 1,399.00	</td>
                  <td>@Tablets</td>
                  <td><i class="bi bi-star-fill text-warning p-1"></i> 7.8</td>
                      <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
              
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td><img src="imgs/Restored-Apple-iPhone-14-Pro-Max-Carrier-Unlocked-1TB-Deep-Purple-MQ953LL-A-Refurbished_cb8f75e5-1b8e-4c06-9776-0d995a314ada.88ab53492f6fe7e653033585616419b1.webp" width="50px" height="50px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>$ 1,399.00	</td>
                  <td>@Tablets</td>
                  <td><i class="bi bi-star-fill text-warning p-1"></i> 7.8</td>
                      <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
              
                
              </tbody>
            </table>

            <nav aria-label="Page navigation example d-flex">
              <div class="d-flex justify-content-between">
              <p class="text-secondary fs-6 mt-3">Showing 1 to 6 of 12 entries</p>
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a style="background-color: #3F80EA; color: white;" class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </div>
            </nav>
          </div>`;
});
document
  .getElementById("products_details")
  .addEventListener("click", function () {
    document.getElementById("main_content").innerHTML = `
  <h3 class="text-secondary fs-5">Product Details</h3>
          <div class="content p-4 bg-white shadow-lg">
        
            <div class="row">
              <div class="col-xl-7 col-xxl-6">
                <div id="imgs_div" class="d-flex">
                <div class="d-flex flex-column">
                  <img src="imgs/product-detail-1.png" onclick="product_image('imgs/product-detail-1.png')" class="m-4 " width="60px" height="70px" alt="">
                  <img src="imgs/product-detail-2.png" onclick="product_image('imgs/product-detail-2.png')" class="m-4 " width="60px" height="70px" alt="">
                  <img src="imgs/product-detail-3.png" onclick="product_image('imgs/product-detail-3.png')" class="m-4 " width="60px" height="70px" alt="">
                  <img src="imgs/product-detail-4.png" onclick="product_image('imgs/product-detail-4.png')" class="m-4 " width="60px" height="70px" alt="">
                </div>
                <div>
                <img src="imgs/product-detail-1.png" id="main_image" width="400px" height="500px" alt="">
              </div>
              </div>
            </div>
              <div class="col-xl-5 col-xxl-6">
                <p class="text-primary fs-6">Smartphones</p>
                <h3 style="color: #495057; font-size:16px">Apple iPhone 15 Pro Max</h3>
                <p style="color: #6D767EBF;font-size:12px"" ><i class="bi bi-star-fill text-warning p-1"></i>4.6 out of 40 Reviews</p>
                <p style="color: #495057; font-size:12px"" >Price: $1499 USD</p>
                <p style="color: #6D767EBF; font-size:14px"" >Introducing the Apple iPhone 15 Pro Max 256GB in Blue Titanium. Experience unparalleled performance with the lightning-fast A17 Pro chip, perfect for gaming and seamless multitasking. Capture stunning photos and videos with the triple-lens camera system, including standard, wide-angle, and telephoto lenses, complete with Night mode for low-light shots.</p>
                <div class="d-flex justify-content-between" style="color: #6D767EBF;">
                  <p class="fs-6"> <i class="bi bi-battery-half"></i> Battery: 29 hours</p>
                  <p class="fs-6"> <i class="bi bi-gear-wide-connected"></i> Warranty: 24 Months</p>
                </div>
                <div class="d-flex justify-content-between" style="color: #6D767EBF;">
                  <p class="fs-6"> <i class="bi bi-battery-half"></i> Battery: 29 hours</p>
                  <p class="fs-6"> <i class="bi bi-gear-wide-connected"></i> Warranty: 24 Months</p>
                </div>
                <div class="grid gap-3 row-gap-5" >
                  <button type="button" class="btn" style="font-size: 12px; background-color: #3F80EA; color: white;"><i class="bi bi-plus"></i>Buy Now</button>
                  <button type="button" class="btn" style="background-color: #EFF2F6; font-size: 13px;"><i class="bi bi-cloud-download"></i> Add To Cart</button>
                  </div>
                <p class="mt-4 text-secondary">color:</p>
                <div class="d-flex" style="color: #6D767EBF;">
                  <div>
                    <img src="imgs/product-detail-1.png" class="m-2" width="40px" height="40px" alt="">
                    <p class="m-2"> Blue</p>
                  </div>
                  <div>
                    <img src="imgs/product-detail-2.png" class="m-2" width="40px" height="40px" alt="">
                    <p class="m-2"> White</p>
                  </div>
                  <div>
                    <img src="imgs/product-detail-3.png" class="m-2" width="40px" height="40px" alt="">
                    <p class="m-2"> Natural</p>
                  </div>

                </div>
              </div>

            </div>
            
          </div>

          <h4 class="mt-4 mb-4  text-secondary">Specification</h4>
          <div class="col-12 p-4">
            <table class="table p-4 shadow-sm">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Smartphones</th>
                  <th scope="col">Year introduced</th>
                  <th scope="col">2023</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Brand</th>
                  <td>Apple</td>
                  <td>Operation System</td>
                  <td>Ios</td>
                </tr>
                <tr>
                  <th scope="row">Product number</th>
                  <td>935277</td>
                  <td>Operation system when introduced</td>
                  <td>Ios 17</td>
                </tr>
                <tr>
                  <th scope="row">Warranty</th>
                  <td>24 Months</td>
                  <td>@Update Frequency</td>
                  <td>Each quarter</td>
                </tr>
                <tr>
                  <th scope="row">Color</th>
                  <td>blue</td>
                  <td>Date of last security update</td>
                  <td>Sep 2018</td>
                </tr>
              </tbody>
            </table>

          </div>

          <h3 class="mt-4 mb-4 text-secondary">Related products</h3>
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <div class="card mb-3 bg-white shadow-lg border-light p-2">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="imgs/natural-titanium-1.webp" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 style="color: #495057; font-size:12px" class="card-title">Apple iPad Pro</h5>
                      <p style="color: #6D767EBF; font-size:13px" class="card-text"><i class="bi bi-star-fill text-warning p-1"></i> 4.6 out of 55 Reviews</p>
                      <p style="color: #495057; font-size:12px" class="card-text"><small class="text-body-secondary">$1,399.00</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-lg-4 col-md-12">
              <div class="card mb-3 bg-white shadow-lg border-light p-2" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="imgs/natural-titanium-1.webp" class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 style="color: #495057; font-size:12px" class="card-title">Apple iPad Pro</h5>
                      <p style="color: #6D767EBF; font-size:13px" class="card-text"><i class="bi bi-star-fill text-warning p-1"></i> 4.6 out of 55 Reviews</p>
                      <p style="color: #495057; font-size:12px" class="card-text"><small class="text-body-secondary">$1,399.00</small></p>
                      </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-lg-4 col-md-12">
              <div class="card mb-3 bg-white shadow-lg border-light p-2" >
                <div class="row g-0">
                  <div class="col-md-4">
                  <img src="imgs/natural-titanium-1.webp" class="img-fluid rounded-start" alt="...">
                   </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 style="color: #495057; font-size:12px" class="card-title">Apple iPad Pro</h5>
                      <p style="color: #6D767EBF; font-size:13px" class="card-text"><i class="bi bi-star-fill text-warning p-1"></i> 4.6 out of 55 Reviews</p>
                      <p style="color: #495057; font-size:12px" class="card-text"><small class="text-body-secondary">$1,399.00</small></p>
                      </div>
                  </div>
                </div>
              </div>

            </div>
          </div>`;
  });
document.getElementById("order").addEventListener("click", function () {
  document.getElementById("main_content").innerHTML = `
    <h4 class="text-secondary m-1">Orders</h4>
          <div class="content p-4 bg-white shadow-lg">
          
            <table class="table table-hover p-2">
              
              <thead>
                <div class="input-group mb-3 grid gap-2">
                  <form class="d-flex" role="search">
                    <input
                      id="searchInput"
                      class="form-control me-2 border-white"  
                      style="background-color: #f4f7f9;"
                      type="search"
                      placeholder="Search Projects.."
                      aria-label="Search"
                    />
                  </form>
                  <button type="button" class="btn" style="background-color: #EFF2F6; font-size: 13px;"><i class="bi bi-cloud-download"></i> Export</button>
                  <button type="button" class="btn" style="font-size: 12px; background-color: #3F80EA; color: white;"><i class="bi bi-plus"></i>New Product</button>
                </div>
                <tr>
                  <th scope="col"> <input type="checkbox" name="" id=""></th>
                  <th scope="col">Order Id</th>
                  <th scope="col">Billing Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total</th>
                  <th scope="col">Payment Method</th>
                  <th scope="col">Payment Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                    <td><span class="badge text-bg-success">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                    <td><span class="badge text-bg-danger">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                    <td><span class="badge text-bg-warning">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                    <td><span class="badge text-bg-success">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                  <td><span class="badge text-bg-danger">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                    <td><span class="badge text-bg-success">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                  <td><span class="badge text-bg-danger">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                    <td><span class="badge text-bg-success">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                  <td><span class="badge text-bg-danger">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                    <td><span class="badge text-bg-success">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                  <td><span class="badge text-bg-danger">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
                <tr>
                  <th>
                    <input type="checkbox" name="" id="">
                  </th>
                  <td>#Sd5</td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
                  <td></i>Visa</td>
                    <td><span class="badge text-bg-success">paid</span></td>
                    <td><button type="button" class="btn bg-body-secondary" style="font-size: 13px;">View</button></td>
                </tr>
              
                
              </tbody>
        
          
            </table>
              <nav aria-label="Page navigation example d-flex">
              <div class="d-flex justify-content-between">
              <p class="text-secondary fs-6 mt-3">Showing 1 to 6 of 12 entries</p>
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a style="background-color: #3F80EA; color: white;" class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </div>
            </nav>
          </div>`;
});
document.getElementById("customers").addEventListener("click", function () {
  document.getElementById("main_content").innerHTML = `
  <h4 class="text-secondary m-1">Customers</h4>
          <div class="row">

          <div class="col-lg-8 col-md-12 content p-4 bg-white shadow">
          
            <table class="table table-hover p-2">
              
              <thead>
              <div class="input-group mb-3 grid gap-2">
                  <form class="d-flex" role="search">
                    <input
                      id="searchInput"
                      class="form-control me-2 border-white"  
                      style="background-color: #f4f7f9;"
                      type="search"
                      placeholder="Search Projects.."
                      aria-label="Search"
                    />
                  </form>
                  <button type="button" class="btn" style="background-color: #EFF2F6; font-size: 13px;"><i class="bi bi-cloud-download"></i> Export</button>
                  <button type="button" class="btn" style="font-size: 12px; background-color: #3F80EA; color: white;"><i class="bi bi-plus"></i>New Product</button>
                </div>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Billing Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total</th>
        
                  <th scope="col">Payment Status</th>
            
                </tr>
              </thead>
              <tbody>
                <tr>
              
                  <td><img src="imgs/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" class="rounded" width="40px" height="40px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
              
                    <td><span class="badge text-bg-success">paid</span></td>
                  
                </tr>
                <tr>
              
                  <td><img src="imgs/4537069.png" class="rounded" width="40px" height="40px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
              
                    <td><span class="badge text-bg-warning">paid</span></td>
                  
                </tr>
                <tr>
            
                  <td><img src="imgs/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" class="rounded" width="40px" height="40px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
              
                    <td><span class="badge text-bg-success">paid</span></td>
                  
                </tr>
                <tr>
                
                  <td><img src="imgs/4537069.png" class="rounded" width="40px" height="40px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
              
                    <td><span class="badge text-bg-warning">paid</span></td>
                  
                </tr>
                <tr>
              
                  <td><img src="imgs/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" class="rounded" width="40px" height="40px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
              
                    <td><span class="badge text-bg-success">paid</span></td>
                  
                </tr>
                <tr>
            
                  <td><img src="imgs/4537069.png" class="rounded" width="40px" height="40px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
              
                    <td><span class="badge text-bg-warning">paid</span></td>
                  
                </tr>
                <tr>
            
                  <td><img src="imgs/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" class="rounded" width="40px" height="40px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
              
                    <td><span class="badge text-bg-success">paid</span></td>
                  
                </tr>
                <tr>
            
                  <td><img src="imgs/4537069.png" class="rounded" width="40px" height="40px" alt=""></td>
                  <td>Apple iPad Pro</td>
                  <td>Sep 2010	</td>
                  <td>$12,346</td>
              
                    <td><span class="badge text-bg-warning">paid</span></td>
                  
                </tr>
        
          
              
                
              </tbody>
        
          
            </table>
          <nav aria-label="Page navigation example d-flex">
              <div class="d-flex justify-content-between">
              <p class="text-secondary fs-6 mt-3">Showing 1 to 6 of 12 entries</p>
              <ul class="pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a style="background-color: #3F80EA; color: white;" class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </div>
            </nav>
          </div>

          <div class="col-lg-4 col-md-12 bg-white shadow">
            <div class="d-flex justify-content-between">
              <p style="color: #495057; font-size:12px">Angelica Ramos</p>
              <p>...</p>
            </div>

            <div class="d-flex">
              <div>
              <img src="imgs/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht.jpg" class="rounded" width="50px" height="50px" alt="">
            </div>
              <div>
                <h4 style="color: #495057; font-size:13px">About me</h4>
                <p style="color: #6C757D; font-size:12px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque dolorem fuga facilis, vero harum accusantium asperiores cupiditate maxime illum facere doloribus voluptas tenetur. Excepturi hic cupiditate tempore sint fuga.</p>
              </div>

            </div>
            <table class="table"> 
              <tr>
                <td>Name</td>
                <td>Angelica Ramos</td>
              </tr>
              <tr>
                <td>Company</td>
                <td>The Wiz</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>angelica@ramos.com</td>
              </tr>
              <tr>
                <td>Status</td>
                <td><span class="badge text-bg-success">Active</span></td>
              </tr>
            </table>

            <div>
              <p>Activity</p>
              <div class="d-flex justify-content-between" style="color: #495057; font-size:13px">
                <p>Signed out</p>
                <p>30min</p>
              </div>
              <p style="color: #6C757D; font-size:12px">Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
              <div class="d-flex justify-content-between" style="color: #495057; font-size:13px">
                <p>Signed out</p>
                <p>30min</p>
              </div>
              <p style="color: #6C757D; font-size:12px">Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
              <div class="d-flex justify-content-between" style="color: #495057; font-size:13px">
                <p>Signed out</p>
                <p>30min</p>
              </div>
              <p style="color: #6C757D; font-size:12px">Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
            </div>

          </div>

        </div>`;
});
