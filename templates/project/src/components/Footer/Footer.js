import template from './Footer.html'
import './Footer.scss'

export default function Header() {
	return {
		render(selector) {
			const element = document.querySelector(selector)
			if (element) {
				element.outerHTML = template
			}
		},
	}
}
