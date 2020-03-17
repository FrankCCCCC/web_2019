export function getNowPos() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          code: 200,
        };
        console.log(pos.lat);
        console.log(pos.lng);
        return pos;
      }, function () {
        console.log("Don't get geo position");
        return { lat: 0.000, lng: 0.000, code: 201, };
      }
    );
  }
}
/*
export function getNowCity() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          code: 200,
        };
        console.log(pos.lat);
        console.log(pos.lng);

        var latlng = { lat: pos.lat, lng: pos.lng };
        geocoder.geocode({ 'location': latlng }, function (result, status) {
          if(status === 'OK'){
            return result[0];
          }
        })

      }, function () {
        console.log("Don't get geo position");
        return { lat: 0.000, lng: 0.000, code: 201, };
      }
    );
  }
}
*/
