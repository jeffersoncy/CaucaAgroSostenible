package co.unicauca.Organizaciones.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.Organizaciones.access.dao.IOrganizacionesDao;
import co.unicauca.Organizaciones.domain.entity.Organizacion;
import co.unicauca.Organizaciones.presentation.rest.exceptions.OrganizacionesDomainException;
import co.unicauca.Organizaciones.presentation.rest.exceptions.OrganizacionesError;
import co.unicauca.Organizaciones.presentation.rest.exceptions.ResourceNotFoundException;
;

/**
 * Implementación de la interface IOrganizacionesService
 * 
 * @author Jefferson Eduardo Campo - Danny Albeto Diaz
 *
 */
@Service
public class OrganizacionesImplService implements IOrganizacionesService{

	/**
	 * Inyección de Organizaciones Dao
	 */
	@Autowired
	private IOrganizacionesDao OrganizacionDao;
	
	@Override
	@Transactional(readOnly = true)
	public List<Organizacion> findAll() {
		return (List<Organizacion>)OrganizacionDao.findAll();
	}

	@Override
	public Organizacion findById(Long id) throws ResourceNotFoundException {
		Organizacion org = OrganizacionDao.findById(id).orElse(null);
		if(org == null) {
			throw new ResourceNotFoundException();
		}
		return org;
	}

	@Override
	@Transactional
	public Organizacion create(Organizacion organizacion) throws OrganizacionesDomainException {
		List <OrganizacionesError> errors = validateDomain(organizacion);
		if (!errors.isEmpty()) {
			throw new OrganizacionesDomainException(errors);
		}
		return OrganizacionDao.save(organizacion); 
	}

	@Override
	@Transactional
	public Organizacion update(Long id, Organizacion organizacion) throws ResourceNotFoundException, OrganizacionesDomainException {
		Organizacion org = this.findById(id);
		if(org == null) {
			throw new ResourceNotFoundException();
		}
		List<OrganizacionesError> errors = validateDomain(org);
	if (!errors.isEmpty()) {
		throw new OrganizacionesDomainException(errors);
	}
	org.setNombre(org.getNombre());
	org.setTelefono(org.getTelefono());
	org.setUbicacion(org.getUbicacion());
	return OrganizacionDao.save(org);
	}

	@Override
	@Transactional
	public void deleteById(Long Id) throws ResourceNotFoundException {
		Organizacion org = this.findById(Id);
		if (org == null) {
			throw new ResourceNotFoundException();
		}
		OrganizacionDao.deleteById(Id);
		
	}

	private List<OrganizacionesError> validateDomain(Organizacion org) {
		List<OrganizacionesError> errors = new ArrayList<>();

		if (org.getNombre() == null || org.getNombre().isBlank()) {
			errors.add(new OrganizacionesError(EnumErrorCodes.EMPTY_FIELD, "name", "El nombre de la organización es obligatorio"));
		}
		/*
		if (plato.getPrice() <= 0) {
			errors.add(new PlatoError(EnumErrorCodes.INVALID_NUMBER, "price",
					"El precio del plato es obligatorio y mayor a cero"));
		}
		
		if (plato.getIdRest() <= 0) {
			errors.add(new PlatoError(EnumErrorCodes.INVALID_NUMBER, "id restaurante",
					"El id del restaurante es obligatorio y mayor a cero"));
		}
		
		if (plato.getDescription() == null || plato.getDescription().isBlank()) {
			errors.add(new PlatoError(EnumErrorCodes.EMPTY_FIELD, "description", "La descripcion del plato es obligatoria"));
		}*/
		return errors;
	}
}
