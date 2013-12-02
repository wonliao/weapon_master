var map = {

	// 是否為 Mobile 裝置
	isMobile: false,

	// 初始化
    initialize: function() {

		map.isMobile = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

		// 拖曳地圖
		$('#wrapper').kinetic();

		// 驢子轉向
		$('#donkey').transition({rotateY: '180deg'}, 0);

		// 設定按鈕
		map.setButton();
		
		// 更新抬頭訊息
		map.showHUD();
	
	},
	
	// 設定按鈕
	setButton: function() {

		Click($("#transport_btn"), function(object) {
			
			console.log('test');

			var msg = "";
			msg += "是否要運送武器給英雄<br />";
			msg += "弓箭:"+player.weapon1+"<br />";
			msg += "劍:"+player.weapon2+"<br />";
			msg += "魔杖:"+player.weapon3+"<br />";
			msg += "魔法鞭:"+player.weapon4;
			
			myConfirm(
			 	msg,
			 	"好的", 
				"不用了", 
			 	function() {
					console.log("success");
					$('#donkey').show().transition({rotateY: '180deg'}, 0).transition({ x: '-220px' }, 20000, 'linear');
					setTimeout(function() {
						$('#donkey').hide();
						myAlert("運送武器到達", "提示", "好的");
					}, 20000);
				}, 
				function() {
					console.log("fail");
				}
			);
		});
	},
	
	// 更新抬頭訊息
	showHUD: function() {

		if(map.isMobile == false) {
			player.weapon1 = 10;
			player.weapon2 = 20;
			player.weapon3 = 30;
			player.weapon4 = 40;
		}
		
		// 武器數量
		$('#hud_1').text(player.weapon1);
		$('#hud_2').text(player.weapon2);
		$('#hud_3').text(player.weapon3);
		$('#hud_4').text(player.weapon4);
	}
}


function Click(object, callback) {

	// Mobile 裝置
	if(map.isMobile == true) {

		object.bind('touchstart', function() {

			callback(object);
		});
	// 網頁版	
	} else {

		object.click(function(e) {

			callback(object);
		});
	}
}

function myAlert(message, title, buttonName) {

	// Android
	if(map.isMobile == true && device.platform == 'Android') {

		navigator.notification.alert(
			message,  		// message
			function() {},  // callback
			title,        // title
			buttonName    // buttonName
		);
	// iOS 及 網頁
	} else {

		alertify.alert(message);
	}
}

function myConfirm(message, okText, cancelText, success, fail) {

	// Android
	if(map.isMobile == true && device.platform == 'Android') {

		navigator.notification.confirm(
			message,  // message
			function(button) {		 // callback to invoke with index of button pressed
				if(button == 1) {
					success();
				} else {
					fail();
				}
			}
		);
	// iOS 及 網頁
	} else {

		alertify.confirm(message, function (e) {

			if (e) {

				// user clicked "ok"
				if(e == true)	success();
			} else {

				fail();
			}
		});
		
		$('#alertify-ok').text(okText);
		$('#alertify-cancel').text(cancelText);
	}
}

