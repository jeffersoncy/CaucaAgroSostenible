package co.unicauca.Ofertas.domain.services;

import java.util.List;

import co.unicauca.Ofertas.domain.entity.Oferta;
import co.unicauca.Ofertas.presentation.rest.exceptions.OfertaDomainException;
import co.unicauca.Ofertas.presentation.rest.exceptions.ResourceNotFoundException;

/**
 * Interface que define las operaciones de la BD de ofertas.
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
public interface IOfertasService {
	
	public List<Oferta> findAll();
	public Oferta findById(Long id) throws ResourceNotFoundException;
	public Oferta create(Oferta oferta) throws OfertaDomainException;
	public Oferta update(Long id, Oferta oferta) throws ResourceNotFoundException, OfertaDomainException ;
	public void deleteById(Long id) throws ResourceNotFoundException;
	
	

}
