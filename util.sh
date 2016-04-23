#!/usr/bin/env bash

function mv_lower {
	lowercase=$( echo "$1" | tr [:upper:] [:lower:] )
	mv "$1" "$lowercase"
	echo "$lowercase"
}

function mv_space {
	name=$( echo "$1" | tr ' ~`!@#$%^&*=|(){}[]<>?",' '-' )
	mv "$1" "$name"
	echo "$name"
}

# --------------------------------------------------------------------
#                                                               Main
# --------------------------------------------------------------------

# ------------------------------------------------------------ Input -
directory='icons'

# ----------------------------------------------------------- Action -

IFS='
'
for file in $(find "$directory" | sed '1d'); do
	mv_space $(mv_lower "$file")
done;
