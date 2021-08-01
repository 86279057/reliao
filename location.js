
//var body = $request.body;
//body['longitude'] = '116.288160';
//body['latitude'] = '39.177440';

//body = JSON.stringify(body)
//  $done({
//    body
//  })

let body = JSON.parse($request.body);

body.longitude ='116.3201' + Math.floor(Math.random() * 100);
body.latitude ='39.9894' + Math.floor(Math.random() * 100);


body = JSON.stringify(body);
console.log(body);
$done({body});
