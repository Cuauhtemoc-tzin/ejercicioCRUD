<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Product;


class ProductController extends Controller
{
    public function index(Request $request)
	{
	 $input = $request->all();
	 $product=Product::query();
	 if($request->get('search')){
	   $products = $products->where("name", "LIKE", "%{$request->get('search')}%");
	 }

	 $products = $products->paginate(10);

	return response($products);
	}


    public function store(Request $request)
	{
	 $input = $request->all();
	 $create = Product::create($input);

	 return response($create);
	}

    public function edit($id)
	{
	 $product = Product::find($id);
	 return response($product);
	}

    public function update(Request $request, $id)
	{
	 $input = $request->all();
	 
	 $product=Product::find($id);
	 $product->update($input);
	 $product=Product::find($id);
	 return response($product);
	}

    public function destroy($id)
	{
	 return Product::where('id', $id) -> delete();
	}
    
}
