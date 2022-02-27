var prodarr=[{
    img_Url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_6.png?v=1640345399",
    name:"BODYCARE"},
    {
        img_Url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2_10_1dbebc34-9644-403f-8852-c556d836e66c.png?v=1643087515",
       name:"HAIRCARE"},
    {
        img_Url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3_11.png?v=1640345346",
        name:"NUTRITION"
    },{
        img_Url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_19.png?v=1643092197",
        name:"SERUM"
    },{
        img_Url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_7_47c1a313-615a-4e4f-994e-37886ca26458.png?v=1643105518",
        name:"MOISTURIZER"
    }
]

    localStorage.setItem("primeprod",JSON.stringify(prodarr));

    var slidearr=[
        {img_Url:"//cdn.shopify.com/s/files/1/0361/8553/8692/files/Q3WE.jpg?v=1645512709"},
        {img_Url:"//cdn.shopify.com/s/files/1/0361/8553/8692/files/HAOR.jpg?v=1645512709"},
        {img_Url:"//cdn.shopify.com/s/files/1/0361/8553/8692/files/VIT_C.jpg?v=1645512750"},
        {img_Url:"//cdn.shopify.com/s/files/1/0361/8553/8692/files/ACNE_1.jpg?v=1645512709"},
        {img_Url:"//cdn.shopify.com/s/files/1/0361/8553/8692/files/2131.jpg?v=1645512709"}
    ]

    localStorage.setItem("slideimage",JSON.stringify(slidearr));

    var prodslide=[{
    img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/5_1.webp?v=1644481721",
    name:"CICA CALMING NIGHT GEL WITH NIACINAMIDE",
    price:"Rs: 595.00"
},{
    img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/4_4.webp?v=1644493527",
    name:"Vitamin C Serum Glow Revealing Concentrate",
    price:"Rs: 926.00"
},{
    img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-4_876f386f-dd64-472c-8ace-4b616db63105.jpg?v=1644902669",
    name:"Night Reset Retinol + Ceramide Treatment Cream",
    price:"Rs: 897.00"
},{
    img_url:"https://cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1_adea079b-ee56-4632-8012-e9fe744cf4bc.jpg?v=1644914942",
    name:"HYALURONIC + CERAMIDE HYDRATING FACE SERUM",
    price: "RS 975.00"
},{
    img_url:"//cdn.shopify.com/s/files/1/0361/8553/8692/products/1_12.webp?v=1644862382",
    name:"LIP SLEEPING MASK WITH VITAMIN C",
    price:"Rs 612.00"
},
{
    img_url:"//cdn.shopify.com/s/files/1/0361/8553/8692/products/Artboard1-2_52198176-cba4-4b83-b4cf-26a5455dd4fb.jpg?v=1644914660",
    name:"Vitamin C+E Super Bright Moisturizer",
    price:"Rs 595.00"
}
    ]

    // product slider
    prodslide.map(function storeprod(elm){
        localStorage.setItem("prodslide",JSON.stringify(prodslide))
    })