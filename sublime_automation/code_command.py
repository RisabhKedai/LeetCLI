# -*- coding: utf-8 -*-
# @Author: lenovo
# @Date:   2023-09-23 23:25:43
# @Last Modified by:   lenovo
# @Last Modified time: 2023-09-23 23:45:29
#!/usr/bin/env python

import sys
import os
import subprocess

def create_folder_and_files(folder_name):
	try:
		os.mkdir(folder_name)
		os.chdir(folder_name)
		open("inputf.in", "w").close()
		open("outputf.in", "w").close()
		return True
	except Exception as e:
		print(f"Error: {e}")
		return False

def main():
	print(sys.argv)
	if len(sys.argv) != 2:
		print("Usage: createfolder.py <folder_name>")
	else:
		folder_name = sys.argv[1]
		if create_folder_and_files(folder_name):
			subprocess.Popen(["subl", "-n", "-a", folder_name])
			subprocess.Popen(["subl", os.path.join(folder_name, "inputf.in")])
			subprocess.Popen(["subl", os.path.join(folder_name, "outputf.in")])

if __name__ == "__main__":
	main()
