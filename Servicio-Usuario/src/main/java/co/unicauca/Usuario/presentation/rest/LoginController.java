package co.unicauca.Usuario.presentation.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import co.unicauca.Usuario.domain.entity.Usuario;
import co.unicauca.Usuario.domain.service.IUsuarioService;
import co.unicauca.Usuario.presentation.rest.exceptions.ResourceNotFoundException;
import co.unicauca.Usuario.presentation.rest.exceptions.UsuarioDomainException;

@RestController
@RequestMapping("login")
public class LoginController {
	
	@Autowired
	private IUsuarioService usuarioService;
	
	/**
	 * Crea un nuevo usuario
	 * @param Usuario que se va a crear
	 * @return objeto de tipo usuario
	 * @throws UsuarioDomainException excepcion lanzada en caso de que el objeto no contenga todos sus datos.
	 * @throws ResourceNotFoundException 
	 */
	@RequestMapping(method = RequestMethod.POST, produces = "application/json")
	@ResponseBody
	public Usuario login(@RequestBody Usuario user) throws UsuarioDomainException{
		if(usuarioService.verificarEmailPassword(user)) {
			return user;
		} else {
			return null;	
		}
	}
}
