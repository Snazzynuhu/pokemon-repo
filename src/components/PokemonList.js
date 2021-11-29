import React,{useState} from 'react'
import {Modal} from "./Modal"
const PokemonList = ({id, name, image, type, homeImg,weight}) => {
    const [open, setOpenModal] = useState(false);

    const _handleToggle = () => {
      setOpenModal(!open)
    }
    return (
        <>
        <div className="pokemon-box" 
        onClick={_handleToggle} key={id}>
            <h2 className="pokemon-name">{name}</h2>
            <img src={image} alt={name} />
        </div>
         <Modal isOpen={open} handleToggle={_handleToggle}>
        <h1>Name: {name}</h1>
      <div className="content">
    <div>
      <h4>Current form</h4>
      <img className="current-image" src={image} alt={name} />
    </div>
     <div>
      <h4>Old form</h4>
    <img className="old-image" src={homeImg} alt={name} />  
    </div>
      </div>
    <h3 className='weight'>Weight: {weight}</h3>
    <h3 className='nature'>Nature: {type}</h3>
      </Modal>
        </>
    )
}

export default PokemonList
