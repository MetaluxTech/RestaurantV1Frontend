// LANGUGE
import translations from "./translations.js";

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
// HEADER
let icons = document.querySelector('.icons');
let links = document.querySelectorAll('.links_li');
let lists = document.querySelector('.lists');


icons.onclick = function(){
  lists.classList.toggle('active-list');
}
document.onclick = function(e){
  if(e.target.id !== "icons" && e.target.id !== "menu" && e.target.id !== 'changeLang'){
    lists.classList.remove('active-list');
  }
}
links.forEach(link =>{
  link.addEventListener('click',()=>{
      links.forEach(link =>{
          link.classList.remove('active');
      })
      link.classList.add('active');
  })
})

$(".list").click(function(){
  let value=$(this).attr('data-filter');
  if(value=="all"){
      $(".allbox").show();
  }
  else{
      $(".allbox").filter('.'+value).show();
      $(".allbox").not('.'+value).hide();
      
  }
});

$('.list').click(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active')
})
