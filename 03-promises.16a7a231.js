(document.querySelector("form.form"),document.querySelector('[name="delay"]'),document.querySelector('[name="step"]'),document.querySelector('[name="amount"]'),document.querySelector('[type="submit"]')).addEventListener("click",(function(e){e.preventDefault();for(var o=1;o<=amount;o+=1);var n,t;(n=2,t=1500,new Promise((function(e,o){var c=Math.random()>.3;setTimeout((function(){c?e({position:n,delay:t}):o({position:n,delay:t})}),t)}))).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))}))}));
//# sourceMappingURL=03-promises.16a7a231.js.map
