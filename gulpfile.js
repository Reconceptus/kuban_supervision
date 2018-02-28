var gulp = require('gulp'),
    notify = require('gulp-notify'),
    imagemin = require('gulp-imagemin'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
    cssmin = require('gulp-cssmin'),
    newer = require('gulp-newer'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync');

var postcss = require('gulp-postcss'),
    autoprefix = require('autoprefixer'),
    stylefmt = require('stylefmt'),
    configFmt = require('./stylefmt.config'),
    mqpacker = require('css-mqpacker');


/* minimize images */

gulp.task('img', function () {
    gulp.src('src/images/**/*.+(jpg|jpeg|png|gif)')
        .pipe(newer('build/images'))
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5
        }))
        .pipe(gulp.dest('build/images'))
        .pipe(browserSync.reload({stream: true}));
});

/* font */

gulp.task('font', function(){
    gulp.src(['src/fonts/*.*'])
        .pipe(gulp.dest('build/fonts'))
});

/* svg */

gulp.task('svg', function(){
    gulp.src(['src/svg/*.*'])
        .pipe(gulp.dest('build/svg'))
});

/* media */

gulp.task('media', function(){
    gulp.src(['src/media/*.*'])
        .pipe(gulp.dest('build/media'))
});

/* js */

gulp.task('js', function(){
    gulp.src(['src/js/*.*'])
        .pipe(gulp.dest('build/js'))
        .pipe(browserSync.reload({stream: true}));
});


/* browser sync */

gulp.task('browser-sync',function () {
    browserSync({
        server: '',
        host: 'localhost',
        browser: 'chrome',
        port: 4444,
        notify: false
    })

});



/* all styles optimize */

gulp.task('reload', function () {
    gulp.src(['*.*'])
        .pipe(browserSync.reload({stream: true}))

});

/* all styles optimize */

gulp.task('optimize:styles', function () {
    gulp.src('src/sass/**/*.+(sass|scss)')
        .pipe( sass({
                outputStyle:'expanded'
            }).on( 'error', notify.onError(
            {
                message: "<%= error.message %>",
                title  : "Sass ошибка!"
            } ) )
        )
        .pipe(sourcemaps.init())
        .pipe(
            postcss([
                autoprefix({
                    browsers:['>2%']
                })
            ])
        )
        .pipe(autoprefixer({
            browsers: ['last 10 versions']
        }))

        .pipe( gulp.dest( 'src/css' ) )
        .pipe( notify( 'Готово!' ) )
        .on('finish',function () {
            gulp.src('src/css/styles.css')
                .pipe(
                    postcss([
                        mqpacker(),
                        stylefmt(configFmt)
                    ])
                )
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('build/css'))
                .pipe(cssmin())
                .pipe(rename({suffix: '.min'}))
                .pipe(gulp.dest('build/css'))
                .pipe(browserSync.reload({stream: true}));
        });
});


/* watch changes */

gulp.task('watch', ['optimize:styles', 'js', 'browser-sync'], function () {
    gulp.watch('src/sass/**/*.+(sass|scss)',['optimize:styles']);
    gulp.watch('*.html', ['reload']);
    gulp.watch('src/js/**/*.js', ['js']);
});

/* dafault tasks */

gulp.task('default',function () {
    gulp.run('watch');
});
