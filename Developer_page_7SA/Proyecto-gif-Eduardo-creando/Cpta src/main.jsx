 // Importamos la biblioteca de React
import React from 'react'
// Importamos la biblioteca ReactDOM, que proporciona métodos específicos del DOM para
//React
import ReactDOM from 'react-dom/client'
// Importamos un componente llamado ProyectoGif desde otro archivo en el mismo directorio
import { ProyectoGif } from './ProyectoGif'
//Importamos los estilos que se encuentran en src. ¿Qué significaba "./"?
import './styles.css'

export const ProyectoGif = () => 
    {
        //Usando el Hook useState (función que permite agregar estado de React a los
        //componentes funcionales)
        //Para evitar el posible error de Javascript por no definir un valor inicial, se le
        //pone un arreglo que tenga 'One Punch' como valor inicial
        const [categories, setCategories] = useState(['One Punch'])
        return

            
    }
    import { useState} from 'react';
// Importamos useEffect y useState de React
import { useEffect, useState } from 'react';
// Importamos la función getGifs de helpers
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (category) => 
    {
    // creamos una vari
    // Creamos una variable de estado images y una función para actualizarla setImages
        const [images, setImages] = useState([]);
        // Creamos una variable de estado isLoading y una función para actualizarla
        //setIsLoading
        const [isLoading, setIsLoading] = useState( true );
        // Definimos una función asíncrona getImages
        const getImages = async() => {
        // Obtenemos nuevas imágenes de la categoría con la función getGifs
        const newImages = await getGifs( category );
        // Actualizamos images con las nuevas imágenes
        setImages(newImages);
        // Establecemos isLoading en falso
        setIsLoading(false);
}
// Usamos useEffect para llamar a getImages cuando se monta el componente
        useEffect( () => 
            {
                getImages();    
            }, []);
        // Devolvemos un objeto con las imágenes y el estado de carga
        return 
        {
            images,
            isLoading
        }
    }