# Open Emoticon Web
A set of open source emoticon web fonts

## Usage

Todo: add more detailed instructions. For now, just look at
`build/fonts/` to see how to embed/use them in html/css.

## Editting

You can add/remove/edit icons in the icon folder. Any svg editor
should work. Some things to take note of: 512x512px is the nominal
size of an icon (ie make sure your svg is 512x512).

We use [grunt-webfont](https://github.com/sapegin/grunt-webfont) to
build the fonts. You can edit those properties in `gruntfile.js`. The
ones you most likely want to change are:

	icons: {
		options: {
			font: 'name-of-font',  // outputs to `name-of-font.ttf`
			templateOptions: {
				baseClass: 'blah-icon', // class applied to all icons
				classPrefix: 'blah-',   // cssprefix for each icon ie blah-x, blah-y
				mixinPrefix: 'blah-'    // mixin prefix for each icon
			}
		}
	}

### Icon Design Tips

Don't use strokes. Build the stroke as a fill by adding/subtracting
shapes. It's actually easier to control and gives you more options.

I design on a 512x512px canvas with a 16x16px grid. To simplify things
I think in terms of grid cells (I'll call those units `gc`s). I like
to center things and found that by following these rules everything is
easier:

	- things that are an odd number of `gc`s wide should have a "stroke"
	  that is also an odd number (ie a 23gc square should have a stroke
	  of 1, 3, 5gc, etc...)

	- things that are an even number of `gc`s wide should have a "stroke"
	  that is also an even number (ie a 24gc square should have a stroke
	  of 2, 4, 6gc, etc...)

To easily make things the exact size you want (let's say that's 18gc
on a 16px grid) in Inkscape set the `Grid Spacing X to 16, the Grid
Spacing Y to 16 and the 


## Building

Clone the repo:

	git clone https://github.com/ippo615/open-emoticon-web

Start the vagrant virtual machine, the first time you do this will
take longer since it has to download the image and install the
required software:

	cd /path/to/open-emoticon-web
	vagrant up

Connect to the virtual machine:

	vagrant ssh

Build the icons in the icons folder (note these commands are run from
within the virtual machine):

	cd /vagrant
	grunt

After build you can see a test page:

	cd /path/to/output
	python -m SimpleHTTPServer

## Notes

Current icons are built from the Public Domain portion of the
[DejaVu Sans font](http://dejavu-fonts.org/wiki/Main_Page). You can
get more info about the DejaVu Fonts Licence at
http://dejavu-fonts.org/wiki/Main_Page

## TODO:

 - grid alignment of svgs
