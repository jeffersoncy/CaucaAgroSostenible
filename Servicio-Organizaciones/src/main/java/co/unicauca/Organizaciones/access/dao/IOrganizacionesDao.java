package co.unicauca.Organizaciones.access.dao;

import org.springframework.data.repository.CrudRepository;

import co.unicauca.Organizaciones.domain.entity.Organizacion;

/**
 * Interfaz DAO de las organizaciones que extiende de la interfaz CrudRepository
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
public interface IOrganizacionesDao extends CrudRepository<Organizacion, Long>{
}
