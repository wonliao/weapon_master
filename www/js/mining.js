var mining = {

    initialize: function() {
		
		// 設定按鈕
		this.setButton();
	
		
		// 產礦迴圈
		this.producingMinesLoop();

    },

	// 設定按鈕
	setButton: function() {
		
		
	},

	// 產礦迴圈
	producingMinesLoop: function() {
		
		var d = new Date();
		var sec = d.getTime();
		
		
		var lastTime = window.localStorage.getItem("MINING_LAST_TIME");
		
		var diff = sec - lastTime; 
		console.log("sec("+sec+")");
		console.log("lastTime("+lastTime+")");
		console.log("diff("+diff+")");
		
		window.localStorage.setItem("MINING_LAST_TIME", sec);
		
	},
	
	// 顯示畫面
	render: function() {
		
	
	}
	
};

