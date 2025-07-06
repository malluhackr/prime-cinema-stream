<?php
/*
Plugin Name: Prime Cinema Stream
Description: A test plugin for GitHub auto-deploy.
Version: 1.0
Author: malluhackr
*/

function prime_cinema_notice() {
    echo '<div class="notice notice-success"><p>✅ Prime Cinema Stream Plugin is working!</p></div>';
}
add_action('admin_notices', 'prime_cinema_notice');
