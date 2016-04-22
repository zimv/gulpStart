need to exec : npm install -g gulp

##分支的搭建顺序(Branches set up order):
	* less
	* notify
	* imagemin
	* uglify
	* clean
	* rev {
		add: gulp-rev,gulp-rev-collector,gulp-sync
		"deploy" and "default" tasks combined into combo.js
	}