function resize_canvas(){
	var c = document.getElementById("myCanvas")
	var ctx = c.getContext("2d");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerWidth;
	redraw();
}

// Display custom canvas. In this case it's a blue, 5 pixel 
// border that resizes along with the browser window.
function redraw() {
   var context = document.getElementById("myCanvas").getContext("2d");
   context.strokeStyle = 'blue';
   context.lineWidth = '5';
   context.strokeRect(0, 0, window.innerWidth, window.innerWidth);
}

function draw_shape(argument) {
	// body...

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var shape = document.querySelector('input[name="shape"]:checked').value;
	console.log(shape);
	console.log(c.width);
	console.log(c.height);

	var get_inputs = document.getElementById("get_inputs");
	ctx.clearRect(0, 0, c.width, c.height);

	if(shape === "square"){
		ctx.beginPath();
		ctx.rect(150,150,150,150);
		ctx.stroke();
		ctx.fillStyle = '#8ED6FF';
	  	ctx.fill();
		get_inputs.innerHTML = '<label> Side: </label> <input type="text" id="square_side"> <input type="button" value = "calculate" onClick="calc_square()"> <br> <p id="sq_area">_______</p>';
		
	}

	else if(shape ==="circle"){
		ctx.beginPath();
		ctx.arc(95,50,40,0,2*Math.PI);
		ctx.stroke();
		ctx.fillStyle = '#8ED6FF';
	  	ctx.fill();
	  	get_inputs.innerHTML = '<label> Radius: </label> <input type="text" id="circle_radius"> <input type="button" value = "calculate" onClick="calc_circle()"> <br> <p id="cir_area">_______</p>';
	} 

	else if(shape ==="triangle"){
		ctx.beginPath();
		
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = '#8ED6FF';
  	ctx.fill();
  	get_inputs.innerHTML = '<label> Length of side 1: </label> <input type="text" id="tri_s1"> <br> <label>Length of side 2: </label> <input type = "text" id = "tri_s2">'+'<br> <label>Length of side 3:  </label> <input type = "text" id = "tri_s3">'+
	 	'<br> <input type="button" value = "calculate" onClick="calc_triangle()"> <br><p id="tri_area">_______</p>';
	} 

	else if(shape ==="rectangle"){
		ctx.beginPath();
		ctx.rect(20,20,150,100);
		ctx.stroke();
		ctx.fillStyle = '#8ED6FF';
	  	ctx.fill();
	 	get_inputs.innerHTML = '<table> <tr> <td> <label> Length: </label> </td> <td><input type="text" id="rect_len"> </td> </tr> <tr> <td><label>Width: </label> </td> <td><input type = "text" id = "rect_wid">'+
	 	'</td> </tr> <tr> <td colspan="2"> <input type="button" style="width:100%;" value = "calculate" onClick="calc_rectangle()"> </td></tr> </table><br><p id="rect_area">_______</p>';
		 	
	} 

	else if(shape ==="hexagon"){
		
		ctx.beginPath();
	    ctx.moveTo(99, 0);
	    ctx.lineTo(99, 0);
	    ctx.lineTo(198, 50);
	    ctx.lineTo(198, 148);
	    ctx.lineTo(99, 198);
	    ctx.lineTo(99, 198);
	    ctx.lineTo(1, 148);
	    ctx.lineTo(1,50);
	    ctx.closePath();
	  	ctx.stroke();
	  	ctx.fillStyle = '#8ED6FF';
	  	ctx.fill();
		get_inputs.innerHTML = '<label> Side: </label> <input type="text" id="hex_side"> <input type="button" value = "calculate" onClick="calc_hexagon()"> <br> <p id="hex_area">_______</p>';
	
	} 

}


function calc_square(){
	
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var side = document.getElementById("square_side").value;
	var area = side *side;
	var perimeter = 4 *side;
	var put = document.getElementById("sq_area");
	put.innerHTML = '<label> Area: </label>'+area +'<br>' + '<label>Perimeter:</label>'+perimeter;
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.rect(150,150,side,side);
	ctx.stroke();
	ctx.fillStyle = '#8ED6FF';
	ctx.fill();
		
}

function calc_circle(){

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var radius = parseFloat(document.getElementById("circle_radius").value);
	var area = 3.14 * radius *radius;
	var circumference = 2 * 3.14 * radius;

	var put = document.getElementById("cir_area");
	put.innerHTML =  '<label> Area: </label>'+area +'<br>' + '<label>Circumference:</label>'+circumference;
	var r = radius;
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(radius+100,radius+100,r,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = '#8ED6FF';
  	ctx.fill();
	  	
}

function calc_rectangle(){

	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var len = parseFloat(document.getElementById("rect_len").value);
	var wid = parseFloat(document.getElementById("rect_wid").value);
	var area = len * wid;
	var perimeter = (2 * len) + (2 * wid);
	var put = document.getElementById("rect_area");
	put.innerHTML = '<label> Area: </label>'+area +'<br>' + '<label>Perimeter:</label>'+perimeter;
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.rect(10,10,len,wid);
	ctx.stroke();
	ctx.fillStyle = '#8ED6FF';
	ctx.fill();

}

function calc_triangle(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var s1 = parseFloat(document.getElementById("tri_s1").value);
	var s2 = parseFloat(document.getElementById("tri_s2").value);
	var s3 = parseFloat(document.getElementById("tri_s3").value);
	if(s1+s2 > s3 && s2+s3 > s1 && s1+s3 > s2){
		var s = (s1+s2+s3 )/2
		var area = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3)); 
		var perimeter = 2 *s;
		var put = document.getElementById("tri_area");
		put.innerHTML = '<label> Area: </label>'+area +'<br>' + '<label>Perimeter:</label>'+perimeter;
	}
	else{
		var put = document.getElementById("tri_area");
		put.innerHTML = '<label> Triangle not possible </label>'; 
	}
}	

function calc_hexagon(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var side = document.getElementById("hex_side").value;

	var area = 3 * (Math.sqrt(3)/2) * side * side;
	var perimeter = 6* side;
	var put = document.getElementById("hex_area");
	put.innerHTML = '<label> Area: </label>'+area +'<br>' + '<label>Perimeter:</label>'+perimeter;
}