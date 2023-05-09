<?php
/**
 * Block render callback.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 * @param WP_Block $block The block object.
 *
 * @package double-image
 */
?>

<div <?php echo get_block_wrapper_attributes(); ?> tabindex="0">
	<?php
	if ( $attributes['imageOne'] ) {
		echo wp_get_attachment_image( $attributes['imageOne'], 'full' );
	}
	if ( $attributes['imageTwo'] ) {
		echo wp_get_attachment_image( $attributes['imageTwo'], 'full' );
	}
	?>
</div>
