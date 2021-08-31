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
 * @author Jefferson Eduardo Campo - Danny Albeto Diaz - Christian Tobar
 *
 */
@Service
public class OrganizacionesImplService implements IOrganizacionesService{

	/**
	 * Inyección de Organizaciones Dao
	 */
	@Autowired
	private IOrganizacionesDao OrganizacionDao;
	
	/**
	 * Obtiene toda la lista de las organizaciones registradas
	 * 
	 * @return Retorna una lista de organizaciones
	*/
	@Override
	@Transactional(readOnly = true)
	public List<Organizacion> findAll() {
		return (List<Organizacion>)OrganizacionDao.findAll();
	}

	/**
	 * Busca una organización por su identificacion
	 * 
	 * @param Id de la organización a buscar
	 * @return retorna un objeto de tipo Organización
	 */
	@Override
	public Organizacion findById(Long id) throws ResourceNotFoundException {
		Organizacion org = OrganizacionDao.findById(id).orElse(null);
		if(org == null) {
			throw new ResourceNotFoundException();
		}
		return org;
	}

	/**
	 * Añade una nueva organización a la base de datos
	 * 
	 * @param Objeto de tipo organización
	 * @return Retorna un Objeto de tipo organización
	 */
	@Override
	@Transactional
	public Organizacion create(Organizacion organizacion) throws OrganizacionesDomainException {
		List <OrganizacionesError> errors = validateDomain(organizacion);
		if (!errors.isEmpty()) {
			throw new OrganizacionesDomainException(errors);
		}
		return OrganizacionDao.save(organizacion); 
	}

	/**
	 * Modifica la informacion de una organización
	 * 
	 * @param id Identificador de la organización a modificar
	 * @param usuario Objeto de tipo organización con los datos a cambiar
	 * @return Retorna un objeto de tipo organización
	 */
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
	org.setNombre(organizacion.getNombre());
	org.setTelefono(organizacion.getTelefono());
	org.setRutaimagen(organizacion.getRutaimagen());
	org.setUbicacion(organizacion.getUbicacion());
	return OrganizacionDao.save(org);
	}

	/**
	 * Elimina una organización por su id
	 * @param Id Identificiacion de la organización
	 */
	@Override
	@Transactional
	public void deleteById(Long Id) throws ResourceNotFoundException {
		Organizacion org = this.findById(Id);
		if (org == null) {
			throw new ResourceNotFoundException();
		}
		OrganizacionDao.deleteById(Id);
	}

	/**
	 * Aplica validaciones o reglas del dominio para una organización antes de ser agregado o modificado.
	 * @param org organizacion a validar
	 * @return lista de errores de validación.
	 */
	private List<OrganizacionesError> validateDomain(Organizacion org) {
		
		List<OrganizacionesError> errors = new ArrayList<>();

		if (org.getNombre() == null || org.getNombre().isBlank()) {
			errors.add(new OrganizacionesError(EnumErrorCodes.EMPTY_FIELD, "name", "El nombre de la organización es obligatorio"));
		}
		if (org.getUbicacion() == null || org.getUbicacion().isBlank()) {
			errors.add(new OrganizacionesError(EnumErrorCodes.EMPTY_FIELD, "Ubicación", "La ubicación de la organización es obligatorio"));
		}
		if (org.getTelefono() <= 0) {
			errors.add(new OrganizacionesError(EnumErrorCodes.INVALID_NUMBER, "Telefono",
					"El telefono es obligatorio y mayor a cero"));
		}
		/*if (org.getIdOrganizacion() <= 0) {
			errors.add(new OrganizacionesError(EnumErrorCodes.INVALID_NUMBER, "Identificación",
					"La identificación de la organización es obligatoria y mayor a cero"));
		}*/
		return errors;
	}
}
