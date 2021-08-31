package co.unicauca.Ofertas.presentation.rest.exceptions;

import java.util.ArrayList;
import java.util.List;

/**
 * Clase que maneja los errores de carga util
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
public class ErrorsPayload {
	
	public final List<ErrorJSON> errores;
	public ErrorsPayload(List<OfertaError> applicationErrors) {
		this.errores = new ArrayList<>();
		applicationErrors.forEach(applicationError -> errores.add(fromApplicationError(applicationError)));
	}
	
	private ErrorJSON fromApplicationError(OfertaError error) {
		return new ErrorJSON(error.code, error.field, error.description);
	}

}
