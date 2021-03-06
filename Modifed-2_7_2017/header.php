<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Athena
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

        <?php wp_head(); ?>
    </head>

    <body <?php body_class(); ?>>
        
        <div id="athena-search" class="noshow">
            
            <div class="row">
                
                <span class="fa fa-search"></span>
                
                <?php get_search_form( ); ?>
                
                <span class="fa fa-close"></span>
       
                
                
            </div>
            
        </div>
        
        <div id="page" class="hfeed site">

            <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'athena'); ?></a>

            <header id="masthead" class="site-header" role="banner">

                
            </header><!-- #masthead -->

            <div id="content" class="site-content">
