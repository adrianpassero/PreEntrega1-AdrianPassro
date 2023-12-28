import React from 'react'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (

    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a la tienda para Michis" />
    </>
  )
}

export default App