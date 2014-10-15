# humanstxt.org/
# The humans responsible & technology colophon

# TODO LIST
. compress svg file

# Notes
	Use as a references: 
		http://html.iwthemes.com/jekas/run/

		https://www.zendesk.com/product/tour

		grey color: #E9E9E9 - move up by 1 number
		
		tasks: use skrollr (https://github.com/Prinzhorn/skrollr):
				1.to make planselection numbers to start rotating after scrolling down to the that section
				2.animated arrow on the "lower your cost" section, just like here: https://www.zendesk.com/modernize
				3.arm rotation for the GI dude on the same page - on scroll
				4.move dude with the cart slightly when scrolling.

# Dev Notes in ABC Order


// ------------------------
//
### *G
//
// ------------------------

# GRUNT

. grunt restart for image minification
. grunt restart for sprite creation


// ------------------------
//
### *S
//
// ------------------------

# SPRITES

. to include sprites as pseudo element add the following to :before or :after
	.svg-pseudo();
	&:extend(.svg-icon_nameOfSVG);
	&:extend(.svg-icon_nameOfSVG-dims);

. to resize SVG Sprites
	background-size:x%;
