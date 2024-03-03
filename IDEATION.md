============== IDEATION ====================

1. Command that automatically creates 4 files upon problem code / name: 
	- Code + Notes
	- Question
	- Input
	- Output
2. Able to fetch a random problem from leet code/ fetch a problem with problem code. 
3. Automatically make the solution file with the boiler plate input code and repeated input till EOF in the input 
	3.1 write a command that takes in what are the types of input taken :
		vector 
		int
		int
		Then it just writes the boiler plate code to take the input from the inputf 
4. Auto input fetching
5. 



========================================================
Leetcode solution storage tool CLI....
This tool basically contains 2 parts:
- A template genrator
- Storage in github and google sheets.

Template generator takes the following input: 
* Problem number
* Problem type 
* Sub type
* Language

There should be a template parser as well. So that we can correctly push code to the github and make sure the template is correct

And generates the following template:
class Solution:{
};
Problem number
Problem type 
Sub type
Problem name
Optimality: Brute/ Optimal1/ Optimal2/ Optimal3
Rating: 0/1/2/3 depending on the user
Time complexity 
Space complexity
Notes

You need to fill all the details, then the second part of the tool comes in 

- Submitter / storage in github
It uses the inbuilt git cli to push the code to the repository the user has created and configured before. 
Then it takes the details the user provided in the bottom and stores the details in the google sheet in the following format:
TYPE | SUBTYPE | PROBLEM LINK | DIFFICULTY	| RATING | BRUTE | OPTIMAL 1 | OPTIMAL 2 | OPTIMAL 3 | NOTES | TAGS | DATE LAST SOLVED	

The sheet link is also configurable by the user. 

For example refer this sheet:
https://docs.google.com/spreadsheets/d/1zZrnq4WV6f_vpLYWD4iZl_-Z_lEfVoBQo0v4Gyyz-lM/edit#gid=1633279875


- Revision COntest set up.
	- Pick a 4 random problem from already solved  problems and set a timer. 
	- allows to pick which genre the problem will be 
	- after the contest is over review the problems using the data already written in the code..
- Maybe pick a more stable data base for storing the solved problems.
- A React frontent to manage it all