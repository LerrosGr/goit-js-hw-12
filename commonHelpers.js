import{a as b,i as n,S as h}from"./assets/vendor-b2578120.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function m(t,s){const r="https://pixabay.com/api/",i={key:"43096972-1afb589163252f275da428b1d",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s};try{return(await b.get(r,{params:i})).data}catch{throw console.error("Error occurred while fetching images:",error),error}}function p(t){return t.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:o,comments:a,downloads:L})=>`<li class="list-item">
     <a class="gallery-link" href ="${r}">
     <img loading="lazy" src="${s}" alt="${i}" class="gallery-image"
     </a>
     
      <ul class="information-list">
        <li class="item-information-container">
          <h2 class="main-info">Likes </h2>
            <p class="info">${e}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info"> Views</h2>
            <p class="info">${o}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info">Comments </h2>
            <p class="info">${a}</p>
          
        </li>
        <li class="item-information-container">
          <h2 class="main-info">Downloads </h2>
            <p class="info">${L}</p>
        </li>
      </ul>
   
    </li>`).join("")}const w=document.querySelector(".search-form"),d=document.querySelector(".list"),l=document.querySelector(".loading"),u=document.querySelector(".button-more");w.addEventListener("submit",k);function v(){u.classList.add("load-more")}function S(){u.classList.remove("load-more")}function y(){f>=g?S():v()}let c,f=1,g=0;const P=15;async function k(t){if(t.preventDefault(),c=t.target.elements.search.value.trim(),c===""){l.classList.remove("loader"),n.error({backgroundColor:"lightred",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Please, fill the field!"});return}d.innerHTML="";let s=1;l.classList.add("loader");try{const r=await m(c,s);r.hits&&r.hits.length===0&&n.error({backgroundColor:"red",progressBar:!1,close:!1,position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g=Math.ceil(r.totalHits/P);const i=p(r.hits);d.insertAdjacentHTML("beforeend",i),new h(".gallery-link",{captionsData:"alt"}).refresh()}catch{console.error("Error occurred while fetching images:",error),n.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"})}l.classList.remove("loader"),y(),t.target.reset()}u.addEventListener("click",x);async function x(t){l.classList.add("loader"),f+=1;try{const s=await m(c,f);f>=g&&n.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"});const r=p(s.hits);d.insertAdjacentHTML("beforeend",r),B(),new h(".gallery-link",{captionsData:"alt"}).refresh()}catch{console.error("Error occurred while fetching images:",error),n.error({backgroundColor:"red",icon:!1,progressBar:!1,close:!1,position:"topRight",message:"Sorry, an error occurred while fetching images. Please try again!"})}l.classList.remove("loader"),y()}function B(){const t=d.firstChild.getBoundingClientRect().height;console.log(t),scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
