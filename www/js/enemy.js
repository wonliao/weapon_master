var enemy = {

	max_hp: 0,				// 最大血量
	hp: 0,					// 血量
	posX: 400,				// X座標
	
	
	
	profession: 0,			// 職業

	resistance1: 0,	// 弓箭 抗性
	resistance2: 0,	// 劍 抗性
	resistance3: 0,	// 魔杖 抗性
	resistance4: 0,	// 魔法鞭 抗性

	// 初始化
    initialize: function() {

		// for test
		if( typeof(window.localStorage) != 'undefined' )	window.localStorage.setItem("ENEMY_HP", 0);

		// 載入資料
		enemy.loadData();
		console.log("弓箭 抗性("+enemy.resistance1+")");
		console.log("劍 抗性("+enemy.resistance2+")");
		console.log("魔杖 抗性("+enemy.resistance3+")");
		console.log("魔法鞭 抗性("+enemy.resistance4+")");
    },

	// 產生一個敵人 
	create: function(profession) {
console.log("create");
		// 職業
		enemy.profession = profession;

		// 設定職業屬性
		enemy.setAttribute();
		
		// 儲存資料
		enemy.saveData();
	},

	// 設定職業屬性
	setAttribute: function() {

		switch(enemy.profession){
		case 1:	// 戰士
			enemy.max_hp = 100; 		// 最大血量
			enemy.hp = 100;			// 血量
			enemy.resistance1 = 0;	// 弓箭 抗性
			enemy.resistance2 = 0.6;	// 劍 抗性
			enemy.resistance3 = 0.6;	// 魔杖 抗性
			enemy.resistance4 = 0.3;	// 魔法鞭 抗性
			break;
		case 2:	// 法師
			enemy.max_hp = 100; 		// 最大血量
			enemy.hp = 100;			// 血量
			enemy.resistance1 = 0.6;	// 弓箭 抗性
			enemy.resistance2 = 0;	// 劍 抗性
			enemy.resistance3 = 0.6;	// 魔杖 抗性
			enemy.resistance4 = 0.3;	// 魔法鞭 抗性
			break;
		case 3:	// 弓箭手
			enemy.max_hp = 100; 		// 最大血量
			enemy.hp = 100;			// 血量
			enemy.resistance1 = 0.6;	// 弓箭 抗性
			enemy.resistance2 = 0.6;	// 劍 抗性
			enemy.resistance3 = 0;	// 魔杖 抗性
			enemy.resistance4 = 0.3;	// 魔法鞭 抗性
			break;
		}
	},

	// 載入資料
	loadData: function() {

		if( typeof(window.localStorage) != 'undefined' ) {

			// 檢查敵人血量
			var hp = window.localStorage.getItem("ENEMY_HP");
			if(hp == null || hp <= 0) {

				// 產生一個敵人 
				enemy.create(1);
			} else {

				var max_hp = window.localStorage.getItem("ENEMY_MAX_HP");
				if(max_hp == null)			window.localStorage.setItem("ENEMY_MAX_HP", enemy.max_hp);
				else						enemy.max_hp = max_hp;
	
				var hp = window.localStorage.getItem("ENEMY_HP");
				if(hp == null)				window.localStorage.setItem("ENEMY_HP", enemy.hp);
				else						enemy.hp = hp;
			
				var posX = window.localStorage.getItem("ENEMY_POS_X");
				if(posX == null)			window.localStorage.setItem("ENEMY_POS_X", enemy.posX);
				else						enemy.posX = posX;
	
				var profession = window.localStorage.getItem("ENEMY_PROFESSION");
				if(profession == null)	window.localStorage.setItem("ENEMY_PROFESSION", enemy.profession);
				else						enemy.profession = profession;
	
				var resistance_1 = window.localStorage.getItem("ENEMY_RESISTANCE_1");
				if(resistance_1 == null)	window.localStorage.setItem("ENEMY_RESISTANCE_1", enemy.resistance_1);
				else						enemy.resistance_1 = resistance_1;
	
				var resistance_2 = window.localStorage.getItem("ENEMY_RESISTANCE_2");
				if(resistance_2 == null)	window.localStorage.setItem("ENEMY_RESISTANCE_2", enemy.resistance_2);
				else						enemy.resistance_2 = resistance_2;
	
				var resistance_3 = window.localStorage.getItem("ENEMY_RESISTANCE_3");
				if(resistance_3 == null)	window.localStorage.setItem("ENEMY_RESISTANCE_3", enemy.resistance_3);
				else						enemy.resistance_3 = resistance_3;
	
				var resistance_4 = window.localStorage.getItem("ENEMY_RESISTANCE_4");
				if(resistance_4 == null)	window.localStorage.setItem("ENEMY_RESISTANCE_4", enemy.resistance_4);
				else						enemy.resistance_4 = resistance_4;
			}
		}
	},

	// 儲存資料
	saveData: function() {

		if( typeof(window.localStorage) != 'undefined' ) {

			window.localStorage.setItem("ENEMY_MAX_HP", 		enemy.max_hp);
			window.localStorage.setItem("ENEMY_HP", 			enemy.hp);
			window.localStorage.setItem("ENEMY_POS_X", 			enemy.posX);
			window.localStorage.setItem("ENEMY_PROFESSION", 	enemy.profession);
			window.localStorage.setItem("ENEMY_RESISTANCE_1", 	enemy.resistance_1);
			window.localStorage.setItem("ENEMY_RESISTANCE_2", 	enemy.resistance_2);
			window.localStorage.setItem("ENEMY_RESISTANCE_3", 	enemy.resistance_3);
			window.localStorage.setItem("ENEMY_RESISTANCE_4", 	enemy.resistance_4);
		}
	},

	
}