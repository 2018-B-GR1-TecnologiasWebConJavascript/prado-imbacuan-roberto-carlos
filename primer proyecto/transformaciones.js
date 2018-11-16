var require, module;
var Table = require('easy-table');
var Transformaciones = {};
Transformaciones['jsonAtexto'] = (contenido) => {
    const keys = Object.keys(contenido);
    let linea = "";
    keys.forEach((key, i) => {
        linea += contenido[key];
        if (i < (keys.length - 1)) {
            linea += ",";
        }
    });
    return linea + "\r\n";
};
Transformaciones['textTojson'] = (contenido) => {
    const partes = contenido.split(',');
    const keys = ['brand', 'model', 'year', 'color', 'price', 'status', 'id'];
    const obj = {};
    keys.forEach((value, index) => {
        try {
            obj[value] = partes[index].replace('\r\n', '');
        }
        catch (e) {
            obj[value] = null;
        }
    });
    return obj;
};
Transformaciones['listToTable'] = (lista) => {
    const t = new Table;
    lista.forEach((item) => {
        t.cell('ID', item.id);
        t.cell('Marca', item.brand);
        t.cell('Modelo', item.model);
        t.cell('Año', item.year);
        t.cell('Color', item.color);
        t.cell('Precio', item.price);
        if (typeof item.status === "undefined" || item.status === null) {
            t.cell('Estado', "No definido");
        }
        else {
            t.cell('Estado', item.status);
        }
        t.newRow();
    });
    return t;
};
Transformaciones['textToList'] = (texto) => {
    const lista = texto.split('\r\n');
    const autos = [];
    lista.forEach((linea) => {
        if (linea.length > 0) {
            autos.push(Transformaciones['textTojson'](linea));
        }
    });
    return autos;
};
Transformaciones['listToText'] = (lista) => {
    let texto = "";
    lista.forEach((item) => {
        const linea = Transformaciones['jsonAtexto'](item);
        texto += linea;
    });
    return texto;
};
Transformaciones['keyEnToEsp'] = (key) => {
    let nueva_key = "";
    switch (key) {
        case 'Marca':
            nueva_key = 'brand';
            break;
        case 'Modelo':
            nueva_key = 'model';
            break;
        case 'Año':
            nueva_key = 'year';
            break;
        case 'Color':
            nueva_key = 'color';
            break;
        case 'Precio':
            nueva_key = 'price';
            break;
        case 'Estado':
            nueva_key = 'status';
            break;
    }
    console.log('nk', nueva_key);
    return nueva_key;
};
module.exports = Transformaciones;
