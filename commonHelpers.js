import{a as v,i as u,S as L}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const b=o=>o.reduce((t,{tags:r,webformatURL:n,largeImageURL:e,likes:s,views:i,comments:y,downloads:g})=>t+`<li class="photo-container zoom-on-hover">
    <a href=${e} class="card-link js-card-link">
        <img class="photo " src="${n}" alt="${r}" >
    </a>
    <div class="info">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${i}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${y}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${g}</span>
        </div>
    </div>
</li>
    `,""),S="https://pixabay.com/api/",w="43997117-306e8cb8a0972afaf1f3fc80b",P=async(o,t)=>(await v(S,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data,h=document.querySelector(".gallery"),E=document.querySelector(".search-form"),c=document.querySelector(".loader"),a=document.querySelector(".photo-btn");let l=1,q=15,m="";function M(){a.classList.remove("is-hidden-btn")}function f(){a.classList.add("is-hidden-btn")}async function p(o,t){c.classList.remove("is-hidden");try{const r=await P(o,t);r.hits.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!"}),f(),a.removeEventListener("click",d)):(h.innerHTML+=b(r.hits),new L(".gallery a",{captionsData:"alt",captionsDelay:250}).refresh(),t*q>=r.totalHits?(f(),a.removeEventListener("click",d),u.info({message:"We're sorry, but you've reached the end of search results."})):M())}catch(r){console.log(r)}finally{c.classList.add("is-hidden")}}async function d(){l++,await p(m,l),B()}a.addEventListener("click",d);async function $(o){o.preventDefault();const t=o.target.elements.searchKeyword.value.trim();if(h.innerHTML="",t==="")return f(),a.removeEventListener("click",d),u.error({message:"Sorry, there are no images matching your search query. Please try again!"});m=t,c.classList.remove("is-hidden");try{l=1,await p(t,l)}catch(r){console.log(r)}finally{o.target.reset(),c.classList.add("is-hidden")}}E.addEventListener("submit",$);function B(){const{height:o}=document.querySelector(".photo-container").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map