#!/bin/bash

if [ $((1)) == "" ]; then
	echo "Enter folder name"
else 
	mkdir $1
	cd $1
	touch inputf.in
	touch outputf.in
	cd "../"
fi