const NAV = require('./nav.js')
const SIDEBAR = require('./sidebar.js')
module.exports = {
    base:"/blog/",
	title: 'fy旺仔',
	themeConfig: {
		lastUpdated: '更新时间',
		sidebar: 'auto',
		sidebar: SIDEBAR,
		nav: NAV,
	},
}
