package co.unicauca.Ofertas.presentation.rest.exceptions;

import co.unicauca.Ofertas.domain.services.EnumErrorCodes;

/**
 * Clase que maneja las excepiones de una oferta.
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
public class OfertaError {
	
	public final EnumErrorCodes code;
	public final String field;
	public final String description;
	
	
	/**
	 * Constructor parametrizado
	 * @param code Codigo de error
	 * @param field Campo del error
	 * @param description Descripcion del error
	 */
	public OfertaError(EnumErrorCodes code, String field, String description) {
		super();
		this.code = code;
		this.field = field;
		this.description = description;
	}
	
	
	
	

}
