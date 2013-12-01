
var battle = {

	// 是否為 Mobile 裝置
	isMobile: false,

	// 初始化
    initialize: function() {

		battle.isMobile = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

		// 設定拖拉功能
		battle.setDragAndDrop();

		// 更新抬頭訊息
		battle.showHUD();
    },

	// 設定拖拉功能
	setDragAndDrop: function() {
		
		$('.weapon').draggable({ revert: true, revertDuration:0, helper: "clone"});

		$( "#playground" ).droppable({
			drop: function( event, ui ) {
				
				var weapon_type = $(ui.draggable).attr("alt")
				console.log("weapon_type("+weapon_type+")");

				// 進行攻擊
				battle.attack(Math.floor(weapon_type));
			}
		});
	},

	// 進行攻擊
	attack: function(weapon_type) {

		// 戰鬥計算
		battle.processBattle(weapon_type);	
		
		// 播放玩家攻擊動畫	
		var cvs = $("#cvs");
		var cvsF = cvs.data("fighter");
		cvsF.currentState = KICK;
		changeAnimation(cvs, cvsF.animations, 4, cvsF.currentState);
				
				//respawnEnemy();
	},

	// 戰鬥計算
	processBattle: function(weapon_type) {

		// 取得武器傷害
		var weapon_damage = battle.getWeaponDamage(weapon_type);
		console.log("weapon_damage("+weapon_damage+")");

		// 敵人抗性計算
		var damage = battle.processResistance(weapon_type, weapon_damage);
		console.log("damage("+damage+")");
		
		// 顯示傷害值
		battle.showDamage(damage);
		
		// 處理敵人損傷
		battle.processEnemy(damage);
	},

	// 取得武器傷害
	getWeaponDamage: function(weapon_type) {

		// 武器傷害 = 武器等級 * 10

		// todo: 尚未設定武器等級
		var weapon_lv = 1;
		switch(weapon_type) {
		case 1: weapon_lv = 1;	break;
		case 2: weapon_lv = 1;	break;
		case 3: weapon_lv = 1;	break;
		case 4: weapon_lv = 1;	break;
		}

		var weapon_damage = weapon_lv * 10;
		return weapon_damage;
	},

	// 敵人抗性計算
	processResistance: function(weapon_type, weapon_damage) {
		
		console.log("弓箭 抗性("+enemy.resistance1+")");
		console.log("劍 抗性("+enemy.resistance2+")");
		console.log("魔杖 抗性("+enemy.resistance3+")");
		console.log("魔法鞭 抗性("+enemy.resistance4+")");

		
		// 傷害 = 武器傷害 - (武器傷害 * 敵人武器抗性)

		var damage = 0;
		switch(weapon_type){
		case 1:	damage = weapon_damage - Math.floor(weapon_damage*enemy.resistance1);	break; // 弓箭
		case 2:	damage = weapon_damage - Math.floor(weapon_damage*enemy.resistance2);	break; // 劍
		case 3:	damage = weapon_damage - Math.floor(weapon_damage*enemy.resistance3);	break; // 魔杖
		case 4:	damage = weapon_damage - Math.floor(weapon_damage*enemy.resistance4);	break; // 魔法鞭
		}
		
		return damage;
	},

	// 顯示傷害值
	showDamage: function(damage) {

		// 座標
		var x = $("#abobo").position().left / 800 * 320;
		var w = $("#abobo").width()/2;
		var pos_x = x + w;
		var pos_y = 80;//$("#abobo").position().top;
		console.log("x("+x+") w("+w+") pos_x("+pos_x+") pos_y("+pos_y+")");

		// 傷害數值
		$("#damage_text").remove();
		var damage_text = "<span id='damage_text' style='color:#F55; font-size:32px; position:absolute; left:"+pos_x+"px; top:"+pos_y+"px;'>100</span>";
		$("#text_area").append(damage_text);
		
		$("#damage_text").transition({ y: '-50px' }, 500, function() {
			$("#damage_text").remove();
		});

		// 擊中特效
		pos_x -= 60;
		pos_y += 10;
		$("#damage_flash").remove();
		var damage_flash = "<img id='damage_flash' src='./img/battle/flash.png' style='width:50%; position:absolute; left:"+pos_x+"px; top:"+pos_y+"px;'/>";
		$("#text_area").append(damage_flash);
		$("#damage_flash").transition({ rotate: '-45deg' }, 0);
		$("#damage_flash").transition({ x: 10, y: 10 }, 50)
						  .transition({ x: 0, y:0 }, 50)
						  .transition({ x: -10, y: -10 }, 50)
						  .transition({ x: 0, y:0 }, 50, function() {
			$("#damage_flash").remove();
		});
	},
	
	// 處理敵人損傷
	processEnemy: function(damage) {

		var hp = enemy.hp - damage;
			
		
		
	},

	// 更新抬頭訊息
	showHUD: function() {

		// 武器數量
		$('#createNum1').text(player.weapon1);
		$('#createNum2').text(player.weapon2);
		$('#createNum3').text(player.weapon3);
		$('#createNum4').text(player.weapon4);
	}
};

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

