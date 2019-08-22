//封装操作localStorage本地存储的方法
var storage = {
	set (list, value) {
		localStorage.setItem(list, JSON.stringify(value))
	},
	get (list) {
		return JSON.parse(localStorage.getItem(list))
	},
	remove (list) {
		localStorage.removeItem(list)
	}
}
export default storage;