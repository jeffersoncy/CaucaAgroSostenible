package co.unicauca.Producto.access.dao;

import org.springframework.data.repository.CrudRepository;
import co.unicauca.Producto.domain.entity.Producto;

public interface IProductoDao extends CrudRepository<Producto, Long>{
}
