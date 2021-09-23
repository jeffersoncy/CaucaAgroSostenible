package co.unicauca.carrito.domain.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Representa el carrito de una tienda agricola, mapeada con la base de datos
 * 
 * @author Danny Diaz - Jefferson Campo - Christian Tobar
 *
 */

@Entity
@Table(name = "carritos")
public class Carrito implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String nomproducto;
	
	@Column
	private long precio;
	
	@Column
	private int cantidad;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNomproducto() {
		return nomproducto;
	}

	public void setNomproducto(String nomproducto) {
		this.nomproducto = nomproducto;
	}

	public long getPrecio() {
		return precio;
	}

	public void setPrecio(long precio) {
		this.precio = precio;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	
	
	
	
}
