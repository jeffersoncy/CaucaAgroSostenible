package co.unicauca.Inversionistas.presentation.rest.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;

import co.unicauca.Inversionistas.domain.services.EnumErrorCodes;

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
