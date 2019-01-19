const fs = require('fs');
const path = require('path');
const jimp = require('jimp');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');

let usrDirsPath = './photos';

let userDirectories = fs.readdirSync(usrDirsPath);

userDirectories.forEach(function (dir) {

    let files = fs.readdirSync(path.join(usrDirsPath, dir));

    files.forEach(function (file) {

        console.log('preparing:', dir, ':', file);

        jimp.read(path.join(usrDirsPath, dir, file), (err, img) => {
            if(err) throw err;
            img
                .write(path.join('fullsize', dir, 'full-' + file.split('.')[0] + '.jpg'));
            console.log('wrote: ', file)
        });

        jimp.read(path.join(usrDirsPath, dir, file), (err, img) => {
            if(err) throw err;
            img
                .scaleToFit(256, 256)
                .quality(60)
                .write(path.join('thumbnail', dir, 'thumb-' + file.split('.')[0] + '.jpg'));
            console.log('wrote: ', file)
        });
    });
});

console.log('done!');

