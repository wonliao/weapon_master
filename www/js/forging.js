var forging = {

	// 是否為 Mobile 裝置
	isMobile: false,

	// 初始化
    initialize: function() {

		this.isMobile = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

		// 設定按鈕
		this.setButton();

		// 更新抬頭訊息
		this.showHUD();
    },

	// 設定按鈕
	setButton: function() {

		for(var i=1; i<=4; i++) { 

			var weapon = $('#weapon_' + i);

			Click(weapon, function(object) {

				var weaponId = object.attr('id');
				var weaponType = object.attr('title');	// 武器的種類

				// 製造武器
				forging.createWeapon(weaponType);
			});
		}
	},

	// 製造武器
	createWeapon: function(weaponType) {

		// 需要的材料
		var neesStone1 = 0;	// 礦一
		var neesStone2 = 0; // 礦二
		var neesStone3 = 0; // 礦三
		var neesStone4 = 0; // 礦四
		var neesStone5 = 0; // 礦五
		var neesStone6 = 0; // 礦六

		// 依照武器種類取出武器所需的材料
		switch(weaponType) {
		case "1":	neesStone1 = 2; neesStone2 = 2; break;
		case "2":	neesStone2 = 1; neesStone3 = 3; break;
		case "3":	neesStone3 = 2; neesStone4 = 3; break;
		case "4":	neesStone5 = 1; neesStone6 = 3; break;
		}

		// 檢查材料是否足夠
		if(	player.stone1 >= neesStone1 &&
			player.stone2 >= neesStone2 &&
			player.stone3 >= neesStone3 &&
			player.stone4 >= neesStone4 &&
			player.stone5 >= neesStone5 &&
			player.stone6 >= neesStone6 ) {

			console.log("材料足夠");

			// 扣除材料
			player.decResource(neesStone1, neesStone2, neesStone3, neesStone4, neesStone5, neesStone6);

			// 武器+1
			player.addWeapon(weaponType);

			// 更新抬頭訊息
			forging.showHUD();
		} else {

			console.log("材料不足");	
		}
	},

	// 更新抬頭訊息
	showHUD: function() {

		// 礦石數量
		$('#hud_1').text(player.stone1);
		$('#hud_2').text(player.stone2);
		$('#hud_3').text(player.stone3);
		$('#hud_4').text(player.stone4);
		$('#hud_5').text(player.stone5);
		$('#hud_6').text(player.stone6);

		// 武器數量
		$('#createNum1').text(player.weapon1);
		$('#createNum2').text(player.weapon2);
		$('#createNum3').text(player.weapon3);
		$('#createNum4').text(player.weapon4);
	}
};

// 自訂範圍值的亂數函式(最小值,最大值)
function usefloor(min,max) {

	return Math.floor(Math.random()*(max-min+1)+min);
}

function Click(object, callback) {

	// Mobile 裝置
	if(forging.isMobile == true) {

		object.bind('touchstart', function() {

			callback(object);
		});
	// 網頁版	
	} else {

		object.click(function() {

			callback(object);
		});
	}
}

