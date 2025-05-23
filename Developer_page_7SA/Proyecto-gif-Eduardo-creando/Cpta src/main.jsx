// Importamos la biblioteca de React
import React from 'react'
// Importamos la biblioteca ReactDOM, que proporciona métodos específicos del DOM para
React
import ReactDOM from 'react-dom/client'
// Importamos un componente llamado ProyectoGif desde otro archivo en el mismo directorio
import { ProyectoGif } from './ProyectoGif'
//Importamos los estilos que se encuentran en src. ¿Qué significaba "./"?
import './styles.css'


//funcion tra
function (a)
{
    return a + 100;
}

(a) => a + 100;

ReactDOM.createRoot(document.getElementById('root')).render
(
// React.StrictMode es un componente especial de React que comprueba si tu aplicación
//tiene problemas potenciales durante el desarrollo
    <React.StrictMode>
        {/* Aquí es donde se renderiza el componente ProyectoGif */}
        <ProyectoGif />
    </React.StrictMode>,
)
export const ProyectoGif = () => 
    {
        return (
        <>
        {/* Título */}
        <h1>ProyectoGif</h1>
        {/* Input */}
        {/* listado de gifs */}
        {/*Gif Item*/}
        </>
        )
    }

export const ProyectoGif = () => {
    //Usando el Hook useState (función que permite agregar estado de React a los
    //componentes funcionales)
    //Para evitar el posible error de Javascript por no definir un valor inicial, se le
    //pone un arreglo que tenga 'One Punch' como valor inicial
    const [categories, setCategories] = useState(['One Punch'])
    return ()

import {useState} from 'react';

// Importamos useEffect y useState de React
import { useEffect, useState } from 'react';
// Importamos la función getGifs de helpers
import { getGifs } from '../helpers/getGifs';
// Definimos un hook personalizado llamado useFetchGifs que toma una categoría como
//argumento

export const useFetchGifs = (category) => 
    {
        const [images, setImages] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const getImages = async () => {
            const newImages = await getGifs(category);
            setImages(newImages);
            setIsLoading(false);
        }
        useEffect(() => {
            getImages();
        }, []);
        return {
            images,
            isLoading
        }
    };
    export const = getGifs = async (category) => {