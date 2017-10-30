<?php

require 'connect.inc.php';
$q = "select * from cards where Location='India' order by upvotes desc";
if(isset($_GET["location"])){
	$q = "select * from cards where Location='".$_GET["location"]."' order by upvotes desc";	
}
$rows = array();
$res = mysqli_query($connect,$q);
$counter = 0;
echo '<section id="replacable">';
if($res->num_rows >0){
		while($post = mysqli_fetch_array($res,MYSQLI_ASSOC)){
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
		echo "There is no data avaiable about this particular country... May be its ".$_GET["location"]."...";
	}

echo '</section>'
?>
