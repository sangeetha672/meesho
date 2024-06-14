let ethinic1=document.querySelector(".ethinic1")
let ethinic2=document.querySelector(".ethinic2")
ethinic1.addEventListener('mouseover',()=>{
    ethinic2.style.display="block"
})
ethinic1.addEventListener('mouseleave',()=>{
    window.setTimeout(function(){
        ethinic2.style.display="none"
    },2000)
    
})
let women1=document.querySelector(".women1")
let women2=document.querySelector(".women2")
women1.addEventListener('mouseover',()=>{
    women2.style.display="block"
})
women1.addEventListener('mouseleave',()=>{
    window.setTimeout(function(){
    women2.style.display="none"},2000)
})
let men1=document.querySelector(".men1")
let men2=document.querySelector(".men2")
men1.addEventListener('mouseover',()=>{
    men2.style.display="block"
})
men1.addEventListener('mouseleave',()=>{
    window.setTimeout(function(){
    men2.style.display="none"},2000)
})
let kid1=document.querySelector(".kid1")
let kid2=document.querySelector(".kid2")
kid1.addEventListener('mouseover',()=>{
    kid2.style.display="block"
})
kid1.addEventListener('mouseleave',()=>{
    window.setTimeout(function(){
    kid2.style.display="none"},2000)
})
let kitchen1=document.querySelector(".Kitchen1")
let kitchen2=document.querySelector(".Kitchen2")
kitchen1.addEventListener('mouseover',()=>{
    kitchen2.style.display="block"
})
kitchen1.addEventListener('mouseleave',()=>{
    window.setTimeout(function(){
    kitchen2.style.display="none"},2000)
})
let Beauty1=document.querySelector(".Beauty1")
let Beauty2=document.querySelector(".Beauty2")
Beauty1.addEventListener('mouseover',()=>{
    Beauty2.style.display="block"
})
Beauty1.addEventListener('mouseleave',()=>{
    window.setTimeout(function(){
    Beauty2.style.display="none"},2000)
})
let jewe1=document.querySelector(".jewe1")
let jewe2=document.querySelector(".jewe2")
jewe1.addEventListener('mouseover',()=>{
    jewe2.style.display="block"
})
jewe1.addEventListener('mouseleave',()=>{
    window.setTimeout(function(){
    jewe2.style.display="none"},2000)
})
let bags1=document.querySelector(".bags1")
let bags2=document.querySelector(".bags2")
bags1.addEventListener('mouseover',()=>{
    bags2.style.display="block"
})
bags1.addEventListener('mouseleave',()=>{
    window.setTimeout(function(){
    bags2.style.display="none"},2000)
})
let ele1=document.querySelector(".ele1")
let ele2=document.querySelector(".ele2")
ele1.addEventListener('mouseover',()=>{
    ele2.style.display="block"
})
ele1.addEventListener('mouseleave',()=>{
    window.setTimeout(function(){
    ele2.style.display="none"},2000)
})
// let login=document.querySelector(".conn");
// let login1=document.querySelector(".loginpage")
// login.addEventListener('mouseover',()=>{
//     login1.style.display="block";
// })
// let loggg=document.querySelector(".con");
// let log1=document.querySelector(".loginpage");
// loggg.addEventListener('mouseover',()=>{
//     log1.style.display="block"
// })
// loggg.addEventListener('mouseleave',()=>{
//     log1.style.display="none"
// })

$(".con").on('mouseover',()=>{
    $(".loginpage").css({"display":"block"})
})
$(".con").on('mouseleave',()=>{
    window.setTimeout(function(){
        $(".loginpage").css({"display":"none"})
    } ,5000)
    
})
// slide
let image=document.querySelector(".sangeetha")
        let s1=document.querySelector(".s1")
        let s2=document.querySelector(".s2")
        let s3=document.querySelector(".s3")
        let s4=document.querySelector(".s4")
        s1.addEventListener('click',()=>{
            image.style.backgroundImage="url(imges/saree1.png)";
        })
        s2.addEventListener('click',()=>{
            image.style.backgroundImage="url(imges/saree2.png)";
        })
        s3.addEventListener('click',()=>{
            image.style.backgroundImage="url(imges/saree3.png)";
        })
        s4.addEventListener('click',()=>{
            image.style.backgroundImage="url(imges/saree4.png)";
        })

        // let sareeS1=document.querySelector(".sareeS1")

        $(".sareeS1").on('mouseover',()=>{
            $(".bharath").css({"display":"block"})
        })
        $(".sareeS1").on('mouseleave',()=>{
            window.setTimeout(function(){
                $(".bharath").css({"display":"none"})
            } ,10000)
            
        })
