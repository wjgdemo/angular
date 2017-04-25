//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
  sass = require('gulp-sass');

//定义一个testSass任务（自定义任务名称）
gulp.task('sass', function () {
  gulp.src('src/sass/*.sass') //该任务针对的文件
    .pipe(sass()) //该任务调用的模块
    .pipe(gulp.dest('src/css')) //将会在src/css下生成index.css
    .pipe(gulp.dest('dist/css'));
});

gulp.task('img',function () {
  gulp.src('src/img/*.*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('js',function () {
  gulp.src('src/js/*.*')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('lib',function () {
  gulp.src('src/lib/*')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('default',['sass','img','lib','js']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
