'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var SCSS_FOLDER = './assets/scss/**/*.scss';
var CSS_DEST = './assets/css/';

gulp.task('sass', function () {
    return gulp.src(SCSS_FOLDER)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(CSS_DEST));
});

gulp.task('watch', function () {
    gulp.watch(SCSS_FOLDER , ['sass']);
});