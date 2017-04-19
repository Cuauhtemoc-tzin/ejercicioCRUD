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
		this.$rootScope.index = -1;
    }
    
    eliminar(index){

		//this.ToastService.show(index);
		this.$rootScope.index = index;
	    this.location.path('/eliminar-producto');
	}
		
}

export const TodosProductosComponent = {
    templateUrl: './views/app/components/todos-productos/todos-productos.component.html',
    controller: TodosProductosController,
    controllerAs: 'vm',
    bindings: {}
}
