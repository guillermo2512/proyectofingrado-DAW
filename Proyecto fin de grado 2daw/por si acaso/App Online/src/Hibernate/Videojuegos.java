package Hibernate;
// Generated 11-nov-2020 11:25:07 by Hibernate Tools 4.3.1



/**
 * Videojuegos generated by hbm2java
 */
public class Videojuegos  implements java.io.Serializable 
{
     private Integer idArticulo;
     private String nombre;
     private String plataforma;
     private Integer precioArticulo;
     private String claves;

    public Videojuegos() 
    {
        
    }

    public Videojuegos(String nombre, String plataforma, Integer precioArticulo, String claves) 
    {
       this.nombre = nombre;
       this.plataforma = plataforma;
       this.precioArticulo = precioArticulo;
       this.claves = claves;
    }
   
    public Integer getIdArticulo() 
    {
        return this.idArticulo;
    }
    
    public void setIdArticulo(Integer idArticulo) 
    {
        this.idArticulo = idArticulo;
    }
    public String getNombre() 
    {
        return this.nombre;
    }
    
    public void setNombre(String nombre) 
    {
        this.nombre = nombre;
    }
    public String getPlataforma() 
    {
        return this.plataforma;
    }
    
    public void setPlataforma(String plataforma) 
    {
        this.plataforma = plataforma;
    }
    public Integer getPrecioArticulo()
    {
        return this.precioArticulo;
    }
    
    public void setPrecioArticulo(Integer precioArticulo) 
    {
        this.precioArticulo = precioArticulo;
    }
    public String getClaves() 
    {
        return this.claves;
    }
    
    public void setClaves(String claves) 
    {
        this.claves = claves;
    }




}


