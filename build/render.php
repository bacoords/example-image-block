<?php
/**
 * Block render callback.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 *
 * @package wpdev
 */

?>

<div <?php echo get_block_wrapper_attributes(); ?> tabindex="0">
	<?php
	if ( $attributes['foregroundImage'] ) {
		echo wp_get_attachment_image( $attributes['foregroundImage'], 'full' );
	}
	if ( $attributes['backgroundImage'] ) {
		echo wp_get_attachment_image( $attributes['backgroundImage'], 'full' );
	}
	?>
</div>
