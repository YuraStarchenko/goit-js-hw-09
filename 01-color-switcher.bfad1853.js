let t=null;const e={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};e.stopBtn.disabled=!0,e.startBtn.addEventListener("click",(()=>{e.startBtn.disabled=!0,e.stopBtn.disabled=!1,t=setInterval((()=>{e.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.stopBtn.addEventListener("click",(()=>{e.startBtn.disabled=!1,e.stopBtn.disabled=!0,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.bfad1853.js.map
