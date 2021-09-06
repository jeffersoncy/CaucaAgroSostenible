package co.unicauca.Inversionistas.presentation.rest;

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

import co.unicauca.Inversionistas.domain.services.IInversionistasService;
import co.unicauca.Inversionistas.presentation.rest.exceptions.InversionistaDomainException;
import co.unicauca.Inversionistas.presentation.rest.exceptions.ResourceNotFoundException;
import co.unicauca.Inversionistas.domain.entity.Inversionista;

/**
 * Servicios web de gestion de inversionistas
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("inversionista")
public class InversionistaController {
	
	@Autowired
	private IInversionistasService invService;
	
	
	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Inversionista> findAll(){
		
		return (List<Inversionista>) invService.findAll();
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Inversionista findById(@PathVariable Long id) throws ResourceNotFoundException{
		
		return invService.findById(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Inversionista create(@RequestBody Inversionista inv) throws InversionistaDomainException{
		
		return invService.create(inv);
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.PUT, produces = "application/json")
	@ResponseBody
	public Inversionista update(@PathVariable Long id, @RequestBody Inversionista inv) throws ResourceNotFoundException, InversionistaDomainException{
		
		return invService.update(id, inv);
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = "application/json")
	@ResponseBody
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteById(@PathVariable Long id) throws ResourceNotFoundException{
		
		invService.deleteById(id);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
