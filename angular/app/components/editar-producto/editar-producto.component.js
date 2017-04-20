class EditarProductoController{
    constructor(API, ToastService, $location, $rootScope){
        'ngInject';
this.API = API;
        this.ToastService = ToastService
        this.location = $location;
        this.$idToEdit = $rootScope.id;
        this.$index  = $rootScope.index;
        
        this.nombre="";
        this.descripcion="";

        
    }

    $onInit(){		
		this.API.one('producto/'+this.$idToEdit).get().then((response) => {
			this.producto = response.data.producto;
			this.pro = response;
			this.nombre = this.producto.nombre;
			this.descripcion = this.producto.descripcion;
		});
	}
	
	editar(){
		if(!this.nombre||!this.descripcion){
			this.ToastService.show('No se agrego ningun producto');
			return false;
		}
		var data = {
			id: this.$idToEdit,
			nombre: this.nombre,
			descripcion: this.descripcion,
		};
		
		this.producto.nombre = this.nombre;
		this.producto.descripcion = this. descripcion;
		
		//this.ToastService.show(data);
		
		this.API.one('editProducto/'+this.$idToEdit).put(this.producto).then((response) => {
			this.ToastService.show('Producto editado');
			this.nombre="";
			this.descripcion="";
			this.location.path('/productos');
			 //this.$state.go('app.productos');
		});
	
	}
}

export const EditarProductoComponent = {
    templateUrl: './views/app/components/editar-producto/editar-producto.component.html',
    controller: EditarProductoController,
    controllerAs: 'vm',
    bindings: {}
}
