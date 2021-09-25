package co.unicauca.eventos.presentation.exceptions;

import co.unicauca.eventos.domain.service.EnumErrorCodes;
/**
 * Manejo de excepciones de un carrito
 * 
 * @author Jefferson Campo y Danny Diaz
 */
public class EventosError {

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
	public EventosError(EnumErrorCodes code, String field, String description) {
		this.code = code;
		this.field = field;
		this.description = description;
	}
}
