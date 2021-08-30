package co.unicauca.Producto.domain.service;

import java.util.List;

import co.unicauca.Producto.domain.entity.Producto;
import co.unicauca.Producto.presentation.rest.exceptions.ResourceNotFoundException;
import co.unicauca.Producto.presentation.rest.exceptions.ProductoDomainException;

public interface IProductoService {

	public List<Producto> findAll();
	
	public Producto findByID(Long id)throws ResourceNotFoundException;
	
	public Producto create(Producto producto) throws ProductoDomainException;
	
	public Producto update(Long id, Producto producto) throws ProductoDomainException, ResourceNotFoundException;
	
	public void deleteByID(Long id) throws ResourceNotFoundException;
}
