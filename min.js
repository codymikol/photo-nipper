const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');

(async () => {

    const files = await imagemin(['./fullsize/**/*.jpg', './thumbnail/**/*.jpg'], './build/images', {
        plugins: [
            imageminJpegtran(),
            imageminJpegRecompress()
        ]
    });

    console.log(files);

})();