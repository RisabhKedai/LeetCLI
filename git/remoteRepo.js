#! /usr/bin/env node 
import {exec} from 'child_process';
import {REMOTE_ORIGIN_URL} from '../constants/gitCommands.js';

let getRemoteUrl = function (){ 
	return new Promise((resolve, reject)=>{
	    var child = exec(REMOTE_ORIGIN_URL, function(err, stdout, stderr){
	        if(err != null){
	            reject(err);
	        }else if(typeof(stderr) != "string"){
	            reject(stderr);
	        }else{
	            let remoteUrl = stdout.trim();
	            if(remoteUrl.substring(remoteUrl.length-4)==='.git')
	            	remoteUrl = remoteUrl.substring(0,remoteUrl.length-4);
	            resolve(remoteUrl);
	        }
	    });
	});
}

export {getRemoteUrl};