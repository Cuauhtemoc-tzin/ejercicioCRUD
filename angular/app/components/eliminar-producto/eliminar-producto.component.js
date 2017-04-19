class EliminarProductoController{
    constructor(API, ToastService, $location, $rootScope){
        'ngInject';
        this.API = API;
        this.ToastService = ToastService
        this.location = $location;
        this.$index = $rootScope.index;

        
    }

    $onInit(){		
		this.API.all('producto/').get(this.$index).then((response) => {
			this.producto = response.data.producto;
		});
	}
	eliminar($index)
	{
		
		
	}
		
		
    
}

export const EliminarProductoComponent = {
    templateUrl: './views/app/components/eliminar-producto/eliminar-producto.component.html',
    controller: EliminarProductoController,
    controllerAs: 'vm',
    bindings: {}
}
