package co.unicauca.Usuario.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.Usuario.access.dao.IUsuarioDao;
import co.unicauca.Usuario.domain.entity.Usuario;

/**
 * 
 * @author Jefferson Eduardo Campo - Danny Albeto Diaz
 *
 */

@Service
public class IUsuarioImplService implements IUsuarioService{
	
	@Autowired
	private IUsuarioDao usuarioDao;
	
	/**
	 * Obtiene toda la lista de los usuarios registrados
	 * @return Retorna una lista de usuarios
	*/
	@Override
	@Transactional(readOnly = true)
	public List<Usuario> findAll() {
		return (List<Usuario>)usuarioDao.findAll();
	}
	
	/**
	 * Busca un usuario por su identificacion
	 * @param Id del usuario a buscar
	 * @return retorna un objeto de tipo Usuario
	 */
	@Override
	public Usuario findById(Long id) {
		Usuario user = usuarioDao.findById(id).orElse(null);
		return user;
	}
	
	/**
	 * Añade un nuevo usuario a la base de datos
	 * @param Objeto de tipo usuario que contiene la informacion de la persona
	 * @return Retorna un Objeto de tipo Usuario
	 */
	@Override
	@Transactional
	public Usuario create(Usuario usuario) {
		return usuarioDao.save(usuario); 
	}
	
	/**
	 * Modifica la informacion de un usuario
	 * @param id Identificador del usuario a modificar
	 * @param usuario Objeto de tipo usuario con los datos a cambiar
	 * @return Retorna un objeto de tipo usuario
	 */
	@Override
	@Transactional
	public Usuario update(Long id, Usuario usuario) {
		
		Usuario user = this.findById(id);
		user.setNombre(usuario.getNombre());
		user.setClave(usuario.getClave());
		
		return usuarioDao.save(user);
	}
	
	/**
	 * Elimina un usuario por el id
	 * @param Id Identificiacion del usuario
	 */
	@Override
	public void deleteById(Long Id) {
		usuarioDao.deleteById(Id);
	}
}
