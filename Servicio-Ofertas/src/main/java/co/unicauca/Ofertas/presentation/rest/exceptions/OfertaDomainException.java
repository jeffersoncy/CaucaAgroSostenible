package co.unicauca.Ofertas.presentation.rest.exceptions;

import java.util.List;

/**
 * Clase que maneja la lista de errores del dominio para una oferta.
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
public class OfertaDomainException extends Exception {

	public final List<OfertaError> errores;

	public OfertaDomainException(List<OfertaError> errores) {

		this.errores = errores;
	}
	
	
}
