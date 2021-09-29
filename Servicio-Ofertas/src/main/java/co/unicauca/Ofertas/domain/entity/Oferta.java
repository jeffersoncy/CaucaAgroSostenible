package co.unicauca.Ofertas.domain.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Representa una oferta en la tienda, mapeada con la BD.
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */

@Entity
@Table(name="oferta")
public class Oferta implements Serializable{


	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String nomoferta;
	@Column
	private long precio;
	@Column
	private String rutaimg;
	@Column
	private int cantidad;
	@Column
	private double descuento;
	
	
	//GETTERS AND SETTERS//
	public long getIdOferta() {
		return id;
	}
	public void setIdOferta(long idOferta) {
		this.id = idOferta;
	}
	public String getNomOferta() {
		return nomoferta;
	}
	public void setNomOferta(String nomOferta) {
		this.nomoferta = nomOferta;
	}
	public long getPrecio() {
		return precio;
	}
	public void setPrecio(long precio) {
		this.precio = precio;
	}
	public String getRutaImg() {
		return rutaimg;
	}
	public void setRutaImg(String rutaImg) {
		this.rutaimg = rutaImg;
	}
	public int getCantidad() {
		return cantidad;
	}
	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}
	public double getDescuento() {
		return descuento;
	}
	public void setDescuento(double descuento) {
		this.descuento = descuento;
	}
	
	
	
	
	

}
