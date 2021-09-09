package co.unicauca.Inversionistas.domain.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.Inversionistas.access.dao.IInversionistasDao;
import co.unicauca.Inversionistas.domain.entity.Inversionista;
import co.unicauca.Inversionistas.presentation.rest.exceptions.InversionistaDomainException;
import co.unicauca.Inversionistas.presentation.rest.exceptions.InversionistaError;
import co.unicauca.Inversionistas.presentation.rest.exceptions.ResourceNotFoundException;

/**
 * Clase que implementa los metodos de la interface IInversionistasService.
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
@Service
public class InversionistasImplService implements IInversionistasService {
	
	/**
	 * Inyeccion de InersionistasDao
	 */
	@Autowired
	private IInversionistasDao invDao;
	
	/**
	 * Metodo de busqueda de todas los inversionistas
	 */
	@Override
	@Transactional(readOnly = true)
	public List<Inversionista> findAll() {
		return (List<Inversionista>) invDao.findAll();
	}
	
	/**
	 * Metodo de busqueda por id de inversionista
	 * 
	 * @param id Identificador del inversionista
	 * @return Objeto de tipo Inversionista
	 */
	@Override
	public Inversionista findById(Long id) throws ResourceNotFoundException {
		
		Inversionista inv = invDao.findById(id).orElse(null);
		
		if(inv == null) {
			throw new ResourceNotFoundException();
		}
		return inv;

	}
	
	/**
	 * Metodo de creacion que añade un nuevo inversionista a la BD.
	 * 
	 * @param invers Objeto de tipo Inversionista
	 * @return Objeto de tipo Inversionista
	 */
	@Override
	public Inversionista create(Inversionista invers) throws InversionistaDomainException {
List<InversionistaError> errores = validateDomain(invers);
		
		if(!errores.isEmpty()) {
			throw new InversionistaDomainException(errores);
		}
		
		return invDao.save(invers);
	}

	/**
	 * Metodo de actualizacion que modifica los atributos de un inversionista en la BD.
	 * 
	 * @param id Identificador
	 * @param invers Objeto de tipo Inversionista
	 * @return Objeto de tipo Inversionista
	 */
	@Override
	public Inversionista update(Long id, Inversionista invers)
			throws ResourceNotFoundException, InversionistaDomainException {


        Inversionista auxInv = this.findById(id);
		
		if(auxInv == null) {
			throw new ResourceNotFoundException();
		}
		
		List<InversionistaError> errores = validateDomain(invers);
		
		if(!errores.isEmpty()) {
			throw new InversionistaDomainException(errores);
		}
		
		auxInv.setNombre(invers.getNombre());
		auxInv.setCorreo(invers.getCorreo());
		auxInv.setDescripcion(invers.getDescripcion());
		auxInv.setRutaimg(invers.getRutaimg());
	
		
		return invDao.save(auxInv);
	}
	
	
	/**
	 * Metodo de eliminacion que suprime un inversionista de la BD.
	 * 
	 * @param id Identificador
	 */
	@Override
	@Transactional
	public void deleteById(Long id) throws ResourceNotFoundException {

        Inversionista auxInv = this.findById(id);
		
		if(auxInv == null) {
			
			throw new ResourceNotFoundException();
		}
		
		invDao.deleteById(id);
 
	}
	
	/**
	 * Aplica validaciones o reglas del dominio para un inversionista antes de ser agregado o modificado.
	 * @param invers Inversionista a validar
	 * @return lista de errores de validación.
	 */
	private List<InversionistaError> validateDomain(Inversionista invers){
		
		List<InversionistaError> errors = new ArrayList<>();
		
		if(invers.getNombre() == null || invers.getNombre().isBlank()) {
			errors.add(new InversionistaError(EnumErrorCodes.EMPTY_FIELD, "nombre", "El nombre del inversionista es obligatorio"));
		}
		
		if(invers.getRutaimg() == null || invers.getRutaimg().isBlank()) {
			errors.add(new InversionistaError(EnumErrorCodes.EMPTY_FIELD, "rutaimg", "La ruta de la Imagen es obligatoria"));
		}
		
		if(invers.getDescripcion() == null || invers.getDescripcion().isBlank()) {
			errors.add(new InversionistaError(EnumErrorCodes.EMPTY_FIELD, "descripcion", "La descripcion del inversionista es obligatoria"));
		}
		
		if(invers.getCorreo() == null || invers.getCorreo().isBlank()) {
			errors.add(new InversionistaError(EnumErrorCodes.EMPTY_FIELD, "correo", "El correo del inversionista es obligatorio"));
		}
		return errors;
	}

	
	
	
	
	
	
	
	

}
