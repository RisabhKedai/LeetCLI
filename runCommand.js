import {exec} from 'child_process';

var executeCommand = command => {
    return new Promise((resolve, reject)=>{
        var child = exec(command, function(err, stdout, stderr){
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

export {executeCommand};