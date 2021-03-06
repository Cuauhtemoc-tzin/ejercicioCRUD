<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Producto;

class ProductosController extends Controller
{
    	public function store(Request $request)
	{
	 $this->validate($request, [
	    'nombre' => 'required|string|min:10',
	    'descripcion' => 'required|string',
	 ]);
		$producto = new Producto;
		$producto -> nombre = $request->input('nombre');
		$producto -> descripcion = $request->input('descripcion');
		$producto -> save();

		return response()->success(compact('producto'));
	}
        
	public function get()
	{
	 $productos = Producto::get();
	
	 return response()->success(['productos' => $productos]);
	  
	}
	
	public function show($id){
		$producto = Producto::find($id);
		return response()->success(['producto'=> $producto]);
}

	public function destroy($id){
		$producto = Producto::destroy($id);
		//$producto->delete();
		//return response()->success(['producto' => $producto]);
	}
	
	public function update(Request $request, $id)
	{
		$this->validate($request, [
	    'nombre' => 'required|string|min:10',
	    'descripcion' => 'required|string',
		]);
		//this.$idToEdit = $request->input('id');
		$producto = Producto::find($id);
		$producto -> nombre = $request->input('nombre');
		$producto -> descripcion = $request->input('descripcion');
		$producto -> save();

		//return response()->success(compact('producto'));
		
	}
	
}
