#!/bin/bash

if [ $# == 0 ]; then
	echo "Enter folder name"
else 
	mkdir $1
	cd $1
	touch "inputf.in"
	touch "outputf.in"
	cd ..
	subl -n -a $1
	subl "$1/inputf.in"
	subl "$1/outputf.in"
fi