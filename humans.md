# humanstxt.org/
# The humans responsible & technology colophon

# TODO LIST
. compress svg file
. new nav
	. obamacare guides
	. health insurance explained
	. state page
	. blog page
. add human file to gitignore in production

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
# Table of Contents

*F
	#fonts

*G
	#grunt

*L
	#less

*P
	#png

*S
	#sprites
	#svg

# Table of Contents end





// ------------------------
//
### *F
//
// ------------------------

#FONTS

. to extend fonts you want to use on your page:
	. in your CSS, add "&:extend(x);"
	*Example*
		#about h2{
			&:extend(body h2 all);
		}





// ------------------------
//
### *G
//
// ------------------------

#GRUNT

. grunt restart for image minification
. grunt restart for sprite creation





// ------------------------
//
### *L
//
// ------------------------

#LESS

. when building new pages, create it's own folder with it's own modules
	*Example*
	aboutUs.html
	about-page[folder] 	/about-page.less
						/about-page-intro.less
						/about-page-broker.less
						/about-page-locations.less




// ------------------------
//
### *P
//
// ------------------------

#PNG Sprites

. See #SPRITES



// ------------------------
//
### *S
//
// ------------------------

#SPRITES

. to see the name of your sprite, go to file: 
	"less/less-svg-data.less" OR
	"css/sprites.css"

. add **SVG sprite** to **HTML**
	1. Add the following to an <i> tag.
		svg-X
		svg-X-dims
		*Example*
		<i class="svg-aetna svg-aetna-dims"></i>

. add **SVG sprite** to **LESS**
	1. to include sprites as pseudo element add the following to :before or :after
		.svg-pseudo();
		&:extend(.svg-icon_nameOfSVG);
		&:extend(.svg-icon_nameOfSVG-dims);
	2. Search for your SVG in "less/svg/less-svg-data.less"
	2. to resize SVG Sprites SMALLER
		background-size:x%;


. add **PNG** to **LESS**
	1. include the entire CSS of your element from the "sprites.css" file
	2. include ".png-pseudo();" to your LESS
	*Example*
	li:before{
		.png-pseudo();
		background-image: url(../img/sprite-png-post/sprite-main.png);
		background-position: 0px -460px;
		width: 56px;
		height: 55px;
	}		

. add **PNG** to **HTML**
	1. Add "sprite" class to element
	2. Look at css/sprites.css for your class name
	*Example*
	<span class="sprite carrier-united-health-one"></span>

. add **PNG** sprites
	1. Put your PNG inside "sprite-png-pre" folder
	2. Run "grunt images"
	3. Run "grunt"
	4. Find your sprite name inside "css/sprites.css"
	5. Inside the <i> tag, include "sprite [sprite-name]"
		*Example*
		<i class="sprite carrier-aetna"></i>

#SVG's

. Name your SVG specifically and as you'd like to use it in a class.
	*Example*
	Acceptable name: "company-highlights-plans"
	Unacceptable name: "icon"

. To add new SVG image to sprite
	1. add image to "img/svg-pre/"
	2. run Grunt



