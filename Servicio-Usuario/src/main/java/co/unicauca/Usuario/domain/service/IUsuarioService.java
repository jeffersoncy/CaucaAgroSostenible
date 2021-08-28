package co.unicauca.Usuario.domain.service;

import java.util.List;

import co.unicauca.Usuario.domain.entity.Usuario;

public interface IUsuarioService {
	
	public List<Usuario> findAll();
	
	public Usuario findById(Long id);
	
	public Usuario create(Usuario usuario);
	
	public Usuario update(Long id, Usuario usuario);
	
	public void deleteById(Long Id);
	
}
