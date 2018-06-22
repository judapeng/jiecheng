const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const logonTpl = require('./views/logon.html')


$('body').html(headerTpl+indexTpl+footerTpl)
$('#container').html(logonTpl)


