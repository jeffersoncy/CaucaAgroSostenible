package co.unicauca.Producto.domain.service;

import java.util.List;

import co.unicauca.Producto.domain.entity.Producto;

public interface IProductoService {

	public List<Producto> findAll();
	
	public Producto findByID(Long id);
	
	public Producto create(Producto producto);
	
	public Producto update(Long id, Producto producto);
	
	public void deleteByID(Long id);
}
