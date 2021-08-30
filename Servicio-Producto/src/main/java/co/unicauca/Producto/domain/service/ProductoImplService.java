package co.unicauca.Producto.domain.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.Producto.access.dao.IProductoDao;
import co.unicauca.Producto.domain.entity.Producto;
import co.unicauca.Producto.presentation.rest.exceptions.ResourceNotFoundException;
import co.unicauca.Producto.presentation.rest.exceptions.ProductoError;
import co.unicauca.Producto.presentation.rest.exceptions.ProductoDomainException;

/**
 * 
 * @author Jefferson Eduardo Campo - Danny Albeto Diaz
 *
 */

@Service
public class ProductoImplService implements IProductoService{
	@Autowired
	private IProductoDao productoDao;
	
	/**
	 * Obtiene la lista de productos en la tienda
	 * @return Lista de todos los productos
	 */
	@Override
	@Transactional(readOnly = true)
	public List<Producto> findAll() {
		return (List<Producto>)productoDao.findAll();
	}

	/**
	 * Busca un producto por su id
	 * @param Id identificacion del usuario
	 * @return retorna un objeto de tipo Producto
	 */
	@Override
	public Producto findByID(Long id) throws ResourceNotFoundException{
		Producto prod = productoDao.findById(id).orElse(null);
		if(prod == null) {
			throw new ResourceNotFoundException();
		}
		return prod;
	}

	/**
	 * Añade un nuevo producto a la base de datos
	 * @param Objeto de tipo producto que contiene la informacion del producto
	 * @return Retorna un Objeto de tipo Producto
	 */	
	@Override
	@Transactional
	public Producto create(Producto producto) throws ProductoDomainException{
		List <ProductoError> errors = validateDomain(producto);
		
		if(!errors.isEmpty()) {
			throw new ProductoDomainException(errors);
		}
		
		return productoDao.save(producto);
	}

	/**
	 * Modifica la informacion de un producto
	 * @param id Identificador del producto a modificar
	 * @param producto Objeto de tipo producto con los datos a cambiar
	 * @return Retorna un objeto de tipo Producto
	 */	
	@Override
	@Transactional
	public Producto update(Long id, Producto producto) throws ProductoDomainException,ResourceNotFoundException{
		Producto prod = this.findByID(id);
		
		if(prod == null) {
			throw new ResourceNotFoundException();
		}
		List<ProductoError> errors = validateDomain(prod);
		if(!errors.isEmpty()) {
			throw new ProductoDomainException(errors);
		}
		
		prod.setNomProducto(producto.getNomProducto());
		prod.setCantidad(producto.getCantidad());
		prod.setPrecio(producto.getPrecio());
		prod.setRutaImagen(producto.getRutaImagen());
		return productoDao.save(prod);
	}

	/**
	 * Elimina un producto por el id
	 * @param Id Identificiacion del producto
	 */
	@Override
	@Transactional
	public void deleteByID(Long id) throws ResourceNotFoundException{
		Producto prod = this.findByID(id);
		if(prod == null) {
			throw new ResourceNotFoundException();
		}
		productoDao.deleteById(id);
	}
	
	
	/**
	 * Aplica validaciones o reglas del dominio para un usuario. Antes de ser agregado o modificado.
	 * @param user usuario a validar
	 * @return lista de errores de validación.
	 */
	private List<ProductoError> validateDomain(Producto prod){
		List<ProductoError> errors = new ArrayList<>();
		if(prod.getNomProducto() == null || prod.getNomProducto().isBlank()) {
			errors.add(new ProductoError(EnumErrorCodes.EMPTY_FIELD, "name", "El nombre del producto es obligatorio"));
		}
		if(prod.getRutaImagen() == null || prod.getRutaImagen().isBlank()) {
			errors.add(new ProductoError(EnumErrorCodes.EMPTY_FIELD, "nameUser", "La ruta de la imagen no puede estar nula"));
		}
		if (prod.getCantidad() <= 0) {
			errors.add(new ProductoError(EnumErrorCodes.INVALID_NUMBER, "Cantidad del producto",
					"La cantidad del producto es obligatoria y mayor a cero"));
		}
		if (prod.getPrecio() <= 0) {
			errors.add(new ProductoError(EnumErrorCodes.INVALID_NUMBER, "Precio del producto",
					"El precio del producto es obligatorio y mayor a cero"));
		}
		
		return errors;
	}
	
	
}
