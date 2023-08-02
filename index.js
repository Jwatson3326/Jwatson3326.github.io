function loadCSS (cssText) {
    var styleSheet = document.createElement("style")
    styleSheet.innerText = cssText
    document.head.appendChild(styleSheet)
}

function loadStars () {
    //stars support up to 8k resolution
    const vw = 3840
    const vh = 3840
    var stars1 = `#stars {
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: `
    var stars2 = `#stars2 {
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: `
    var stars3 = `#stars3 {
    width: 3px;
    height: 2px;
    background: transparent;
    box-shadow: `

    //calculates the number of stars to generate based on the screen size, covers up to 8k size
    var starNum1 = 600
    starNum1 = starNum1 / (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2160)
    starNum1 = starNum1 / (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 3840)
    console.log(starNum1)

    var starNum2 = 200
    starNum2 = starNum2 / (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2160)
    starNum2 = starNum2 / (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 3840)

    var starNum3 = 100
    starNum3 = starNum3 / (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2160)
    starNum3 = starNum3 / (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 3840)


    for (let i = 0; i < starNum1; i++) {
        stars1 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #ffe, ";
    }
    for (let i = 0; i < starNum2; i++) {
        stars2 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #ffe, ";
    }
    for (let i = 0; i < starNum3; i++) {
        stars3 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #ffe, ";
    }
    stars1 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #fff;}";
    stars2 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #fff;}";
    stars3 += Math.floor(Math.random() * (vw + 1)) + "px " + Math.floor(Math.random() * (vh + 1)) + "px #fff;}";
    loadCSS(stars1)
    loadCSS(stars2)
    loadCSS(stars3)
}

function sizeBlog () {
    console.log("pog")
    var vw = 0.0;
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var blogSize = vw * (0.9 - ((vw/1080) * 0.1))

    var blogSpace = `#blog {width: ` + blogSize + `px;}`;
    loadCSS(blogSpace)
    var blogSpace2 = `#blogSpace {width: ` + blogSize + `px;}`;
    loadCSS(blogSpace2)

    if (vw < 500) {
        var imageSize = '.blog-img {width: 100%; height: '+blogSize+'; border-radius: 5px 5px 0px 0px;}'
        loadCSS(imageSize)
    }
    else{
        var imageSize = '.blog-img {width: 200px; height: 200px; border-radius: 5px 0px 5px 0px;}'
        loadCSS(imageSize)
    }
    if (vw < 700) {
        var imageSize = '.post-img {width: '+blogSize*0.75+'; height: 100%; border-radius: 5px 0px 5px 0px;}'
        loadCSS(imageSize)
    }
    else {
        var imageSize = '.post-img {width: '+blogSize*0.5+'; height: 100%; border-radius: 5px 0px 5px 0px;}'
        loadCSS(imageSize)
    }
}


var currentSort = "date"
async function displayBlog () {
    if (document.URL.includes("blog.html")) {
        var currentUrl = (window.location.href).split('#');
        const postSpace = document.getElementById('blogContent')
        var response = ""
        try{
            response = await fetch('./posts/'+currentUrl[1]+'.md')
        }
        catch (err) {
            response = "Oops, looks like there's been an issue, have an <a href='https://www.youtube.com/watch?v=ESx_hy1n7HA'>awesome song</a> to compensate"
        }
        postSpace.innerHTML = await response.text();
    }
    else {
        const postSpace = document.getElementById('postSpace')
        var response = await fetch('./blog.json')
        var blogData = Object.values(JSON.parse(await response.text()))

        let postDataSet = [[]];

        var postList = ''
        for (const posts of blogData){
            for (let i = 0; i < blogData[0].length; i++) {
                console.log(posts[i]["title"])
                var postData = [posts[i]["title"], posts[i]["img"], posts[i]["description"], posts[i]["id"], posts[i]["date"]]
                postDataSet[i] = postData
            }

            if (currentSort = "date"){
                postDataSet.sort(sortFunction).reverse()
            }

            function sortFunction(a,b) {
                if (a[4] === b[4]) {
                    return 0;
                }
                else {
                    return (a[4] < b[4]) ? -1 : 1;
                }
            }

            for (const dataNum in postDataSet){
                var post = '<div id="post"> <img class="blog-img" src="'+ postDataSet[dataNum][1] +'"> <p class="blog-title">'+ postDataSet[dataNum][0] +'</p> <p class="blog-desc">'+ postDataSet[dataNum][2]+'</p> <a href = "blog.html#'+ postDataSet[dataNum][3] +'"><p class="blog-link">> Click here to find out more!!!!</p></a> <p class="blog-date">'+ postDataSet[dataNum][4] +'</p> </div>'
                postList += post  + '<br>'
            }
        }
        postSpace.innerHTML = postList
    }
}


document.addEventListener("DOMContentLoaded", displayBlog)
document.addEventListener("DOMContentLoaded", sizeBlog)
document.addEventListener("DOMContentLoaded", loadStars)
var timeout = false;
window.addEventListener("resize", function () {
    clearTimeout(timeout)
    timeout = this.setTimeout(sizeBlog, 200)
})