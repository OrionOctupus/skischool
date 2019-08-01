var gulp = require("gulp");
var sourcemap = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync').create();


var config = {
    paths: {
        scss: './src/scss/**/*.scss',
        html: './public/index.html'
    },
    output: {
        cssName: 'bundle.min.css',
        path: './public'
    },
    isDevelop: false
};

gulp.task('scss', function(done){
         gulp.src(config.paths.scss)
        .pipe(gulpIf(config.isDevelop, sourcemap.init()))
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        .pipe(gulpIf(!config.isDevelop, cleanCSS()))
        .pipe(gulpIf(config.isDevelop, sourcemap.write()))
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());

        done();
})

gulp.task('serve', function (done) {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    });

    gulp.watch(config.paths.scss, gulp.series('scss'));
    gulp.watch(config.paths.html).on('change', () =>{
        browserSync.reload();
        done();
    });

    done();
});


gulp.task('default', gulp.series('scss', 'serve'));