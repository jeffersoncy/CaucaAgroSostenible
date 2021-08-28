package co.unicauca.Usuario.access.dao;

import org.springframework.data.repository.CrudRepository;
import co.unicauca.Usuario.domain.entity.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Long>{
}
