import{S as a}from"./assets/vendor-870f0eb5.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const n=[{preview:"./img/img-gallery/preview/preview-object-1.jpg",original:"./img/img-gallery/original/original-object-1.jpg",description:"Object-1"},{preview:"./img/img-gallery/preview/preview-object-2.jpg",original:"./img/img-gallery/original/original-object-2.jpg",description:"Object-2"},{preview:"./img/img-gallery/preview/preview-object-3.jpg",original:"./img/img-gallery/original/original-object-3.jpg",description:"Object-3"},{preview:"./img/img-gallery/preview/preview-object-4.jpg",original:"./img/img-gallery/original/original-object-4.jpg",description:"Object-4"},{preview:"./img/img-gallery/preview/preview-object-5.jpg",original:"./img/img-gallery/original/original-object-5.jpg",description:"Object-5"},{preview:"./img/img-gallery/preview/preview-object-6.jpg",original:"./img/img-gallery/original/original-object-6.jpg",description:"Object-6"},{preview:"./img/img-gallery/preview/preview-object-7.jpg",original:"./img/img-gallery/original/original-object-7.jpg",description:"Object-7"},{preview:"./img/img-gallery/preview/preview-object-8.jpg",original:"./img/img-gallery/original/original-object-8.jpg",description:"Object-8"},{preview:"./img/img-gallery/preview/preview-object-9.jpg",original:"./img/img-gallery/original/original-object-9.jpg",description:"Object-9"}],c=document.querySelector("ul.gallery"),p=n.map(r=>`<li class="gallery-item">
<a class="gallery-link" href="${r.original}">
<img 
class="gallery-image"
src="${r.preview}"
alt="${r.description}"> 
</a>
</li>`).join("");c.insertAdjacentHTML("beforeend",p);new a(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
