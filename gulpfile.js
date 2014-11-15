var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    gulp.src('./src/js/main.js')
        .pipe(browserify(require('./browserify.json')))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function() {
    //gulp.watch('./src/scss/**/*.scss', ['scss']);
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('default', ['js', 'watch']);
