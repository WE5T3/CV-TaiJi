
let string = `
/*
 *你好,我叫CGC
 *接下来我要展示我的前端功底
 *首先我要准备一个div
 */
#div1{
    border:1px solid silver;
    width: 200px;
    height: 200px;
}
/* 接下来,我要把这个div变成一个太极图
 * 注意看好了
 * 首先,把div变成一个圆
 */
#div1 {
    border-radius: 50%;
    box-shadow: 1px 1px 5px 3px rgba(151, 145, 145, 0.4);
    border: none
}
/* 太极生两仪
 * 一黑一白
 */

#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
 * 增加两个阴阳鱼
*/

#div1::before {
    content: ' ';
    display: block;
    border-radius: 50%;
    /* border:transparent 1px solid; */
    height: 100px;
    width: 100px;
    position: relative;
    top: 0px;
    left: 50px;
    background: rgb(255, 255, 255);
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 15%, rgba(255, 255, 255, 1) 16%, rgba(255, 255, 255, 1) 100%);
}

#div1::after {
    content: ' ';
    display: block;
    border-radius: 50%;
    /* border: transparent 1px solid; */
    height: 100px;
    width: 100px;
    position: relative;
    top: 0px;
    left: 50px;
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 15%, rgba(0, 0, 0, 1) 16%, rgba(0, 0, 0, 1) 100%);
}

/*   太极绘制完成
 *   展示结束
 */
`;
let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string2 = "";
let n = 0
console.log(string.length);


let step = () => {

    setTimeout(() => {

        // 如果是回车,就把回车替换为<br>
        //如果不是回车,就照搬string1
        //另一种 解决输出undefined 的方法
        // else if(string[n]===undefined){}  
        string2 += (string[n] === '\n' ? '<br>' : (string[n] === ' ' ? '&ensp;' : string[n]))
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        n += 1;
        if (n < string.length) {
            step()
        }

    }, 20)

}

console.log(string.length);
step()
console.log(string.length);