package co.unicauca.Ofertas.presentation.rest;

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

import co.unicauca.Ofertas.domain.entity.Oferta;
import co.unicauca.Ofertas.domain.services.IOfertasService;
import co.unicauca.Ofertas.presentation.rest.exceptions.OfertaDomainException;
import co.unicauca.Ofertas.presentation.rest.exceptions.ResourceNotFoundException;


/**
 * Servicios web de gestion de ofertas
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("oferta")
public class OfertaController {
	
	@Autowired
	private IOfertasService ofertaService;
	
	/**
	 * Metodo que lista todas las ofertas registradas
	 * @return Lista de ofertas
	 */
	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Oferta> findAll(){
		
		return (List<Oferta>) ofertaService.findAll();
	}
	
	
	/**
	 * Metodo que busca una oferta por su Id.
	 * @param id Identificador
	 * @return objeto de tipo Oferta en formato JSON
	 * @throws ResourceNotFoundException excepcion lanzada en caso de no encontrarse la oferta.
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Oferta findById(@PathVariable Long id) throws ResourceNotFoundException{
		
		return ofertaService.findById(id);
	}
	
	
	/**
	 * Metodo que crea una nueva oferta
	 * @param oferta objeto que se va acrear
	 * @return objeto de tipo oferta
	 * @throws OfertaDomainException excepcion lanzada en caso de que el objeto no contenga todos sus datos.
	 */
	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Oferta create(@RequestBody Oferta oferta) throws OfertaDomainException{
		
		return ofertaService.create(oferta);
	}
	
	/**
	 * Metodo que actualiza los campos de una oferta
	 * @param id Identificador
	 * @param oferta objeto de tipo Oferta
	 * @return Objeo de tipo Oferta
	 * @throws ResourceNotFoundException excepcion lanzada en caso de no encontrarse la oferta.
	 * @throws OfertaDomainException excepcion lanzada en caso de que el objeto no contenga todos sus datos.
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.PUT, produces = "application/json")
	@ResponseBody
	public Oferta update(@PathVariable Long id, @RequestBody Oferta oferta) throws ResourceNotFoundException, OfertaDomainException{
		
		return ofertaService.update(id, oferta);
	}
	
	
	/**
	 * Metodo que elimina una oferta por su Id.
	 * @param id Identificador
	 * @throws ResourceNotFoundException excepcion lanzada en caso de no encontrarse la oferta.
	 */
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = "application/json")
	@ResponseBody
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Long id) throws ResourceNotFoundException{
		
		ofertaService.deleteById(id);
	}
	
	

}
