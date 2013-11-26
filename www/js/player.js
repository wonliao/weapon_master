var player = {

	stone1: 0,	// 礦一
	stone2: 0,	// 礦二
	stone3: 0,	// 礦三
	stone4: 0,	// 礦四
	stone5: 0,	// 礦五
	stone6: 0,	// 礦六

	// 初始化
    initialize: function() {

		// 載入資料
		this.loadData();
    },
	
	// 載入資料
	loadData: function() {

		if( typeof(window.localStorage) != 'undefined' ) {

			var stone1 = window.localStorage.getItem("STONE_1");
			if(stone1 == null)		window.localStorage.setItem("STONE_1", player.stone1);
			else					player.stone1 = stone1;

			var stone2 = window.localStorage.getItem("STONE_2");
			if(stone2 == null)		window.localStorage.setItem("STONE_2", player.stone2);
			else					player.stone2 = stone2;

			var stone3 = window.localStorage.getItem("STONE_3");
			if(stone3 == null)		window.localStorage.setItem("STONE_3", player.stone3);
			else					player.stone3 = stone3;

			var stone4 = window.localStorage.getItem("STONE_4");
			if(stone4 == null)		window.localStorage.setItem("STONE_4", player.stone4);
			else					player.stone4 = stone4;

			var stone5 = window.localStorage.getItem("STONE_5");
			if(stone5 == null)		window.localStorage.setItem("STONE_5", player.stone5);
			else					player.stone5 = stone5;

			var stone6 = window.localStorage.getItem("STONE_6");
			if(stone6 == null)		window.localStorage.setItem("STONE_6", player.stone6);
			else					player.stone6 = stone6;
		}
	},
	
	// 儲存資料
	saveData: function() {

		if( typeof(window.localStorage) != 'undefined' ) {

			window.localStorage.setItem("STONE_1", player.stone1);
			window.localStorage.setItem("STONE_2", player.stone2);
			window.localStorage.setItem("STONE_3", player.stone3);
			window.localStorage.setItem("STONE_4", player.stone4);
			window.localStorage.setItem("STONE_5", player.stone5);
			window.localStorage.setItem("STONE_6", player.stone6);
		}
	},
	
	// 增加資源
	addResource: function(mineType) {

		switch(mineType){
		case "1":	player.stone1++; 	break;
		case "2":	player.stone2++;	break;
		case "3":	player.stone3++; 	break;
		case "4":	player.stone4++; 	break;
		case "5":	player.stone5++; 	break;
		case "6":	player.stone6++; 	break;
		}

		// 儲存資料
		player.saveData();
	}
}