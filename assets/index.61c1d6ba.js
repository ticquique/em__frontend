import{j as d,r as n,R as m,a as u,b as f}from"./vendor.b4e16049.js";const g=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function p(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=p(r);fetch(r.href,t)}};g();const e=d.exports.jsx,o=d.exports.jsxs;class x extends n.exports.Component{render(){return o("nav",{className:"Navbar flex justify-between",children:[e("h1",{className:"font-bold text-green-900 text-lg p-2",children:"Estudio Mundo"}),o("ul",{className:"flex justify-between",children:[e("a",{className:"font-normal sm:text-lg text-sm text-gray-800 p-2",children:"Proyectos"}),e("a",{className:"font-normal sm:text-lg text-sm text-gray-800 p-2",children:"Quienes somos"}),e("a",{className:"font-normal sm:text-lg text-sm text-gray-800 p-2",children:"Contacto"})]})]})}}class h extends n.exports.Component{render(){return o("div",{className:"Div_presentation grid grid-rows-3 gap-4",children:[e("h1",{className:"text-center font-bold text-3xl text-gray-800",children:" Estudio Mundo est\xE1 formado por Quique Pons, desarrollador de software e Inma Soler, dise\xF1adora gr\xE1fica especializada en UX/UI. \xA1Encantados de conocerte!"}),e("h4",{className:"text-center font-normal text-gray-800 text-lg",children:"\xBFQu\xE9 camino es el mejor para ti?"}),o("div",{className:"container-button justify-center flex gap-4",children:[e("button",{className:"text-center border-2 border-gray-800 text-base font-bold text-gray-800 p-3",children:"Ver los proyectos"}),e("button",{className:"text-center border-2 border-gray-800 bg-gray-800 text-white text-base font-bold p-3",children:"\xA1Habla con nosotros!"})]})]})}}var s="/assets/descarga.a161bf55.jpg";class b extends n.exports.Component{render(){return o("div",{className:"Porfolio_grid grid grid-cols-3 gap-4 p-5",children:[e("img",{className:"porfolio_image object-cover w-full h-auto",src:s}),e("img",{className:"porfolio_image object-cover w-full h-auto",src:s}),e("img",{className:"porfolio_image object-cover w-full h-auto",src:s}),e("img",{className:"porfolio_image object-cover w-full h-auto",src:s}),e("img",{className:"porfolio_image object-cover w-full h-auto",src:s}),e("img",{className:"porfolio_image object-cover w-full h-auto",src:s})]})}}var v="/assets/instagram.7a5d8348.png",N="/assets/logotipo-de-behance.4ca2a224.png";class y extends n.exports.Component{render(){return o("div",{className:"Footer_rrss flex justify-between bg-green-300",children:[e("h1",{className:"font-bold text-green-900 text-sm p-2",children:"Estudio Mundo"}),o("ul",{children:[e("img",{className:"instagram w-4",src:v}),e("img",{className:"behance w-4",src:N})]})]})}}m.initialize("G-L8D4TF820R");class j extends n.exports.Component{componentDidMount(){m.send({hitType:"pageview",page:window.location.pathname})}render(){return o("div",{className:"App",children:[e(x,{}),e(h,{}),e(b,{}),e(y,{})]})}}u.render(e(f.StrictMode,{children:e(j,{})}),document.getElementById("root"));
