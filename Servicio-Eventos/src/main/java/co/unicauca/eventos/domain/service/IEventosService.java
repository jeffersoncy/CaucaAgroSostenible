package co.unicauca.eventos.domain.service;

import java.util.List;

import co.unicauca.eventos.presentation.exceptions.ResourceNotFoundException;
import co.unicauca.eventos.presentation.exceptions.EventosDomainException;
import co.unicauca.eventos.domain.entity.Eventos;

public interface IEventosService {
	
	public Eventos create(Eventos evento) throws EventosDomainException;
	
	public List<Eventos> findAll();
	
	public Eventos findById(Long id)throws ResourceNotFoundException;
	
	public void deleteByID(Long id) throws ResourceNotFoundException;
	
	
}
