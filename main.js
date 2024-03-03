#! /usr/bin/env node
import {getUrlOfCommitFiles} from './git/commitProcessor.js';

let ans = await getUrlOfCommitFiles();

console.log(ans);
