package co.unicauca.Producto.domain.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Representa un producto de una tienda agricola, mapeada con la base de datos
 * 
 * @author Danny Diaz - Jefferson Campo - Christian Tobar
 *
 */

@Entity
@Table(name = "productos")
public class Producto implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String nomproducto;
	
	@Column
	private String rutaimagen;
	
	@Column
	private long cantidad;
	
	@Column
	private double precio;
	
	@Column
	private String tipo;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomProducto() {
		return nomproducto;
	}

	public void setNomProducto(String nomProducto) {
		this.nomproducto = nomProducto;
	}

	public String getRutaImagen() {
		return rutaimagen;
	}

	public void setRutaImagen(String rutaImagen) {
		this.rutaimagen = rutaImagen;
	}

	public long getCantidad() {
		return cantidad;
	}

	public void setCantidad(long cantidad) {
		this.cantidad = cantidad;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

}
