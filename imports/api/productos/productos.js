// Definition of the productos collection

import { Mongo } from 'meteor/mongo';

// base de datos local
export const Productos = new Mongo.Collection('productos');
