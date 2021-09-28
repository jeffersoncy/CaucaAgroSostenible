package co.unicauca.carrito.presentation.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;

import co.unicauca.carrito.domain.service.EnumErrorCodes;


/**
 * Maneja los errores en formato Json. Es utilizada por ErrorsPayload
 * 
 * @author Jefferson Campo - Danny Díaz - Christian Tobar
 *
 */

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorJSON {

	public final EnumErrorCodes code;
	public final String field;
	public final String message;

	public ErrorJSON(EnumErrorCodes code, String field, String message) {
		this.code = code;
		this.field = field;
		this.message = message;
	}
}
