alert("اللهم احفظ أهل فلسطين والمسجد الأقصى من كيد الظالمين، وأيدهم بنصرك وقوتك. اللهم إني أستودعك بيت المقدس وأهل القُدس وكُل فلسطين. اللهُم كُن لهم عوناً ونصيراً يا رب العالمين. اللهم لا تخيب رجاءنا وأنت أرحم الراحمين نسألك لأهل فلسطين النّصر على من عاداهم، عاجلاً ")

let notEgyptProducts = ['بيبسي','كوكاكولا','شويبس','pepsi','cocacola','schweppes','شيتوس','دانون','تايد','ومجموعة ستاربكس','ستاربكس','برجر كينج','نيفيا', 'شيبسي', 
'إريال','دوف','نسكافيه','شركة نستله','نستله','vaseline','شاي ليبتون','fairy','tide','arial','منتجات شركة بيبسيكو','منتجات شركة يونيليفر'
,'dove','suave','bertolli','unilever','AXE','sunsilk','slim fast','ponds','mirinda','lays','nestle','chocapic','cheerios','FIDO','maggl','mousline'
,'herta','clusters','felix','friskies','smarties','crunch','chokella',
,'fitness','nuts','vittel','quezac','s.pelleorino','caro','sprite','7up','sevenup','fanta','nescafe',
'l’Oreal','lay’s','doritos','milka','lipton','oreo','evian','kfc','mac','omo','puma','carrefour',
'marlboro','hp','cheetos','nike','AVON','papa John’s','dunkin donuts','hyundai','بيك رولز',' نيفيا','كولجيت','adidas',
'عصير كابي','ديتول','clear',' هيد آند شولدرز'];

let egypt=['سبيروسباتس','شاي العروسة','منتجات كورونا','منتجات شمعدان','مصر كافيه',
'منتجات دومتي','بيج شيبسي','تايجر'
,'فوكس','دومتي','لمار','مزارع دينا','كاتيليو','منتجات قها'
,'delicate','shiny','مدار','leader','سيناكولا','شركة دريم','ماي واي',
'شركة جهينة','شركة أرما','شركة فريدة','فيروز','بيج','treshvitamin']
let inpProduct = document.querySelector(".inp-product");
let btnCheck = document.querySelector(".btn-check");
let validPro=document.querySelector(".valid-pro")
let notValidPro=document.querySelector(".not-valid-pro")
let allProduction=document.querySelector(".products")
let valid=document.querySelector(".products .valid")
let notValid=document.querySelector(".products .not-valid")
let allH2=document.querySelectorAll(".h")
let footer=document.querySelector('footer p')
//function to check if product valid or not
function get_value() {
 
    let product = inpProduct.value.toLowerCase();
  if (notEgyptProducts.includes(product)) {
    alert(`Sorry, Your Product (${product}) is not valid`)
  } else if(egypt.includes(product)) {
    alert(`The product (${product}) is valid`);
  }else{
    alert(`sorry we don't recognize this product (${product})`)
  }
}
// set search bar after searching
function check(){
    setTimeout(()=>{btnCheck.innerHTML='Check'},500);
    inpProduct.value="";
}
// result of check
btnCheck.onclick = () => {
    if(inpProduct.value===""){
          alert("Please Enter Your Product")
        } else{
          get_value();
          btnCheck.innerHTML='Checking Done'
          check()
        }
        
    };


//hide production
function hideValid(){
  validPro.onclick=()=>{
    if( validPro.innerHTML==='Hide valid product'){
      valid.style.display='none'
      validPro.innerHTML='Show valid product'
      //notValidPro.innerHTML='Show not valid product'
      notValidPro.style.cursor='pointer'
      footer.style.display='block'
    }else{
      valid.style.display='block'
      notValid.style.display='none'
      validPro.innerHTML='Hide valid product'
      notValidPro.style.cursor='not-allowed'
      footer.style.display='none'
      hideValid()
    }
  }
}

function hideNotValid(){
  notValidPro.onclick=()=>{
    if( notValidPro.innerHTML==='Hide not valid product'){
      notValid.style.display='none'
      notValidPro.innerHTML='Show not valid product'
      validPro.innerHTML='Show valid product'
      validPro.style.cursor='pointer'
      footer.style.display='block'
    }else{
      notValid.style.display='block'
      valid.style.display='none'
      notValidPro.innerHTML='Hide not valid product'
      validPro.style.cursor='not-allowed'
      footer.style.display='none'
      hideNotValid()
    }
  }
}

valid.style.display='none'

validPro.onclick=()=>{
  
    valid.style.display='block'
    notValidPro.style.cursor='not-allowed'
    notValid.style.display='none'
    validPro.innerHTML='Hide valid product'
    notValidPro.innerHTML='Show not valid product'
    footer.style.display='none'
    hideValid()
}

notValid.style.display='none'

notValidPro.onclick=()=>{
  notValid.style.display='block'
  validPro.style.cursor='not-allowed'
  valid.style.display='none'
  notValidPro.innerHTML='Hide not valid product'
  validPro.innerHTML='Show valid product'
  footer.style.display='none'
  hideNotValid()
}
allH2.forEach((all)=>{
  all.onclick=()=>{
    alert("You can search about this product in google")
  }
})