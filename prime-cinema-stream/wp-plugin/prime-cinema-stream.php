<?php
/*
Plugin Name: Prime Cinema Stream
Description: Auto deploy test from GitHub to WordPress.
Version: 1.0
Author: malluhackr
*/

function prime_cinema_notice() {
    echo '<div class="notice notice-success"><p>✅ Prime Cinema Stream plugin is working!</p></div>';
}
add_action('admin_notices', 'prime_cinema_notice');
