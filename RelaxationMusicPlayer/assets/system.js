jQuery(function(){
	var audio1 = new Audio("media/ame.ogg");
		audio1.loop = true;
		$(".label1").click(function(){
			audio1.play();
		})
	var audio2 = new Audio("media/ido.ogg");
		audio2.loop = true;
		$(".label2").click(function(){
			audio2.play();
		})
	var audio3 = new Audio("media/kaeru.ogg");
		audio3.loop = true;
		$(".label3").click(function(){
			audio3.play();
		})
	var audio4 = new Audio("media/mushi.ogg");
		audio4.loop = true;
		$(".label4").click(function(){
			audio4.play();
		})
	var audio5 = new Audio("media/nami.ogg");
		audio5.loop = true;
		$(".label5").click(function(){
			audio5.play();
		})

	var music1 = new Audio("media/BilliesBounce.ogg");
		music1.loop = true;
		$(".musiclabel1").click(function(){
			music1.play();
		})
	var music2 = new Audio("media/ButBeautiful.ogg");
		music2.loop = true;
		$(".musiclabel2").click(function(){
			music2.play();
		})
	var music3 = new Audio("media/Misty.ogg");
		music3.loop = true;
		$(".musiclabel3").click(function(){
			music3.play();
		})

	$(".first_stop").click(function(){
		audio1.pause();
		audio2.pause();
		audio3.pause();
		audio4.pause();
		audio5.pause();
	})

	$("p.add_music").click(function(){
		$(".select_second").css({
			display: "block"
		});
	})
	$(".stop").click(function(){
		music1.pause();
		music2.pause();		
		music3.pause();		
	})
	$(".close").click(function(){
		$(".select_second").css({
			display: "none"
		});
	})


})