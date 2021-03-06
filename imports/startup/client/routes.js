import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/loading/loading.js';
// Agregamos el componente de barra de navegacion
import '../../ui/pages/navegacion/navegacion.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/inicio', {
  name: 'App.inicio',
  action() {
    BlazeLayout.render('App_body', { main: 'central' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

FlowRouter.route('/contacto', {
  name: 'App.contacto',
  action() {
    BlazeLayout.render('App_body', { main: 'contacto' });
  },
});

FlowRouter.route('/conocenos', {
  name: 'App.conocenos',
  action() {
    BlazeLayout.render('App_body', { main: 'conocenos' });
  },
});
FlowRouter.route('/portal', {
  name: 'App.portal',
  action() {
    BlazeLayout.render('App_body', { main: 'portal' });
  },
});
FlowRouter.route('/ingresar', {
  name: 'App.ingresar',
  action() {
    BlazeLayout.render('App_body', { main: 'ingreso' });
  },
});


FlowRouter.route('/producto', {
  name: 'App.producto',
  action() {
    BlazeLayout.render('App_body', { main: 'producto' });
  },
});


FlowRouter.route('/producto/:id', {
  name: 'App.producto',
  triggerEnter: [ () => {
    console.log("producto inciianod");
  }],
  action( id, param ) {
    console.log(id);
    BlazeLayout.render('App_body', { main: 'producto' });
  },
});

FlowRouter.route('/orden', {
  name: 'App.orden',
  action() {
    BlazeLayout.render('App_body', { main: 'orden' });
  },
});