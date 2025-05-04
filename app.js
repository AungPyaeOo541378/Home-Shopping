var data = fetch("https://fakestoreapi.com/products");

fetch("https://fakestoreapi.com/products") //step 1 fetch data api calling
  .then((response) => response.json()) // convert json
  .then((data) => productInsert(data)) // call function
  .catch((error) => {
    console.error("Error loading the products:", error);
    document.getElementById("product-list").innerHTML =
      "<p>Failed to load products.</p>";
  });

  function productInsert(data){
    const productContainer = document.querySelector("#product-list");
    for (let i=0; i<data.length; i++){
        const productCard = document.createElement("div");
        productCard.classList.add("cards");
        productCard.innerHTML =  ` 
        <div class="" style="width: 18rem;">
         <img src="${data[i].image}" class="img-size ms-4" alt="..."><br>
         <div class="card-body">
          <h5 class="text-break text-center">${data[i].title}</h5>
          <p> Price = ${data[i].price}<i class="bi bi-currency-yen"></i></p>
          <p></p>
         </div>
         <div class="d-flex justify-content-evenly">
          <button type="button" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Details <i class="bi bi-folder-symlink-fill"></i>
          </button>
          
          <button type="button" class="btn cardBtn" id=" " data-id="${data[i].id}"
      data-title="${data[i].title}" 
      data-price="${data[i].price}" 
      data-img="${data[i].image}">
         Add to Card <i class="bi bi-cart4"></i>
          </button>
            </div><br>
         </div>
         

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${data[i].title}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div>  <img class="img-size"  src="${data[i].image}">  </div>
         <div>${data[i].description}</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" id=" " class="btn btn-dark "> Card <i class="bi bi-cart4"></i> 
        
        </button>
      </div>
    </div>
  </div>
</div> 
                
     `;
        productContainer.appendChild(productCard);
    }
       
    var cartBtn = document.querySelectorAll(".cardBtn");
   
    for (let i = 0; i < cartBtn.length; i++) {
      cartBtn[i].addEventListener("click", function () {
        var cardIn = document.querySelector(".cardIn");
        var cardHeader = document.createElement("div");
        cardHeader.classList.add("cards");
        cardHeader.innerHTML =  `    
        <div class="row g-0" >
                <div class="col-md-12">
                    <img
                        src="${cartBtn[i].getAttribute("data-img")}"
                        class=" rounded-start"
                        alt="...">
                </div>
                <div class="col-md-12">
                    <div class="card-body ">
                        <p class="card-title">
                           ${cartBtn[i].getAttribute("data-title")}
                        </p>
                         <div class="root-price">
                        <p class="card-text">price : 
                        <span class="org-price">
                        ${cartBtn[i].getAttribute("data-price")}
                        </span>
                        </p>
                         <p class="card-text" >semi-price : 
                        
                          <span class="semi-price">${cartBtn[i].getAttribute(
                            "data-price"
                          )}
                          </span>
                         
                         </p>
                         <div class="d-flex justify-content-center gap-5 align-items-center root-plus-minus">
                            <p class="minus" style="cursor:pointer;font-size:1.5rem"> - </p>
                            <p class="product-amount"> 1 </p>
                            <p class="plus" style="cursor:pointer;font-size:1.5rem"> + </p>
                         </div>
                          </div>
                    </div>
                </div>
              </div> 
        
        `;
        cardIn.appendChild(cardHeader);
      });
    }

  };



  var searchBar = document.querySelector(".search-bar");
  searchBar.addEventListener("keyup", function(){
    var searchValue = searchBar.value.toLowerCase();
    var cards = document.querySelectorAll(".cards");
   
    for (let i=0; i<cards.length; i++){
        var cardTitle = cards[i].querySelector("h5").innerHTML;
        var h5Title = cardTitle.toLowerCase();
        console.log(cardTitle);
        if (h5Title.includes(searchValue)){
            cards[i].style .display ="block";
        } else{
            cards[i].style .display ="none";
        }
      
    }
  });

 

