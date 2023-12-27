// 获取所有的 tab 标签和对应的内容区域
var tabItems = document.querySelectorAll("#tabs ul li");
var tabContents = document.querySelectorAll("#tabs .content div");
tabItems[0].classList.add("active");
document.getElementById('tab1').style.display = "block";

// 为每个 tab 标签添加点击事件监听器
tabItems.forEach(function (item) {
    item.addEventListener("click", function () {
        var tab = item.getAttribute("data-tab");

        // 隐藏所有内容区域
        tabContents.forEach(function (content) {
            content.style.display = "none";
            content.classList.remove("active");
        });

        // 显示点击的 tab 对应的内容区域
        document.getElementById(tab).style.display = "block";
        // 显示点击的 tab 对应的内容区域
        document.getElementById(tab).classList.add("active");

        // 添加/移除选中样式类
        tabItems.forEach(function (tabItem) {
            if (tabItem === item) {
                tabItem.classList.add("active");
            } else {
                tabItem.classList.remove("active");
            }
        });
    });
});