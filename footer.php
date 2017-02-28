<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Athena
 */
?>

</div><!-- #content -->

<footer id="colophon" class="site-footer" role="contentinfo">
    
    <?php do_action( 'athena_footer' ); ?>
    
</footer><!-- #colophon -->
</div><!-- #page -->
<script type="text/javascript" src="<?php bloginfo('template_url'); ?>/js/single-script.js"></script>
<?php wp_footer(); ?>
</body>
</html>
