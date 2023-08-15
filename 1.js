[rewrite_local]
^https?:\/\/neckgo\.wedea\.cn\/neok\/api\/api\/getLoginInfo url script-response-body https://github.com/qflove/Essais/blob/main/1.js

[MITM]
hostname = neckgo.wedea.cn

*/
var body = JSON.parse($response.body);
body.data.isVip = true;
$done({ body: JSON.stringify(body) });
