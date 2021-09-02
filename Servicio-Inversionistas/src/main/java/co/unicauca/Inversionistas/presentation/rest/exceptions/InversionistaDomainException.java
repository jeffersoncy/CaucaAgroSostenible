package co.unicauca.Inversionistas.presentation.rest.exceptions;

import java.util.List;

import co.unicauca.Inversionistas.presentation.rest.exceptions.InversionistaError;

public class InversionistaDomainException extends Exception {

	
	public final List<InversionistaError> errores;

	public InversionistaDomainException(List<InversionistaError> errores) {

		this.errores = errores;
	}
}
