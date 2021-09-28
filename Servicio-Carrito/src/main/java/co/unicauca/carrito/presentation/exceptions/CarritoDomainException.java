package co.unicauca.carrito.presentation.exceptions;

import java.util.List;
/**
 * Lista de errores del dominio para un Usuario
 * 
 * @author Jefferson Campo - Danny Díaz - Christian Tobar
 *
 */
public class CarritoDomainException extends Exception{
	/**
	 * Listado de errores
	 */
	public final List<CarritoError> errors;
	
	public CarritoDomainException(List<CarritoError> errors) {
		this.errors = errors;
	}
}
