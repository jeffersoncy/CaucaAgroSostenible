package co.unicauca.Organizaciones.domain.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Representa un usuario de una tienda agricola, mapeada con la base de datos
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
@Entity
@Table(name="organizaciones")
public class Organizacion implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column
	private String nombre;
	
	@Column
	private String rutaimagen;
	
	@Column
	private String ubicacion;
	
	@Column
	private long telefono;

	public long getIdOrganizacion() {
		return id;
	}

	public void setIdOrganizacion(long Id) {
		id = Id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nomb) {
		nombre = nomb;
	}

	public String getUbicacion() {
		return ubicacion;
	}

	public void setUbicacion(String ubic) {
		ubicacion = ubic;
	}

	public long getTelefono() {
		return telefono;
	}

	public void setTelefono(long telefono) {
		this.telefono = telefono;
	}

	public String getRutaimagen() {
		return rutaimagen;
	}

	public void setRutaimagen(String rutaimagen) {
		this.rutaimagen = rutaimagen;
	}
	
	
}
