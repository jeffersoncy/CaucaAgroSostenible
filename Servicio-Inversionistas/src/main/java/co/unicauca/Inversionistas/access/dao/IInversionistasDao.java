package co.unicauca.Inversionistas.access.dao;

import org.springframework.data.repository.CrudRepository;

import co.unicauca.Inversionistas.domain.entity.Inversionista;

/**
 * Interface DAO que usa los metodos para el acceso a la BD
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
public interface IInversionistasDao extends CrudRepository<Inversionista, Long>{

}
