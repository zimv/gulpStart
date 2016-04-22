var uglify = require('gulp-uglify');
var gulp = require('gulp');
var config = require('../config').js;
var rev = require('gulp-rev');

gulp.task('uglify', function(){
	return gulp.src(config.src)
		.pipe(uglify())
		.pipe(rev())
		.pipe(gulp.dest(config.dest));
});