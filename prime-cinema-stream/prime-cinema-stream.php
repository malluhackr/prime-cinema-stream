<?php
/*
Plugin Name: Prime Cinema Stream
Description: A test plugin from GitHub using WP Pusher.
Version: 2.0
Author: malluhackr
*/

function prime_cinema_notice() {
    echo '<div class="notice notice-success"><p>✅ Prime Cinema Stream Plugin is working!</p></div>';
}
add_action('admin_notices', 'prime_cinema_notice');
