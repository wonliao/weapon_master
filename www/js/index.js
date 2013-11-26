var app = {

	isMobile: false,	// 是否為 Mobile 裝置

    initialize: function() {
		
		this.isMobile = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

        this.bindEvents();
    },

    bindEvents: function() {

		if(this.isMobile == true)	document.addEventListener('deviceready', this.onDeviceReady, false);
    	else						this.onDeviceReady();
	},

    onDeviceReady: function() {

		app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {

		// 初始化
		this.init();
	},
	
	// 初始化
	init: function() {

		// 設定按鈕
		this.setButton();
		
		// 預設開啟 採礦 頁
		this.gotoPage("mining");
    },
	
	// 設定按鈕
	setButton: function() {

		$('#mining_btn').click(		function() {	app.gotoPage("mining");		});	// 採礦
		$('#forging_btn').click(	function() {	app.gotoPage("forging");	});	// 鍛造
		$('#equipment_btn').click(	function() {	app.gotoPage("equipment");	});	// 裝備
		$('#battle_btn').click(		function() {	app.gotoPage("battle");		});	// 戰鬥
		$('#shop_btn').click(		function() {	app.gotoPage("shop");		});	// 商店
	},
	
	// 轉跳頁面
	gotoPage: function(pageName) {

		// 清除迴圈
		if(typeof(mining) != 'undefined')	mining.setStop();

		// 清空全部頁面
		$("#mining_div").empty();
		$("#forging_div").empty();
		$("#equipment_div").empty();
		$("#battle_div").empty();
		$("#shop_div").empty();

		var fileName = pageName + ".html";
		var output = "#" + pageName + "_div";

		// post 頁面
		$.post( fileName,
			function( data ) {
				$(output).html( data );
			}
		);
	}
};
