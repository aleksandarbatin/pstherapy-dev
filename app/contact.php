<?php include ("common/before.php"); ?>

<body>
<?php include ("common/header.php"); ?>
	<div class="page-wrapper">
		<div class="page_container">
		
		<?php include ("common/navigation.php"); ?>
			<div class="content">
				<div class="content_title">Kontakt</div>
				<ul class="breadcrumbs">
					<li><a href="">Home /</a></li>
					<li>Kontakt</li>
				</ul>
			</div>
			
			<div class="content">
				<div class="mapWrapper">
					<iframe width="100%" height="300" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJj4XSiplvWkcR9RXOcrG0_c8&key=AIzaSyCD0w6HZ0zIi4raDoPUviuCeWVIfF2945o" allowfullscreen></iframe>
				</div>
			</div>
			<div class="content">
				<div class="content_block content_block--left">
					<h3 class="content_title">Contact info</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nulla omnis eos pariatur quidem at alias rerum tempora. Placeat dolore deleniti officiis! Obcaecati labore distinctio omnis, aspernatur consectetur. Laborum, optio.</p>
				</div>

				<div class="content_block--wider content_block--right">
					<h3 class="content_title">Contact form</h3>
						<span class="infoForm">
						<input type="text" value="Name:">
					</span>
					<span class="infoForm">
						<input type="text" value="E-mail:">
					</span>
					<span class="infoForm">
						<input type="text" value="Phone:">
					</span>
					<div class="field">
						<textarea name="your-message" cols="40" rows="10" title="Message:"></textarea>
					</div>
					<span class="btnClear">
						<input type="reset" value="clear">
					</span>
					<span class="btnSend">
						<input type="submit" value="send">
					</span>
				</div>
			</div>
			<?php include "common/footer.php"; ?>