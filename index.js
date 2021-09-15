// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  const changePic = (str) => {
    const mainEl = document.getElementById("main-pic")
    mainEl.innerHTML = `<img src="${str}">`
  }

  const changePic2 = (str) => {
    const mainEl = document.getElementById("main-pic2")
    mainEl.innerHTML = `<img src="${str}">`
  }