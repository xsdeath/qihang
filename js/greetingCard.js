//判断手机类型
window.onload = function() {
	//alert($(window).height());
	var u = navigator.userAgent;
	if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
	} else if(u.indexOf('iPhone') > -1) { //苹果手机
		//屏蔽ios下上下弹性
		$(window).on('scroll.elasticity', function(e) {
			e.preventDefault();
		}).on('touchmove.elasticity', function(e) {
			e.preventDefault();
		});
	} else if(u.indexOf('Windows Phone') > -1) { //winphone手机
	}
	loading();
}

//加载页面
function loading() {
	function loadApp() {
		var w = $(window).width();
		var h = $(window).height();
		$('.flipboox').width(w).height(h);
		$(window).resize(function() {
			w = $(window).width();
			h = $(window).height();
			$('.flipboox').width(w).height(h);
		});
		$('.flipbook').turn({
			width: w,
			height: h,
			elevation: 50,
			display: 'single',
			gradients: true,
			autoCenter: true,
			when: {
				turning: function(e, page, view) {
					if(page == 5) {
						$("#next").hide();
					}else{
						$("#next").show();
					}
				},
				turned: function(e, page, view) {
					var total = $(".flipbook").turn("pages"); //总页数
					if(page == 1) {
						$(".page1").show().addClass("swiper-slide-active");
					}
					if(page == 2) {
						$(".page2").show().addClass("swiper-slide-active");
					}
					if(page == 3) {
						$(".page3").show().addClass("swiper-slide-active");
					}
					if(page == 4) {
						$(".page4").show().addClass("swiper-slide-active");
					}
					if(page == 5) {
						$(".page5").show().addClass("swiper-slide-active");
					}
				}
			}
		})
	}
	yepnope({
		test: Modernizr.csstransforms,
		yep: ['js/turn.js'],
		complete: loadApp
	});
}