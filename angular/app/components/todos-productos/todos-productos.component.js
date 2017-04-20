class TodosProductosController{
    constructor(API, ToastService, $location, $rootScope){
        'ngInject';
		this.location=$location;
		this.API = API;
		this.ToastService = ToastService;
		this.$rootScope = $rootScope;
    }

    $onInit(){
		this.API.all('getProductos').get('').then((response) => {
			this.productos = response.data.productos;
		});
		this.$rootScope.id = -1;
		this.$rootScope.index  = 0;
    }
    
    eliminar(id, index){

		this.$rootScope.id = id;
		this.$rootScope.index = index;
	    this.location.path('/eliminar-producto');
	}
	
	editar(id, index){
		this.$rootScope.id = id;
		this.$rootScope.index = index;
	    this.location.path('/editar-producto');
	}
		
}

export const TodosProductosComponent = {
    templateUrl: './views/app/components/todos-productos/todos-productos.component.html',
    controller: TodosProductosController,
    controllerAs: 'vm',
    bindings: {}
}
