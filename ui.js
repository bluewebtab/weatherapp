class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
    
  }

  paint(weather){
    this.location.textContent = weather[1].name;
    this.desc.textContent = weather[0].condition.text;
    this.string.textContent = weather[0].temp_f + ' F';
    this.icon.setAttribute('src', weather[0].condition.icon);
    this.humidity.textContent = weather[0].humidity + ' %';
    this.feelsLike.textContent = weather[0].feelslike_f +' F';
    this.wind.textContent = weather[0].wind_mph + ' mph';
  }
}