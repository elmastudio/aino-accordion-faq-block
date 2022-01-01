<?php
/**
 * Plugin Name:       Aino Accordion FAQ Block
 * Plugin URI:        https://ainoblocks.io/
 * Description:       Create Frequently Asked Question's and Accordions with Aino's Accordion and FAQ Block.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.1.1
 * Author:            Elma Studio
 * Author URI:        https://elmastudio.de/en/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       aino-accordion-faq-block
 *
 * @package           ainoblocks
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function ainoblocks_accordion_faq_block_block_init() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'ainoblocks_accordion_faq_block',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'ainoblocks_accordion_faq_block-editor',
		plugins_url( '/build/index.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . '/build/index.css' )
	);

	wp_register_style(
		'ainoblocks_accordion_faq_block',
		plugins_url( '/build/style-index.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . '/build/style-index.css' )
	);

	register_block_type( __DIR__ );

}
add_action( 'init', 'ainoblocks_accordion_faq_block_block_init' );


function ainoblocks_accordion_faq_block_enqueue_frontend_scripts() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/frontend.asset.php');

	wp_enqueue_script(
		'-frontend',
		plugins_url( 'build/frontend.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
}
add_action( 'wp_enqueue_scripts', 'ainoblocks_accordion_faq_block_enqueue_frontend_scripts' );
