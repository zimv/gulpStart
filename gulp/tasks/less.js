var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config').less;

gulp.task('less', function(){
	return gulp.src(config.src)        //less源文件
		.pipe(less(config.settings))   //执行编译
		.pipe(gulp.dest(config.dest))  //输出目录
});