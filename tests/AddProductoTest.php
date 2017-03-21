<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class AddProductoTest extends TestCase
{
    public function testAddProductTestSuccessfully()
    {
        $producto = factory(App\Producto::class)->make();
        
        $this->post('/api/addproducto', [
                  'nombre' => $producto->nombre,
                  'descripcion' => $producto->descripcion,
                  ])->seeApiSuccess()
                  ->seeJsonObject('producto');
                  /*->seeJsonKeyValueString('nombre', $producto->nombre)
                  ->seeJsonKeyValueString('descripcion', $producto->descripcion);*/
                  
                  
                  $this->seeInDatabase('productos', [
						'nombre' => $producto->nombre,
						'descripcion' => $producto->descripcion,
						]);
    }
}
