import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { form } from './NewApartmentForm.styles';

const initialState = {
    number: '',
    area: '',
    floor: '',
    rooms: '',
}

export const NewApartmentForm = () => {
    const [inputsValues, setInputsValues] = useState(initialState);

    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value})
    }

    return (
        <>
            <h1>New apartment</h1>
            <form className={form}>
                <label htmlFor='number'>Number</label>
                <NumberFormat 
                    id={'number'}
                    value={inputsValues.number} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
            
                <label htmlFor='floor'>Floor</label>
                <NumberFormat 
                    id={'floor'}
                    value={inputsValues.floor} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                
                <label htmlFor='area'>Area (m²)</label>
                <NumberFormat
                    id={'area'}
                    value={inputsValues.area} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={2}
                />
                
                <label htmlFor='rooms'>Rooms N°</label>
                <NumberFormat 
                    id={'rooms'}
                    value={inputsValues.rooms}
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                
                <button>Submit</button>
            </form>
        </>
    )
}