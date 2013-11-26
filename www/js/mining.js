var mining = {

	// 是否為 Mobile 裝置
	isMobile: false,

	// 生產一個礦所需的時間(亳秒)
	producingTime: 100, 

	// 將礦點打成亂數
	randList: new Array(18, 10, 24, 1, 9, 13, 7, 21, 23, 14, 3, 8, 25, 19, 11, 5, 17, 22, 4, 12, 15, 2, 6, 16, 20), 

	//  mine 的 jquery selector 列表
	mineArray: new Array(),

	// 礦點數量
	mineMax: 25,

	// 初始化
    initialize: function() {

		this.isMobile = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

		// 設定 mine 的 jquery selector 列表
		this.setMineArray();

		// 設定按鈕
		this.setButton();

		// 更新抬頭訊息
		this.ShowHUD();

		// 產礦迴圈
		this.producingMinesLoop(0);
    },
	
	// 設定 mine 的 jquery selector 列表
	setMineArray: function() {

		// 主要是效率考量，只在一開始做 jquery selector
		// 將查詢出來的 dom 物件存進 array 中
		for(var i=0; i<this.mineMax; i++) {

			// 礦 物件
			var mine = $('#mine_' + (i+1));

			// 將礦物件存進陣列
			this.mineArray[i] = mine;
		}
	},

	// 設定按鈕
	setButton: function() {

		for(var i=0; i<this.mineMax; i++) {

			var mine = this.mineArray[i];

			// 採礦
			Click(mine, function(object) {
				
				if(object.html() != "") {

					var mineId = object.attr('id');
					var mineType = object.attr('title');	// 礦的種類

					// 增加資源
					player.addResource(mineType);
	
					// 更新抬頭訊息
					mining.ShowHUD();
	
					// 清除礦產
					object.html("");
				}
			});

		}
	},

	// 產礦迴圈
	producingMinesLoop: function(index) {

		// 取出目前的亂數礦點index
		var randIndex = mining.randList[index];

		// 礦 物件
		var mine = this.mineArray[randIndex-1];

		// 如果 礦點是空的 就產生 礦產
		if(mine.html() == "") {

			var stoneIndex = usefloor(1, 5);
			mine.attr("title", stoneIndex);	// 將 礦的種類 存放在 title 標籤裡

 			mine.html("<img src='./img/mining/stone"+stoneIndex+".png' class='mine_img' alt=''/>");
		}

		index ++;
		if(index >= mining.mineMax) index = 0;
		
		setTimeout(function() {

			mining.producingMinesLoop(index);
		}, mining.producingTime);
	},
	
	// 更新抬頭訊息
	ShowHUD: function() {

		$('#hud_1').text(player.stone1);
		$('#hud_2').text(player.stone2);
		$('#hud_3').text(player.stone3);
		$('#hud_4').text(player.stone4);
		$('#hud_5').text(player.stone5);
	}
};

// 自訂範圍值的亂數函式(最小值,最大值)
function usefloor(min,max) {

	return Math.floor(Math.random()*(max-min+1)+min);
}

function Click(object, callback) {

	// Mobile 裝置
	if(mining.isMobile == true) {
		
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

