package co.unicauca.Inversionistas.domain.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Representa un inversionista en la tienda, mapeado con la BD.
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */

@Entity
@Table(name="inversionista")
public class Inversionista implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String nombre;
	@Column
	private String rutaimg;
	@Column
	private String descripcion;
	@Column
	private String correo;
	
	//GETTERS AND SETTERS//
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getRutaimg() {
		return rutaimg;
	}
	public void setRutaimg(String rutaimg) {
		this.rutaimg = rutaimg;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	
	
	
}
