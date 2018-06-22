const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const rewordTpl = require('./views/reword.html')


$('body').html(headerTpl+indexTpl+footerTpl)
$('#container').html(rewordTpl)


