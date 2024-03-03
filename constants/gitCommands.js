#! /usr/bin/env node 
const REMOTE_ORIGIN_URL = "git remote get-url origin";
const FILES_CHANGED_IN_COMMIT = "git show --name-only";


export {REMOTE_ORIGIN_URL,FILES_CHANGED_IN_COMMIT};