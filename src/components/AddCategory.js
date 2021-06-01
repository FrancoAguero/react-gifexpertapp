import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {

    const [imputValue, setImputValue] = useState('')

    const handleChange = (e) => {
        setImputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( imputValue.trim().length > 2){
            setCategories( categories => [imputValue, ...categories])
            setImputValue('')
        } 
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                className='addCategory'
                placeholder={"Buscar GIF's"}
                value={ imputValue }
                onChange={ handleChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


