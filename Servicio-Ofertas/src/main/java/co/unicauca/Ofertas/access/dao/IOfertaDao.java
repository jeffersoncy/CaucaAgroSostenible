package co.unicauca.Ofertas.access.dao;

import org.springframework.data.repository.CrudRepository;
import co.unicauca.Ofertas.domain.entity.Oferta;

/**
 * Interface DAO que usa los metodos para el acceso a la BD.
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
public interface IOfertaDao extends CrudRepository<Oferta, Long>{

}
