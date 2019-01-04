/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  buscarPorNombre: async function (req, res) {
    // Teber acceso a todos los modelos
    var nombre = await Raza.find({
      nombre: 'Cac'
    });
    return req.ok(nombre);
  }
};

