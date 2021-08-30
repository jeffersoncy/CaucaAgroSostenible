package co.unicauca.Usuario.presentation.rest.exceptions;

import co.unicauca.Usuario.domain.service.EnumErrorCodes;
/**
 * Manejo de excepciones de un usuario
 * 
 * @author Jefferson Campo y Danny Diaz
 */
public class UsuarioError {

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
	public UsuarioError(EnumErrorCodes code, String field, String description) {
		this.code = code;
		this.field = field;
		this.description = description;
	}
}
