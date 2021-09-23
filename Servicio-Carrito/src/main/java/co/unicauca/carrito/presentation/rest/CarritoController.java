package co.unicauca.carrito.presentation.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import co.unicauca.carrito.domain.entity.Carrito;
import co.unicauca.carrito.domain.service.ICarritoService;
import co.unicauca.carrito.presentation.exceptions.CarritoDomainException;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("carritos")
public class CarritoController {
	
	@Autowired
	private ICarritoService carritoService;
	
	/**
	 * Lista todos los productos registrados
	 * @return Lista de Productos
	 */
	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Carrito> findAll(){
		return (List<Carrito>) carritoService.findAll();
	}
	
	/**
	 * Crea un nuevo producto
	 * @param Producto que se va a crear
	 * @return objeto de tipo producto
	 */
	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Carrito create(@RequestBody Carrito car) throws CarritoDomainException{
		return carritoService.create(car);
	}
	
	@RequestMapping(method = RequestMethod.DELETE, produces = "application/json")
	@ResponseBody
	public void deleteAll(){
		carritoService.deleteAll();
	}
	
	
}
