class CrearFormularioProductoController{
    constructor(API, ToastService, $state, $location){
        'ngInject';

     this.API = API;
     this.ToastService = ToastService;
     this.location= $location;
     //this.$state= $state;
     
     this.nombre = '';
     this.descripcion = '';
     
     
    }
    
    submit(){
		if(!this.nombre||!this.descripcion){
			this.ToastService.show('No se agrego ningun producto');
			return false;
		}
		var data = {
			nombre: this.nombre,
			descripcion: this.descripcion,
		};
		
		this.API.all('addproducto').post(data).then((response) => {
			this.ToastService.show('Producto agregado satisfactoriamente');
			this.nombre="";
			this.descripcion="";
			this.location.path('/productos');
			 //this.$state.go('app.productos');
		});
	}

    $onInit(){
    }
}

export const CrearFormularioProductoComponent = {
    templateUrl: './views/app/components/crear_formulario_producto/crear_formulario_producto.component.html',
    controller: CrearFormularioProductoController,
    controllerAs: 'vm',
    bindings: {}
}
