var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config').less;
var handleErrors = require('../util/handleErrors');

gulp.task('less', function(){
	return gulp.src(config.src)        //less源文件
		.pipe(less(config.settings))   //执行编译
		.on('error', handleErrors)     //交给notify处理错误
		.pipe(gulp.dest(config.dest))  //输出目录
});