

http-response ^https?:\/\/vira\.llsapp\.com\/api\/v2\/readings\/(accessible|limitation) requires-body=1,max-size=0,script-path=https://github.com/xiaoming123m/Surge/blob/master/llydW.js
MitM=vira.llsapp.com

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/api/v2/readings/limitation';
const time = '/api/v2/readings/accessible';

if (url.indexOf(vip) != -1) {
    obj ["modules"] = [];
    obj ["auditionDuration"] = 7200;
    body = JSON.stringify(obj);
}
if (url.indexOf(time) != -1) {
    obj["from"] = 1482071586;
    obj["to"] = 1671373986;
    body = JSON.stringify(obj);
}
$done({body});
    
