import template from './Main.html'
import './Main.scss'

export default function Header() {
	return {
		render(selector) {
			const element = document.querySelector(selector)
			if (element) {
				element.innerHTML = template
			}
		},
	}
}
