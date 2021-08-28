package co.unicauca.Usuario.domain.entity;

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
 * @author Danny Diaz - Jefferson Campo
 *
 */
@Entity
@Table(name="usuarios")
public class Usuario  implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long ID;
	
	@Column
	private String Nombre;
	
	@Column
	private String Nameuser;
	
	@Column
	private String Clave;

	public long getID() {
		return ID;
	}

	public void setID(long iD) {
		ID = iD;
	}

	public String getNombre() {
		return Nombre;
	}

	public void setNombre(String nombre) {
		Nombre = nombre;
	}

	public String getNameuser() {
		return Nameuser;
	}

	public void setNameuser(String nameuser) {
		Nameuser = nameuser;
	}

	public String getClave() {
		return Clave;
	}

	public void setClave(String clave) {
		Clave = clave;
	}

	
}
