const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const CacheBuster = require("gulp-cachebust");
const concat = require("gulp-concat")
const debug = require("gulp-debug");
const del = require("del");
const gulp = require("gulp");
const runSequence = require('run-sequence');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const uglify = require('gulp-uglify');


const cachebust = new CacheBuster();

gulp.task('clean', function () {
    return del(['../dist/**', '!../dist', './src/es6', './src/js-format'], { force: true });
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
        "./node_modules/core-js/client/shim.js",
        "./src/polyfills/CustomEvents.js",
        "./node_modules/@webcomponents/template/template.js",
        "./node_modules/document-register-element/build/document-register-element.js",
        "./node_modules/@webcomponents/shadydom/shadydom.js",
        "./node_modules/@webcomponents/shadycss/apply-shim.js",
        "./node_modules/@webcomponents/shadycss/scoping-shim.js",

    ])
        .pipe(debug())
        .pipe(concat('polyfills.js'))
        .pipe(uglify())
        .pipe(cachebust.resources())
        .pipe(gulp.dest('../dist/js/'))
})

gulp.task('copy-js', function () {
    return gulp.src('src/js-format/*')
        .pipe(cachebust.resources())
        .pipe(gulp.dest('../dist/js'))
})

gulp.task('ts->es6', function () {
    return gulp.src(['src/ts/**/*.ts', '!node_modules/**/*'])
        .pipe(debug())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(tsProject())
        .pipe(sourcemaps.write('.', { sourceRoot: './', includeContent: false }))
        .pipe(gulp.dest("src/es6/"));
})

gulp.task('es6->js', function () {
    return browserify({
        entries: ['./src/es6/index.js'],
        debug: true
    })
        .transform(babelify.configure({
            plugins: [
                "transform-class-properties",
                ['transform-es2015-classes', {loose: true}],
                "transform-custom-element-classes"
            ],
            presets: [
                ["env", {
                    "targets": {
                        "browsers": [
                            "last 3 versions"
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
        .pipe(sourcemaps.init({ loadMaps: true }))
        // .pipe(uglify())
        .pipe(sourcemaps.write('.', { sourceRoot: './', includeContent: false }))
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