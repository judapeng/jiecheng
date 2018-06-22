const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const shoplistTpl = require('./views/shoplist.html')


$('body').html(headerTpl+indexTpl+footerTpl)
$('#container').html(shoplistTpl)


