package co.unicauca.carrito.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.carrito.access.dao.ICarritoDao;
import co.unicauca.carrito.domain.entity.Carrito;
import co.unicauca.carrito.presentation.exceptions.CarritoDomainException;
import co.unicauca.carrito.presentation.exceptions.ResourceNotFoundException;
import co.unicauca.carrito.presentation.exceptions.CarritoError;

/**
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */

@Service
public class CarritoImplService implements ICarritoService{
	
	@Autowired
	private ICarritoDao carritoDao;
	
	/**
	 * Obtiene la lista de productos del carrito en la tienda
	 * @return Lista de todos los productos del carrito
	 */
	@Override
	@Transactional(readOnly = true)
	public List<Carrito> findAll() {
		return (List<Carrito>)carritoDao.findAll();
	}

	@Override
	public Carrito create(Carrito carrito) throws CarritoDomainException {
		List <CarritoError> errors = validateDomain(carrito);
		if(!errors.isEmpty()) {
			throw new CarritoDomainException(errors);
		}
		return carritoDao.save(carrito);
	}

	@Override
	public void deleteAll(){
		carritoDao.deleteAll();
		
	}
	
	private List<CarritoError> validateDomain(Carrito carrito){
		List<CarritoError> errors = new ArrayList<>();
		if(carrito.getNomproducto() == null || carrito.getNomproducto().isBlank()) {
			errors.add(new CarritoError(EnumErrorCodes.EMPTY_FIELD, "name", "El nombre del producto es obligatorio"));
		}
		if(carrito.getPrecio() <= 0 ) {
			errors.add(new CarritoError(EnumErrorCodes.EMPTY_FIELD, "precio", "El precio del producto no puede estar vacio"));
		}
		
		if(carrito.getCantidad() <= 0 ) {
			errors.add(new CarritoError(EnumErrorCodes.EMPTY_FIELD, "cantidad", "La cantidad del producto no puede estar vacio"));
		}
		
		return errors;
	}

}
