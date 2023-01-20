function completeData()
{
      return new promise(function(resolve,reject){
        var status=true;
  })
    
}
// using async and await value
async function wetherData()
{
   var city = document.querySelector("#city").value;
     if(city =="")
      {
        city = 'Rajasthan';
      }  

apik ='3045dd712ffe6e702e3245525ac7fa38';

var response = await 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apik}`);
if(response && response.status == 200){
    var data = await response.json();
    console.log(data);
   var temp= Math.floor(data.main.temp - 273.15);
   var weather=data.weather[0].main;
   var name = data.name+" "+data.sys.country;
   
   document.querySelector('#temparature').innerHTML= temp+"<sup style='font-size:10px'>"+0+"</sup> C";
   document.querySelector('#weather').innerHTML=weather;
   document.querySelector('#img').src="img/"+weather+".png";
   document.querySelector('#name').innerHTML = '<i class="fa-sharp fa-solid fa-location-dot"></i>' + name;
   
}
if(response && response.status==404)
{
    alert("Invilid city Name");
}
if(response && response.status==401)
{
    alert("Invilid API Key");
}
}
wetherData();