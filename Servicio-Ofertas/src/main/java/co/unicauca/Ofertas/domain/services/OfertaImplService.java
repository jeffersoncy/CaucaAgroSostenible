package co.unicauca.Ofertas.domain.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import co.unicauca.Ofertas.access.dao.IOfertaDao;
import co.unicauca.Ofertas.domain.entity.Oferta;
import co.unicauca.Ofertas.presentation.rest.exceptions.OfertaDomainException;
import co.unicauca.Ofertas.presentation.rest.exceptions.OfertaError;
import co.unicauca.Ofertas.presentation.rest.exceptions.ResourceNotFoundException;

/**
 * Clase que implementa los metodos de la interface IOfertasService.
 * 
 * @author Jefferson Campo - Danny Diaz - Christian Tobar
 *
 */
@Service
public class OfertaImplService implements IOfertasService{
	
	/**
	 * Inyeccion de OfertaDao
	 */
	@Autowired
	private IOfertaDao ofertaDao;

	/**
	 * Metodo de busqueda de todas las ofertas
	 */
	@Override
	@Transactional(readOnly = true)
	public List<Oferta> findAll() {
		return (List<Oferta>) ofertaDao.findAll();
	}

	/**
	 * Metodo de busqueda por id de oferta
	 * 
	 * @param id Identificador de la oferta
	 * @return Objeto de tipo Oferta
	 */
	@Override
	public Oferta findById(Long id) throws ResourceNotFoundException {
		
		Oferta oferta = ofertaDao.findById(id).orElse(null);
		
		if(oferta == null) {
			throw new ResourceNotFoundException();
		}
		return oferta;
	}

	
	/**
	 * Metodo de creacion que añade una nueva oferta a la BD.
	 * 
	 * @param oferta Objeto de tipo Oferta
	 * @return Objeto de tipo Oferta
	 */
	@Override
	public Oferta create(Oferta oferta) throws OfertaDomainException {
		List<OfertaError> errores = validateDomain(oferta);
		
		if(!errores.isEmpty()) {
			throw new OfertaDomainException(errores);
		}
		
		return ofertaDao.save(oferta);
	}
	
	

	/**
	 * Metodo de actualizacion que modifica los atributos de una oferta en la BD.
	 * 
	 * @param id Identificador
	 * @param oferta Objeto de tipo Oferta
	 * @return Objeto de tipo Oferta
	 */
	@Override
	public Oferta update(Long id, Oferta oferta) throws ResourceNotFoundException, OfertaDomainException {
		
		Oferta auxOferta = this.findById(id);
		
		if(auxOferta == null) {
			throw new ResourceNotFoundException();
		}
		
		List<OfertaError> errores = validateDomain(oferta);
		
		if(!errores.isEmpty()) {
			throw new OfertaDomainException(errores);
		}
		
		auxOferta.setNomOferta(oferta.getNomOferta());
		auxOferta.setCantidad(oferta.getCantidad());
		auxOferta.setDescuento(oferta.getDescuento());
		auxOferta.setRutaImg(oferta.getRutaImg());
		auxOferta.setPrecio(oferta.getPrecio());
		
		return ofertaDao.save(auxOferta);
	}

	
	/**
	 * Metodo de eliminacion que suprime una oferta en la BD.
	 * 
	 * @param id Identificador
	 */
	@Override
	@Transactional
	public void deleteById(Long id) throws ResourceNotFoundException {
		
		Oferta auxOferta = this.findById(id);
		
		if(auxOferta == null) {
			
			throw new ResourceNotFoundException();
		}
		
		ofertaDao.deleteById(id);
	}
	
	/**
	 * Aplica validaciones o reglas del dominio para una oferta antes de ser agregado o modificado.
	 * @param oferta Oferta a validar
	 * @return lista de errores de validación.
	 */
	private List<OfertaError> validateDomain(Oferta oferta){
		List<OfertaError> errors = new ArrayList<>();
		if(oferta.getNomOferta() == null || oferta.getNomOferta().isBlank()) {
			errors.add(new OfertaError(EnumErrorCodes.EMPTY_FIELD, "nomOferta", "El nombre de la oferta es obligatorio"));
		}
		
		if(oferta.getRutaImg() == null || oferta.getRutaImg().isBlank()) {
			errors.add(new OfertaError(EnumErrorCodes.EMPTY_FIELD, "rutaImg", "La ruta de la Imagen es obligatoria"));
		}
		
		if (oferta.getCantidad() <= 0) {
			errors.add(new OfertaError(EnumErrorCodes.INVALID_NUMBER, "cantidad",
					"La cantidad de la oferta es obligatoria y mayor a cero"));
		}
		
		if (oferta.getDescuento() <= 0) {
			errors.add(new OfertaError(EnumErrorCodes.INVALID_NUMBER, "descuanto",
					"El descuanto de la oferta es obligatorio y mayor a cero"));
		}
		
		if (oferta.getPrecio() <= 0) {
			errors.add(new OfertaError(EnumErrorCodes.INVALID_NUMBER, "id oferta",
					"El precio de la oferta es obligatorio y mayor a cero"));
		}
		
		return errors;
	}

}
