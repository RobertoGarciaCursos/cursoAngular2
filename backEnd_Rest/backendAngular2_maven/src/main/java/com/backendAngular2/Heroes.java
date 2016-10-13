package com.backendAngular2;

import java.util.ArrayList;


/**
 * @author Roberto
 * Clase estatica que sevirá a modo de BD para el 
 * servidor creado.
 */
public class Heroes {
	private static ArrayList<Heroe> lista = null;	
	/**
	 * Devuelve la lista de heroes
	 * @return la lista de heroes
	 */
	public static ArrayList<Heroe> getLista(){
		if(lista == null){
			lista = new ArrayList<Heroe>();
			lista.add(new Heroe((long)11, "Mr. Nice"));
			lista.add(new Heroe((long)12, "Narco"));
			lista.add(new Heroe((long)13, "Bombasto"));
			lista.add(new Heroe((long)14, "Celeritas"));
			lista.add(new Heroe((long)15, "Magneta"));
			lista.add(new Heroe((long)16, "RubberMan"));
			lista.add(new Heroe((long)17, "Dynama"));
			lista.add(new Heroe((long)18, "Dr IO"));
			lista.add(new Heroe((long)19, "Magna"));
			lista.add(new Heroe((long)20, "Tornado"));
		}
		return lista;
	}
	/**
	 * Introduce un nuevo heroe
	 * @param heroe
	 */
	public static void putNewHeroe(Heroe heroe){
		lista.add(heroe);
	}
	/**
	 * Borra un heroe por el id pasado
	 * @param idHeroe
	 */
	public static void deleteHeroe(long idHeroe){
		for(Heroe heroe : lista){
			if(heroe.getId() == idHeroe){
				lista.remove(heroe);
				break;
			}
		}
	}
	
	/**
	 * Devuelve un heroe de la lista 
	 * si este existe en la lista
	 * @param idHeroe
	 * @return heroe de la lista / null
	 */
	public static Heroe getHeroe(long idHeroe){
		Heroe hero = null;
		for(Heroe heroe: lista){
			if(heroe.getId() == idHeroe){
				hero = heroe;
				break;
			}
		}
		return hero;
	}
}
