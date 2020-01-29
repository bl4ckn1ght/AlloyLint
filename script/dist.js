/**
 * @file 编译脚本
 * @author sigmaliu
 */

const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;

const buildFunc = () => {
    fs.removeSync(path.resolve(__dirname, '../dist'));

    execSync('tsc -b tsconfig.build.json', {
        cwd: path.resolve(__dirname, '../'),
    });

    console.log(`[alloylint] ${new Date().toLocaleTimeString()}: compiler done`);
}

if (require.main === module) {
    buildFunc();
}

module.exports = {
    buildFunc,
}

