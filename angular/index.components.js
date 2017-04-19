import {EliminarProductoComponent} from './app/components/eliminar-producto/eliminar-producto.component';
import {TodosProductosComponent} from './app/components/todos-productos/todos-productos.component';
import {CrearFormularioProductoComponent} from './app/components/crear_formulario_producto/crear_formulario_producto.component';
import {CreateProductFormComponent} from './app/components/create_product_form/create_product_form.component';
import {AppHeaderComponent} from './app/components/app-header/app-header.component';
import {AppRootComponent} from './app/components/app-root/app-root.component';
import {AppShellComponent} from './app/components/app-shell/app-shell.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';

angular.module('app.components')
	.component('eliminarProducto', EliminarProductoComponent)
	.component('todosProductos', TodosProductosComponent)
	.component('crearFormularioProducto', CrearFormularioProductoComponent)
	.component('createProductForm', CreateProductFormComponent)
	.component('appHeader', AppHeaderComponent)
	.component('appRoot', AppRootComponent)
	.component('appShell', AppShellComponent)
	.component('resetPassword', ResetPasswordComponent)
	.component('forgotPassword', ForgotPasswordComponent)
	.component('loginForm', LoginFormComponent)
	.component('registerForm', RegisterFormComponent);

