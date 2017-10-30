<?php 
	require 'connect.inc.php';

	$q = "select * from cards where Location='India'";
	$res = mysqli_query($connect,$q);
	//echo $res;

	if($res->num_rows >0){
		while($post = mysqli_fetch_array($res,MYSQLI_ASSOC)){
			//echo json_encode($post);
		}
	}
	else{
		echo "num rows < 0";
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Quora Redesigned</title>
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>
	<script src="https://maps.google.com/maps/api/js?sensor=false"></script>
			<script>
      // the map
  var map;

  function initMap() {
    var myOptions = {
      zoom: 2,
      center: new google.maps.LatLng(10, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var element = document.getElementById('map-canvas'),
			    style = window.getComputedStyle(element),
			    vis = style.getPropertyValue('display');
			if(vis==="none"){
				element.style.display="block";
			}else{
				element.style.display="none";
			}
    // initialize the map
    map = new google.maps.Map(document.getElementById('map-canvas'),
        myOptions);

    // these are the map styles
    var styles = [
        {
          stylers: [
            { hue: "#00ffe6" },
            { saturation: -20 }
          ]
        },
        {
          featureType: "landscape",
          stylers: [
            { hue: "#ffff66" },
            { saturation: 100 }
          ]
        },{
          featureType: "road",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "administrative.land_parcel",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "administrative.locality",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "administrative.neighborhood",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "administrative.province",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "landscape.man_made",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "landscape.natural",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "poi",
          stylers: [
            { visibility: "off" }
          ]
        },{
          featureType: "transit",
          stylers: [
            { visibility: "off" }
          ]
        }
      ];

    map.setOptions({styles: styles});

    // Initialize JSONP request
    var script = document.createElement('script');
    var url = ['https://www.googleapis.com/fusiontables/v1/query?'];
    url.push('sql=');
    var query = 'SELECT name, kml_4326 FROM ' +
        '1foc3xO9DyfSIF6ofvN0kp2bxSfSeKog5FbdWdQ';
    var encodedQuery = encodeURIComponent(query);
    url.push(encodedQuery);
    url.push('&callback=drawMap');
    url.push('&key=AIzaSyAm9yWCV7JPCTHCJut8whOjARd7pwROFDQ');
    script.src = url.join('');
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(script);
  }

  function drawMap(data) {
    var rows = data['rows'];
    for (var i in rows) {
      if (rows[i][0] != 'Antarctica') {
        var newCoordinates = [];
        var geometries = rows[i][1]['geometries'];
        if (geometries) {
          for (var j in geometries) {
            newCoordinates.push(constructNewCoordinates(geometries[j]));
          }
        } else {
          newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
        }
        var country = new google.maps.Polygon({
          paths: newCoordinates,
          strokeColor: '#ff9900',
          strokeOpacity: 1,
          strokeWeight: 0.3,
          fillColor: '#ffff66',
          fillOpacity: 0,
          name: rows[i][0]
        });
        google.maps.event.addListener(country, 'mouseover', function() {
          this.setOptions({fillOpacity: 0.4});
        });
        google.maps.event.addListener(country, 'mouseout', function() {
          this.setOptions({fillOpacity: 0});
        });
        google.maps.event.addListener(country, 'click', function() {
          alert(this.name);
          var loc = this.name;
          console.log("loc = "+loc);
          $.ajax({                                      
      url: 'location_api.php',                            
      data: "location="+loc,
      dataType: 'html',                 
      success: function(data)     
      {
      	console.log(data);
      	$('#replacable').replaceWith(data);
      	console.log("done replacing");
        //var id = data[0];              
        //var vname = data[1];           
        //$('#output').html("<b>id: </b>"+id+"<b> name: </b>"+vname); 
        },
        error: function(res,status,error){
        	console.log(res);
        	console.log(status);
        	console.log(error);
        }
    });
        });

        country.setMap(map);
      }
    }
  }

  function constructNewCoordinates(polygon) {
    var newCoordinates = [];
    var coordinates = polygon['coordinates'][0];
    for (var i in coordinates) {
      newCoordinates.push(
          new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
    }
    return newCoordinates;
  }

  google.maps.event.addDomListener(window, 'load', initMap);
    </script>
			
</head>
<body>
	<nav class="topnav">
		<img src="images/quora-black.png" class="quora_image"> 
		<div class="links">
			<a href="#home">Home </a>
			<a href="#mostrecents">Most Recent</a>
			<a class="active" href="#topstories">Top Stories</a>

			<img src="images/globe_white.png" style="width: 6%;margin-left: 15px;margin-top: 7px;" onclick="initMap()" >
		</div>
		<form class="search_input_form">
			<input type="text" name="search"  class= "search_input" placeholder="Search your Qestions/Answers here">
		</form>
	</nav>
	<section class="main">

		<nav class="sidenav">
			<div>
				<div class="sidenav_user"> <span class="tooltiptext"> Edit Profile</span><img src="images/myAvatar.png" id="avatar">  </div>
				<p class="name_details">Welcome, <br> 
				<?php 
					$user_query = "select username from users where user_id=123";
					$username_res = mysqli_query($connect,$user_query);
					$var = "";
					if($username_res->num_rows >0){
						while ($post = mysqli_fetch_array($username_res,MYSQLI_ASSOC)) {
							# code...
							$var = $post["username"];
						}
					}
					echo $var;
				?> </p>
			</div>
			
			<div class="side_links">
				<a href="#notification" class="active">Notification </a>
				<a href="#ask_questions">Ask Questions</a> 
				<a href="#answer_questions">Answer Questions</a>
				<a href="#trending">Trending</a> 
				<a href="#following">Following</a>
			</div>
		</nav>
		<!-- <a name="googleMaps_higher"> </a> -->
		<!-- <div id="map-canvas"></div> -->
		<section class="content_space">
			<!-- <div id="googleMap" style="position: absolute; width:100%;height:400px; visibility: hidden; z-index: 5;"> </div> -->
			<a name="googleMaps"><div id="map-canvas" style="width:100%;height:400px; position: fixed; display: none; z-index: 0;"></div></a>
			<section id="replacable">
			<?php 
				$counter = 0;
				$cards_query = "select * from cards where Location='India' order by upvotes desc";
				$cards_res = mysqli_query($connect,$cards_query);

				if($cards_res->num_rows>0){
					while($post = mysqli_fetch_array($cards_res,MYSQLI_ASSOC)){
						$counter = $counter + 1;
						if($counter == 1){
							?> <section class="first_section">
							<?php 
						}
						else if($counter == 3){
							?>
								<section class="second_section">
							<?php
						}
					?>

						<section class="article">
							<div class="first_part">
							<p class="upvotes"><?php echo $post["upvotes"];?> Upvotes </p> 
							<svg class="bookmark" width="29" height="29" ><path d="M19.385 4h-9.77A2.623 2.623 0 0 0 7 6.615V23.01a1.022 1.022 0 0 0 1.595.847l5.905-4.004 5.905 4.004A1.022 1.022 0 0 0 22 23.011V6.62A2.625 2.625 0 0 0 19.385 4zM21 23l-5.91-3.955-.148-.107a.751.751 0 0 0-.884 0l-.147.107L8 23V6.615C8 5.725 8.725 5 9.615 5h9.77C20.275 5 21 5.725 21 6.615V23z" fill-rule="evenodd"></path></svg>
							</div>
							<hr>
							<br>
							<div class="second_part">
							<p class="question"><?php echo $post["question_text"]; ?> </p>
							<p class="answer"> 
								<?php echo $post["answer_text"];?>
							</p>
							</div>
							<div class="third_part"> 
							<h5 style="margin: 0 auto;">Answered By:</h5> <hr>

							<img src="images/myAvatar.png" class="user_images"> 
							<section class="user_details">
								
								<p class="inside_user_details">
								<?php 
									$author_query = "select username from users where user_id='".$post["author"]."'";
									$author_res = mysqli_query($connect,$author_query);
									if($author_res->num_rows >0 ){
										while($auth_post = mysqli_fetch_array($author_res,MYSQLI_ASSOC)){
											echo $auth_post["username"];
										}
									}

								?> </p> 
								<p class="inside_user_details last_update"><?php echo $post["status"]; ?></p>
							</section>
							
							<hr>
							</div>
							<section class="comments">
						<img src="images/myAvatar.png" class="comment_picture">
						<input type="text" class="comment_box">
						<input type="button" class="answer_buttons" style="background-image: url(images/downvote.png); background-size: contain; background-repeat: no-repeat; border-radius: 28px; width: 20px; margin: 10px 0px;">
						<input type="button" class="answer_buttons" style="background-image: url(images/upvote.png); background-size: contain; background-repeat: no-repeat; border-radius: 28px; width: 20px; margin: 10px 0px;">
					</section>
						</section>





					<?php
						if($counter == 2){
							?>
								</section>
							<?php
						}

					}?>

					</section>
				<?php
				}

				else{
					echo "inside else";
				}

			?>
				
	</section>
	</section>
</body>
</html>