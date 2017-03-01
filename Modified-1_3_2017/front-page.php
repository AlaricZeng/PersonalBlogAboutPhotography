<?php
/**
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Athena
 */
get_header();
?>



<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

        <?php do_action('athena_homepage'); ?>
    </main><!-- #main -->
    <div class="site-branding">
        <div class="wrap">
            <div class="site-branding-text">
                <h1 class="site-title">
                    <a id="homepage" href="<?php echo get_option('home'); ?>">Alaric's Light Story</a>
                </h1>
                <p class="site-description">Welcome to hear my light story</p>
            </div>
        </div>
    </div>
    <div id="main-content-area">
        <?php
            $posts = query_posts($query_string . '&orderby=date&showposts=100'); 
        ?>

        <?php if (have_posts()): 
                $post_position=0;
                $post_position_first=true;?>
            <?php while (have_posts()) : the_post(); ?>
                <div class="post">
                    <?php 
                        if ($post_position==0)
                        {
                            $post_style="post-left";
                            $description_style = "description-left";
                        }
                        else
                        {
                            $post_style="post-right";
                            $description_style = "description-right";
                        }
                    ?>
                    <div class="<?php echo $post_style ?>">
                        <div class="photo-tie"></div>
                        <a class="photo-link" href="<?php the_permalink(); ?>"><div class="img" style="background-image: url(<?php echo catch_that_image() ?>)" alt="<?php echo mb_strimwidth(strip_tags(apply_filters(‘the_title’, $post->post_title)), 0, 20); ?>"></div></a>
                    </div>
                    <div class="<?php echo $description_style ?>">
                        <p class="date">
                            <?php the_date('d/m/Y'); ?>
                        </p>
                        <a href="<?php the_permalink(); ?>">
                            <span><?php echo mb_strimwidth(strip_tags(apply_filters(‘the_title’,
                                       $post->post_title)), 0, 20); ?></span>
                        </a>
                        <p class="each-post-content">
                            <?php echo mb_strimwidth(strip_tags(apply_filters(‘the_content’,
                                  $post->post_content)), 0, 90); ?>...
                        </p>
                    </div>
                </div>
                <?php $post_position=($post_position+1)%2; ?>
            <?php endwhile; ?>
            <?php else : ?>
            <div class="post">
                <h2>Nothing Found</h2>
                <p>Sorry, but you are looking for somthing that isn't here. </p>
                <p><a href="<?php echo get_option('home'); ?>"> Return to the homepage</a></p>
            </div>
        <?php endif; ?>

    </div>
</div><!-- #primary -->


<?php get_footer(); ?>        