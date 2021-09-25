package co.unicauca.eventos.presentation.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.unicauca.eventos.presentation.exceptions.ResourceNotFoundException;
import co.unicauca.eventos.domain.entity.Eventos;
import co.unicauca.eventos.domain.service.IEventosService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("eventos")
public class EventosController {
	
	@Autowired
	private IEventosService eventosService;
	
	/**
	 * Lista todos los eventos registrados
	 * @return Lista de Productos
	 */
	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Eventos> findAll(){
		return (List<Eventos>) eventosService.findAll();
	}
	
	/**
	 * Metodo que busca un evento por el id
	 * @param Id Identificador del evento
	 * @return un objeto de tipo evento en formato json
	 */
	@RequestMapping(value = "{Id}", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Eventos findById(@PathVariable Long Id) throws ResourceNotFoundException {
		return eventosService.findById(Id);
	}
	
	/**
	 * Metodo para eliminar un evento por el Id
	 * 
	 * @param Id Identificador del evento a eliminar
	 */
	@RequestMapping(value = "{Id}",method = RequestMethod.DELETE, produces = "application/json")
	@ResponseBody
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long Id) throws ResourceNotFoundException{
		eventosService.deleteByID(Id);
	}
	
	
}
