<?php

namespace TinySolutions\ANCENTER\Register;

use TinySolutions\ANCENTER\Abs\CustomPostType;

class Teammembers extends CustomPostType {
	public function initposttype() {
		$this->register_post_type();
	}
	// must use
	function set_post_type_name() {
		return 'Team Member';
	}
}
