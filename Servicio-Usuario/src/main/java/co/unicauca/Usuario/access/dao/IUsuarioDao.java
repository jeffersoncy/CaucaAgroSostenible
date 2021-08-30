package co.unicauca.Usuario.access.dao;

import org.springframework.data.repository.CrudRepository;
import co.unicauca.Usuario.domain.entity.Usuario;

/**
 * Interfaz DAO de Usuario que extiende de la interfaz CrudRepository
 * 
 * @author Jefferson Campo y Danny Diaz
 *
 */
public interface IUsuarioDao extends CrudRepository<Usuario, Long>{
}
