package co.unicauca.carrito.access.dao;

import org.springframework.data.repository.CrudRepository;

import co.unicauca.carrito.domain.entity.Carrito;

public interface ICarritoDao extends CrudRepository<Carrito, Long> {
}
