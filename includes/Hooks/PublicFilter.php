<?php
/**
 * Main ActionHooks class.
 *
 * @package TinySolutions\boilerplate
 */

namespace TinySolutions\boilerplate\Hooks;


use TinySolutions\boilerplate\Traits\SingletonTrait;

defined( 'ABSPATH' ) || exit();

/**
 * Main ActionHooks class.
 */
class PublicFilter {
	/**
	 * @var object
	 */
	protected $loader;
	/**
	 * Singleton
	 */
	use SingletonTrait;
	
	/**
	 * Class Constructor
	 */
	private function __construct() {
		$this->loader = boilerplate_main()->loader();
	}
}
