var gulp = require('gulp');

gulp.task('default', ['clean'], function(){
	gulp.start('less', 'images', 'js', 'watch');
});
