#! /usr/bin/env node 
import {exec} from 'child_process';
import {getRemoteUrl} from './remoteRepo.js';
import {FILES_CHANGED_IN_COMMIT}  from '../constants/gitCommands.js';

let getCommittedFiles = function (){ 
	return new Promise((resolve, reject)=>{
	    var child = exec(FILES_CHANGED_IN_COMMIT, function(err, stdout, stderr){
	        if(err != null){
	            reject(err);
	        }else if(typeof(stderr) != "string"){
	            reject(stderr);
	        }else{
	            let files = stdout.split('\n').filter(item=>item.trim()!=='').slice(4);
	            resolve(files);
	        }
	    });
	});
}

let getUrlOfCommitFiles = async function () {
	let remoteUrl;
	let commitedFiles;

	await getRemoteUrl()
	.then(result=>remoteUrl=result)
	.catch(error=>console.log(error));
	await getCommittedFiles()
	.then(result=>commitedFiles=result)
	.catch(error=>console.log(error));
	let Urls = commitedFiles.map(function(element, index) {
		return remoteUrl + element;
	});;
	return Urls
}

export {getCommittedFiles, getUrlOfCommitFiles};