import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import '/src/styles/app.scss'

const header = Header()
header.render('header')

const main = Main()
main.render('main')

const footer = Footer()
footer.render('footer')
