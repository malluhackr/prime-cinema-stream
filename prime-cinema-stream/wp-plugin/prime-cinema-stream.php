<?php
/*
Plugin Name: Keralaprime
Description: A simple "Hello World" plugin.
Author: prime
Version: 1.1.1
*/

function hello_world_display() {
  echo "Hello World using a template changed by Vikas 17 aug Push 1";
}

add_action( 'wp_footer', 'hello_world_display' );

