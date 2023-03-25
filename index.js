

let mapDiv = document.getElementById("map");
let getLocationBtn = document.getElementById("loc-btn");
let removeLocBtn = document.getElementById("remove-loc");

function getLocation(){
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition)
        
    }
    else{
       mapDiv.innerHTML = "Geolocation is not supported by this browser.";

    }
}

function showPosition(position){
    let latitudePos = position.coords.latitude;
    let longitudePos = position.coords.longitude;

    localStorage.setItem("lat",latitudePos);
    localStorage.setItem("long",longitudePos);

    mapDiv.innerHTML =
     `<iframe src="https://maps.google.com/maps?q=${localStorage.getItem("lat")}, ${localStorage.getItem("long")}&z=15&output=embed" width="700" height="450" frameborder="5" style="border:0"></iframe>`
     

     if(localStorage.key("lat") && localStorage.key("long"))
      {
            getLocationBtn.removeEventListener("click",getLocation);

      }
}

function removeLocation(){
    localStorage.removeItem("lat");
    localStorage.removeItem("long");
}

getLocationBtn.addEventListener("click",getLocation);
removeLocBtn.addEventListener("click",removeLocation);


