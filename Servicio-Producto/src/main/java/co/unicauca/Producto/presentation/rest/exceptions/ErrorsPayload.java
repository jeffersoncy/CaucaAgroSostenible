package co.unicauca.Producto.presentation.rest.exceptions;

import java.util.ArrayList;
import java.util.List;

/**
 * Clase utilizada por GlobalDefaultExceptionHandler para manerjar los errores.
 * 
 * @author Jefferson Campo y Danny Diaz
 *
 */
public class ErrorsPayload {

	public final List<ErrorJSON> errors;

	public ErrorsPayload(List<ProductoError> applicationErrors) {
		this.errors = new ArrayList<>();
		applicationErrors.forEach(applicationError -> errors.add(fromApplicationError(applicationError)));
	}

	private ErrorJSON fromApplicationError(ProductoError error) {
		return new ErrorJSON(error.code, error.field, error.description);
	}
}
