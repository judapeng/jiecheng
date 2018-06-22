const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const homeTpl = require('./views/home.html')
const homeTpl2 = require('./views/home2.html')


$('body').html(headerTpl+indexTpl+footerTpl)
$('#container').html(homeTpl+homeTpl2)


