package co.unicauca.Inversionistas.domain.services;

import java.util.List;

import co.unicauca.Inversionistas.domain.entity.Inversionista;
import co.unicauca.Inversionistas.presentation.rest.exceptions.InversionistaDomainException;
import co.unicauca.Inversionistas.presentation.rest.exceptions.ResourceNotFoundException;


/**
 * Interface que define las operaciones de la BD de inversionistas.
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
public interface IInversionistasService {
	
	public List<Inversionista> findAll();
	public Inversionista findById(Long id) throws ResourceNotFoundException;
	public Inversionista create(Inversionista invers) throws InversionistaDomainException;
	public Inversionista update(Long id, Inversionista invers) throws ResourceNotFoundException, InversionistaDomainException ;
	public void deleteById(Long id) throws ResourceNotFoundException;

}
