class Weather {
  constructor(city, state){
    this.apiKey = '19215cce3ce2471f9c6191939182409 ';
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
  
    const responseData = await response.json();
    return [ responseData.current,
              responseData.location
    ]
   
  }

  //Change weather location
  changeLocation(city, state){
      this.city = city;
      this.state = state;
  }
}