package co.unicauca.eventos.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.unicauca.eventos.access.dao.IEventosDao;
import co.unicauca.eventos.domain.entity.Eventos;
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
	
}
