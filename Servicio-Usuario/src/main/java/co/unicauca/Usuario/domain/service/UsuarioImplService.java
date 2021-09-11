package co.unicauca.Usuario.domain.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.Usuario.access.dao.IUsuarioDao;
import co.unicauca.Usuario.domain.entity.Usuario;
import co.unicauca.Usuario.presentation.rest.exceptions.ResourceNotFoundException;
import co.unicauca.Usuario.presentation.rest.exceptions.UsuarioDomainException;
import co.unicauca.Usuario.presentation.rest.exceptions.UsuarioError;

/**
 * Implementación de la interface 
 * 
 * @author Jefferson Eduardo Campo - Danny Albeto Diaz - Christian Tobar
 *
 */
@Service
public class UsuarioImplService implements IUsuarioService{
	
	/**
	 * Inyección de Usuario Dao
	 */
	@Autowired
	private IUsuarioDao usuarioDao;
	
	/**
	 * Obtiene toda la lista de los usuarios registrados
	 * 
	 * @return Retorna una lista de usuarios
	*/
	@Override
	@Transactional(readOnly = true)
	public List<Usuario> findAll() {
		return (List<Usuario>)usuarioDao.findAll();
	}
	
	/**
	 * Busca un usuario por su identificacion
	 * 
	 * @param Id del usuario a buscar
	 * @return retorna un objeto de tipo Usuario
	 */
	@Override
	public Usuario findById(Long id) throws ResourceNotFoundException{
		Usuario user = usuarioDao.findById(id).orElse(null);
		if(user == null) {
			throw new ResourceNotFoundException();
		}
		return user;
	}
	
	/**
	 * Añade un nuevo usuario a la base de datos
	 * 
	 * @param Objeto de tipo usuario que contiene la informacion de la persona
	 * @return Retorna un Objeto de tipo Usuario
	 */
	@Override
	@Transactional
	public Usuario create(Usuario usuario) throws UsuarioDomainException {
		List <UsuarioError> errors = validateDomain(usuario);
		
		if (!errors.isEmpty()) {
			throw new UsuarioDomainException(errors);
		}
		
		return usuarioDao.save(usuario); 
	}
	
	/**
	 * Modifica la informacion de un usuario
	 * 
	 * @param id Identificador del usuario a modificar
	 * @param usuario Objeto de tipo usuario con los datos a cambiar
	 * @return Retorna un objeto de tipo usuario
	 */
	@Override
	@Transactional
	public Usuario update(Long id, Usuario usuario) throws UsuarioDomainException, ResourceNotFoundException{
		Usuario user = this.findById(id);
		if(user == null) {
			throw new ResourceNotFoundException();
		}
		List<UsuarioError> errors = validateDomain(user);
		if (!errors.isEmpty()) {
			throw new UsuarioDomainException(errors);
		}
		user.setNombre(usuario.getNombre());
		user.setClave(usuario.getClave());
		
		return usuarioDao.save(user);
	}
	
	/**
	 * Elimina un usuario por el id
	 * @param Id Identificiacion del usuario
	 */
	@Override
	@Transactional
	public void deleteById(Long Id) throws ResourceNotFoundException {
		Usuario user = this.findById(Id);
		if(user == null) {
			throw new ResourceNotFoundException();
		}
		usuarioDao.deleteById(Id);
	}
	
	/**
	 * Aplica validaciones o reglas del dominio para un usuario. Antes de ser agregado o modificado.
	 * @param user usuario a validar
	 * @return lista de errores de validación.
	 */
	private List<UsuarioError> validateDomain(Usuario user){
		List<UsuarioError> errors = new ArrayList<>();
		if(user.getNombre() == null || user.getNombre().isBlank()) {
			errors.add(new UsuarioError(EnumErrorCodes.EMPTY_FIELD, "name", "El nombre del usuario es obligatorio"));
		}
		if(user.getNameuser() == null || user.getNameuser().isBlank()) {
			errors.add(new UsuarioError(EnumErrorCodes.EMPTY_FIELD, "nameUser", "El nickname del usuario es obligatorio"));
		}
		if(user.getClave() == null || user.getClave().isBlank()) {
			errors.add(new UsuarioError(EnumErrorCodes.EMPTY_FIELD, "clave", "La clave del usuario es obligatoria"));
		}
		if (user.getID() <= 0) {
			errors.add(new UsuarioError(EnumErrorCodes.INVALID_NUMBER, "id usuario",
					"El id del usuario es obligatorio y mayor a cero"));
		}
		return errors;
	}

	@Override
	public boolean verificarEmailPassword(Usuario user) {
		System.out.println("Invocando al método verificar user");
		Boolean bandera = false;
		 List<Usuario> lista = (List<Usuario>) usuarioDao.findAll();
		 for (int i = 0; i < lista.size(); i++) {
			if(lista.get(i).getNameuser().compareTo(user.getNameuser()) == 0 && lista.get(i).getClave().compareTo(user.getClave()) == 0) {
				bandera =  true;
				break;
			}
		}
		return bandera;
	}
}
