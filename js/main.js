


var productContainer = [];
var inps = document.getElementsByClassName("form-control");


if (localStorage.getItem("productsData") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("productsData"));
    displayProduct();

}

function clearForm() {
    for (var i = 0; i < inps.length; i++) {
        inps[i].value = "";
    }
}

function addBtn() {
    addProduct();
    displayProduct();
    clearForm();
}


var productName = document.getElementById("productNameInp");
var productPrice = document.getElementById("productPriceInp");
var productCate = document.getElementById("productCateInp");
var productDesc = document.getElementById("productDescInp");
var addEditBtn = document.getElementById("add-editBtn");
var Btn = document.getElementById("Btn")





function nameVald(productName) {

    var productNameRegex = /^[A-Z][a-z]{3,10}$/;
    if (productNameRegex.test(productName) == false) {
        document.getElementById("addBtn").disabled = "true";
        document.getElementById("nameValidation").classList.remove("d-none")
        document.getElementById("productNameInp").classList.add("is-invalid")
    }
    else {
        document.getElementById("addBtn").removeAttribute("disabled");
        document.getElementById("nameValidation").classList.add("d-none")
        document.getElementById("productNameInp").classList.remove("is-invalid")
        document.getElementById("productNameInp").classList.add("is-valid")

    }
    if (productName.value == "") {
        document.getElementById("nameValidation").classList.add("d-none")
        document.getElementById("productNameInp").classList.remove("is-invalid")
        document.getElementById("productNameInp").classList.add("is-valid")
    }

}

function priceVald(productPrice) {

    var productPriceRegex = /^[0-9]{1,10}$/;
    if (productPriceRegex.test(productPrice) == false) {
        document.getElementById("addBtn").disabled = "true";
        document.getElementById("priceValidation").classList.remove("d-none")
        document.getElementById("productPriceInp").classList.add("is-invalid")
    }
    else {
        document.getElementById("addBtn").removeAttribute("disabled");
        document.getElementById("priceValidation").classList.add("d-none")
        document.getElementById("productPriceInp").classList.remove("is-invalid")
        document.getElementById("productPriceInp").classList.add("is-valid")

    }
    if (productName.value == "") {
        document.getElementById("priceValidation").classList.add("d-none")
        document.getElementById("productPriceInp").classList.remove("is-invalid")
        document.getElementById("productPriceInp").classList.add("is-valid")
    }

}

function cateVald(productCate) {

    var productCateRegex = /^[A-Z][a-z]{3,10}$/;
    if (productCateRegex.test(productCate) == false) {
        document.getElementById("addBtn").disabled = "true";
        document.getElementById("categoryValidation").classList.remove("d-none")
        document.getElementById("productCateInp").classList.add("is-invalid")
    }
    else {
        document.getElementById("addBtn").removeAttribute("disabled");
        document.getElementById("categoryValidation").classList.add("d-none")
        document.getElementById("productCateInp").classList.remove("is-invalid")
        document.getElementById("productCateInp").classList.add("is-valid")

    }
    if (productCate.value == "") {
        document.getElementById("categoryValidation").classList.add("d-none")
        document.getElementById("productCateInp").classList.remove("is-invalid")
        document.getElementById("productCateInp").classList.add("is-valid")
    }

}


function addProduct() {


    var product =
    {
        Name: productName.value,
        price: productPrice.value,
        category: productCate.value,
        description: productDesc.value,

    }



    productContainer.push(product);

    localStorage.setItem("productsData", JSON.stringify(productContainer))


}





function displayProduct() {
    var temp = "";
    for (i = 0; i < productContainer.length; i++) {
        temp += `<tr class="ml-3">
                        <td>${(i + 1)}</td>
                        <td>${productContainer[i].Name}</td>
                        <td>${productContainer[i].price}</td>
                        <td>${productContainer[i].category}</td>
                        <td>${productContainer[i].description}</td>
                        <td class="text-center"><button class='btn btn-danger btn-sm' onclick="deleteProduct(${i})">Delete</button></td>
                        <td class="text-center"><button class=' btn btn-warning btn-sm' onclick="editProduct(${i})">Edit</button></td>
                    </tr>`;

    }



    document.getElementById("tableBody").innerHTML = temp;
}

function searchProduct(term) {
    var temp = ''
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].Name.toLowerCase().includes(term.toLowerCase())) {
            temp += `<tr class="ml-3">
            <td>${(i + 1)}</td>
            <td>${productContainer[i].Name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].description}</td>
            <td class="text-center"><button class='btn btn-danger btn-sm' onclick="deleteProduct(${i})">Delete</button></td>
            <td class="text-center"><button class=' btn btn-warning btn-sm' onclick="editProduct(${i})">Edit</button></td>
        </tr>`;

        }

    }
    document.getElementById("tableBody").innerHTML = temp;

}
var tempIndex;
function editProduct(index) {

    /*     console.log(index.value)
     */
    productName.value = productContainer[index].Name;
    productPrice.value = productContainer[index].price;
    productCate.value = productContainer[index].category;

    productDesc.value = productContainer[index].description;
    tempIndex = index;
    addEditBtn.innerHTML = `<button onclick="update()" class="btn btn-warning  p-3  mt-3" id="Btn">Update Product</button>`;


}


function deleteProduct(indx) {
    var deleted = productContainer.splice(indx, 1);
    localStorage.setItem("productsData", JSON.stringify(productContainer))

    displayProduct();

}






function update() {
    tempProduct =
    {
        Name: productName.value,
        price: productPrice.value,
        category: productCate.value,
        description: productDesc.value,

    }
    productContainer.splice(tempIndex, 1, tempProduct)
    localStorage.setItem("productsData", JSON.stringify(productContainer))
    addEditBtn.innerHTML = `<button onclick="addBtn()" class="btn btn-info p-3 mt-3" id="Btn">Add Product</button>`;
    displayProduct();
    clearForm();
}

displayProduct();

/* `<div class="col-md-3">
        <div class="product py-2">
            <img src="images/work-2.jpg" class="img-fluid mb-2" alt="">
            <h4>`+ productContainer[i].name + `<span class="badge badge-primary ml-3">` + productContainer[i].category + `</span></h4>
            <p class=" p-2 ">`+ productContainer[i].description + `</p>
            <div class="price">`+ productContainer[i].price + ` </div>
        </div>

    </div>` */