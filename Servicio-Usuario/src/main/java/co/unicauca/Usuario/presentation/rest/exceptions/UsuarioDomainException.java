package co.unicauca.Usuario.presentation.rest.exceptions;

import java.util.List;
/**
 * Lista de errores del dominio para un Usuario
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
public class UsuarioDomainException extends Exception{
	/**
	 * Listado de errores
	 */
	public final List<UsuarioError> errors;
	
	public UsuarioDomainException(List<UsuarioError> errors) {
		this.errors = errors;
	}
}
