var url = "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=512&serviceKey=4llzQmwfDhsCiVmcR2GcPB827zs0s0OiKwizB3GV21WblIjHwh3DcB35Y%2F0Tw2cnMqFebNscjA%2FuNucdQnetuA%3D%3D";
var mydata;

fetch(url)
	.then(function (res) {
		return res.json();
	})
	.then(function (data) {
		mydata = JSON.parse(JSON.stringify(data.data));
		console.log(mydata);
	})
	.catch(function (err) {
		console.log(err);
	});