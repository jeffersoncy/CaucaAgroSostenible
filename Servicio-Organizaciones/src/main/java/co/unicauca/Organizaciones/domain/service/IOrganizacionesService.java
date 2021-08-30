package co.unicauca.Organizaciones.domain.service;

import java.util.List;

import co.unicauca.Organizaciones.domain.entity.Organizacion;
import co.unicauca.Organizaciones.presentation.rest.exceptions.OrganizacionesDomainException;
import co.unicauca.Organizaciones.presentation.rest.exceptions.ResourceNotFoundException;

/**
 * Interfaz de operaciones de la bd de las organizaciones
 * 
 * @author Jefferson Campo y Danny Diaz
 *
 */
public interface IOrganizacionesService {
	
	public List<Organizacion> findAll();
	
	public Organizacion findById(Long id) throws ResourceNotFoundException;
	
	public Organizacion create(Organizacion organizacion) throws OrganizacionesDomainException;
	
	public Organizacion update(Long id, Organizacion organizacion) throws OrganizacionesDomainException, ResourceNotFoundException;
	
	public void deleteById(Long Id) throws ResourceNotFoundException;
	
}
