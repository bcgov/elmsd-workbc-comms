var clientURL = process.env.CLIENTURL || process.env.OPENSHIFT_NODEJS_CLIENTURL || "http://localhost:3000"

module.exports = function (title, topics, aboveTOC, belowTOC){
    //console.log(topics)
    var html = /*html*/`
    <!DOCTYPE html
	PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
	xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<meta content="width=device-width" name="viewport" />
	<!--[if !mso]><!-->
	<meta content="IE=edge" http-equiv="X-UA-Compatible" />
	<!--<![endif]-->
	<title></title>
	<!--[if !mso]><!-->
	<link href="https://brumbyvisuals.github.io/portfolio/css/recoleta.css" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&amp;display=swap" rel="stylesheet"
		type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Bitter" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Alegreya" rel="stylesheet" type="text/css" />
	<link href="https://www.armani.com/ytos/resources/ARMANIGROUP/fonts/acta.woff2" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Abril+Fatface" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Quattrocento+Sans" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Monda" rel="stylesheet" type="text/css" />
	<link href="https://use.typekit.net/xif0nlk.css" rel="stylesheet">
	<!--<![endif]-->
	<style type="text/css">
		body {
			margin: 0;
			padding: 0;
		}

		table,
		td,
		tr {
			vertical-align: top;
			border-collapse: collapse;
		}

		* {
			line-height: inherit;
		}

		a[x-apple-data-detectors=true] {
			color: inherit !important;
			text-decoration: none !important;
		}
	</style>
	<style id="media-query" type="text/css">
		@media (max-width: 660px) {

			.block-grid,
			.col {
				min-width: 320px !important;
				max-width: 100% !important;
				display: block !important;
			}

			.block-grid {
				width: 100% !important;
			}

			.col {
				width: 100% !important;
			}

			.col_cont {
				margin: 0 auto;
			}

			img.fullwidth,
			img.fullwidthOnMobile {
				max-width: 100% !important;
			}

			.no-stack .col {
				min-width: 0 !important;
				display: table-cell !important;
			}

			.no-stack.two-up .col {
				width: 50% !important;
			}

			.no-stack .col.num2 {
				width: 16.6% !important;
			}

			.no-stack .col.num3 {
				width: 25% !important;
			}

			.no-stack .col.num4 {
				width: 33% !important;
			}

			.no-stack .col.num5 {
				width: 41.6% !important;
			}

			.no-stack .col.num6 {
				width: 50% !important;
			}

			.no-stack .col.num7 {
				width: 58.3% !important;
			}

			.no-stack .col.num8 {
				width: 66.6% !important;
			}

			.no-stack .col.num9 {
				width: 75% !important;
			}

			.no-stack .col.num10 {
				width: 83.3% !important;
			}

			.video-block {
				max-width: none !important;
			}

			.mobile_hide {
				min-height: 0px;
				max-height: 0px;
				max-width: 0px;
				display: none;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide {
				display: block !important;
				max-height: none !important;
			}
		}
	</style>
	<style id="menu-media-query" type="text/css">
		@media (max-width: 660px) {
			.menu-checkbox[type="checkbox"]~.menu-links {
				display: none !important;
				padding: 5px 0;
			}

			.menu-checkbox[type="checkbox"]~.menu-links span.sep {
				display: none;
			}

			.menu-checkbox[type="checkbox"]:checked~.menu-links,
			.menu-checkbox[type="checkbox"]~.menu-trigger {
				display: block !important;
				max-width: none !important;
				max-height: none !important;
				font-size: inherit !important;
			}

			.menu-checkbox[type="checkbox"]~.menu-links>a,
			.menu-checkbox[type="checkbox"]~.menu-links>span.label {
				display: block !important;
				text-align: center;
			}

			.menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-close {
				display: block !important;
			}

			.menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-open {
				display: none !important;
			}

			#menuwy3zev~div label {
				border-radius: 0% !important;
			}

			#menuwy3zev:checked~.menu-links {
				background-color: #000000 !important;
			}

			#menuwy3zev:checked~.menu-links a {
				color: #ffffff !important;
			}

			#menuwy3zev:checked~.menu-links span {
				color: #ffffff !important;
			}
		}
	</style>
	<style id="icon-media-query" type="text/css">
		@media (max-width: 660px) {
			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}
		}
	</style>
</head>

<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #F2F2F2;">
	<table bgcolor="#F2F2F2" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F2F2F2; width: 100%;"
		valign="top" width="100%">
		<tbody>
			<tr style="vertical-align: top;" valign="top">
				<td style="word-break: break-word; vertical-align: top;" valign="top">
					
					<div style="background-color:transparent;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
							<div
								style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">

								<div class="col num12"
									style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
									<div class="col_cont" style="width:100% !important;">

										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:25px; padding-right: 0px; padding-left: 0px;">
											
											<table cellpadding="0" cellspacing="0" role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
												valign="top" width="100%">
												<tr style="vertical-align: top;" valign="top">
													<td align="center"
														style="word-break: break-word; vertical-align: top; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: center; width: 100%;"
														valign="top" width="100%">
														<h1
															style="color:#234075;direction:ltr;font-family:'Playfair Display', Georgia, serif;font-size:48px;font-weight:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
															<img src="${clientURL}workbc-header-logo.svg" width="350px"/><br />
														</h1>
													</td>
												</tr>
											</table>

										</div>

									</div>
								</div>

							</div>
						</div>
					</div>
					<div style="background-color:transparent;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
							<div
								style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;background-image:url('${clientURL}bg.jpeg');background-position:top left;background-repeat:no-repeat; background-size: cover">

								<div class="col num12"
									style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
									<div class="col_cont" style="width:100% !important;">

										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">

											<table border="0" cellpadding="0" cellspacing="0" class="divider"
												role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
												valign="top" width="100%">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td class="divider_inner"
															style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"
															valign="top">
															<table align="center" border="0" cellpadding="0"
																cellspacing="0" class="divider_content" height="25"
																role="presentation"
																style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 25px; width: 100%;"
																valign="top" width="100%">
																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td height="25"
																			style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
																			valign="top"><span></span></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
													
												</tbody>
											</table>
											<div align="center" class="button-container"
												style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">

												<div
													style="text-decoration:none;display:inline-block;color:#F2F2F2;background-color:#234075;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;width:auto; width:auto;;border-top:1px solid #234075;border-right:1px solid #234075;border-bottom:1px solid #234075;border-left:1px solid #234075;padding-top:0px;padding-bottom:0px;font-family:'Playfair Display', Georgia, serif;text-align:center;mso-border-alt:none;word-break:keep-all;">
													<span
														style="padding-left:30px;padding-right:30px;font-size:46px;display:inline-block;letter-spacing:2px;"><span
															style="font-size: 16px; line-height: 1.8; word-break: break-word; font-family: 'Playfair Display', Georgia, serif; mso-line-height-alt: 29px;"><strong><span
																	data-mce-style="font-size: 46px; line-height: 82px;"
																	style="font-size: 46px; line-height: 82px;"><span
																		style="color:#ffffff; font-family: adobe-garamond-pro; font-weight: 400;font-style: normal;">Work</span><span
																		style="color: #fdb915; font-family: adobe-garamond-pro; font-weight: 400;font-style: normal;">BC</span> This
																	Week</span></strong></span></span>
												</div>

											</div>
											<table cellpadding="0" cellspacing="0" role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
												valign="top" width="100%">
												<tr style="vertical-align: top;" valign="top">
													<td align="center"
														style="word-break: break-word; vertical-align: top; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: center; width: 100%;"
														valign="top" width="100%">
														<h2
															style="color:#ffffff;direction:ltr;font-family:'Playfair Display', Georgia, serif;font-size:34px;font-weight:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
															<strong>${title}</strong><br />
														</h2>
													</td>
												</tr>
											</table>
											<table border="0" cellpadding="0" cellspacing="0" class="divider"
												role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
												valign="top" width="100%">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td class="divider_inner"
															style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"
															valign="top">
															<table align="center" border="0" cellpadding="0"
																cellspacing="0" class="divider_content" height="225"
																role="presentation"
																style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 225px; width: 100%;"
																valign="top" width="100%">
																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td height="225"
																			style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
																			valign="top"><span></span></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>
								</div>

							</div>
						</div>
					</div>

					<div style="background-color:transparent;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">

								<div class="col num12"
									style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
									<div class="col_cont" style="width:100% !important;">

										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:25px; padding-right: 0px; padding-left: 0px;">

											<div
												style="color:#393d47;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.5;padding-top:15px;padding-right:20px;padding-bottom:15px;padding-left:20px;">
												<div class="txtTinyMce-wrapper"
													style="line-height: 1.5; font-size: 12px; color: #393d47; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;">
													<p
														style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 24px; margin: 0;">
														<span style="font-size: 16px;">${aboveTOC}</span>
													</p>
													<ul
														style="font-size: 16px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 24px; margin: 5px;">
                                                        `
                                                        if (typeof topics != "undefined" && topics != null && topics.length != null && topics.length > 0){
                                                            topics.forEach((e,i) => {
                                                                html += /*html*/
                                                                `
                                                                <li><a href="#topic${i}">${e.topicHeading}</a></li>
                                                                `
															})
                                                        }
                                                        
														
            html += /*html*/`
													</ul>
													<p
														style="font-size: 16px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 24px; margin: 0;">
														<span style="font-size: 16px;">${belowTOC}</span>
													</p>
												</div>
											</div>

										</div>

									</div>
								</div>

							</div>
						</div>
					</div>
                    `
                    //adding actual topics
                    if (typeof topics != "undefined" && topics != null && topics.length != null && topics.length > 0){
                        topics.forEach((e,i) => {
                            html += /*html*/ `
                    <!-- line below -->
					<div style="background-color:transparent;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">

								<div class="col num12"
									style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
									<div class="col_cont" style="width:100% !important;">

										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">

											<table border="0" cellpadding="0" cellspacing="0" class="divider"
												role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
												valign="top" width="100%">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td class="divider_inner"
															style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
															valign="top">
															<table align="center" border="0" cellpadding="0"
																cellspacing="0" class="divider_content"
																role="presentation"
																style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #e3a82b; width: 90%;"
																valign="top" width="90%">
																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
																			valign="top"><span></span></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>
								</div>

							</div>
						</div>
					</div>
					<!-- end line -->
					<div style="background-color:transparent;">
						<div class="block-grid mixed-two-up"
							style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">

								<div class="col num5"
									style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 265px; width: 266px;">
									<div class="col_cont" style="width:100% !important;">

										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 5px; padding-left: 25px;">

											<table cellpadding="0" cellspacing="0" role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
												valign="top" width="100%">
												<tr style="vertical-align: top;" valign="top">
													<td align="center"
														style="word-break: break-word; vertical-align: top; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: center; width: 100%;"
														valign="top" width="100%">
														<h2
															style="color:#393d47;direction:ltr;font-family:'Playfair Display', Georgia, serif;font-size:34px;font-weight:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;" id="topic${i}">
															<strong>${e.topicHeading}</strong><br /></h2>
													</td>
												</tr>
											</table>

											<div
												style="color:#393d47;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.5;padding-top:15px;padding-right:0px;padding-bottom:15px;padding-left:0px;">
												<div class="txtTinyMce-wrapper"
													style="line-height: 1.5; font-size: 12px; color: #393d47; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;">
													<div
														style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 21px; margin: 0;">
														${e.topicContent}
                                                    </div>
												</div>
											</div>
											`
											if (e.topicLink !== ""){
												html += /*html*/`

												<div align="left" class="button-container"
													style="padding-top:10px;padding-right:0px;padding-bottom:10px;padding-left:0px;">
													<a
														href="${e.topicLink}"
														style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #ffffff; background-color: #234075; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 2px solid #234075; border-right: 2px solid #234075; border-bottom: 2px solid #234075; border-left: 2px solid #234075; padding-top: 5px; padding-bottom: 5px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"
														target="_blank"><span
															style="padding-left:25px;padding-right:25px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span
																style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>View
																	More</strong></span></span></a>

												</div>
												`
											}
											html += /*html*/`
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- line below -->
					<div style="background-color:transparent;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">

								<div class="col num12"
									style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
									<div class="col_cont" style="width:100% !important;">

										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">

											<table border="0" cellpadding="0" cellspacing="0" class="divider"
												role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
												valign="top" width="100%">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td class="divider_inner"
															style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
															valign="top">
															<table align="center" border="0" cellpadding="0"
																cellspacing="0" class="divider_content"
																role="presentation"
																style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #e3a82b; width: 90%;"
																valign="top" width="90%">
																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
																			valign="top"><span></span></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>
								</div>

							</div>
						</div>
					</div>
					<!-- end line -->

                            `               
                        })
            
                    }
                    html += /*html*/`
					<div style="background-color:transparent;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
							<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">

								<div class="col num12"
									style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
									<div class="col_cont" style="width:100% !important;">

										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;">

											<!--
											<table cellpadding="0" cellspacing="0" class="social_icons"
												role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
												valign="top" width="100%">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
															valign="top">
															<table align="center" cellpadding="0" cellspacing="0"
																class="social_table" role="presentation"
																style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;"
																valign="top">
																<tbody>
																	<tr align="center"
																		style="vertical-align: top; display: inline-block; text-align: center;"
																		valign="top">
																		<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;"
																			valign="top"><a
																				href="https://www.facebook.com/"
																				target="_blank"><img alt="Facebook"
																					height="32"
																					src="${clientURL}facebook2x.png"
																					style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"
																					title="facebook" width="32" /></a>
																		</td>
																		<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;"
																			valign="top"><a
																				href="https://www.twitter.com/"
																				target="_blank"><img alt="Twitter"
																					height="32"
																					src="${clientURL}twitter2x.png"
																					style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"
																					title="twitter" width="32" /></a>
																		</td>
																		<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;"
																			valign="top"><a
																				href="https://www.linkedin.com/"
																				target="_blank"><img alt="Linkedin"
																					height="32"
																					src="${clientURL}linkedin2x.png"
																					style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"
																					title="linkedin" width="32" /></a>
																		</td>
																		<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;"
																			valign="top"><a
																				href="https://www.instagram.com/"
																				target="_blank"><img alt="Instagram"
																					height="32"
																					src="${clientURL}instagram2x.png"
																					style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"
																					title="instagram" width="32" /></a>
																		</td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
											-->
											<table border="0" cellpadding="0" cellspacing="0" class="divider"
												role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
												valign="top" width="100%">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td class="divider_inner"
															style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;"
															valign="top">
															<table align="center" border="0" cellpadding="0"
																cellspacing="0" class="divider_content" height="15"
																role="presentation"
																style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 15px; width: 100%;"
																valign="top" width="100%">
																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td height="15"
																			style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
																			valign="top"><span></span></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
											<div
												style="color:#888888;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="line-height: 1.2; font-size: 12px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; color: #888888; mso-line-height-alt: 14px;">
													<p
														style="font-size: 12px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14px; margin: 0;">
															style="font-size: 12px;">Ministry of Social Development and Poverty Reduction</span>
													</p>
												</div>
											</div>

											<div
												style="color:#888888;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;">
												<div class="txtTinyMce-wrapper"
													style="line-height: 1.2; font-size: 12px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; color: #888888; mso-line-height-alt: 14px;">
													<p
														style="font-size: 12px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14px; margin: 0;">
														
															style="font-size: 12px;">This email is sent from an unmonitored account. Contact: <a
																href="mailto:someone@gov.bc.ca" rel="noopener"
																style="text-decoration: underline; color: #888888;"
																target="_blank">someone@gov.bc.ca</a>.</span>
													</p>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
					<div style="background-color:transparent;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
							<div
								style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">

								<div class="col num12"
									style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
									<div class="col_cont" style="width:100% !important;">

										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:25px; padding-right: 0px; padding-left: 0px;">

											<table border="0" cellpadding="0" cellspacing="0" class="divider"
												role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
												valign="top" width="100%">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td class="divider_inner"
															style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;"
															valign="top">
															<table align="center" border="0" cellpadding="0"
																cellspacing="0" class="divider_content" height="0"
																role="presentation"
																style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 0px; width: 100%;"
																valign="top" width="100%">
																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td height="0"
																			style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;"
																			valign="top"><span></span></td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>
								</div>

							</div>
						</div>
					</div>
					<div style="background-color:transparent;">
						<div class="block-grid"
							style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
							<div
								style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">

								<div class="col num12"
									style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
									<div class="col_cont" style="width:100% !important;">

										<div
											style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
											
											<table cellpadding="0" cellspacing="0" role="presentation"
												style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
												valign="top" width="100%">
												<tbody>
													<tr style="vertical-align: top;" valign="top">
														<td align="center"
															style="word-break: break-word; vertical-align: top; padding-top: 5px; padding-right: 0px; padding-bottom: 5px; padding-left: 0px; text-align: center;"
															valign="top">

															<table cellpadding="0" cellspacing="0" class="icons-inner"
																role="presentation"
																style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"
																valign="top">

																<tbody>
																	<tr style="vertical-align: top;" valign="top">
																		<td align="center"
																			style="word-break: break-word; vertical-align: top; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"
																			valign="top"><img src="${clientURL}canada-bc-tagline.png" width="400px" />
																		</td>
																	</tr>
																</tbody>
															</table>
														</td>
													</tr>
												</tbody>
											</table>

										</div>

									</div>
								</div>

							</div>
						</div>
					</div>

				</td>
			</tr>
		</tbody>
	</table>

</body>

</html>
    
    `
return html
}