const babelify = require('babelify');
const browserify = require('browserify');
var buffer = require('vinyl-buffer');
const CacheBuster = require("gulp-cachebust");
const concat = require("gulp-concat")
const debug = require("gulp-debug");
const del = require("del");
const gulp = require("gulp");
var runSequence = require('run-sequence');
var source = require('vinyl-source-stream');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
const uglify = require('gulp-uglify');


const cachebust = new CacheBuster();

gulp.task('clean', function () {
    return del(['../dist/**', '!../dist'], { force: true });
});

gulp.task('copy-html', function () {
    return gulp.src('./*.html')
        .pipe(debug())
        .pipe(cachebust.references())
        .pipe(gulp.dest('../dist/'))
})

gulp.task('copy-css', function () {
    return gulp.src('./css/*.css')
        .pipe(cachebust.resources())
        .pipe(gulp.dest('../dist/css/'))
})

gulp.task('copy-static', function () {
    return gulp.src('./img/*')
        .pipe(cachebust.resources())
        .pipe(gulp.dest('../dist/img/'))
})

gulp.task('copy-polyfills', function () {
    return gulp.src([
        "./src/polyfills/*",
        "./node_modules/es5-shim/es5-shim.min.js",
        "./node_modules/es6-shim/es6-shim.min.js"
    ])
    .pipe(concat('polyfills.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../dist/js/'))
})

gulp.task('copy-js', function () {
    return gulp.src('src/js-format/*')
        .pipe(cachebust.resources())
        .pipe(gulp.dest('../dist/js'))
})

gulp.task('ts->es6', function () {
    return gulp.src('src/ts/**/*.ts')
        .pipe(debug())
        .pipe(tsProject())
        .pipe(gulp.dest("src/es6/"));
})

gulp.task('es6->js', function () {
    return browserify({
        entries: ['./src/es6/index.js'],
        debug: true
    })
        .transform(babelify.configure({
            presets: [
                ["env", {
                    "targets": {
                        "browsers": [
                            "last 3 versions",
                            "safari >= 7",
                            "ie >= 9"
                        ]
                    }
                }]
            ],
            sourceMaps: true,
            sourceMapsAbsolute: true
        }))
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        // .pipe(uglify())
        .pipe(gulp.dest('src/js-format'))
})

gulp.task('compile-ts', function (done) {
    return runSequence('ts->es6', 'es6->js', 'copy-js', function () {
        done()
    })
})

gulp.task('copy-deps', function (done) {
    return runSequence('copy-css', 'copy-static', 'copy-polyfills', function () {
        done()
    })
})

gulp.task('build', function (done) {
    return runSequence('clean', 'copy-deps', 'compile-ts', 'copy-html', function () {
        done()
    })
})

gulp.task('watch', function () {
    gulp.watch(['./**/*.ts', './**/*.css', './**/*.html'], ['build'])
})