<?php
/*
Plugin Name: Prime Cinema Stream
Description: A simple "Hello World" plugin.
Version: 1.0
Author: malluhackr
*/

function hello_world_display() {
  echo "Hello World using a template changed by Vikas 17 aug Push 1";
}

add_action( 'wp_footer', 'hello_world_display' );

