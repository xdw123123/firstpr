// 顶部
const shop = document.querySelector('.shop')
const span = document.querySelector('.shop span')
const shopper = document.querySelector('.shopper')
shop.addEventListener('mouseover', function () {
    shop.style.backgroundColor = 'white'
    span.style.color = 'orange'
    shop.style.color = 'orange'
    shopper.style.display = 'block'
})
shop.addEventListener('mouseleave', function () {
    shop.style.backgroundColor = ''
    span.style.color = ''
    shop.style.color = ''
    shopper.style.display = ''
})
//轮播图=================================================================
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const img = document.querySelector('.pic img')
const pic = document.querySelector('.pic')
const fade = document.querySelector('.fade')
const silderData = [
    { url: './images/1.jpeg' },
    { url: './images/2.webp' },
    { url: './images/3.webp' },
    { url: './images/4.webp' },
    { url: './images/5.webp' }
]
let i = 0
next.addEventListener('click', () => {
    i++
    if (i >= silderData.length) {
        i = 0
    }
    toggle()
})
prev.addEventListener('click', () => {
    i--
    if (i < 0) {
        i = silderData.length
    }
    toggle()
})
function toggle() {
    img.src = silderData[i].url
    document.querySelector('.tab .active').classList.remove('active')
    document.querySelector(`.pic .tab li:nth-child(${i + 1})`).classList.add('active')
}
let timeId = setInterval(() => {
    next.click()
}, 2000)

pic.addEventListener('mouseover', () => {
    clearInterval(timeId)
})
pic.addEventListener('mouseleave', () => {
    timeId = setInterval(() => {
        next.click()
    }, 2000)
})
//轮播图===================================================


// 导航隐藏部分=============================================
const hidden = document.querySelector('.home-container .hidden')
const nav_list_li = document.querySelector('.nav-list li a')
nav_list_li.addEventListener('mouseover',()=>hidden.style.display = 'block')
nav_list_li.addEventListener('mouseleave',()=>hidden.style.display = 'none')

// 导航隐藏部分=============================================

// 垂直导航隐藏部分==========================================
const catgory_hidden = document.querySelector('.swiper .catgory-hidden')
const catgory_li = document.querySelector('.swiper .catgory ul li')
catgory_li.addEventListener('mouseover',()=>catgory_hidden.style.display = 'block')
catgory_li.addEventListener('mouseleave',()=>catgory_hidden.style.display = 'none')

// 垂直导航隐藏部分==========================================


// 搜索框=================================================
const header_search = document.querySelector('.header-search')
const header_search_input = document.querySelector('.header-search input')
const search = document.querySelector('.header-search .search')
const search_k = document.querySelector('.header-search .search-k')
header_search_input.addEventListener('focus',()=>{
    header_search.style.borderColor = 'orange'
    search.style.borderColor = 'orange'
    search_k.style.borderColor = 'orange'
    search_k.style.display = 'block'
    
})
header_search_input.addEventListener('blur',()=>{
    header_search.style.borderColor = ''
    search.style.borderColor = ''
    search_k.style.borderColor = ''
    search_k.style.display = 'none'
    
})
// 搜索框=================================================
const box_hd_span =document.querySelector('.box-hd a p')
box_hd_span.addEventListener('mouseover',()=>box_hd_span.style.color = 'orange')
box_hd_span.addEventListener('mouseleave',()=>box_hd_span.style.color = '')
