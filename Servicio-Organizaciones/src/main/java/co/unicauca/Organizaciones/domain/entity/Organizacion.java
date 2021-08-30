package co.unicauca.Organizaciones.domain.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="organizaciones")
public class Organizacion implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long IdOrganizacion;
	
	@Column
	private String Nombre;
	
	/*@Column
	private String Imagen;*/
	
	@Column
	private String Ubicacion;
	
	@Column
	private String telefono;

	public long getIdOrganizacion() {
		return IdOrganizacion;
	}

	public void setIdOrganizacion(long idOrganizacion) {
		IdOrganizacion = idOrganizacion;
	}

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}

	public String getUbicacion() {
		return Ubicacion;
	}

	public void setUbicacion(String ubicacion) {
		Ubicacion = ubicacion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}
	
}
