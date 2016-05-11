var gulp = require('gulp');
var config = require('../config').rev;
var rev = require('gulp-rev');
var revCollector = require("gulp-rev-collector");
/*
	实际上这个任务应该叫rev-collector，
	此任务主要是把之前在less和js管道rev()输出的rev.json，和html相匹配
	使html静态资源的文件名路径能够和当前加上md5后缀的文件匹配
*/
gulp.task('rev', function () {
    return gulp.src([config.revJson, config.src])
        .pipe( revCollector({
            replaceReved: true,
        }) )
        .pipe( gulp.dest(config.dest) );
});