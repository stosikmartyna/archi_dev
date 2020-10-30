import React, { useContext, useState } from 'react';
import firebase from 'firebase';
import NumberFormat from 'react-number-format';
import { form } from './NewApartmentForm.styles';
import { AuthContext } from '../../context/AuthProvider';

const initialState = {
    number: '',
    area: '',
    floor: '',
    rooms: '',
    created: {user: '', date: ''},
}

export const NewApartmentForm = () => {
    const [inputsValues, setInputsValues] = useState(initialState);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const {user} = useContext(AuthContext);

    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value})
    }

    const submitForm = (event) => {
        event.preventDefault();
        
        const isFormValid = inputsValues.number.trim() !== ''
            && inputsValues.area.trim() !== ''
            && inputsValues.floor.trim() !== '' 
            && inputsValues.rooms.trim() !== ''

        const postFormValues = async() => {
            setIsFetching(true);
            try {
                await firebase.database().ref('apartments').push(
                    {
                        ...inputsValues,
                        created: {
                            user: user.email,
                            date: new Date().toISOString(),
                        }
                    }
                );
                alert('Sent correctly');
                setInputsValues(initialState);
                setIsFormSubmitted(false);
            } catch (err) {
                alert(err);
            } finally {
                setIsFetching(false);
            }
        };
        
        setIsFormSubmitted(true);
        isFormValid && postFormValues();
    }

    const displayError = (value) => {
        const isNotValid = isFormSubmitted && value.trim() === '';

        if (isNotValid) {
            return <span>This field is required</span>
        }
    }

    return (
        <>
            <h1>New apartment</h1>
            <form className={form} onSubmit={submitForm}>
                <label htmlFor='number'>Number</label>
                <NumberFormat 
                    id={'number'}
                    value={inputsValues.number} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                {displayError(inputsValues.number)}
            
                <label htmlFor='floor'>Floor</label>
                <NumberFormat 
                    id={'floor'}
                    value={inputsValues.floor} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                {displayError(inputsValues.floor)}
                
                <label htmlFor='area'>Area (m²)</label>
                <NumberFormat
                    id={'area'}
                    value={inputsValues.area} 
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={2}
                />
                {displayError(inputsValues.area)}
                
                <label htmlFor='rooms'>Rooms N°</label>
                <NumberFormat 
                    id={'rooms'}
                    value={inputsValues.rooms}
                    onChange={handleInputChange}
                    allowNegative={false}
                    autoComplete={'off'}
                    decimalScale={0}
                />
                {displayError(inputsValues.rooms)}
                
                <button disabled={isFetching}>
                    {isFetching ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </>
    )
}