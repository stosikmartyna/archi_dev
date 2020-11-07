import React, { useState, useEffect } from 'react';
import { useApartments } from '../../hooks/useApartments';
import { Header } from '../../uiComponents/Header';
import { Spinner } from '../Spinner/Spinner';
import { apartmentsSwitch, table } from './ApartmentsTable.styles';

export const ApartmentsTable = () => {
    const {getApartments, apartments, filterApartments, filteredApartments, isFetching} = useApartments();
    const [activeFilter, setActiveFilter] = useState();

    useEffect(() => {
        getApartments();
    }, [getApartments])

    const getByStatus = (status) => {
        const filteredData = apartments.filter(apartment => apartment.status === status);
        filterApartments(filteredData);
        setActiveFilter(status);
    }

    const isTableExtended = activeFilter !== 'Available';
    
    return (
        <>
            <Header size={'medium'} margin={'1.5'}>Apartments</Header>
            <div className={apartmentsSwitch}>
                <span onClick={() => getByStatus('Available')}>Available</span>
                <span onClick={() => getByStatus('Unavailable')}>Unavailable</span>
                <span onClick={() => getByStatus('Reserved')}>Reserved</span>
            </div>
            <table className={table}>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Floor</th>
                        <th>Area (m²)</th>
                        <th>Rooms</th>
                        <th>Status</th>
                        {isTableExtended && (
                            <>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Contract</th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {filteredApartments.map(apartment => {
                        return (
                            <tr key={apartment.key}>
                                <td>{apartment.number}</td>
                                <td>{apartment.floor}</td>  
                                <td>{apartment.area}</td>
                                <td>{apartment.rooms}</td>
                                <td>{apartment.status}</td>
                                {isTableExtended && (
                                    <>
                                        <td>{apartment.client.name}</td>
                                        <td>{apartment.client.phone}</td>
                                        <td>{apartment.contract}</td>
                                    </>
                                )}                               
                            </tr>
                        )
                    })}
                </tbody>            
            </table>
            {isFetching && <Spinner />}
        </>
    )
}