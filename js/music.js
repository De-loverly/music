$(function(){
	//首頁的效果
//	var time=setTimeout(function(){
//		$(".shouye").css({"transform":"scale(0)","opacity":"0"})
//	},1000)
	var audio=$("#audio").get(0);
	var play=$(".play");
	var list=$(".list");
	play.on("touchend",function(){
		if(audio.paused){
			audio.play();	
		}else{
			audio.pause();	
		}
		return false;
	})
	$(audio).on("play",function(){
		play.html("&#xe63d;")
	})
	$(audio).on("pause",function(){
		play.html("&#xe635;")
	})
	list.on("touchend",function(){
		$("#lists").css("bottom","-1rem");
		$(".guan").css("transform","translateX(0)");
		return false;
	})
	$(".guan").on("touchend",function(){
		$("#lists").css("bottom","-6rem");
		$(".guan").css("transform","translateX(-100%)")
	})
	var currentIndex=1;
	var musics=[
		{
			name:"三寸天堂",
			author:"严艺丹",
			src:"music/三寸天堂.mp3",
			tou:"img/9.jpg",
			zhuan:"步步惊情"
		},
		{
			name:"绅士",
			author:"薛之谦",
			src:"music/绅士.mp3",
			tou:"img/2.png",
			zhuan:"绅士"
		},
		{
			name:"地心",
			author:"汪峰",
			src:"music/地心.mp3",
			tou:"img/8.jpg",
			zhuan:"北京爱情故事"
		},
		{
			name:"难道",
			author:"凌澜",
			src:"music/难道.mp3",
			tou:"img/10.jpg",
			zhuan:"只因有你"
		}	
	]
	
	function render(){
			$("#lists").empty();
			$.each(musics, function(i,v) {
				var c=(i==currentIndex)?"active":"";
				$('<li><span class="b">'+v.name+'</span><span class="e">'+v.author+'</span><span class="iconfont c">&#xe665;</span><span class="iconfont d">&#xe65e;</span></li>').appendTo("#lists");
		});
	}
		//点击歌曲即要播放事件
		$("#lists").on("click","li",function(){
			$("#lists").find('li').removeClass("active");
			$(this).addClass("active");
			currentIndex=$(this).index();
			audio.src=musics[currentIndex].src;
			$("#ge .touxiang").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
			$("#ge .l").html(musics[currentIndex].name);
			$("#gea .h").html(musics[currentIndex].name);
			$("#gea .zuozhe").html(musics[currentIndex].author);
			$("#gea .zhuan").html(musics[currentIndex].zhuan);
			$("#gea .datou").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
			$("#boxa .bei").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
			audio.play();
		})
		//下一首要执行的函数
	function next(){
		currentIndex+=1;
		if(currentIndex == musics.length){
			currentIndex=0;
		}
		audio.src=musics[currentIndex].src;
		$("#ge .touxiang").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
		$("#ge .l").html(musics[currentIndex].name);
		$("#gea .h").html(musics[currentIndex].name);
		$("#gea .zuozhe").html(musics[currentIndex].author);
		$("#gea .zhuan").html(musics[currentIndex].zhuan);
		$("#gea .datou").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
		$("#boxa .bei").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
		render();
		audio.play();
	}
	//上一世要执行的函数
	function prev(){
		currentIndex-=1;
		if(currentIndex == -1){
			currentIndex=musics.length-1;
		}
		audio.src=musics[currentIndex].src;
		$("#ge .touxiang").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
		$("#ge .l").html(musics[currentIndex].name);
		$("#gea .h").html(musics[currentIndex].name);
		$("#gea .zuozhe").html(musics[currentIndex].author);
		$("#gea .zhuan").html(musics[currentIndex].zhuan);
		$("#gea .datou").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
		$("#boxa .bei").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
		render();
		audio.play();
	}
	//列表删除
	$("#lists").on("touchend",".d",function(){
		var li=$(this).closest("li");
		var index=li.index();
		musics.splice(index,1);
		if(index==currentIndex){
			if(musics[currentIndex]){
				audio.src=musics[currentIndex].src;
				$("#ge .touxiang").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
				$("#ge .l").html(musics[currentIndex].name);
				$("#gea .h").html(musics[currentIndex].name);
				$("#gea .zuozhe").html(musics[currentIndex].author);
				$("#gea .zhuan").html(musics[currentIndex].zhuan);
				$("#gea .datou").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
				$("#boxa .bei").html("<img src='"+musics[currentIndex].tou+"' alt=''/>");
			}else{
				audio.src="";
			}
		}else if(index>currentIndex){
			//不做任何事情
		}else if(index<currentIndex){
			currentIndex-=1;
		}
		render();
	})
	//列表新增
//	$(".song-list").on("touchend","div",function(){
//		var d=$(this).attr("data-v");
//		render()
//	})
//	$("#lists").on("touchend","li",function(){
//		var index=$(this).index();
//		currentIndex=index;
//		audio.src=musics[currentIndex].src;
//		render();
//	})
	render();
//	var vol=$("#vol");
//	var vi=$("#vi");
//	//音量
//	vi.on("touchend",false);
//	//音量点击
//	vol.on("touchend",function(e){
//		var offsetx=e.originalEvent.changedTouches[0].clientX;
//		audio.volume=offsetx/$(this).width();
//	})
//	//音量拖拽
//	vi.on("touchstart",function(e){
//		var offsetx=e.originalEvent.changedTouches[0].clientX-vi.offset().left;
//		var r=vi.width()/2;
//		var start=r-offsetx;
//		$(document).on("touchmove",function(){
//			var pos=e.originalEvent.changedTouches[0].clientX;-vol.position().left+start;
//			audio.volume=pos/vol.width();
//		})
//	})
//	$(document).on("touchend",function(){
//		$(document).off("touchmove");
//	})
	//进度条点击
		function format(v){
			v=Math.floor(v);
			var s=v % 60;
			s=(s<10)?("0"+s):s;
			var m=Math.floor(v/60);
			return m+":"+s;
		}
		var progress=$(".progress #progress");
		var pi=$(".progress .pi")
		var duration=$(".progress .k");
		var current=$(".progress .g")
		//歌曲的结束时间
		$(audio).on("canplay",function(){
			duration.html(format(audio.duration));
		})
		//歌曲当前已播放时长以及进度条的移动
		$(audio).on("timeupdate",function(){
			current.html(format(audio.currentTime));
			var left=progress.width() * audio.currentTime/audio.duration;
//			console.log(progress.width())
			pi.css("left",left);
		})
	//进度条拖拽
		pi.on("touchend",false);
		pi.on('touchstart',function(e){
			var offsetx=e.originalEvent.changedTouches[0].clientX-pi.offset().left;
			var r=pi.width()/2;
			var start=r-offsetx;
//			console.log(offsetx,r,start)
			$(document).on('touchmove',function(e){
				var left=e.originalEvent.changedTouches[0].clientX - progress.position().left + start;
				var c=left / progress.width() * audio.duration;
				console.log(left,c)
				if(c>=audio.duration||c<=0){
					return;
				}
//				pi.css("left",left);
				audio.currentTime=c;
//				pi.css("left",c)
			})
			return false;
		})
			//上下切换歌曲
		$("#ge").on("touchstart",function(e){
			down=e.originalEvent.changedTouches[0].clientX;
		})
		$("#ge").on("touchend",function(e){
			var up=e.originalEvent.changedTouches[0].clientX;
			if(up-down>50){
				next();	
			}
			if(up-down<-50){
				prev();
			}
		})
		$(".qie .m").on("touchend",function(){
			prev();
		})
		$(".qie .o").on("touchend",function(){
			next();
		})
	//音乐界面出
	$("#gea .f").on("touchend",function(){
		$("#boxa").css({"opacity":"0"});
		$("#ge").css("transform","translateX(0)")
	})
	$("#ge .touxiang").on("touchend",function(){
		$("#boxa").css({"opacity":"1"});
		$("#ge").css("transform","translateX(100%)")
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(audio).on("volumechange",function(){
		vi.css("left",vol.width()*audio.volume-vi.width()/2);
		
	})
	$(audio).on("loadstart",function(){
		$("#name").html(musics[currentIndex].name);
		$("#duration").html(musics[currentIndex].duration)
	})
	$(audio).on("progress",function(){
		
	})
	$(audio).on("canplay",function(){
//		audio.play();
	})
	$(audio).on("play",function(){
		
	})
	$(audio).on("pause",function(){
		
	})
	$(audio).on("ended",function(){
		next()
	})
	$(audio).on("seek",function(){
		
	})
	$(audio).on("timeupdate",function(){
		
	})

















})
