<?php
/**
 * Athena functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Athena
 */

//Self define function
/**
* Disable the emoji's
*/
function disable_emojis() {
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );
remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
}
add_action( 'init', 'disable_emojis' );
 
/**
* Filter function used to remove the tinymce emoji plugin.
*/
function disable_emojis_tinymce( $plugins ) {
return array_diff( $plugins, array( 'wpemoji' ) );
}

function smilies_reset() {
global $wpsmiliestrans, $wp_smiliessearch;

// don't bother setting up smilies if they are disabled
if ( !get_option( 'use_smilies' ) )
    return;

    $wpsmiliestrans = array(
    ':mrgreen:' => 'icon_mrgreen.gif',
    ':neutral:' => 'icon_neutral.gif',
    ':twisted:' => 'icon_twisted.gif',
      ':arrow:' => 'icon_arrow.gif',
      ':shock:' => 'icon_eek.gif',
      ':smile:' => 'icon_smile.gif',
        ':???:' => 'icon_confused.gif',
       ':cool:' => 'icon_cool.gif',
       ':evil:' => 'icon_evil.gif',
       ':grin:' => 'icon_biggrin.gif',
       ':idea:' => 'icon_idea.gif',
       ':oops:' => 'icon_redface.gif',
       ':razz:' => 'icon_razz.gif',
       ':roll:' => 'icon_rolleyes.gif',
       ':wink:' => 'icon_wink.gif',
        ':cry:' => 'icon_cry.gif',
        ':eek:' => 'icon_surprised.gif',
        ':lol:' => 'icon_lol.gif',
        ':mad:' => 'icon_mad.gif',
        ':sad:' => 'icon_sad.gif',
          '8-)' => 'icon_cool.gif',
          '8-O' => 'icon_eek.gif',
          ':-(' => 'icon_sad.gif',
          ':-)' => 'icon_smile.gif',
          ':-?' => 'icon_confused.gif',
          ':-D' => 'icon_biggrin.gif',
          ':-P' => 'icon_razz.gif',
          ':-o' => 'icon_surprised.gif',
          ':-x' => 'icon_mad.gif',
          ':-|' => 'icon_neutral.gif',
          ';-)' => 'icon_wink.gif',
    // This one transformation breaks regular text with frequency.
    //     '8)' => 'icon_cool.gif',
           '8O' => 'icon_eek.gif',
           ':(' => 'icon_sad.gif',
           ':)' => 'icon_smile.gif',
           ':?' => 'icon_confused.gif',
           ':D' => 'icon_biggrin.gif',
           ':P' => 'icon_razz.gif',
           ':o' => 'icon_surprised.gif',
           ':x' => 'icon_mad.gif',
           ':|' => 'icon_neutral.gif',
           ';)' => 'icon_wink.gif',
          ':!:' => 'icon_exclaim.gif',
          ':?:' => 'icon_question.gif',
    );
}
smilies_reset();

