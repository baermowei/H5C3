			
			var timer=null;
			window.onload=function(){
		var canvas=document.getElementById('canvas1');
			canvas.width=1400;
			canvas.height=800;
			if (canvas.getContext('2d')) {
				clearInterval(timer);
				var context=canvas.getContext('2d');
				timer=setInterval(function(){
				rander(context)
				}, 500);
			} else {
			alert('你的浏览器不支持canvas,建议使用高版本浏览器试试')
					}
	}

	function rander(cxt){
					cxt.clearRect(0,0,1400,800);
					for (var i = 0; i < 100; i++) {
					var R=Math.floor(Math.random()*255),
					G=Math.floor(Math.random()*255),
					B=Math.floor(Math.random()*255);
					var r=Math.random()*40+10;
					cxt.beginPath();
					cxt.fillStyle = "rgba("+R+","+G+","+B+","+0.2+")";
					cxt.arc(Math.random()*1400,Math.random()*600,r,0,2*Math.PI);
					cxt.fill();
				}
			}