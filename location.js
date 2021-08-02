
//var body = $request.body;
//body['longitude'] = '116.288160';
//body['latitude'] = '39.177440';

//body = JSON.stringify(body)
//  $done({
//    body
//  })

let body = JSON.parse($request.body);

//body.longitude ='116.3207' + Math.floor(Math.random() * 100);
//body.latitude ='39.9911' + Math.floor(Math.random() * 100);

//body.longitude ='116.320761'
//body.latitude ='39.991122'
body.vpn = 'false'
body = JSON.stringify(body);
console.log(body);
$done({body});


/*

{
  "os": "iOS",
  "longitude": "116.320763",
  "latitude": "39.991123",
  "vpn": "true",
  "sign": "f74c5391e912fcf5bed6b72e7a7ed41b",
  "token": "f245d29f-1da7-4792-97d0-7f8a0047486b"
}
*/
