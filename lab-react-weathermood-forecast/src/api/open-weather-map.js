import axios from 'axios';

// TODO replace the key with yours
const key = '36978c6550efee0e27e50850cc57adda';
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${key}`;
const baseUrlFore = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${key}`;

export function getWeatherGroup(code) {
    let group = 'na';
    if (200 <= code && code < 300) {
        group = 'thunderstorm';
    } else if (300 <= code && code < 400) {
        group = 'drizzle';
    } else if (500 <= code && code < 600) {
        group = 'rain';
    } else if (600 <= code && code < 700) {
        group = 'snow';
    } else if (700 <= code && code < 800) {
        group = 'atmosphere';
    } else if (800 === code) {
        group = 'clear';
    } else if (801 <= code && code < 900) {
        group = 'clouds';
    }
    return group;
}

export function capitalize(string) {
  return string.replace(/\b\w/g, l => l.toUpperCase());
}

let weatherSource = axios.CancelToken.source();

export function getWeather(city, unit) {
  var url = `${baseUrl}&q=${encodeURIComponent(city)}&units=${unit}`;

  console.log(`Making request to: ${url}`);

  return axios.get(url, { cancelToken: weatherSource.token }).then(function (res) {
    if (res.data.cod && res.data.message) {
      console.log(res.data.cod);
      console.log(res.data.message);
      throw new Error(res.data.message);
    } else {
      console.log(res.data.cod);
      console.log(res.data.message);
      return {
        city: capitalize(city),
        code: res.data.weather[0].id,
        group: getWeatherGroup(res.data.weather[0].id),
        description: res.data.weather[0].description,
        temp: res.data.main.temp,
        unit: unit, // or 'imperial'
      };
    }
  }).catch(function (err) {
    if (axios.isCancel(err)) {
      console.error(err.message, err);
    } else {
      throw err;
    }
  });
}

export function getWeatherByCoord(lat, lng, unit) {
  var url = `${baseUrl}&lat=${lat.toFixed(0)}&lon=${lng.toFixed(0)}&units=${unit}`;

  console.log(`Making request to: ${url}`);

  return axios.get(url, { cancelToken: weatherSource.token }).then(function (res) {
    if (res.data.cod && res.data.message) {
      console.log(res.data.cod);
      console.log(res.data.message);
      throw new Error(res.data.message);
    } else {
      console.log(res.data.cod);
      console.log(res.data.message);
      return {
        city: capitalize(res.data.name),
        code: res.data.weather[0].id,
        group: getWeatherGroup(res.data.weather[0].id),
        description: res.data.weather[0].description,
        temp: res.data.main.temp,
        unit: unit, // or 'imperial'
      };
    }
  }).catch(function (err) {
    if (axios.isCancel(err)) {
      console.error(err.message, err);
    } else {
      throw err;
    }
  });
}

export function countDay(i) {
  var today = new Date();
  var day = today.getDay();
  day = (day + parseInt(i)) % 7;
  if (day === 1) return 'Monday';
  else if (day === 2) return 'Tuesday';
  else if (day === 3) return 'Wednesday';
  else if (day === 4) return 'Thursday';
  else if (day === 5) return 'Friday';
  else if (day === 6) return 'Saturday';
  else if (day === 0) return 'Sunday';
}

export function cancelWeather() {
  weatherSource.cancel('Request canceled');
}

export function getForecast(city, unit) {
  // TODO
  //var url = `${baseUrlFore}&q=${encodeURIComponent(city)}&units=${unit}`;
  var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?appid=36978c6550efee0e27e50850cc57adda&q=london&units=metric';

  console.log(`Making request to: ${url}`);

  return axios.get(url, { cancelToken: weatherSource.token }).then(function (res) {
    if (res.data.cod != '200') {
      console.log(res.data.cod);
      console.log(res.data.message);
      throw new Error(res.data.message);
    } else {
    //if (1) {
      console.log(res.data.cod);
      console.log(res.data.message);
      return {
        city: capitalize(city),
        unit: unit, // or 'imperial'
        code: res.data.list[0].weather[0].id,
        group: getWeatherGroup(res.data.list[0].weather[0].id),
        description: res.data.list[0].weather[0].description,
        temp: res.data.list[0].temp.day,
        day: countDay(1),
        code1: res.data.list[1].weather[0].id,
        group1: getWeatherGroup(res.data.list[1].weather[0].id),
        description1: res.data.list[1].weather[0].description,
        temp1: res.data.list[1].temp.day,
        day1: countDay(2),
        code2: res.data.list[2].weather[0].id,
        group2: getWeatherGroup(res.data.list[2].weather[0].id),
        description2: res.data.list[2].weather[0].description,
        temp2: res.data.list[2].temp.day,
        day2: countDay(3),
        code3: res.data.list[3].weather[0].id,
        group3: getWeatherGroup(res.data.list[3].weather[0].id),
        description3: res.data.list[3].weather[0].description,
        temp3: res.data.list[3].temp.day,
        day3: countDay(4),
        code4: res.data.list[4].weather[0].id,
        group4: getWeatherGroup(res.data.list[4].weather[0].id),
        description4: res.data.list[4].weather[0].description,
        temp4: res.data.list[4].temp.day,
        day4: countDay(5),
      };
    }
  }).catch(function (err) {
    console.log('YYY');
    if (axios.isCancel(err)) {
      console.error(err.message, err);
    } else {
      throw err;
    }
  });
}

export function cancelForecast() {
  // TODO
}
