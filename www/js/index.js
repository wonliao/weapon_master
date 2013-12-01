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
		this.gotoPage("map");
    },
	
	// 設定按鈕
	setButton: function() {

		$('#mining_btn').click(		function() {	app.gotoPage("mining");		});	// 採礦
		$('#forging_btn').click(	function() {	app.gotoPage("forging");	});	// 鍛造
		$('#map_btn').click(		function() {	app.gotoPage("map");		});	// 地圖
		$('#battle_btn').click(		function() {	app.gotoPage("battle");		});	// 戰鬥
		$('#shop_btn').click(		function() {	app.gotoPage("shop");		});	// 商店
	},
	
	// 轉跳頁面
	gotoPage: function(pageName) {

		// 關閉舊按鈕
		$('#mining_btn').css(	"background", "#0FF");
		$('#forging_btn').css(	"background", "#0FF");
		$('#map_btn').css(		"background", "#0FF");
		$('#battle_btn').css(	"background", "#0FF");
		$('#shop_btn').css(		"background", "#0FF");

		// 點亮新按鈕
		$('#'+pageName+"_btn").css("background", "#FF0");

		// 清除迴圈
		if(typeof(mining) != 'undefined')	mining.setStop();

		// 清空全部頁面
		$("#mining_div").empty();
		$("#forging_div").empty();
		$("#map_div").empty();
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
