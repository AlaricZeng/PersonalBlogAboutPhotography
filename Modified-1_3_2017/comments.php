<?php
    $emotion_location = "/wp-content/themes/athena/inc/images/emotion/";
	if (!empty($_SERVER['SCRIPT_FILENAME']) && 'comments.php'==basename($_SERVER['SCRIPT_FILENAME']));
	if (post_password_required()) { ?>
		<p class="nocomments">This post is password protected. Enter the password to view comments.</p>
    <?php
		return;
	}
?>
			<div id="comments">
            	<div id="comments-number"><?php comments_number('No comment','1 comment','% comments' );?></div>
            	<?php if (have_comments()): ?>
            		<div class="commentlist">
                    	<?php wp_list_comments('type=comment&callback=advanced_comment'); ?>
                    </div>
            		<?php if ($wp_query->max_num_pages > 1) : ?>
						<div class="pagination">
            				<ul>
                				<li class="older"><?php previous_comments_link('Older') ?></li>
                    			<li class="newer"><?php next_comments_link('Newer') ?></li>
                			</ul>
            			</div>
           			<?php endif; ?>
				<?php endif; ?>
				<?php if (comments_open()): ?>
					<div id="respond">
            	 		<div id="respond-title">Write a comment</div>
                 		<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform" onsubmit="return submitComment();">
                 			<div class="input-content">
                    			<label for="author">Username*:</label>
                        		<input type="text" name="author" id="author" value="<?php echo $comment_author; ?>" onfocus="inputComment('author')" 
                        	 	onblur="finishCommentItem('author')" />
                        		<span id="warning-author">Please input username</span>
                    		</div>
                    		<div class="input-content">
                        		<label for="email">Email*:</label>
                        		<input type="text" name="email" id="email" value="<?php echo $comment_author_email; ?>" onfocus="inputComment('email')" onblur="finishCommentItem('email')"/>
                        		<span id="warning-email">Please input email</span>
                    		</div>
                    		<div class="input-content">
                        		<label for="url">Site:</label>
                       		 	<input type="text" name="url" id="url" value="<?php echo $comment_author_url; ?>" onfocus="inputComment('url')" onblur="finishCommentItem('url')"/>
                    		</div>
                    		<div class="input-content">
                        		<label for="comment">Comment:</label>
                                <div id="emotion" onclick="showEmotion()"></div>
                                <div id="emotion-content">
                                	<div id="smilelink">
										<a onclick="javascript:grin(':?:')"><img src="<?php echo get_option('home').$emotion_location.'icon_question.gif'; ?>"/></a>
										<a onclick="javascript:grin(':razz:')"><img src="<?php echo get_option('home').$emotion_location.'icon_razz.gif'; ?>" title="调皮" alt="调皮" /></a>
										<a onclick="javascript:grin(':sad:')"><img src="<?php echo get_option('home').$emotion_location.'icon_sad.gif'; ?>"title="不开森" alt="不开森" /></a>
										<a onclick="javascript:grin(':evil:')"><img src="<?php echo get_option('home').$emotion_location.'icon_evil.gif'; ?>" title="挖鼻" alt="挖鼻" /></a>
										<a onclick="javascript:grin(':!:')"><img src="<?php echo get_option('home').$emotion_location.'icon_exclaim.gif'; ?>" title="吓" alt="吓" /></a>
                                        <a onclick="javascript:grin(':smile:')"><img src="<?php echo get_option('home').$emotion_location.'icon_smile.gif'; ?>" title="微笑" alt="微笑" /></a>
                                        <a onclick="javascript:grin(':oops:')"><img src="<?php echo get_option('home').$emotion_location.'icon_redface.gif'; ?>" title="可爱" alt="可爱" /></a>
                                        <a onclick="javascript:grin(':grin:')"><img src="<?php echo get_option('home').$emotion_location.'icon_biggrin.gif'; ?>" title="坏笑" alt="坏笑" /></a>
                                        <a onclick="javascript:grin(':eek:')"><img src="<?php echo get_option('home').$emotion_location.'icon_eek.gif'; ?>" title="吃惊" alt="吃惊" /></a>
                                        <a onclick="javascript:grin(':shock:')"><img src="<?php echo get_option('home').$emotion_location.'icon_surprised.gif'; ?>" title="吃惊" alt="吃惊" /></a>
                                        <a onclick="javascript:grin(':???:')"><img src="<?php echo get_option('home').$emotion_location.'icon_confused.gif'; ?>" title="撇嘴" alt="撇嘴" /></a>
                                        <a onclick="javascript:grin(':cool:')"><img src="<?php echo get_option('home').$emotion_location.'icon_cool.gif'; ?>"title="酷" alt="酷" /></a>
                                        <a onclick="javascript:grin(':lol:')"><img src="<?php echo get_option('home').$emotion_location.'icon_lol.gif'; ?>" title="偷笑" alt="偷笑" /></a>
                                        <a onclick="javascript:grin(':mad:')"><img src="<?php echo get_option('home').$emotion_location.'icon_mad.gif'; ?>" title="怒骂" alt="怒骂" /></a>
                                        <a onclick="javascript:grin(':twisted:')"><img src="<?php echo get_option('home').$emotion_location.'icon_twisted.gif'; ?>" title="怒" alt="怒" /></a>
                                        <a onclick="javascript:grin(':roll:')"><img src="<?php echo get_option('home').$emotion_location.'icon_rolleyes.gif'; ?>" title="白眼" alt="白眼" /></a>
                                        <a onclick="javascript:grin(':wink:')"><img src="<?php echo get_option('home').$emotion_location.'icon_wink.gif'; ?>" title="喝彩" alt="喝彩" /></a>
                                        <a onclick="javascript:grin(':idea:')"><img src="<?php echo get_option('home').$emotion_location.'icon_idea.gif'; ?>" title="得意" alt="得意" /></a>
                                        <a onclick="javascript:grin(':arrow:')"><img src="<?php echo get_option('home').$emotion_location.'icon_arrow.gif'; ?>" title="无语" alt="无语" /></a>
                                        <a onclick="javascript:grin(':neutral:')"><img src="<?php echo get_option('home').$emotion_location.'icon_neutral.gif'; ?>" title="亲亲" alt="亲亲" /></a>
                                        <a onclick="javascript:grin(':cry:')"><img src="<?php echo get_option('home').$emotion_location.'icon_cry.gif'; ?>" title="大哭" alt="大哭" /></a>
                                        <a onclick="javascript:grin(':mrgreen:')"><img src="<?php echo get_option('home').$emotion_location.'icon_mrgreen.gif'; ?>"title="咧嘴" alt="咧嘴" /></a>
									</div>
                                </div>
                        		<div id="commenttext-container">
                        			<textarea name="comment" id="comment" rows="" cols=""></textarea>
                                </div>
                                <input  class="submit" type="submit" class="commentsubmit" value="" />
                                <span id="submit-span">Submit</span>
                    		</div>
                            <?php comment_id_fields(); ?>
                        	<?php do_action('comment_form',$post->ID); ?>
      	 				</form>
                		<p class="cancel"><?php cancel_comment_reply_link('Cancel Reply'); ?></p>
					</div>
           		<?php else: ?>
            		<h3>Comments are now closed.</h3>
            	<?php endif; ?>
        	</div>
            