package co.unicauca.Organizaciones.presentation.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.unicauca.Organizaciones.domain.entity.Organizacion;
import co.unicauca.Organizaciones.domain.service.IOrganizacionesService;
import co.unicauca.Organizaciones.presentation.rest.exceptions.OrganizacionesDomainException;
import co.unicauca.Organizaciones.presentation.rest.exceptions.ResourceNotFoundException;

/**
 * Servicios web para la gestion de organizaciones
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("organizaciones")
public class OrganizacionController {

	@Autowired
	private IOrganizacionesService organizacionesService;
	
	/**
	 * Lista todas las organizaciones registrados
	 * @return Lista de organizaciones
	 */
	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Organizacion> findAll(){
		return (List<Organizacion>) organizacionesService.findAll();
	}
	
	/**
	 * Metodo que busca una organización por el id
	 * @param Id Identificador de la organizacióm
	 * @return un objeto de tipo organización en formato json
	 * @throws ResourceNotFoundException excepcion lanzada en caso de no encontrarse la organización.
	 */
	@RequestMapping(value = "{Id}", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Organizacion findById(@PathVariable Long Id) throws ResourceNotFoundException {
		return organizacionesService.findById(Id);
	}
	
	/**
	 * Crea una nueva organización
	 * @param org objeto de tipo organizacion que se va a crear
	 * @return objeto de tipo organización
	 * @throws OrganizacionesDomainException excepcion lanzada en caso de que el objeto no contenga todos sus datos.
	 */
	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Organizacion create(@RequestBody Organizacion org) throws OrganizacionesDomainException{
		return organizacionesService.create(org);
	}
	
	/**
	 * Metodo para actualizar la informacion de la organización
	 * 
	 * @param org organización que se va a actualizar
	 * @param Id Identificacion de la organización
	 * @return Objeto de tipo organización
	 * @throws ResourceNotFoundException excepcion lanzada en caso de no encontrarse la organización.
	 * @throws OrganizacionesDomainException excepcion lanzada en caso de que el objeto no contenga todos sus datos.
	 */
	@RequestMapping(value = "{Id}",method = RequestMethod.PUT, produces = "application/json")
	@ResponseBody
	public Organizacion update(@RequestBody Organizacion org, @PathVariable Long Id) 
			throws OrganizacionesDomainException, ResourceNotFoundException {
		return organizacionesService.update(Id, org);
	}
	
	/**
	 * Metodo para eliminar una organización por el Id
	 * 
	 * @param Id Identificador de la organización a eliminar
	 * @throws ResourceNotFoundException excepcion lanzada en caso de no encontrarse la organización.
	 */
	@RequestMapping(value = "{Id}",method = RequestMethod.DELETE, produces = "application/json")
	@ResponseBody
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long Id) throws ResourceNotFoundException{
		organizacionesService.deleteById(Id);
	}
	
}
