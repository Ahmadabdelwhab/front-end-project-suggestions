

var sites = [
    {
        "name": "  Hospital Website"
        ,
        "imgSrc":"images2/10130.jpg"
        ,
        "example":"https://www.jbl.de/en/online-hospital?country=bg"
        ,
        "color" : "black"
     }
    ,
    {
        "name": "  Gym Website"
        ,
        "imgSrc":"images2/gym.jpg"
        ,
        "example":"https://www.smart-gym.com/"
        ,
        "color":"black"
     }
     ,
     {
        "name": "  Online shop Website"
        ,
        "imgSrc":"images2/884.jpg"
        ,
        "example":"https://www.ubuy.com.eg/en/"
        ,
        "color":"black"
     }
     ,
     {
         "name": "  University Website"
         ,
         "imgSrc":"images2/2539199.jpg"
         ,
         "example":"https://www.harvard.edu/"
         ,
         "color":"black"
     }
     ,
     {
         "name": "  Order Coffe Website"
         ,
         "imgSrc":"images2/155Z_2107.w023.n001.687B.p1.687.jpg"
        ,
        "example":"https://www.drivencoffee.com/"
        ,
        "color":"black"
     }
     ,
     {
         "name": " Travel  Website"
         ,
         "imgSrc":"images2/1991562_Freepik.jpg"
        ,
        "example":"https://ar.trivago.com/en?sLanguageLocale=UK"
        ,
        "color":"black"
     }
     ,
     {
         "name": "  Banking Website"
         ,
         "imgSrc":"images2/737.jpg"
        ,
        "example":"https://www.nbe.com.eg/NBE/E/#/EN/Home"
        ,
        "color":"black"
     }
     ,
     {
        "name": "school website"
        ,
        "imgSrc":"images2/2550432.jpg"
       ,
       "example":"https://www.stgeorge.school.it/"
       ,
       "color":"black" 
     }
     ,
     {
        "name": "Gaming website"
        ,
        "imgSrc":"images2/2413.jpg"
       ,
       "example":"https://store.steampowered.com/"
       ,
       "color":"black" 
     }
     ,
     {
        "name": "Social media site"
        ,
        "imgSrc":"images2/422.jpg"
       ,
       "example":"https://www.facebook.com//"
       ,
       "color":"black" 
     }

     
     

]


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  
function GenrateRandomSite()
{
    
  
      
   
    var rand = getRandomInt(0,sites.length-1);

    
    document.getElementById("siteimg").src= "images2/giphy.gif";
    document.getElementById("site").innerHTML = "Random site";

      
    setTimeout(() => {
         
    document.getElementById("site").innerHTML = sites[rand].name;
    document.getElementById("sitea").href=sites[rand].example; 
    document.getElementById("siteimg").src=sites[rand].imgSrc;
   }, 2000);
}