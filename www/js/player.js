var player = {

	stone1: 0,	// 礦一
	stone2: 0,	// 礦二
	stone3: 0,	// 礦三
	stone4: 0,	// 礦四
	stone5: 0,	// 礦五
	stone6: 0,	// 礦六

	weapon1: 0,	// 武器一
	weapon2: 0,	// 武器二
	weapon3: 0,	// 武器三
	weapon4: 0,	// 武器四

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

			var weapon1 = window.localStorage.getItem("WEAPON_1");
			if(weapon1 == null)		window.localStorage.setItem("WEAPON_1", player.weapon1);
			else					player.weapon1 = weapon1;

			var weapon2 = window.localStorage.getItem("WEAPON_2");
			if(weapon2 == null)		window.localStorage.setItem("WEAPON_2", player.weapon2);
			else					player.weapon2 = weapon2;

			var weapon3 = window.localStorage.getItem("WEAPON_3");
			if(weapon3 == null)		window.localStorage.setItem("WEAPON_3", player.weapon3);
			else					player.weapon3 = weapon3;

			var weapon4 = window.localStorage.getItem("WEAPON_4");
			if(weapon4 == null)		window.localStorage.setItem("WEAPON_4", player.weapon4);
			else					player.weapon4 = weapon4;
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

			window.localStorage.setItem("WEAPON_1", player.weapon1);
			window.localStorage.setItem("WEAPON_2", player.weapon2);
			window.localStorage.setItem("WEAPON_3", player.weapon3);
			window.localStorage.setItem("WEAPON_4", player.weapon4);
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
	},

	// 扣除資源
	decResource: function(neesStone1, neesStone2, neesStone3, neesStone4, neesStone5, neesStone6) {

		player.stone1 -= neesStone1;
		player.stone2 -= neesStone2;
		player.stone3 -= neesStone3;
		player.stone4 -= neesStone4;
		player.stone5 -= neesStone5;
		player.stone6 -= neesStone6;

		// 儲存資料
		player.saveData();
	},

	// 武器+1
	addWeapon: function(weaponType) {

		switch(weaponType){
		case "1":	player.weapon1++; 	break;
		case "2":	player.weapon2++;	break;
		case "3":	player.weapon3++; 	break;
		case "4":	player.weapon4++; 	break;
		}

		// 儲存資料
		player.saveData();
	}
}