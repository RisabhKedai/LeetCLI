import {executeCommand} from './runCommand.js';

let ans;
await executeCommand("cd ./ScrapRepo/ && git show --name-only")
.then(result=>ans=result)
.catch(error=>console.log(error));


console.log(ans);