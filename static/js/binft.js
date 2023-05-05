var binft = function(r,n) {
    // 将 n 数组中的所有元素转换为字符串
    var n = n.map(function(t) {
            return t + "";
      })
      , i = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"]
      , l = { // 定义打字动画的状态对象
        text: "",
        prefixP: -5,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: 2,
        step: 1
    };

    // 将 n 数组中的元素随机排序
    n.sort(function() {
        return Math.random() - 0.5;
    });
    
    // 定义递归函数 t()，实现打字动画效果
    !function t() {
        var e = n[l.skillI];
        l.step ? l.step-- : (l.step = 1,
        l.prefixP < "".length ? (0 <= l.prefixP && (l.text += ""[l.prefixP]),
        l.prefixP++) : "forward" === l.direction ? l.skillP < e.length ? (l.text += e[l.skillP],
        l.skillP++) : l.delay ? l.delay-- : (l.direction = "backward",
        l.delay = 2) : 0 < l.skillP ? (l.text = l.text.slice(0, -1),
        l.skillP--) : (l.skillI = (l.skillI + 1) % n.length,
        l.direction = "forward")),
        r.textContent = l.text,
        r.appendChild(function(t) {
            for (var e = document.createDocumentFragment(), r = 0; r < t; r++) {
                var n = document.createElement("span");
                n.textContent = String.fromCharCode(94 * Math.random() + 33),
                n.style.color = i[Math.floor(Math.random() * i.length)],
                e.appendChild(n)
            }
            return e
        }(l.prefixP < "".length ? Math.min(5, 5 + l.prefixP) : Math.min(5, e.length - l.skillP))),
        setTimeout(t, 75)
    }()
};
var divElement=document.getElementById("binft");
var descElement=document.getElementById("anime-aphorisms");
var myArray = JSON.parse(descElement.textContent);
binft(divElement,myArray)