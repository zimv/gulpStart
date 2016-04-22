var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);

gulp.task('default', gulpsync.sync(['clean', ['less', 'images', 'js'],'rev','watch']));

gulp.task('deploy', gulpsync.sync(['clean', ['less-deploy', 'imagemin', 'uglify'],'rev']));