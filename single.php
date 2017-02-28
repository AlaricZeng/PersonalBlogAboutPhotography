<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width,height=device-height,inital-scale=1.0,maximum-scale=1.0,user-scalable=no;">
<meta name="apple-mobile-web-app-capable" cibtent="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<title><?php wp_title('&laquo;',true,'right'); ?><?php bloginfo('name'); ?></title>
<link href="<?php bloginfo('template_url') ?>/inc/css/editor-style.css" rel="stylesheet" type="text/css" media="screen" />
<?php if (is_singular()) wp_enqueue_script('comment-reply'); ?>
<link rel="shortcut icon" type="image/x-icon" href="<?php bloginfo('template_url'); ?>/images/favicon.ico" />
<?php wp_head(); ?>
</head>
<body style="background:#fff;">
<div id="single">
	<?php if (have_posts()): ?>
		<?php while (have_posts()) : the_post(); ?>
        	<?php if (get_the_ID()==53): ?>
            	<div id="about-alaric"></div>
            <?php else: ?>
				<div <?php post_class(); ?>>
        			<div id="single-title"><?php the_title(); ?></div>
           			<div id="single-content"><?php the_content(''); ?></div>
                	<div id="single-content-ending"></div>
                	<div id="single-date">
             			<?php the_date('d/M, Y'); ?>
            		</div>
                	<div id="single-comment-line"></div>
				</div>
       			<?php comments_template(); ?>
          	<?php endif; ?>
		<?php endwhile; ?>
	<?php else: ?>
		<div class="post">
        	<h2>Nothing Found</h2>
            <p>Sorry, but you are looking for somthing that isn't here.</p>
            <p><a href="<?php echo get_option('home'); ?>">Return to the homepage</a></p>
         </div>
    <?php endif; ?>
<?php get_footer(); ?>