function advanced_comment($comment, $args, $depth) 
{
   $emotion_location = "/wp-content/themes/athena/inc/images/emotion/";
   $GLOBALS['comment'] = $comment;?>
   <div class="comment-container" id="comment-<?php comment_ID();?>">
        <div class="gravatar"> 
			<?php echo get_avatar($comment);?>
        </div>
        <span class="comment-author">
            <?php echo get_comment_author_link(); ?>
        </span>
        <div class="comment-content">
			<?php echo comment_text(); ?>
        </div>
        <div class="comment-time">
			<?php echo get_comment_date("m/d"); ?>
            <span class="edit-comment"><?php edit_comment_link('修改'); ?></span>
        </div>
        <div class="comment-reply" onclick="replyComment(<?php echo $comment->comment_post_ID;?>,<?php echo $comment->comment_ID; ?>,'<?php echo get_option('siteurl')?>'+'/wp-comments-post.php','<?php echo comment_author(); ?>','<?php echo comment_author_email(); ?>','<?php echo comment_author_url(); ?>')">
        	<img src="<?php bloginfo('template_url') ?>/inc/images/reply.png"/>
        	<span>Reply</span>
      	</div>
           <div class="reply-emotion-content" id="reply-emotion-content-<?php comment_ID();?>">
        	<div id="replysmilelink">
				<a onclick="javascript:replyGrin(':?:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_question.gif'; ?>"/></a>
				<a onclick="javascript:replyGrin(':razz:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_razz.gif'; ?>" title="调皮" alt="调皮" /></a>
				<a onclick="javascript:replyGrin(':sad:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_sad.gif'; ?>"title="不开森" alt="不开森" /></a>
				<a onclick="javascript:replyGrin(':evil:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_evil.gif'; ?>" title="挖鼻" alt="挖鼻" /></a>
				<a onclick="javascript:replyGrin(':!:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_exclaim.gif'; ?>" title="吓" alt="吓" /></a>
                <a onclick="javascript:replyGrin(':smile:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_smile.gif'; ?>" title="微笑" alt="微笑" /></a>
                <a onclick="javascript:replyGrin(':oops:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_redface.gif'; ?>" title="可爱" alt="可爱" /></a>
                <a onclick="javascript:replyGrin(':grin:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_biggrin.gif'; ?>" title="坏笑" alt="坏笑" /></a>
                <a onclick="javascript:replyGrin(':eek:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_eek.gif'; ?>" title="吃惊" alt="吃惊" /></a>
                <a onclick="javascript:replyGrin(':shock:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_surprised.gif'; ?>" title="吃惊" alt="吃惊" /></a>
                <a onclick="javascript:replyGrin(':???:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_confused.gif'; ?>" title="撇嘴" alt="撇嘴" /></a>
                <a onclick="javascript:replyGrin(':cool:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_cool.gif'; ?>"title="酷" alt="酷" /></a>
                <a onclick="javascript:replyGrin(':lol:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_lol.gif'; ?>" title="偷笑" alt="偷笑" /></a>
                <a onclick="javascript:replyGrin(':mad:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_mad.gif'; ?>" title="怒骂" alt="怒骂" /></a>
                <a onclick="javascript:replyGrin(':twisted:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_twisted.gif'; ?>" title="怒" alt="怒" /></a>
                <a onclick="javascript:replyGrin(':roll:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_rolleyes.gif'; ?>" title="白眼" alt="白眼" /></a>
                <a onclick="javascript:replyGrin(':wink:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_wink.gif'; ?>" title="喝彩" alt="喝彩" /></a>
                <a onclick="javascript:replyGrin(':idea:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_idea.gif'; ?>" title="得意" alt="得意" /></a>
                <a onclick="javascript:replyGrin(':arrow:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_arrow.gif'; ?>" title="无语" alt="无语" /></a>
                <a onclick="javascript:replyGrin(':neutral:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_neutral.gif'; ?>" title="亲亲" alt="亲亲" /></a>
                <a onclick="javascript:replyGrin(':cry:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_cry.gif'; ?>" title="大哭" alt="大哭" /></a>
                <a onclick="javascript:replyGrin(':mrgreen:','<?php comment_ID();?>')"><img src="<?php echo get_option('home').$emotion_location.'icon_mrgreen.gif'; ?>"title="咧嘴" alt="咧嘴" /></a>
			</div>
        </div>
   </div>
<?php } ?>
<?php
 function catch_that_image() { 
    global $post, $posts; 
    $first_img = ''; 
    ob_start(); 
    ob_end_clean(); 
    $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches); 
    $first_img = $matches [1] [0]; 
    if(empty($first_img)){  
        $first_img = bloginfo('template_url'). '/images/default-thumb.jpg'; 
    } 
    return $first_img; 
 } 
