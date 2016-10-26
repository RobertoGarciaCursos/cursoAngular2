package com.backendAngular2;

import java.io.Serializable;

public class Heroe implements Serializable{

	private Long id;
	private String nombre;
	
	public Heroe(){
		
	}
	public Heroe (Long id , String nombre){
		this.id = id;
		this.nombre = nombre;
	}
	public Heroe(String nombre){
		this.nombre = nombre;
		this.id = (long) Heroes.getLista().size() + 1;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
}
