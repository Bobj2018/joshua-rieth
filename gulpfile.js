// Gulp
const { dest, src, task, series, watch } = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

//PostCSS
const tailwindcss = require('tailwindcss');
const atimport = require('postcss-import');
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// Common Routes
const TAILWIND_CONFIG = './tailwind.config.js';
const SOURCE_STYLESHEET = './src/css/tailwind.src.css';
const DESTINATION_STYLESHEET = './src/css';

task('build:css', () => {
	return src(SOURCE_STYLESHEET)
		.pipe(
			postcss([
				atimport(),
				tailwindcss(TAILWIND_CONFIG),
				...(process.env.NODE_ENV === 'production'
					? purgecss({
							content: ['src/**/*.js', 'src/**/*.jsx', 'public/index.html'],
							defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
							whitelist: ['body', 'html', 'img', 'video', 'iframe'],
					  })
					: []),
				autoprefixer(),
				cssnano({ preset: 'default' }),
			])
		)
		.pipe(rename('tailwind.css'))
		.pipe(dest(DESTINATION_STYLESHEET));
});

task('watch', () => {
	watch('src/**/*.js', series('build:css'));
});

task('default', series('build:css', 'watch'));
