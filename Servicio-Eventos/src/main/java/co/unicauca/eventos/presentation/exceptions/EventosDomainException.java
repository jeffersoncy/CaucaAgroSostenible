package co.unicauca.eventos.presentation.exceptions;

import java.util.List;
/**
 * Lista de errores del dominio para un Usuario
 * 
 * @author Jefferson Campo y Danny Díaz
 *
 */
public class EventosDomainException extends Exception{
	/**
	 * Listado de errores
	 */
	public final List<EventosError> errors;
	
	public EventosDomainException(List<EventosError> errors) {
		this.errors = errors;
	}
}
