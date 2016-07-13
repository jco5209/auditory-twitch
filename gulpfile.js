'use strict';

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css');

gulp.task("uglify", function() {
	gulp.src('public/javascripts/assets.js')
		.pipe(uglify())
		.pipe(rename('min.assets.js'))
		.pipe(gulp.dest('public/javascripts'))
});

gulp.task("cleanCSS", function() {
	gulp.src('public/stylesheets/style.css')
		.pipe(cleanCSS())
		.pipe(rename('min.style.css'))
		.pipe(gulp.dest('public/stylesheets'))
});


