import template from './Header.html'
import './Header.scss'

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
