class CreateProductFormController{
    constructor(API, ToastService){
        'ngInject';
	
	this.API = API
	this.ToastService = ToastService;
	    
	this.name='';
	this.details='';
        //
    }

    submit(){
	if ( !this.name || !this.details){
		return false;
	}
	
	var data = {
		name: this.name,
		details: this.details,
	};
	
	this.API.all('products').post(data).then((response) => {
		this.ToastService.show('Producto agregado');
		this.name = '';
		this.details = '';
	});
    }
}

export const CreateProductFormComponent = {
    templateUrl: './views/app/components/create_product_form/create_product_form.component.html',
    controller: CreateProductFormController,
    controllerAs: 'vm',
    bindings: {}
}
