import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import '/src/styles/main.scss'

const header = Header()
header.render('header')

const footer = Footer()
footer.render('footer')
