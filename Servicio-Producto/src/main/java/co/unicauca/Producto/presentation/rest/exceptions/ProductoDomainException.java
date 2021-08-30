package co.unicauca.Producto.presentation.rest.exceptions;

import java.util.List;
/**
 * Lista de errores del dominio para un Usuario
 * 
 * @author Jefferson Campo y Danny Díaz
 *
 */
public class ProductoDomainException extends Exception{
	/**
	 * Listado de errores
	 */
	public final List<ProductoError> errors;
	
	public ProductoDomainException(List<ProductoError> errors) {
		this.errors = errors;
	}
}
