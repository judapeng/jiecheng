/**
  gulp完成的任务：
  1、启动webserver
  2、编译sass, less
  3、CommonJS模块化
  4、Mock数据
  5、在Gulp里应用babel
 */

const gulp = require('gulp')

const server = require('gulp-webserver')

const sass = require('gulp-sass')

const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

const babel = require('gulp-babel')

const watch = require('gulp-watch')

gulp.task('server', () => {
  return gulp.src('./dev')
    .pipe(server({
      host: 'localhost',
      port: 8000,
      livereload: true,
      directoryListing: {
        enable: true,
        path: './dev'
      },
     
    }))
})

gulp.task('scss', () => {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dev/styles'))
})

gulp.task('js', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(webpack({
      entry: {
        app: './src/scripts/app.js',
        // 'app-more': './src/scripts/app-more.js',
        // 'app-mine': './src/scripts/app-mine.js',
      },
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [
          { test: /\.html$/, loader: 'string-loader' },
        ],
      }
    }))
    // .pipe(babel({
    //   presets: ['env', 'stage-0']
    // }))
    .pipe(gulp.dest('./dev/scripts'))
})

gulp.task('copyhtml', () => {
  return gulp.src(['./*.html'])
    .pipe(gulp.dest('./dev/'))
})
gulp.task('copyimg', () => {
  return gulp.src(['./src/images/**/*'])
    .pipe(gulp.dest('./dev/imges'))
})


gulp.task('copylibs', () => {
  return gulp.src(['./src/libs/*.js'])
    .pipe(gulp.dest('./dev/libs'))
})

gulp.task('copyicon', () => {
  return gulp.src(['./src/iconfonts/**/*'])
    .pipe(gulp.dest('./dev/iconfonts'))
})


gulp.task('watch', () => {
  // gulp.watch('./*.html', ['copyhtml'])
  // gulp.watch('./src/styles/**/*', ['scss'])
  // gulp.watch('./src/scripts/**/*', ['js'])

  watch('./*.html', () => {
    gulp.start('copyhtml')
  })
  watch('./src/styles/**/*', () => {
    gulp.start('scss')
  })
  watch('./src/scripts/**/*', () => {
    gulp.start('js')
  })
})

gulp.task('default', ['js', 'scss', 'copyimg','copyhtml', 'copylibs' ,'copyicon','server', 'watch'], () => {
  console.log('done.');
})
