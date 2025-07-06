<?php
/*
Plugin Name: Prime Cinema Stream
Description: A test plugin from GitHub for WP Pusher.
Version: 1.0
Author: malluhackr
*/

function prime_cinema_notice() {
    echo '<div class="notice notice-success"><p>✅ Prime Cinema Stream plugin is working!</p></div>';
}
add_action('admin_notices', 'prime_cinema_notice');
