import React, { useEffect } from 'react';
import { useApartments } from '../../hooks/useApartments';
import { Header } from '../../uiComponents/Header';
import { Spinner } from '../Spinner/Spinner';
import { table } from './ApartmentsTable.styles';

export const ApartmentsTable = () => {
    const {getApartments, apartments, isFetching} = useApartments();

    useEffect(() => {
        getApartments();
    }, [getApartments])

    return (
        <>
            <Header size={'medium'} margin={'1.5'}>Apartments</Header>
            <table className={table}>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Floor</th>
                        <th>Area (m²)</th>
                        <th>Rooms</th>
                        <th>Status</th>
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
                                <td>{apartment.status}</td>
                            </tr>
                        )
                    })}
                </tbody>            
            </table>
            {isFetching && <Spinner />}
        </>
    )
}