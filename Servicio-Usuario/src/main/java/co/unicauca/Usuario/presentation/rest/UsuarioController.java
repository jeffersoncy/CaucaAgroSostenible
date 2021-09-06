package co.unicauca.Usuario.presentation.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import co.unicauca.Usuario.domain.service.IUsuarioService;
import co.unicauca.Usuario.presentation.rest.exceptions.ResourceNotFoundException;
import co.unicauca.Usuario.presentation.rest.exceptions.UsuarioDomainException;
import co.unicauca.Usuario.domain.entity.Usuario;

/**
 * 
 * Servicios web de gestion usuario
 * 
 * @author Danny Diaz - Jefferson Campo - Christian Tobar
 *
 */
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("usuarios")
public class UsuarioController {
	
	@Autowired
	private IUsuarioService usuarioService;
	
	/**
	 * Lista todos los usuarios registrados
	 * @return Lista de usuarios
	 */
	@RequestMapping(method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public List<Usuario> findAll(){
		return (List<Usuario>) usuarioService.findAll();
	}
	
	/**
	 * Metodo que busca un usuario por el id
	 * @param Id Identificador del usuario
	 * @return un objeto de tipo Usuario en formato json
	 * @throws ResourceNotFoundException excepcion lanzada en caso de no encontrarse el usuario.
	 */
	@RequestMapping(value = "{Id}", method = RequestMethod.GET, produces = "application/json")
	@ResponseBody
	public Usuario findById(@PathVariable Long Id) throws ResourceNotFoundException {
		return usuarioService.findById(Id);
	}
	
	/**
	 * Crea un nuevo usuario
	 * @param Usuario que se va a crear
	 * @return objeto de tipo usuario
	 * @throws UsuarioDomainException excepcion lanzada en caso de que el objeto no contenga todos sus datos.
	 */
	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Usuario create(@RequestBody Usuario user) throws UsuarioDomainException{
		return usuarioService.create(user);
	}
	
	/**
	 * Metodo para actualizar la informacion del usuario
	 * 
	 * @param user Usuario que se va a actualizar
	 * @param Id Identificacion del usuario
	 * @return Objeto de tipo usuario
	 * @throws ResourceNotFoundException excepcion lanzada en caso de no encontrarse el usuario.
	 * @throws UsuarioDomainException excepcion lanzada en caso de que el objeto no contenga todos sus datos.
	 */
	@RequestMapping(value = "{Id}",method = RequestMethod.PUT, produces = "application/json")
	@ResponseBody
	public Usuario update(@RequestBody Usuario user, @PathVariable Long Id) 
			throws UsuarioDomainException, ResourceNotFoundException {
		return usuarioService.update(Id, user);
	}
	
	/**
	 * Metodo para eliminar un usuario por el Id
	 * 
	 * @param Id Identificador del usuario a eliminar
	 * @throws ResourceNotFoundException excepcion lanzada en caso de no encontrarse el usuario.
	 */
	@RequestMapping(value = "{Id}",method = RequestMethod.DELETE, produces = "application/json")
	@ResponseBody
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable Long Id) throws ResourceNotFoundException{
		usuarioService.deleteById(Id);
	}
	
}
