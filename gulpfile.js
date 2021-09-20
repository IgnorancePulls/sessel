'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

var SCSS_FOLDER = './assets/scss/**/*.scss';
var CSS_DEST = './assets/css/';

function buildStyles() {
    return gulp.src(SCSS_FOLDER)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(CSS_DEST));
};

function watch() {
    return gulp.watch(SCSS_FOLDER, gulp.series(buildStyles));
};

exports.buildStyles = buildStyles;
exports.watch = watch;
