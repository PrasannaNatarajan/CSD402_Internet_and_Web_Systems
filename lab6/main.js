var info_array = {
	display:`<h2>display : tells the renderer how to display an element</h2>
<h3>values:</h3>
<ul><li>
<strong>grid</strong>: divides the screen into grids of mentioned dimensions.</li>
<li>
<strong>block</strong>: displays an element in a new line as a block.</li>
<li>
<strong>inline-block</strong>: displays the element inline, but the element will have block properties.</li>
<li>
<strong>inline</strong>: displays the element in the default location.</li>
<li>
<strong>none</strong>: does not display the element</li>
</ul>
<h2></h2>
`,
	position:`
<h2>position: tells the renderer where to position an element</h2>
<h3>values:</h3>
<ul><li>
<strong>fixed</strong>: element is positioned relative to the viewport; that is even if you scroll the element will be displayed in the screen.</li>
<li>
<strong>relative</strong>: element is positioned relative to its normal position; other properties like top, right, left, bottom affect an element with relative property</li>
<li>
<strong>absolute</strong>: element is positioned relative to the nearest positioned ancestor</li>
<li>
<strong>static</strong>: default; normal flow of the page.</li>
</ul>
`,
  width:`
<h2>width: sets the width of an element</h2>
`,
  height:`<h2></h2>
<h2>height: sets the height of an element</h2>
`,
  "background-color": `<h2>background-color: sets background color for an element</h2>
<p><strong>range</strong>: #000000 - #ffffff</p>
`,
top:`<h2>top: gap between the top of the viewport and the element</h2>
<p>Works only with elements whose position is not static</p>
`,
left:`<p></p>
<p></p>
<h2>left: gap between the left of the viewport and the element</h2>
<p>Works only with elements whose position is not static</p>
`,
right:`<h2>right: gap between the right of the viewport and the element</h2>
<p>Works only with elements whose position is not static</p>
`,
bottom:`<p></p>
<h2>bottom: gap between the bottom of the viewport and the element</h2>
<p>Works only with elements whose position is not static</p>
`,
visibility:`<h2></h2>
<h2>visibility: describes the visibility status of an element</h2>
<h4>values:</h4>
<ul><li>
<strong>hidden</strong>: hides an element</li>
<li>
<strong>visible</strong>: makes a hidden element visible; default</li>
</ul>
`,
margin:`<h2>margin: provides the height,width,left and right of margin in the css box model</h2>
<h2></h2>
`,
padding:`<h2>padding: provides the height,width,left and right of padding in the css box model</h2>
<h2></h2>
`,
border:`<h2></h2>
<h2>border: provides the height,width,left and right of border in the css box model; it also needs a color to fill it with</h2>
`,
"box-shadow":`<h2>box-shadow: provides a shadow property to the element</h2>
`,
float:`<h2></h2>
<h2>float: positions an element to the left or right with respect to its parent; this element does not get affected by left and right</h2>
`

};

function display_info(dest) {
	var e = document.getElementById("drop_down");
	var strVal = e.options[e.selectedIndex].value;

	var show = document.getElementById("information_area");
	show.innerHTML = info_array[strVal]

}

function add_options(){
	var e = document.getElementById("drop_down");

	for(var key in info_array){
		var option = document.createElement("option");
		option.text = key;
		option.value = key;
		e.appendChild(option);
	}

}