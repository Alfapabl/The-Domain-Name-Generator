/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".es", ".com", ".us", ".test"];
let web_domain = "";

window.onload = function() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          web_domain = pronoun[i] + adj[j] + noun[k] + domain[l];
          document.write(web_domain);
          document.write("<br>");
        }
      }
    }
  }
};

onload();
