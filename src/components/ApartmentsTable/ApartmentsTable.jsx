import React, { useState, useCallback, useEffect } from 'react';
import firebase from 'firebase';
import { table } from './ApartmentsTable.styles';

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
                <table className={table}>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Floor</th>
                            <th>Area (m²)</th>
                            <th>Rooms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apartments.map(apartment => {
                            return (
                                <tr key={apartment.key}>
                                    <td>{apartment.number}</td>
                                    <td>{apartment.floor}</td>  
                                    <td>{apartment.area}</td>
                                    <td>{apartment.rooms}</td>
                                </tr>
                            )
                        })}
                    </tbody>            
                </table>
        </>
    )
}