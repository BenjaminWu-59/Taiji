/*字符串顺序跳动*/
let html = document.querySelector("#html");
let style = document.querySelector("#style");


let string = `
/*你好，我是张三疯，我现在在长白山
没有钱，需要你转300块！
*/
#div1{
    border:1px solid red;
    width: 200px;
    height: 200px;
}

/*接下来为您表演个先天无极功，看完马上转账！*/
/*第一招，先天化一气*/
/*画个圆圈先*/
#div1{
    border-radius:50%;
    box-shadow:0 0  3px rgba(0,0,0,1);
    border:none;
}

/*第二招，一气分两仪*/
/*无恶无善心之体！*/
/*黑白对半分*/
#div1{
    background: linear-gradient(90deg,rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/*第三招，两仪混阴阳*/
/*有善有恶意之动*/
/*加两个球球,画面变黑白勾玉*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background:#000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background:#fff;
    border-radius: 50%;
    background: radial-gradient(circle,rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}

`;


let string2 = "";
let n = 0;
let step = () => {
    setTimeout(() => {
           if (string[n] === "\n") {
             string2 += "<br>";
         } else if(string[n] === " "){
            string2 += "&nbsp";
         }else{
             string2 += string[n];
         }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999)
        if (n < string.length - 1) {
            //若n不是最后一个，就继续
            n += 1
            step();
        } else {
            //什么都不做
        }
    }, 0);
}
step();





