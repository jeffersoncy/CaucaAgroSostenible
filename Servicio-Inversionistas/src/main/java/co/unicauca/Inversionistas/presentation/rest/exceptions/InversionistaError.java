package co.unicauca.Inversionistas.presentation.rest.exceptions;

import co.unicauca.Inversionistas.domain.services.EnumErrorCodes;

public class InversionistaError {
	
	public final EnumErrorCodes code;
	public final String field;
	public final String description;
	
	
	/**
	 * Constructor parametrizado
	 * @param code Codigo de error
	 * @param field Campo del error
	 * @param description Descripcion del error
	 */
	public InversionistaError(EnumErrorCodes code, String field, String description) {
		super();
		this.code = code;
		this.field = field;
		this.description = description;
	}

}
