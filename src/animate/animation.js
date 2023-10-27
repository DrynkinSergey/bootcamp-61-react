export const slideFromButtom = {
	hidden: {
		y: 100,
		scale: 0,
		opacity: 0,
	},
	visible: {
		y: 0,
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
		scale: 0,
		y: '-200px',
		transition: {
			duration: 0.3,
		},
	},
}
export const slideFromRight = {
	hidden: {
		x: '1000px',

		opacity: 0,
	},
	visible: {
		x: 0,

		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
}
