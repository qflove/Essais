[rewrite_local]
^https?:\/\/neckgo\.wedea\.cn\/neok\/api\/api\/getLoginInfo url script-response-body https://raw.githubusercontent.com/qflove/Essais/main/1.js

[MITM]
hostname = neckgo.wedea.cn

var guding = JSON.parse($response.body);
guding.data.isVip = true;
$done({ body: JSON.stringify(guding) });
