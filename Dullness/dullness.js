var bestObj = [
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_52198176-cba4-4b83-b4cf-26a5455dd4fb_540x.jpg?v=1644914660",
        ranking: `&#9733; &#9733;&#9733;&#9734;&#9733; `,
        title: "VITAMIN C+E SUPER BRIGHT MOISTURIZER",
        wprice: 745.00,
        price: 595.00
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_4_360x.webp?v=1644493527",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9733;",
        title: "VITAMIN C SERUM GLOW REVEALING CONCENTRATE",
        wprice: 975.00,
        price: 926.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/VITCSLEEP_360x.jpg?v=1645679320",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9733;",
        title: "VITAMIN C GLOW PINK MASK",
        wprice: 945.00,
        price: 888.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_da5bf010-d398-458f-93c7-1a87b5687b44_360x.jpg?v=1638973784",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9733;",
        title: "5-IN-1 VITAMIN C GLOW KIT",
        wprice: 676.00,
        price: 597.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_20d209d8-1471-4ee3-b4c3-38611b685792_360x.jpg?v=1644915256",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9734;",
        title: "VITAMIN C SERUM GLOW REVEALING CONCENTRATE",
        wprice: 975.00,
        price: 926.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/3_5_360x.webp?v=1644493563",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9734;",
        title: "10% NIACINAMIDE SERUM DARK SPOT CORRECTOR",
        wprice: 1095.00,
        price: 1040.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard25_360x.jpg?v=1644862534",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9733;",
        title: "WATERMELON + VITAMIN C SUPERGLOW FACE CLEANSER",
        wprice: 400.00,
        price: 350.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1_12_360x.webp?v=1644862382",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9734;",
        title: "LIP SLEEPING MASK WITH VITAMIN C",
        wprice: 655.00,
        price: 612.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_8_360x.webp?v=1644494291",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9734;",
        title: "12% AHA + 2% HYALURONIC EXFOLIATING SLEEP MASK",
        wprice: 1000.00,
        price: 945.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_10_360x.webp?v=1644494351",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9734;",
        title: "ACNE DEFENSE GREEN CLAY MASK",
        wprice: 750.00,
        price: 695.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_980f3c37-b8eb-4ef3-ade1-4444190c32cf_360x.jpg?v=1644914753",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9734;",
        title: "VITAMIN C GLOW PINK CLAY MASK",
        wprice: 900.00,
        price: 845.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-3_da5bf010-d398-458f-93c7-1a87b5687b44_360x.jpg?v=1638973784",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9733;",
        title: "5-IN-1 VITAMIN C GLOW KIT With Exetra",
        wprice: 1705.00,
        price: 1245.00,
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-5_3_360x.jpg?v=1640675657",
        ranking: "&#9733;&#9733;&#9733;&#9733;&#9734;",
        title: "DEEP PORE FACIAL FOAM CLEANSER",
        wprice: 450.00,
        price: 395.00,
    }
]
// document.getElementById("heart").addEventListener("click", () => {
//     document.getElementById("heart").innerText = "🖤"
// })
var container = document.querySelector("#container")
var showDiv = document.querySelector("#show")
// showDiv.style.display = "none"
var x = 0
bestObj.map(function (elem) {
    var main = document.createElement("div")
    var image = document.createElement("img")
    image.setAttribute("src", elem.img)
    image.setAttribute("onclick", `show(${x})`)
    var firstdiv = document.createElement("div")
    firstdiv.setAttribute("id", "ranking")
    var rank = document.createElement("p")
    rank.innerHTML = elem.ranking
    var heart = document.createElement("p")
    heart.setAttribute("onclick", `like(${x})`)
    heart.setAttribute("class", `heart`)
    heart.innerText = "🤍"
    var titlePara = document.createElement("p")
    titlePara.innerHTML = elem.title
    var secondDiv = document.createElement("div")
    secondDiv.setAttribute("id", "price")
    var wroPrice = document.createElement("p")
    wroPrice.setAttribute("class", "wrong")
    wroPrice.innerHTML = "Rs: " + elem.wprice
    var raPrice = document.createElement("p")
    raPrice.setAttribute("class", "right")
    raPrice.innerHTML = "Rs: " + elem.price
    var button = document.createElement("button")
    button.setAttribute("onclick", `addCart(${x})`)
    button.innerHTML = "Add To Cart"
    x++;
    firstdiv.append(rank, heart)
    secondDiv.append(wroPrice, raPrice)
    main.append(image, firstdiv, titlePara, secondDiv, button)
    container.append(main)

})
var heart = document.getElementsByClassName("heart")
function like(like) {
    if (heart[like].innerText === "🤍") {
        heart[like].innerText = "💖"
    } else {
        heart[like].innerText = "🤍"
    }
}
function show(show) {
    container.style.display = "none"
    showDiv.style.display = "flex"
    var img = document.createElement("img")
    img.setAttribute("src", bestObj[show].img)
    var div = document.createElement("div")
    var h1 = document.createElement("h1")
    h1.innerText = bestObj[show].title
    var rank = document.createElement("span")
    rank.setAttribute("id", "stars")
    rank.innerHTML = bestObj[show].ranking
    var h3 = document.createElement("h2")
    var span = document.createElement("span")
    span.innerText = "Inclusive of All Taxes"
    h3.innerText = "Rs: " + bestObj[show].price + ".00"
    var button = document.createElement("button")
    button.setAttribute("onclick", `addCart(${show})`)
    button.innerText = "Add to Cart"
    var p1 = document.createElement("p")
    p1.innerText = "Buy Products Worth Rs. 1499 Or More & Pick Your Free 5-in-1 Kit"
    var p2 = document.createElement("p")
    p2.innerText = "Buy Products Worth Rs. 899 Or More & Get A Cica Calming Night Gel - 15ml For Free."
    var p3 = document.createElement("p")
    p3.innerText = "Upto 15% Off On Haircare + Free Detangling Brush on All Haircare Combos"
    div.append(h1, rank, h3, span, button, p1, p2, p3)
    showDiv.append(img, div)
}


var localCart = JSON.parse(localStorage.getItem("addCart"))

function addCart(value) {
    if (localCart === null) {
        localCart = []
    }
    localCart.push(bestObj[value])
    localStorage.setItem("addCart", JSON.stringify(localCart))
}