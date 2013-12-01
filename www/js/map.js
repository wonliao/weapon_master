var map = {

	// 是否為 Mobile 裝置
	isMobile: false,

	// 初始化
    initialize: function() {

		map.isMobile = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));

	
	}
}