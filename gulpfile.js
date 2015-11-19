var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    path = require('path'),
    url = require('gulp-css-url-adjuster'),
    autoprefixer = require('autoprefixer-core'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    bemjson2html = require('gulp-bemjson2html');

var params = {
    out: 'public/',
    bemhtmlSrc: 'index.potter.bemhtml.js',
    bemjsonSrc: 'index.potter.bemjson.js',
    levels: ['common.blocks', 'potter.blocks']
},
    getFileNames = require('bemjson2bl').getFileNames(params);

gulp.task('default', ['server', 'build']);

gulp.task('build', ['html', 'css', 'images', 'js']);

gulp.task('server', function() {
    browserSync.init({
        server: params.out
    });

    gulp.watch('*.bemjson.js', ['html']);

    watch(params.levels.map(function(level) {
        return level + '/**/*.bemhtml.js';
    }), function() {
        gulp.start('html');
    });

    watch(params.levels.map(function(level) {
        return level + '/**/*.css';
    }), function() {
        gulp.start('css');
    });

    watch(params.levels.map(function(level) {
        return level + '/**/*.js';
    }).concat('!*.blocks/**/*.bemhtml.js'), function() {
        gulp.start('js');
    });
});

gulp.task('html', ['bemhtml'], function() {
    return gulp.src(params.bemjsonSrc)
        .pipe(bemjson2html({ template: params.bemhtmlSrc }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(params.out))
        .pipe(reload({ stream: true }));
});

gulp.task('bemhtml', function(done) {
    getFileNames.then(function(src) {
        gulp.src(src.dirs.map(function(dirName) {
            return path.resolve(dirName) + '/*.bemhtml.js';
        }))
        .pipe(concat(params.bemhtmlSrc))
        .pipe(gulp.dest('./'))
        .on('end', done);
    })
    .done()
});

gulp.task('css', function() {
    getFileNames.then(function(files) {
        return gulp.src(files.css)
            .pipe(concat('styles.css'))
            .pipe(url({
                prepend: 'images/'
            }))
            .pipe(postcss([ autoprefixer() ]))
            .pipe(gulp.dest(params.out))
            .pipe(reload({ stream: true }));
    })
    .done();
});

gulp.task('images', function() {
    getFileNames.then(function(src) {
        gulp.src(src.dirs.map(function(dirName) {
            var imgGlob = path.resolve(dirName) + '/*.{jpg,png,svg}';
            console.log(imgGlob);
            return imgGlob;
        }))
        .pipe(gulp.dest(path.join(params.out + '/images/')));
    })
    .done();
});

gulp.task('js', function() {
    getFileNames.then(function(src) {
        return src.dirs.map(function(dirName) {
            var jsGlob = path.resolve(dirName) + '/*.js';
            return jsGlob;
        }).concat('!*.blocks/**/*.bemhtml.js');
    })
        .then(function(jsGlobs) {
            console.log(jsGlobs);
            gulp.src(jsGlobs)
                .pipe(concat('app.js'))
                .pipe(gulp.dest(params.out))
                .pipe(reload({ stream: true }));
        })
        .done();
});
