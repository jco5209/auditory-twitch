'use strict';

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');

gulp.task("uglify", function() {
	gulp.src('public/javascripts/assets.js')
		.pipe(uglify())
		.pipe(rename('min.assets.js'))
		.pipe(gulp.dest('public/javascripts'))
});
