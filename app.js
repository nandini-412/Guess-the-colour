    var nos=6;
	var colors=[];
	var pickedColor;
	var squares=document.querySelectorAll(".square");
	var a=document.getElementById("a");
	var message=document.querySelector("#message");
	var h1=document.querySelector("h1");
	var resetb=document.querySelector("#reset");
	var modeb=document.querySelectorAll(".mode");
	init();
	function init(){
	setupmodeb();
	x();
	reset();
		
	}
	function setupmodeb(){
		for(var i=0;i<modeb.length;i++){
		modeb[i].addEventListener("click",function(){
			modeb[0].classList.remove("selected");
			modeb[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy"?nos=3:nos=6;
			
			reset();
		})
	}
	}
	function x(){
		for(var i=0;i<squares.length;i++){
				  	squares[i].addEventListener("click",function(){
				     var clickedcolor=this.style.backgroundColor;
				     if (clickedcolor===pickedColor) {
				     	message.textContent="Correct!"
				     	resetb.textContent="Play Again?";
				        changecolor(clickedcolor);
				        h1.style.backgroundColor=clickedcolor;
				     }else{
				     	this.style.backgroundColor="#232323";
			     	message.textContent="Try Again";
			     }
			  	});
			  }
}

function reset(){
		colors=grc(nos);
		pickedColor=pickcolor();
		a.textContent=pickedColor;
		reset.textContent="New Colors";
		message.textContent="";
				for(var i=0;i<squares.length;i++){
					if(colors[i]){
					squares[i].style.display="block";
					squares[i].style.background=colors[i];	
				}else{
                    squares[i].style.display="none";
					}
				h1.style.backgroundColor="steelblue";
				}
				
	}
		        
		resetb.addEventListener("click",function(){
        reset();
				})
				  a.textContent=pickedColor;
				  
					  function changecolor(color){
				for(var i= 0 ;i<squares.length;i++){
					squares[i].style.backgroundColor=color;
				  }
				}
				function pickcolor(){
				   var random=Math.floor(Math.random()* colors.length);
				   return colors[random];
				}
				function grc(num){
				var arr=[]
					for(var i=0; i<num;i++){
				arr.push(rc())
				}
				return arr;
			}
				function rc(){
					var r=Math.floor(Math.random()*256);
					var g=Math.floor(Math.random()*256);
					var b=Math.floor(Math.random()*256);
					
					return "rgb("+r+", "+g+", "+b+")";
				}




