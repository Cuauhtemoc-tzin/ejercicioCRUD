class EliminarProductoController{
    constructor(API, ToastService, $location, $rootScope){
        'ngInject';
        this.API = API;
        this.ToastService = ToastService
        this.location = $location;
        this.$idToDel = $rootScope.id;
        this.$index  = $rootScope.index;

        
    }

    $onInit(){		
		this.API.all('producto/').get(this.$idToDel).then((response) => {
			this.producto = response.data.producto;
		});
	}
	
	eliminar()
	{
		//this.$indexToDel = $indexToDel;
		//this.ToastService.show(this.$indexToDel);
		if(confirm('Seguro desea elimiar el producto?')){
		this.API.all('delproducto/'+this.$idToDel).remove().then((response) => {
		 	this.ToastService.show('Producto eliminado');
		 	this.location.path('/productos');
		});
		}
	}
		
		
    
}

export const EliminarProductoComponent = {
    templateUrl: './views/app/components/eliminar-producto/eliminar-producto.component.html',
    controller: EliminarProductoController,
    controllerAs: 'vm',
    bindings: {}
}
