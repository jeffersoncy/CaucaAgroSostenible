package co.unicauca.eventos.access.dao;

import org.springframework.data.repository.CrudRepository;

import co.unicauca.eventos.domain.entity.Eventos;

public interface IEventosDao extends CrudRepository<Eventos, Long>{

}
