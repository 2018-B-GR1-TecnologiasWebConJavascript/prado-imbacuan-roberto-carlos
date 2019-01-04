/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'db_usuario',

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    apellido: {
      type: 'string',
      required: true
    },
    direccionCasa: {
      type: 'string',
      columnName: 'direccion_casa'
    },
    cedula: {
      type: 'string',
      required: true,
      unique: true
    },
    sueldo: {
      type: 'number',
      defaultsTo: 394.00
    },
    correoElectronico: {
      type: 'string',
      columnName: 'correo_electronico',
      isEmail: true
    },
    numeroPropiedades: {
      type: 'number',
      max: 5,
      min: 0,
      defaultsTo: 0,
      columnName: 'numero_propiedades'
    },
    estado: {
      type: 'string',
      defaultsTo: true,
      isIn: ['Admin', 'Usuario', 'Reporte'],
      defaultsTo: 'Usuario'
    }
    //   ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    // ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

