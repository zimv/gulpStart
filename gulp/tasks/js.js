var gulp = require('gulp');
var config = require('../config').js;
var rev = require('gulp-rev');

gulp.task('js', function(){
	return gulp.src(config.src)
		.pipe(rev())
		.pipe(gulp.dest(config.dest))
		.pipe(rev.manifest())
		.pipe(gulp.dest(config.rev));
});