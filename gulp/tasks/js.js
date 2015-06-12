var gulp = require('gulp');
var config = require('../config').js;

gulp.task('js', function(){
	return gulp.src(config.src)
		.pipe(gulp.dest(config.dest));
});