


 let latitude = 0;
 let longitude = 0;
 let place ;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else { 
    console.log('not suppoted in this  broweser');
    
  }

  async function success(position){

    latitude = position.coords.latitude 
    longitude = position.coords.longitude 

   

  // console.log(latitude);
  // console.log(longitude);
   
   
  //  let response  = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=cc69c806a5b54501b4458f898f8fb1d6`);
  
  //  data = await response.json()

  //   console.log(data);
  
  // place = data.features[0].properties.county
  // console.log(place);
  // document.getElementById('place').innerText = place.toString() 

  showToUser()
    
  }

  function error(){
    console.log('this broweser doesnt support geolocation');
    
  }



  // =================================================================================
  // =================================================================================
  // =================================================================================
  // =================================================================================
  




async function showToUser() {
     const data = await  fetch(`https://api.weatherapi.com/v1/forecast.json?key=28b447049a66413fae253824250308&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`);
     const jsonData = await data.json()
     console.log(jsonData);
   
   place = jsonData.location.name
   console.log(place);
   document.getElementById('place').innerText = place.toString() 


   let temp = jsonData.forecast.forecastday[0].day.avgtemp_c
   document.getElementById("temp").innerText= temp
   console.log(temp);


   let conditionText =  jsonData.forecast.forecastday[0].day.condition.text
   let conditionImg =  jsonData.forecast.forecastday[0].day.condition.icon

   document.getElementById('condImg').src = conditionImg
   document.getElementById('condTxt').innerText = conditionText
   

}
