parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"epB2":[function(require,module,exports) {
var n="\n/*\n *你好,我叫CGC\n *接下来我要展示我的前端功底\n *首先我要准备一个div\n */\n#div1{\n    border:1px solid silver;\n    width: 200px;\n    height: 200px;\n}\n/* 接下来,我要把这个div变成一个太极图\n * 注意看好了\n * 首先,把div变成一个圆\n */\n#div1 {\n    border-radius: 50%;\n    box-shadow: 1px 1px 5px 3px rgba(151, 145, 145, 0.4);\n    border: none\n}\n/* 太极生两仪\n * 一黑一白\n */\n\n#div1{\n    background: rgb(255,255,255);\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*\n * 增加两个阴阳鱼\n*/\n\n#div1::before {\n    content: ' ';\n    display: block;\n    border-radius: 50%;\n    /* border:transparent 1px solid; */\n    height: 100px;\n    width: 100px;\n    position: relative;\n    top: 0px;\n    left: 50px;\n    background: rgb(255, 255, 255);\n    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 15%, rgba(255, 255, 255, 1) 16%, rgba(255, 255, 255, 1) 100%);\n}\n\n#div1::after {\n    content: ' ';\n    display: block;\n    border-radius: 50%;\n    /* border: transparent 1px solid; */\n    height: 100px;\n    width: 100px;\n    position: relative;\n    top: 0px;\n    left: 50px;\n    background: rgb(0, 0, 0);\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 15%, rgba(0, 0, 0, 1) 16%, rgba(0, 0, 0, 1) 100%);\n}\n\n/*   太极绘制完成\n *   展示结束\n */\n",r=document.querySelector("#html"),e=document.querySelector("#style"),o="",i=0;console.log(n.length);var a=function a(){setTimeout(function(){o+="\n"===n[i]?"<br>":" "===n[i]?"&ensp;":n[i],r.innerHTML=o,e.innerHTML=n.substring(0,i),window.scrollTo(0,99999),r.scrollTo(0,99999),(i+=1)<n.length&&a()},20)};a();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.b802d79a.map