/* gulp命令会由gulpfile.js运行，所以src和build文件夹路径如下（根目录下） */
var src = './src';     
var dest = './build';  

module.exports = {
	less: {
		all: src + "/less/**/*.less", //所有less
		src: src + "/less/*.less",	  //需要编译的less
		dest: dest + "/css",		  //输出目录
		settings: {					  //编译less过程需要的配置，可以为空

		}
	},
	images: {
		src: src + "/img/**/*",	  
		dest: dest + "/img"
	},
	js: {
		src: src + "/js/**/*",
		dest: dest + "/js"
	}
}