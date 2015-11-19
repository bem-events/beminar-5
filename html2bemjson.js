var fs = require('fs');
var converter = require('html2bemjson');

['index', 'index.pink', 'index.potter'].forEach(function(file) {
    var html = fs.readFileSync(file + '.html', 'utf8');
    var bemjson = converter.stringify(html);

    fs.writeFile(file + '.bemjson.js', bemjson);
});
