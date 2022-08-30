const body = document.querySelector('body')
const sideBar = body.querySelector('nav')
const toggle = body.querySelector('.toggle')
const searchBtn = body.querySelector('.search-box')
const modeSwitch = body.querySelector('.toggle-switch')
const modeText = body.querySelector('.mode-text')

toggle.addEventListener('click', () => {
    sideBar.classList.toggle('close')
})
searchBtn.addEventListener('click', () => {
    sideBar.classList.remove('close')
})
modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        modeText.innerText = "Light mode"
    } else {
        modeText.innerText = "Dark mode"
    }
})
/*-------------------------页面切换---------------------------*/
const menuLinks = body.querySelector('.menu-links')
const lis = menuLinks.querySelectorAll('li')
const show = body.querySelectorAll('.screenShow')
for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i)
    lis[i].onclick = function () {
        const index = this.getAttribute('index')
        for (let i = 0; i < lis.length; i++) {
            show[i].style.display = 'none'
        }
        show[index].style.display = 'block'
    }
}
/*------------------------天气代码---------------------------*/
// vue代码部分
const app = new Vue({
    el: "#sec4-app",
    data: {
        city: "",
        weatherList: [],
    },
    methods: {
        searchEnter: function () {
            let that = this;
            axios
                .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                .then(function (response) {
                    that.weatherList = response.data.data.forecast;
                })
                .catch(function (err) {
                });
        },
        changeCity: function (city) {
            this.city = city;
            this.searchEnter();
        },
        clickButton: function () {
            this.searchEnter();
        },
    },
});
