package co.unicauca.Organizaciones.presentation.rest.exceptions;

import java.util.List;
/**
 * Lista de errores del dominio para un Usuario
 * 
 * @author Jefferson Campo - Danny Díaz - Christian Tobar
 *
 */
public class OrganizacionesDomainException extends Exception{
	/**
	 * Listado de errores
	 */
	public final List<OrganizacionesError> errors;
	
	public OrganizacionesDomainException(List<OrganizacionesError> errors) {
		this.errors = errors;
	}
}
