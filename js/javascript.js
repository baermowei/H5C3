			
			var timer=null;
			var TF=true;
			window.onload=function(){
		var canvas=document.getElementById('canvas1');
		var canvas_two=document.getElementById('canvas2')
			canvas.width=1400;
			canvas.height=800;
			canvas_two.width=800;
			canvas_two.height=400;

			
			if (canvas.getContext('2d')) {
				clearInterval(timer);
			var context=canvas.getContext('2d');
			var context2=canvas_two.getContext('2d');
			// context2.font='900 160px 微软雅黑'
			 // var jianbian=context2.createLinearGradient(100,90,200,500);
    //     		jianbian.addColorStop(0,"black");
    //     		jianbian.addColorStop(0.5,"white")
    //     		context2.fillStyle=jianbian;
				// context2.fillText("CANVAS",60,250);

				timer=setInterval(function(){
					TF=!TF;
					rander2(context2);
					rander(context);
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
		function rander2(cxt2){
			cxt2.clearRect(0,0,800,400);
				cxt2.font='900 160px 微软雅黑'
			 var jianbian=cxt2.createLinearGradient(150,100,300,400);
			 if (TF) {
			 	jianbian.addColorStop(0,"black");
        		jianbian.addColorStop(0.5,"white");
        		cxt2.fillStyle=jianbian;
			 } else {
			 	jianbian.addColorStop(0,"white");
        		jianbian.addColorStop(0.5,"black")
        		cxt2.fillStyle=jianbian;
			 }
        		
        		
				cxt2.fillText("CANVAS",60,250);
		}