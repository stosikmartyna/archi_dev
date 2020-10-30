import React, { useState, useCallback, useEffect } from 'react';
import firebase from 'firebase';

export const ApartmentsTable = () => {
    const [apartments, setApartments] = useState([]);

    const getApartments = useCallback(() => {
        firebase.database().ref('apartments')
            .once('value')
            .then(snapshot => {
                const data = [];
                // map object entries to get array instead of nested objects from firebase
                snapshot.forEach((child => {
                    const item = child.val();
                    item.key = child.key;
                    
                    data.push(item);
                }));
                setApartments(data);
            })
            .catch(err => console.warn(err.message));
    }, []);

    useEffect(() => {
        getApartments();
    }, [getApartments])

    return (
        <>
            <h1>Apartments</h1>
            {apartments.map(apartment => {
                return (
                    <li key={apartment.key}>
                        {apartment.number}
                    </li>
                )
            })}
        </>
    )
}