package co.unicauca.carrito.domain.service;

import java.util.List;

import co.unicauca.carrito.domain.entity.Carrito;
import co.unicauca.carrito.presentation.exceptions.ResourceNotFoundException;
import co.unicauca.carrito.presentation.exceptions.CarritoDomainException;


public interface ICarritoService {
	
	public List<Carrito> findAll();
	
	public Carrito create(Carrito carrito)throws CarritoDomainException;
	
	public void deleteAll();
	
}
