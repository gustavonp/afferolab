const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

async function compressBuild() {
  await imagemin(['build/static/media/*.png'], { 
    destination: 'build/static/media',
		plugins: [
			imageminPngquant({
				quality: [0.4, 0.6]
			})
		]
  });
}

exports.default = compressBuild;
