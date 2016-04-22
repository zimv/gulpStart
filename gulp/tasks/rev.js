var gulp = require('gulp');
var config = require('../config').rev;
var rev = require('gulp-rev');
var revCollector = require("gulp-rev-collector");

gulp.task('rev', function () {
    return gulp.src([config.revJson, config.src])
        .pipe( revCollector({
            replaceReved: true,
        }) )
        .pipe( gulp.dest(config.dest) );
});