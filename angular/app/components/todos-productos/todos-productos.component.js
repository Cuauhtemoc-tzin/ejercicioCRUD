class TodosProductosController{
    constructor(API, ToastService){
        'ngInject';
		
		this.API = API;
		this.ToastService = ToastService;
    }

    $onInit(){
		this.API.all('getProductos').get('').then((response) => {
			this.productos = response.data.productos;
		});
    }
    
    eliminar(){
		this.ToastService.show('En proceso');
	}
		
}

export const TodosProductosComponent = {
    templateUrl: './views/app/components/todos-productos/todos-productos.component.html',
    controller: TodosProductosController,
    controllerAs: 'vm',
    bindings: {}
}
