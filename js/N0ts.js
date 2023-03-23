/*
 * @Author: N0ts
 * @Date: 2021-11-16 16:59:53
 * @LastEditTime: 2021-12-03 10:34:54
 * @Description: main
 * @FilePath: /NutssssIndex2/js/N0ts.js
 * @Mail：mail@n0ts.cn
 */

import c from "./config.js";

window.onload = function () {
    var loadElement = document.querySelector(".load");
    if (loadElement) {
        loadElement.style.display = "none";
    }
    
    var boxElement = document.querySelector(".Box");
    if (boxElement) {
        boxElement.classList.add("BoxLoad");
    }
};

let seconds = 1000;
let minutes = seconds * 60;
let hours = minutes * 60;
let days = hours * 24;
let years = days * 365;
let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let todayDate = today.getDate();
let todayHour = today.getHours();
let todayMinute = today.getMinutes();
let todaySecond = today.getSeconds();
let t1 = c.loveTime;
let t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
let diff = t2 - t1;
let diffYears = Math.floor(diff / years);
let diffDays = Math.floor(diff / days - diffYears * 365);
let diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
let diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
let diffSeconds = Math.floor(
    (diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds
);

new Vue({
    el: "#app",
    data: {

        timeText: "", // 计时文案

    },

    mounted() {
        // 计时器开始
        setInterval(() => {
            this.lovetime();
        }, 1000);

        // 图片查看
        const imgs = document.querySelectorAll(".pagesTextBox img");
        imgs.forEach((item) => {
            new Viewer(item);
        });
    },


        /**
         * 时差计算
         */
        lovetime() {
            today = new Date();
            todayYear = today.getFullYear();
            todayMonth = today.getMonth() + 1;
            todayDate = today.getDate();
            todayHour = today.getHours();
            todayMinute = today.getMinutes();
            todaySecond = today.getSeconds();
            t1 = c.loveTime;
            t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
            diff = t2 - t1;
            diffYears = Math.floor(diff / years);
            diffDays = Math.floor(diff / days - diffYears * 365);
            diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
            diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
            diffSeconds = Math.floor(
                (diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds
            );
            this.timeText = `我们已经在一起 ${diffYears} 年 ${diffDays} 天 ${diffHours} 小时 ${diffMinutes} 分钟 ${diffSeconds} 秒啦！`;
        },


    }
});
