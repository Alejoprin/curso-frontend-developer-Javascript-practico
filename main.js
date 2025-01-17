const $navEmail = document.querySelector(".navbar-email");
const $desktopMenu = document.querySelector(".desktop-menu");
const $menuHamIcon = document.querySelector(".menu"); 
const $mobileMenu = document.querySelector(".mobile-menu");
const $menuCarIcon = document.querySelector(".navbar-shopping-cart");
const $productDetailCloseIcon = document.querySelector(".product-detail-close");
const $shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const $productDetailContainer = document.querySelector('#productDetail')
const $cardsContainer = document.querySelector(".cards-container");

$navEmail.addEventListener('click', toggleDesktopMenu)
$menuHamIcon.addEventListener('click', toggleMobileMenu)
$menuCarIcon.addEventListener('click', toggleProductDetail)
$productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
  const isProductDetailClosed = $shoppingCartContainer.classList.contains('inactive')
  
  if (!isProductDetailClosed) {
    $shoppingCartContainer.classList.add("inactive");
  }

  $desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  const isProductDetailClosed = $shoppingCartContainer.classList.contains('inactive')
  
  if (!isProductDetailClosed) {
    $shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside()

  $mobileMenu.classList.toggle('inactive')
}

function toggleProductDetail() {
  const isMobileMenuClosed = $mobileMenu.classList.contains('inactive')
  const isDesktopMenuClosed = $desktopMenu.classList.contains('inactive')
  const isProductDetailClosed = $productDetailContainer.classList.contains('inactive')
  
  if (!isMobileMenuClosed) {
    $mobileMenu.classList.add('inactive')
  }

  if (!isDesktopMenuClosed) {
    $desktopMenu.classList.add('inactive')
  }

  if (!isProductDetailClosed) {
    $productDetailContainer.classList.add("inactive");
  }
  
  $shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  $productDetailContainer.classList.remove('inactive')
  $shoppingCartContainer.classList.add('inactive')
}

function closeProductDetailAside() {
  $productDetailContainer.classList.add("inactive");
}

const productList = []
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "Pantalla",
  price: 320,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: "PC",
  price: 520,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/* 
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/
function renderProducts(arr) {
  for (product of arr) {
    const $productCar = document.createElement("div");
    $productCar.classList.add("product-card");

    const $img = document.createElement("img");
    $img.setAttribute("src", product.image);
    $img.addEventListener('click', openProductDetailAside)

    const $productInfo = document.createElement("div");
    $productInfo.classList.add("product-info");

    const $productInfoDiv = document.createElement("div");

    const $productPrice = document.createElement("p");
    $productPrice.innerText = "$" + product.price;
    const $productName = document.createElement("p");
    $productName.innerText = product.name;

    $productInfoDiv.append($productPrice, $productName);

    const $productInfoFigure = document.createElement("figure");
    const $productImgCart = document.createElement("img");
    $productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    $productInfoFigure.appendChild($productImgCart);

    $productInfo.append($productInfoDiv, $productInfoFigure);
    $productCar.append($img, $productInfo);

    $cardsContainer.appendChild($productCar);
  }
}

renderProducts(productList)