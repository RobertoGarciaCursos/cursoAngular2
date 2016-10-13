package com.backendAngular2;

public class Heroe {

	private Long id;
	private String nombre;
	
	public Heroe (Long id , String nombre){
		this.id = id;
		this.nombre = nombre;
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
