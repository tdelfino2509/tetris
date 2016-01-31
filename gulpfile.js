const gulp = require('gulp');
const jade = require('gulp-jade');

gulp.task('compile:views', function compileJade() {
	return gulp.src('index.jade')
		.pipe(jade())
		.pipe(gulp.dest('build'));
});

gulp.task('build', ['compile:views']);
gulp.task('default', ['build']);