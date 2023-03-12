<!DOCTYPE html>
<html lang="en">

<head>
	<title>KK Entertain | Sewa sound makassar | Sewa Lightning makassar | Portfolio</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<meta name='robots' content='max-image-preview:large' />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="kk entertain sewa lightning makassar sewa sound makassar" />
	<meta property="og:description" content="rental lightning makassar rental sound makassar" />
	<meta property="og:url" content="https://kkentertain.com" />
	<meta property="og:site_name" content="botting id" />

	<?php include 'css.php' ?>
</head>

<body>

	<div class="floating_btn">
		<a target="_blank" href="https://api.whatsapp.com/send?phone=6282194382201&text=Halo">
			<div class="contact_icon">
				<i class="fab fa-whatsapp my-float"></i>
			</div>
		</a>
		<p class="text_icon">Hubungi Kami</p>
	</div>

	<?php include 'nav.php' ?>

	<section id="hero" class="d-flex align-items-center no-mobile">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 text-center">
					<h1 class="gradient-text hero-text typewrite" data-period="2000" data-type='["Portfolio", "KK Entertain"]'>
						KK Entertain
					</h1>
				</div>
			</div>
		</div>
	</section>

	<section class="mt-5">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 text-center">
					<h5><strong>Portfolio</strong></h5>
					<p><small>Event yang telah kami selesaikan</small></p>
				</div>
			</div>
		</div>
	</section>

	<?php

	$portfolio = [
		[
			'nama_event' => 'Event mahkamah konstitusi Ri',
			'img1' => './images/portfolio/mahkama_konstitusi/1.jpeg',
			'img2' => './images/portfolio/mahkama_konstitusi/2.jpeg',
			'img3' => './images/portfolio/mahkama_konstitusi/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],
		[
			'nama_event' => 'Event KPU Ri',
			'img1' => './images/portfolio/kpu/1.jpeg',
			'img2' => './images/portfolio/kpu/2.jpeg',
			'img3' => './images/portfolio/kpu/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],
		[
			'nama_event' => 'Maxie Skincare',
			'img1' => './images/portfolio/maxie/1.jpeg',
			'img2' => './images/portfolio/maxie/2.jpeg',
			'img3' => './images/portfolio/maxie/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],
		[
			'nama_event' => 'Contest mobil, cityzen makassar',
			'img1' => './images/portfolio/contest/1.jpeg',
			'img2' => './images/portfolio/contest/2.jpeg',
			'img3' => './images/portfolio/contest/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],
		[
			'nama_event' => 'hut ke 8 mandiri taspen',
			'img1' => './images/portfolio/taspen/1.jpeg',
			'img2' => './images/portfolio/taspen/2.jpeg',
			'img3' => './images/portfolio/taspen/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],
		[
			'nama_event' => 'Dialog kebangsaan Prof mahfud. MENKOPOHUKAN',
			'img1' => './images/portfolio/menkopohukan/1.jpeg',
			'img2' => './images/portfolio/menkopohukan/2.jpeg',
			'img3' => './images/portfolio/menkopohukan/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],

		[
			'nama_event' => 'Kuliah umum mentei pertNian',
			'img1' => './images/portfolio/kuliah_pertanian/1.jpeg',
			'img2' => './images/portfolio/kuliah_pertanian/2.jpeg',
			'img3' => './images/portfolio/kuliah_pertanian/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],

		[
			'nama_event' => 'natal gereja toraja tamalangrea',
			'img1' => './images/portfolio/gereja_tamalanrea/1.jpeg',
			'img2' => './images/portfolio/gereja_tamalanrea/2.jpeg',
			'img3' => './images/portfolio/gereja_tamalanrea/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],

		[
			'nama_event' => 'Batik k pop novotel makassar',
			'img1' => './images/portfolio/novotel/1.jpeg',
			'img2' => './images/portfolio/novotel/2.jpeg',
			'img3' => './images/portfolio/novotel/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],

		[
			'nama_event' => 'Perayaan paskah',
			'img1' => './images/portfolio/paskah/1.jpeg',
			'img2' => './images/portfolio/paskah/2.jpeg',
			'img3' => './images/portfolio/paskah/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],

		[
			'nama_event' => 'Ramah tama fkip unismuh makassar',
			'img1' => './images/portfolio/unismuh/1.jpeg',
			'img2' => './images/portfolio/unismuh/2.jpeg',
			'img3' => './images/portfolio/unismuh/3.jpeg',
			'tgl_event' => '10 mar 2021',
		],




	]

	?>

	<div class="reveal-on-scroll mt-5" id="cards">
		<div class="container">
			<div class="row">
				<?php foreach ($portfolio as $row) : ?>
					<div class="col-sm-4 mt-5">
						<div class="card card-custom text-center px-0 item">
							<h4 class="px-5"><strong><?= $row['nama_event'] ?></strong></h4>
							<div class="text-center d-flex justify-content-center align-items-center flex-column">
								<img src="<?= $row['img1'] ?>" alt="" width="200" class="mt-4" style="width: 100%; height:190px; object-fit:cover;">
								<p class="text-secondary mb-0 mt-4"><strong><?= $row['tgl_event'] ?></strong></p>
								<!-- <p><strong><button class="my-btn btn"><small>Selengkapnya</small></button></strong></p> -->
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>


	<?php include 'footer.php' ?>
	<?php include 'js-no-scmagic.php' ?>

</body>

</html>