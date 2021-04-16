<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u198438302_wp_comerzia' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'c0merz1a*' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3I2}eD [V$/L{lK++&~JLKPI!7051RA/UHNhpy1:6?q7]Lrls5N77E:hn3Qi+k7+' );
define( 'SECURE_AUTH_KEY',  '=Snk2B%t/CAZno`2lWO5m3^&&)4K9Xn8E81n;vHpFi`3[!mOhuC36,.2<CiJB>y}' );
define( 'LOGGED_IN_KEY',    '.6BS+1cr%N~Ba1kzZ7?OVq{6N<d~PxKjZDntiJ4B:!G#1G<iqLi>!?.=Cs5/jIUX' );
define( 'NONCE_KEY',        '[kk)POr2CN0wR=6TELknEpx)zYIPY&tNvn32/^E@X|LC7`-4_]|`%HXXOSzwc.sT' );
define( 'AUTH_SALT',        'x+Yn{mRG>l9]|_65S)PF1yse0} 2Q,6n1LYMyW;1|m->.$)vl5:P6Zf9@EJ4x]U_' );
define( 'SECURE_AUTH_SALT', '{=[uiZAO0?FNdb8}a6i8s?Fo;R0a*tB|N==s?E5?{IxM?nGGu5[Wy1}.$Kjw7l^8' );
define( 'LOGGED_IN_SALT',   'd4$X5xo:udxX-3O+?Q_6l-#0|<Ta!1Xzut~Cha|;kt6lW6_4P2N5,nloC2cl_{=6' );
define( 'NONCE_SALT',       '%S6c]LVUV0]`Fa{1$O&yZW$W2uc;55LjB+U65^L4)~OX_i#g+~5?WGDQ5-tE<cg;' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_cmz_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
