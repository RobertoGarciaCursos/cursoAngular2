package com.backendAngular2;

import java.util.ArrayList;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
/**
 * 
 * @author Roberto
 * Clase controladora que responde a las peticiones http.
 */
@RestController
@RequestMapping(value="/heroes")
@CrossOrigin(methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class Controller {
	
	/**
	 * Metodo que retorna la lista de heroes;
	 * @return retorna la lista de heroes;
	 */
	@RequestMapping( value="/getHeroes", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<Heroe> getHeroes(){
		return Heroes.getLista();
	}
	
	/**
	 * Metodo que instarta un nuevo heroe en la lista
	 * @param heroe
	 */
	@RequestMapping( value="/putHeroe", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void puttHeroe(@RequestBody Heroe heroe){
		Heroes.putNewHeroe(heroe);
	}
	
	/**
	 * Método que borra un heroe de la lista
	 * @param idHeroe
	 */
	@RequestMapping( value="/deleteHeroe", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void deletetHeroe(@RequestBody long idHeroe){
		Heroes.deleteHeroe(idHeroe);
	}
	/**
	 * metodo que devuelve un heroe mediante un id
	 * @param idHeroe
	 * @return Heroe filtrado
	 */
	@RequestMapping( value="/getHeroe/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Heroe getHeroe(@PathVariable long idHeroe){
		return Heroes.getHeroe(idHeroe);
	}
	
}