?>
<?php
function par_pagenavi($range = 3)
{   
	if (is_singular()) 
	{
		return;
	}  
	global $wp_query, $paged;  
	$max_page = $wp_query->max_num_pages;
	$page_num = $wp_query->found_posts;
	if ($page_num % 6 ==1)
	{
		$max_page = $max_page-1;
	}
	if ($max_page == 1)
	{
		return;
	}  
	if (empty($paged)) 
	{
		$paged = 1;
	}  
    global $paged, $wp_query;    
    if (!$max_page)
	{
		$max_page = $wp_query->max_num_pages;
		if ($page_num % 6 == 1)
		{	
			$max_page = $max_page-1;
		}
	}    
    if ($max_page > 1)
	{
		if (!$paged)
		{
			$paged = 1;
		}    
    	if ($paged != 1)
		{
			previous_posts_link('<span id="prev-page"></span>');
			echo "<a href='" . get_pagenum_link(1) . "' class='extend' title='跳转到首页'> 1 </a>";
		} 
		else
		{
			echo "<span class='current' title='跳转到首页'> 1 </span>";
		}
    	if ($max_page > $range)
		{
			if ($paged == 1)
			{
				echo "<a href='" . get_pagenum_link($paged+1) . "'>" .($paged+1) . "</a>";
				echo "<span class='dot'>...</span>";
			}
			else if ($paged == 2 )
			{
				echo "<span class='current' >" . $paged . "</span>";
			  	echo "<a href='" . get_pagenum_link($paged+1) . "'>" .($paged+1) . "</a>";
				echo "<span class='dot'>...</span>";
			}
			else if ($paged==$max_page)
			{
				echo "<span class='dot'>...</span>";
				echo "<a href='" . get_pagenum_link($paged-1) . "'>" .($paged-1) . "</a>";
			}
			else if ($paged > 2)
			{
				if (($paged-1)!=2)
				{
					echo "<span class='dot'>...</span>";
				}
				echo "<a href='" . get_pagenum_link($paged-1) ."'>" . ($paged-1) . "</a>";
				echo "<span class='current' >" . $paged . "</span>";
				if (($paged+1)!=$max_page)
				{
					echo "<a href='" . get_pagenum_link($paged+1) . "'>" .($paged+1) . "</a>";
					if (($paged+2)!=$max_page)
					{
						echo "<span class='dot'>...</span>";
					}
				}
			}
        	/*if ($paged < $range)
			{
				for($i = 2; $i < $range; $i++)
				{
					echo "<a href='" . get_pagenum_link($i) ."'";    
        			if ($i==$paged)
					{
						echo " class='current'";echo ">$i</a>";
					}
					else
					{
						echo ">$i</a>";
					}
				}
			}    
    		elseif ($paged >= ($max_page - ceil(($range/2))))
			{    
        		for($i = $max_page - $range; $i <= $max_page; $i++)
				{
					echo "<a href='" . get_pagenum_link($i) ."'";    
        			if($i==$paged)
					{
						echo " class='current'";echo ">$i</a>";
					}
				}
			}    
    		elseif ($paged >= $range && $paged < ($max_page - ceil(($range/2))))
			{    
       	 	for($i = ($paged - ceil($range/2)); $i <= ($paged + ceil(($range/2))); $i++)
				{
					echo "<a href='" . get_pagenum_link($i) ."'";
					if($i==$paged) 
					{
						echo " class='current'";echo ">$i</a>";
					}
				}
			}*/
		}    
    	else
		{
			for($i = 2; $i < $max_page; $i++)
			{
				if($i==$paged)
				{
					echo "<span class='current'>$i</span>";
				}
				else
				{
					echo "<a href='" . get_pagenum_link($i) ."'";    
					echo ">$i</a>";
				}
			}
		}        
    	if($paged != $max_page)
		{
			echo "<a href='" . get_pagenum_link($max_page) . "' class='extend' title='跳转到最后一页'>" . $max_page . "</a>";
			next_posts_link('<span id="next-page"></span>');
		}
		else
		{
			echo "<span class='current' >" . $paged . "</span>";
		}
	}    
}
?>
<?php
function judge_device($ul)
{
	$clientkeywords = array ('nokia',
            'sony',
            'ericsson',
            'mot',
            'samsung',
            'htc',
            'sgh',
            'lg',
            'sharp',
            'sie-',
            'philips',
            'panasonic',
            'alcatel',
            'lenovo',
            'iphone',
            'ipod',
            'blackberry',
            'meizu',
            'android',
            'netfront',
            'symbian',
            'ucweb',
            'windowsce',
            'palm',
            'operamini',
            'operamobi',
            'openwave',
            'nexusone',
            'cldc',
            'midp',
            'wap',
            'mobile'); 
	if (preg_match("/(" . implode('|', $clientkeywords) . ")/i", strtolower($ul)))
    {
		if (strstr(strtolower($ul),'ipad')==true)
		{
			return "pad";
		}
		else if (strstr(strtolower($ul),'android')==true)
		{
			if (strstr(strtolower($ul),'mobile')==true)
			{
				return "mobile";
			}
			else
			{
				return "pad";
			}
		}
	}
	else
	{
		return "desktop";
	}
}
?>
<?php
add_filter('smilies_src','my_custom_smilies_src', 1, 10);
function my_custom_smilies_src($img_src, $img, $siteurl){
    return get_bloginfo('template_url').'/inc/images/emotion/'.$img;
}
?>


<?php

if ( ! function_exists( 'athena_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function athena_setup() {
    
    
        if( !defined( 'ATHENA_VERSION' ) ) :
            define('ATHENA_VERSION', '1.0.9');
        endif;
    
        
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Athena, use a find and replace
	 * to change 'athena' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'athena', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );
        add_theme_support('woocommerce');
        add_editor_style('');
        
	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Menu', 'athena' ),
		'footer' => esc_html__( 'Footer Menu', 'athena' ),
            
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
                'gallery',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'athena_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif; // athena_setup
add_action( 'after_setup_theme', 'athena_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function athena_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'athena_content_width', 640 );
}
add_action( 'after_setup_theme', 'athena_content_width', 0 );


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Load the theme functions
 */
require get_template_directory() . '/inc/athena/athena.php';

require get_template_directory() . '/inc/tgm.php';
