// ==UserScript==
// @name         The Battleship Breaker
// @version      0.1
// @description  Let's break it!
// @author       Kawarage
// @match        https://game.hullqin.cn/zfj
// @match        https://game.hullqin.cn/zfj/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const originalScriptUrl =
    "https://fe-1255520126.file.myqcloud.com/game/static/js/zfj.7c37b514.chunk.js";
  const customScriptUrl =
    "https://raw.githubusercontent.com/zimoluo/battleship-breaker/main/breaker-script.js"; // Replace with your local server URL

  // Intercept and replace script tags as soon as they are added to the document
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === "SCRIPT" && node.src === originalScriptUrl) {
          node.src = customScriptUrl;
        }
        if (
          node.tagName === "LINK" &&
          node.href === originalScriptUrl &&
          node.rel === "preload" &&
          node.as === "script"
        ) {
          node.href = customScriptUrl;
        }
      });
    });
  });

  // Start observing the document head for added nodes
  observer.observe(document.head, { childList: true, subtree: true });
})();
