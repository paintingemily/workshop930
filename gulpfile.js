// Hey, I'm setting variable here so I can use them later. Cool.
var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    connect     = require('gulp-connect');

gulp.task('jade', function(){
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('builds/development'))
        .pipe(connect.reload());
});

gulp.task('sass', function(){
    return gulp.src('src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('builds/development/css'))
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch('src/templates/**/*.jade', ['jade']);
    gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('connect', function(){
    connect.server({
        root: 'builds/development',
        livereload: true
    })
});

// This will run all of these tasks when I type 'gulp' in the terminal.
gulp.task('default', ['sass', 'jade', 'connect', 'watch']);
