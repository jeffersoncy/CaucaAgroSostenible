package co.unicauca.Organizaciones.presentation.rest.exceptions;

import co.unicauca.Organizaciones.domain.service.EnumErrorCodes;

/**
 * Manejo de excepciones de un usuario
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 */
public class OrganizacionesError {

	/**
	 * Codigo del error
	 */
	public final EnumErrorCodes code;
	/**
	 * Campo del error
	 */
	public final String field;
	/**
	 * Descripción del error
	 */
	public final String description;
	
	/**
	 * Constructor parametrizado
	 * 
	 * @param code codigo error
	 * @param field campo del error
	 * @param description descripción del error
	 */
	public OrganizacionesError(EnumErrorCodes code, String field, String description) {
		this.code = code;
		this.field = field;
		this.description = description;
	}
}
