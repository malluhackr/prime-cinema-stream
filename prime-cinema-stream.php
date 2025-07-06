<?php
/*
Plugin Name: Prime Cinema Stream
Description: A custom plugin to stream movies from GitHub.
Version: 1.0
Author: malluhackr
*/

function prime_cinema_stream_plugin_loaded() {
    error_log("✅ Prime Cinema Stream plugin loaded.");
}
add_action('plugins_loaded', 'prime_cinema_stream_plugin_loaded');
