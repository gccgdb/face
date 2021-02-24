/*
 * @Author: your name
 * @Date: 2021-02-21 19:25:17
 * @LastEditTime: 2021-02-22 12:52:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \HTML5\Test\face\js\swiper.js
 */

// 第一个函数 就业指导轮播图
(function () {
    var swiper = new Swiper(".get_job_fo", {
        // 能够显示的 slider的个数
        slidesPerView: 2,
        // 每一个slide之间的距离
        spaceBetween: 30,
        // 最大的盒子是否在中间
        centeredSlides: true,
        // 循环
        loop: true,
        // 添加左右箭头
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})();

// 第二个函数的轮播图
(function () {
    //  有多个轮播图最好修改下 swiper-container
    var swiper = new Swiper(".study_fo", {
        // 可以看到 2个半
        slidesPerView: 2.2,
        spaceBetween: 20,
    });
})();