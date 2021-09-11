package co.unicauca.Usuario.domain.service;

import java.util.List;

import co.unicauca.Usuario.domain.entity.Usuario;
import co.unicauca.Usuario.presentation.rest.exceptions.ResourceNotFoundException;
import co.unicauca.Usuario.presentation.rest.exceptions.UsuarioDomainException;

/**
 * Interfaz de operaciones de la bd de usuario
 * 
 * @author Jefferson Campo y Danny Diaz
 *
 */
public interface IUsuarioService {
	
	public List<Usuario> findAll();
	
	public Usuario findById(Long id) throws ResourceNotFoundException;
	
	public Usuario create(Usuario usuario) throws UsuarioDomainException;
	
	public Usuario update(Long id, Usuario usuario) throws UsuarioDomainException, ResourceNotFoundException;
	
	public void deleteById(Long Id) throws ResourceNotFoundException;

	public boolean verificarEmailPassword(Usuario user);
	
}
