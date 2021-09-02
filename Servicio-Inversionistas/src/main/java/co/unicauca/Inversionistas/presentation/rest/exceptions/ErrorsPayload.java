package co.unicauca.Inversionistas.presentation.rest.exceptions;

import java.util.ArrayList;
import java.util.List;

import co.unicauca.Inversionistas.presentation.rest.exceptions.ErrorJSON;
import co.unicauca.Inversionistas.presentation.rest.exceptions.InversionistaError;

public class ErrorsPayload {
	
	public final List<ErrorJSON> errores;
	public ErrorsPayload(List<InversionistaError> applicationErrors) {
		this.errores = new ArrayList<>();
		applicationErrors.forEach(applicationError -> errores.add(fromApplicationError(applicationError)));
	}
	
	private ErrorJSON fromApplicationError(InversionistaError error) {
		return new ErrorJSON(error.code, error.field, error.description);
	}

}
