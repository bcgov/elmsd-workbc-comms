var {stateToHTML} = require('draft-js-export-html')

var clientURL = process.env.CLIENTURL || process.env.OPENSHIFT_NODEJS_CLIENTURL || "http://localhost:3000"

module.exports = function (title, topics, aboveTOC, belowTOC) {
	console.log(topics)
var html2= /*html*/`<!DOCTYPE html
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
<base href="" />
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
<!--[if IE]><div class="ie-browser"><![endif]-->
<table bgcolor="#F2F2F2" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
	style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #F2F2F2; width: 100%;"
	valign="top" width="100%">
	<tbody>
		<tr style="vertical-align: top;" valign="top">
			<td style="word-break: break-word; vertical-align: top;" valign="top">
				<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#F2F2F2"><![endif]-->
				<div style="background-color:transparent;">
					<div class="block-grid"
						style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
						<div
							style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
							<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
							<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:25px; padding-bottom:25px;"><![endif]-->
							<div class="col num12"
								style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
								<div class="col_cont" style="width:100% !important;">
									<!--[if (!mso)&(!IE)]><!-->
									<div
										style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:25px; padding-right: 0px; padding-left: 0px;">
										<!--<![endif]-->
										<table cellpadding="0" cellspacing="0" role="presentation"
											style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
											valign="top" width="100%">
											<tr style="vertical-align: top;" valign="top">
												<td align="center"
													style="word-break: break-word; vertical-align: top; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: center; width: 100%;"
													valign="top" width="100%">
													<h1
														style="color:#234075;direction:ltr;font-family:'Playfair Display', Georgia, serif;font-size:48px;font-weight:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
														<img src="${clientURL}workbc-header-logo.png" height="40" /><br />
													</h1>
												</td>
											</tr>
										</table>
										<!--[if (!mso)&(!IE)]><!-->
									</div>
									<!--<![endif]-->
								</div>
							</div>
							<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
							<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
						</div>
					</div>
				</div>
				<div style="background-color:transparent;">
					<div class="block-grid"
						style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
						<div
							style="border-collapse: collapse;display: table;width: 100%;background-color:#5bc2e7;background-image:url('${clientURL}bg.jpeg');background-position:top left;background-repeat:no-repeat; background-size: cover">
							<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
							<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#5bc2e7;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><img width="640" src="${clientURL}bg.jpeg" /><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
							<div class="col num12"
								style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
								<div class="col_cont" style="width:100% !important;">
									<!--[if (!mso)&(!IE)]><!-->
									<div
										style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px; min-height: 400px">
										<!--<![endif]-->
										<!--
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
										</table>-->
										<!--
										<div align="center" class="button-container"
											style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
											<div
												style="text-decoration:none;display:inline-block;color:#F2F2F2;background-color:#234075;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;width:auto; width:auto;;border-top:1px solid #234075;border-right:1px solid #234075;border-bottom:1px solid #234075;border-left:1px solid #234075;padding-top:0px;padding-bottom:0px;font-family:'Playfair Display', Georgia, serif;text-align:center;mso-border-alt:none;word-break:keep-all;">
												<span
													style="padding-left:30px;padding-right:30px;font-size:46px;display:inline-block;letter-spacing:2px;"><span
														style="font-size: 16px; line-height: 1.8; word-break: break-word; font-family: 'Playfair Display', Georgia, serif; mso-line-height-alt: 29px;"><strong><span
																data-mce-style="font-size: 46px; line-height: 82px;"
																style="font-size: 46px; line-height: 82px;"></span>
											</div>
										</div>-->
										<!--
										<table cellpadding="0" cellspacing="0" role="presentation"
											style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
											valign="top" width="100%">
											<tr style="vertical-align: top;" valign="top">
												<td align="center"
													style="word-break: break-word; vertical-align: top; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: center; width: 100%;"
													valign="top" width="100%">
													<h2
														style="color:#ffffff;direction:ltr;font-family:'Playfair Display', Georgia, serif;font-size:34px;font-weight:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0;">
														<br />
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
										-->
										<!--[if (!mso)&(!IE)]><!-->
									</div>
									<!--<![endif]-->
								</div>
							</div>
							<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
							<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
						</div>
					</div>
				</div>
				<div style="background-color:transparent;">
					<div class="block-grid"
						style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
						<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
							<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
							<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:25px; padding-bottom:25px;"><![endif]-->
							<div class="col num12"
								style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
								<div class="col_cont" style="width:100% !important;">
									<!--[if (!mso)&(!IE)]><!-->
									<div
										style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:25px; padding-right: 0px; padding-left: 0px;">
										<!--<![endif]-->
										<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top: 15px; padding-bottom: 15px; font-family: Arial, sans-serif"><![endif]-->
										<div
											style="color:#393d47;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.5;padding-top:15px;padding-right:20px;padding-bottom:15px;padding-left:20px;">
											<div class="txtTinyMce-wrapper"
												style="line-height: 1.5; font-size: 12px; color: #393d47; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;">
												<p
													style="font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 24px; margin: 0;">
													${aboveTOC}
												</p>
												<ul
													style="font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 24px; margin: 15px;">
													`
													if (typeof topics != "undefined" && topics != null && topics.length != null && topics.length > 0) {
														if (topics.length >= 4){
															html2 += `<a name="jump_top"></a>`
														}
														topics.forEach((e,i) => {
															html2 += /*html*/
																`<li><a href="#t${i}">${e.topicHeading}</a></li>`
														})
													}
												html2 += /*html*/`
												</ul>
												<p
													style="font-size: 12px; line-height: 1.5; word-break: break-word; mso-line-height-alt: 24px; margin: 0;">
													${belowTOC}
												</p>
											</div>
										</div>
										<!--[if mso]></td></tr></table><![endif]-->
										<!--[if (!mso)&(!IE)]><!-->
									</div>
									<!--<![endif]-->
								</div>
							</div>
							<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
							<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
						</div>
					</div>
				</div>
				<!-- line below -->
				<div style="background-color:transparent;">
					<div class="block-grid"
						style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
						<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
							<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
							<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
							<div class="col num12"
								style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
								<div class="col_cont" style="width:100% !important;">
									<!--[if (!mso)&(!IE)]><!-->
									<div
										style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
										<!--<![endif]-->
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
										<!--[if (!mso)&(!IE)]><!-->
									</div>
									<!--<![endif]-->
								</div>
							</div>
							<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
							<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
						</div>
					</div>
				</div>
				<!-- end line -->
				`
			//adding actual topics
			if (typeof topics != "undefined" && topics != null && topics.length != null && topics.length > 0) {
			topics.forEach((e,i) => {
			html2 += /*html*/ `
				<div style="background-color:transparent;">
					<div class="block-grid mixed-two-up"
						style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
						<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
							<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
							<!--[if (mso)|(IE)]><td align="center" width="266" style="background-color:#ffffff;width:266px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 25px; padding-top:30px; padding-bottom:30px;"><![endif]-->
							<div class="col num5"
								style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 265px; width: 266px;">
								<div class="col_cont" style="width:100% !important;">
									<!--[if (!mso)&(!IE)]><!-->
									<div
										style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 5px; padding-left: 25px;">
										<!--<![endif]-->
										<table cellpadding="0" cellspacing="0" role="presentation"
											style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
											valign="top" width="100%">
											<tr style="vertical-align: top;" valign="top">
												<td align="center"
													style="word-break: break-word; vertical-align: top; padding-bottom: 0px; padding-left: 0px; padding-right: 0px; padding-top: 0px; text-align: center; width: 100%;"
													valign="top" width="100%">
													<a name="t${i}"></a>
													<h2
														style="color:#234075;direction:ltr;font-family:'Playfair Display', Georgia, serif;font-size:24px;font-weight:normal;line-height:120%;text-align:left;margin-top:0;margin-bottom:0;">
														<strong>${e.topicHeading}</strong><br />
													</h2>
												</td>
											</tr>
										</table>
										<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 15px; padding-bottom: 15px; font-family: Arial, sans-serif"><![endif]-->
										<div
											style="color:#393d47;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.5;padding-top:15px;padding-right:0px;padding-bottom:15px;padding-left:0px;">
											<div class="txtTinyMce-wrapper"
												style="line-height: 1.5; font-size: 12px; color: #393d47; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 18px;">
												<div
													style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 21px; margin: 0; max-width: 640px">
													${e.topicContent}
												</div>
												`
												if (i >= 3){
													html2 += /*html*/
													`
													<div
														style="font-size: 14px; line-height: 1.5; word-break: break-word; text-align: left; mso-line-height-alt: 21px; margin: 0; max-width: 640px">
														<a href="#jump_top">Go back up</a>
													</div>
													`
												}
												`
											</div>
										</div>
										`
									if (e.topicLink !== '') {
									html2 += /*html*/ `
										<!--[if mso]></td></tr></table><![endif]-->
										<div align="left" class="button-container"
											style="padding-top:10px;padding-right:0px;padding-bottom:10px;padding-left:0px;">
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 0px; padding-bottom: 10px; padding-left: 0px" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${e.topicLink}" style="height:34.5pt;width:147.75pt;v-text-anchor:middle;" arcsize="9%" strokeweight="1.5pt" strokecolor="#234075" fill="false"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
												href="${e.topicLink}"
												style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #234075; background-color: transparent; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; width: auto; width: auto; border-top: 2px solid #234075; border-right: 2px solid #234075; border-bottom: 2px solid #234075; border-left: 2px solid #234075; padding-top: 5px; padding-bottom: 5px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"
												target="_blank"><span
													style="padding-left:25px;padding-right:25px;font-size:16px;display:inline-block;letter-spacing:undefined;"><span
														style="font-size: 14px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>View
															More</strong></span></span></a>
											<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
										</div>
										`
									}
									html2+= /*html*/`
										<!--[if (!mso)&(!IE)]><!-->
									</div>
									<!--<![endif]-->
								</div>
							</div>
							`
							//has link but no image
							if (!e.hasImage && e.topicLink !== ''){
								html2 += `<!--[if (mso)|(IE)]></td></tr></table><![endif]-->`
							}
							if (e.hasImage){
							html2 += /*html*/`
							<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
							<!--[if (mso)|(IE)]></td><td align="center" width="373" style="background-color:#ffffff;width:373px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 20px; padding-left: 20px; padding-top:30px; padding-bottom:30px;"><![endif]-->
							<div class="col num7"
								style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 371px; width: 373px; direction: ltr;">
								<div class="col_cont" style="width:100% !important;">
									<!--[if (!mso)&(!IE)]><!-->
									<div
										style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:30px; padding-bottom:30px; padding-right: 5px; padding-left: 25px;">
										<!--<![endif]-->
										<div align="center" class="img-container center autowidth"
											style="padding-right: 0px;padding-left: 0px;">
											<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img
												align="center" border="0" class="center autowidth"
												src="${clientURL}images/${e.topicImage}"
												style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 343px; display: block;"
												width="343" />
											<!--[if mso]></td></tr></table><![endif]-->
										</div>
										<!--[if (!mso)&(!IE)]><!-->
									</div>
									<!--<![endif]-->
								</div>
							</div>
							<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
							`
							//has image but no link
							if (e.hasImage && e.topicLink === ''){
								html2 += `<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->`
							}
							}
							//has both image and link
							if (e.hasImage && e.topicLink !== ''){
								html2 += `<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->`
							}
							html2+= /*html*/`
						</div>
					</div>
				</div>
				<div style="background-color:transparent;">
					<div class="block-grid"
						style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
						<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
							<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
							<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
							<div class="col num12"
								style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
								<div class="col_cont" style="width:100% !important;">
									<!--[if (!mso)&(!IE)]><!-->
									<div
										style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:0px; padding-bottom:0px; padding-right: 0px; padding-left: 0px;">
										<!--<![endif]-->
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
										<!--[if (!mso)&(!IE)]><!-->
									</div>
									<!--<![endif]-->
								</div>
							</div>
							<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
							<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
						</div>
					</div>
				</div>
			`
			}
			)}
				html2 += /*html*/`
				<div style="background-color:transparent;">
					<div class="block-grid"
						style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: #ffffff;">
						<div style="border-collapse: collapse;display: table;width: 100%;background-color:#ffffff;">
							<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:#ffffff"><![endif]-->
							<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:#ffffff;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:20px; padding-bottom:30px;"><![endif]-->
							<div class="col num12"
								style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
								<div class="col_cont" style="width:100% !important;">
									<!--[if (!mso)&(!IE)]><!-->
									<div
										style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:20px; padding-bottom:30px; padding-right: 0px; padding-left: 0px;">
										<!--<![endif]-->
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
										<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]-->
										<div
										style="color:#888888;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;">
										<div class="txtTinyMce-wrapper"
											style="line-height: 1.2; font-size: 12px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; color: black; mso-line-height-alt: 14px;">
											<p
												style="font-size: 12px; line-height: 1.2; word-break: break-word; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14px; margin: 0;">
												<b>WorkBC Employment Services</b><br/>
												Employment and Labour Market Services Division<br/>
												Ministry of Social Development and Poverty Reduction<br/></span>
											</p>
										</div>
										</div>
										<!--[if mso]></td></tr></table><![endif]-->
										<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]-->
										<div
										style="color:#888888;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;">
										<div class="txtTinyMce-wrapper"
											style="line-height: 1.2; font-size: 12px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; color: black; mso-line-height-alt: 14px;">
											<p
												style="font-size: 12px; line-height: 1.2; word-break: break-word; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14px; margin: 0;">
												*Note: These updates are only sent to the Account Manager and secondary contact identified to the ministry.<br/>
												Employment and Labour Market Services Division<br/><br/></span>
											</p>
										</div>
										</div>
										<!--[if mso]></td></tr></table><![endif]-->
										<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]-->
										<div
											style="color:#888888;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;">
											<div class="txtTinyMce-wrapper"
												style="line-height: 1.2; font-size: 12px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; color: #888888; mso-line-height-alt: 14px;">
												<p
													style="font-size: 12px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14px; margin: 0;">
													SDPR - Employment and Labour Market Services Division</span>
												</p>
											</div>
										</div>
										<!--[if mso]></td></tr></table><![endif]-->
										<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 5px; padding-bottom: 5px; font-family: Arial, sans-serif"><![endif]-->
										<div
											style="color:#888888;font-family:Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif;line-height:1.2;padding-top:5px;padding-right:10px;padding-bottom:5px;padding-left:10px;">
											<div class="txtTinyMce-wrapper"
												style="line-height: 1.2; font-size: 12px; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; color: #888888; mso-line-height-alt: 14px;">
												<p
													style="font-size: 12px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif; mso-line-height-alt: 14px; margin: 0;">
													This email is sent from an unmonitored account. Contact: <a
														href="mailto:elms.stakeholders@gov.bc.ca" rel="noopener"
														style="text-decoration: underline; color: #888888;"
														target="_blank">elms.stakeholders@gov.bc.ca</a>.</span>
												</p>
											</div>
										</div>
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
																		valign="top"><img alt="Canada Tagline"
																			height="78" width="285"
																			src="${clientURL}canada-bc-tagline.png"
																			style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"
																			title="canada-bc-tagline" /></a>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
										<!--[if mso]></td></tr></table><![endif]-->
										<!--[if (!mso)&(!IE)]><!-->
									</div>
									<!--<![endif]-->
								</div>
							</div>
							<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
							<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
						</div>
					</div>
				</div>
				<div style="background-color:transparent;">
					<div class="block-grid"
						style="min-width: 320px; max-width: 640px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
						<div
							style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
							<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:640px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
							<!--[if (mso)|(IE)]><td align="center" width="640" style="background-color:transparent;width:640px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:25px; padding-bottom:25px;"><![endif]-->
							<div class="col num12"
								style="min-width: 320px; max-width: 640px; display: table-cell; vertical-align: top; width: 640px;">
								<div class="col_cont" style="width:100% !important;">
									<!--[if (!mso)&(!IE)]><!-->
									<div
										style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:25px; padding-bottom:25px; padding-right: 0px; padding-left: 0px;">
										<!--<![endif]-->
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
										<!--[if (!mso)&(!IE)]><!-->
									</div>
									<!--<![endif]-->
								</div>
							</div>
							<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
							<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
						</div>
					</div>
				</div>
				<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
			</td>
		</tr>
	</tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>

</html>`

	return html2
}