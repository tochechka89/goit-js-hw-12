import{a as g,i,S as L}from"./assets/vendor-BWecv2LQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const v=r=>r.reduce((t,{tags:a,webformatURL:o,largeImageURL:e,likes:s,views:n,comments:m,downloads:y})=>t+`<li class="photo-container zoom-on-hover">
    <a href=${e} class="card-link js-card-link">
        <img class="photo " src="${o}" alt="${a}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${n}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${m}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${y}</span>
        </div>
    </div>
</li>
    `,""),w="https://pixabay.com/api/",b="43997117-306e8cb8a0972afaf1f3fc80b",P=async(r,t)=>(await g(w,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,u=document.querySelector(".gallery"),S=document.querySelector(".search-form"),c=document.querySelector(".loader"),f=document.querySelector(".photo-btn");let l=1;const q=15;let h="";function A(){f.classList.remove("is-hidden-btn")}function d(){f.classList.add("is-hidden-btn")}async function p(r,t){c.classList.remove("is-hidden");try{const a=await P(r,t);if(a.hits.length===0)d(),i.error({message:"Sorry, there are no images matching your search query. Please try again!"});else{const o=v(a.hits);u.insertAdjacentHTML("beforeend",o),new L(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*q>=a.totalHits?(d(),i.info({message:"We're sorry, but you've reached the end of search results."})):A()}}catch{i.error({message:"An error occurred while fetching images. Please try again later."})}finally{c.classList.add("is-hidden")}}async function M(){l++,await p(h,l),D()}f.addEventListener("click",M);async function $(r){r.preventDefault();const t=r.target.elements.searchKeyword.value.trim();if(t==="")return d(),i.error({message:"Please enter a search keyword first."});h=t,u.innerHTML="",c.classList.remove("is-hidden");try{l=1,await p(t,l)}catch{i.error({message:"An error occurred while fetching images. Please try again later."})}finally{r.target.reset(),c.classList.add("is-hidden")}}S.addEventListener("submit",$);function D(){window.scrollBy({top:window.innerHeight,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
