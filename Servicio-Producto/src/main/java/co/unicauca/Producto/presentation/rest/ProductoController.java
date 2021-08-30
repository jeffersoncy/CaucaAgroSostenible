package co.unicauca.Producto.presentation.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.unicauca.Producto.domain.entity.Producto;
import co.unicauca.Producto.domain.service.IProductoService;
import co.unicauca.Producto.presentation.rest.exceptions.ResourceNotFoundException;
import co.unicauca.Producto.presentation.rest.exceptions.ProductoDomainException;

@RestController
@RequestMapping("productos")
public class ProductoController {
	
	@Autowired
	private IProductoService productoService;
	
	/**
	 * Lista todos los productos registrados
	 * @return Lista de Productos
	 */
	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Producto> findAll(){
		return (List<Producto>) productoService.findAll();
	}
	
	/**
	 * Metodo que busca un producto por el id
	 * @param Id Identificador del producto
	 * @return un objeto de tipo Producto en formato json
	 */
	@RequestMapping(value = "{Id}", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Producto findById(@PathVariable Long Id) throws ResourceNotFoundException {
		return productoService.findByID(Id);
	}
	
	/**
	 * Crea un nuevo producto
	 * @param Producto que se va a crear
	 * @return objeto de tipo producto
	 */
	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Producto create(@RequestBody Producto prod) throws ProductoDomainException{
		return productoService.create(prod);
	}
	
	/**
	 * Metodo para actualizar la informacion del producto
	 * 
	 * @param prod Producto que se va a actualizar
	 * @param Id Identificacion del producto
	 * @return Objeto de tipo producto
	 */
	@RequestMapping(value = "{Id}",method = RequestMethod.PUT, produces = "application/json")
	@ResponseBody
	public Producto update(@RequestBody Producto prod, @PathVariable Long Id) 
			throws ProductoDomainException, ResourceNotFoundException {
		return productoService.update(Id, prod);
	}
	
	/**
	 * Metodo para eliminar un producto por el Id
	 * 
	 * @param Id Identificador del producto a eliminar
	 */
	@RequestMapping(value = "{Id}",method = RequestMethod.DELETE, produces = "application/json")
	@ResponseBody
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long Id) throws ResourceNotFoundException{
		productoService.deleteByID(Id);
	}
	
}
