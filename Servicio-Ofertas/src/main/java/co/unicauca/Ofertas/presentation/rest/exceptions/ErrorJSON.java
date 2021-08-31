package co.unicauca.Ofertas.presentation.rest.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;

import co.unicauca.Ofertas.domain.services.EnumErrorCodes;

/**
 * Clase que maneja los errores en formato JSON
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorJSON {

	public final EnumErrorCodes code;
	public final String field;
	public final String message;
	
	public ErrorJSON(EnumErrorCodes code, String field, String message) {
		super();
		this.code = code;
		this.field = field;
		this.message = message;
	}
	
	
}
