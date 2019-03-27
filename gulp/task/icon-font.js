const gulp      = require('gulp'),
  iconfont      = require('gulp-iconfont'),
  iconfontCss   = require('gulp-iconfont-css'),
  runTimestamp  = Math.round(Date.now()/1000);


const fontName = 'iconFont';


gulp.task('iconfont', function(){
  return gulp.src(['src/iconFont/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'src/scss/_generated/_iconFont_template.scss',
      targetPath: '../scss/_generated/_spriteFont.scss',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      // prependUnicode: false,
      fontName: fontName,
      formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      normalize: true,
      fontHeight: 1000,
      timestamp: runTimestamp
    }))
    .pipe(gulp.dest('src/fonts/'));
});


gulp.task('iconfont:watch', function() {
  gulp.watch(
    'src/iconFont/*.svg',
    ['iconfont']
  );
});