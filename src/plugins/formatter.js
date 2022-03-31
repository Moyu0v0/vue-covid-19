export default {
	// 格式化日期
	getDate(date) {
		let time = new Date(date)
		let year = time.getFullYear()
		let month = time.getMonth() + 1
		month = month < 10 ? '0' + month : month
		let day = time.getDate()
		day = day < 10 ? '0' + day : day
		let hours = time.getHours()
		hours = hours < 10 ? '0' + hours : hours
		let minutes = time.getMinutes()
		minutes = minutes < 10 ? '0' + minutes : minutes
		let seconds = time.getSeconds()
		seconds = seconds < 10 ? '0' + seconds : seconds
		return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
	},
	// 较昨日数据 如果大于0 添加一个加号
	plus(num) {
		num = num >= 0 ? '+' + num : num
		return this.separator(num)
	},
	// 千位分隔符
	separator(num) {
		return (num + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
	},
}
