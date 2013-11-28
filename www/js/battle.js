var battle = {

	// 是否為 Mobile 裝置
	isMobile: false,

	// 初始化
    initialize: function() {

		this.isMobile = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

		// 設定拖拉功能
		this.setDragAndDrop();

		// 設定按鈕
		this.setButton();

		// 更新抬頭訊息
		this.showHUD();
    },

	// 設定拖拉功能
	setDragAndDrop: function() {
		
		$('.weapon').draggable({ revert: true, revertDuration:0, helper: "clone"});

		$( "#playground" ).droppable({
		  drop: function( event, ui ) {
			 
			 console.log("droped");
			
			
			var cvs = $("#cvs");
        	var cvsF = cvs.data("fighter");
			
			cvsF.currentState = KICK;
			changeAnimation(cvs, cvsF.animations, 4, cvsF.currentState);
			
			
			//animate(4);
			 //$('#cvs').playground().changeAnimation(cvs, cvsF.animations, 4, cvsF.currentState);
			 
			//$('#playground').setAnimation();
			
			//.changeAnimation(cvs, cvsF.animations, BEATEN, cvsF.currentState);
		//cvsF.currentState = BEATEN;
			
		  }
		});
	},

	// 設定按鈕
	setButton: function() {

		
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

