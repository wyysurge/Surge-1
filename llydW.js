

^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) url script-response-body https://github.com/xiaoming123m/Surge/blob/master/llydW.js
MitM=vira.llsapp.com

var obj = $response.body;
var met = $request.method;
var url = $request.url;

const vip = '/api/v2/readings/limitation';
const time = '/api/v2/readings/accessible';

if (met == "GET"){
    if (url.indexOf(vip) != -1) {
    obj = {
    "modules": [],
    "auditionDuration": 7200
          };
     }
}

if (met == "GET"){
    if (url.indexOf(time) != -1) {
    obj = {
    "from": 1482071586,
    "to": 1671373986,
    "ids": []
           };
      }
}
$done({body: JSON.stringify(obj)});
