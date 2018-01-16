var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');


// var paths = {
// 	distDev: 'dev',
// 	distProd: 'prod',
// 	styles: '/'
// } 

// gulp.task('html', function () {
// 	return gulp.src('dev/index.html')
// 			.pipe(gulp.dest('prod/index.html'))
// });

gulp.task('style', function () {
	return gulp.src('dev/scss/**/*.scss')
			.pipe(sass())
			.pipe(concat('main.css'))
			.pipe(cleanCss())
			.pipe(gulp.dest('css/'))
			.pipe(browserSync.stream())
});

gulp.task('sripts', function () {
	return gulp.src('dev/js/**/*.js')

			.pipe(gulp.dest('js/'))
});

gulp.task('watch',['style'], function () {
	browserSync.init({
		server:'./'
	});

	gulp.watch('dev/scss/**/*.scss',['style']);
	gulp.watch('*.html').on('change',browserSync.reload);

});

gulp.task('default', ['watch']);