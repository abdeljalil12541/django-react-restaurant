function noticesHandler() {
	return {
		notices: [],
		visible: [],
		add(notice) {
			notice.id = Date.now()
			notice.animationTime = this.getAnimationTime()
			this.notices.push(notice)
			this.fire(notice)
		},
		fire(notice) {
			this.visible.push(notice)
			setTimeout(() => {
				this.remove(notice.id)
			}, notice.animationTime)
		},
		remove(id) {
			console.log(this.visible)
			const notice = this.visible.find(notice => notice.id == id)
			const index = this.visible.indexOf(notice)
			this.visible.splice(index, 1)
		},
		getAnimationTime() {
			const delta = 1
			const transitionTime = 800
			return (7000 * delta) - (transitionTime * delta)
		},
		getBgColor(type, shade) {
			return `bg-${this.getThemeColor(type)}-${shade}`
		},
		getThemeColor(type) {
			switch (type) {
				case 'success': return 'green'
				case 'warning': return 'orange'
				case 'error': return 'red'
				default: return 'blue'
			}
		},
	}
}
