package co.unicauca.Producto.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.Producto.access.dao.IProductoDao;
import co.unicauca.Producto.domain.entity.Producto;

/**
 * 
 * @author Jefferson Eduardo Campo - Danny Albeto Diaz
 *
 */

@Service
public class IProductoImplService implements IProductoService{
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
	public Producto findByID(Long id) {
		Producto prod = productoDao.findById(id).orElse(null);
		return prod;
	}

	/**
	 * Añade un nuevo producto a la base de datos
	 * @param Objeto de tipo producto que contiene la informacion del producto
	 * @return Retorna un Objeto de tipo Producto
	 */	
	@Override
	@Transactional
	public Producto create(Producto producto) {
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
	public Producto update(Long id, Producto producto) {
		Producto prod = this.findByID(id);
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
	public void deleteByID(Long id) {
		// TODO Auto-generated method stub
		productoDao.deleteById(id);
	}

}
