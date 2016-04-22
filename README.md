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
		//使用此缓存部署机制需要静态服务器设置静态资源缓存永不过期
		//Using this cache way need to set static resource cache never expired by server
	}