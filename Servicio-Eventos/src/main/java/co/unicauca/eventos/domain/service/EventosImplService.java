package co.unicauca.eventos.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.eventos.presentation.exceptions.EventosError;
import co.unicauca.eventos.access.dao.IEventosDao;
import co.unicauca.eventos.domain.entity.Eventos;
import co.unicauca.eventos.presentation.exceptions.EventosDomainException;
import co.unicauca.eventos.presentation.exceptions.ResourceNotFoundException;

@Service
public class EventosImplService implements IEventosService{

	@Autowired
	private IEventosDao eventosDao;
	
	@Override
	public List<Eventos> findAll() {
		return (List<Eventos>)eventosDao.findAll();
	}

	@Override
	public void deleteByID(Long id) throws ResourceNotFoundException {
		Eventos event = this.findById(id);
		if(event == null) {
			throw new ResourceNotFoundException();
		}
		eventosDao.deleteById(id);
	}

	@Override
	public Eventos findById(Long id) throws ResourceNotFoundException {
		Eventos event = eventosDao.findById(id).orElse(null);
		if(event == null) {
			throw new ResourceNotFoundException();
		}
		return event;
	}

	@Override
	@Transactional
	public Eventos create(Eventos evento) throws EventosDomainException{
		List <EventosError> errors = validateDomain(evento);
		
		if(!errors.isEmpty()) {
			throw new EventosDomainException(errors);
		}
		
		return eventosDao.save(evento);
	}
	
	
	private List<EventosError> validateDomain(Eventos event){
		List<EventosError> errors = new ArrayList<>();
		
		if(event.getNombre() == null || event.getNombre().isBlank()) {
			errors.add(new EventosError(EnumErrorCodes.EMPTY_FIELD, "nombre", "El nombre no puede ser nulo"));
		}
		
		if(event.getDescripcion() == null || event.getDescripcion().isBlank()) {
			errors.add(new EventosError(EnumErrorCodes.EMPTY_FIELD, "descripcion", "La descripcion no puede ser nula"));
		}
		
		
		return errors;
	}
	
}
