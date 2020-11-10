import React, { useState, useEffect } from 'react';
import { useOffices } from '../../hooks/useOffices';
import { Header } from '../../uiComponents/Header';
import { Spinner } from '../Spinner/Spinner';
import { tabs, tab, activeTab, table, noDataInfo } from './OfficesList.styles';

export const OfficesList = () => {
    const {getOffices, offices, filterOffices, filteredOffices, isFetching} = useOffices();
    const [activeFilter, setActiveFilter] = useState('Available');

    useEffect(() => {
        getOffices(activeFilter); 
    }, [getOffices, activeFilter])

    const handleFilterChange = (status) => {
        const filteredData = offices.filter(office => office.status === status);
        filterOffices(filteredData);
        setActiveFilter(status);
    }

    const isTableExtended = activeFilter !== 'Available';
    const isDataEmpty = filteredOffices.length === 0;
    
    const getTabClassName = (status) => {
        return status === activeFilter ? activeTab : tab
    }

    return (
        <>
            <Header size={'medium'} margin={'1.5'}>Offices</Header>
            <div className={tabs}>
                <span className={getTabClassName('Available')} onClick={() => handleFilterChange('Available')}>Available</span>
                <span className={getTabClassName('Unavailable')} onClick={() => handleFilterChange('Unavailable')}>Unavailable</span>
                <span className={getTabClassName('Reserved')} onClick={() => handleFilterChange('Reserved')}>Reserved</span>
            </div>
            <table className={table}>
                <thead>
                    <tr>
                        <th>Office ID</th>
                        <th>Floor</th>
                        <th>Area (m²)</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Type</th>
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
                    {filteredOffices.map(office => {
                        return (
                            <tr key={office.key}>
                                <td>{office.id}</td>
                                <td>{office.floor}</td>
                                <td>{office.area}</td>
                                <td>{office.location}</td>
                                <td>{office.price}</td>
                                <td>{office.status}</td>
                                <td>{office.type}</td>           
                            </tr>
                        )
                    })}
                </tbody>            
            </table>
            {isFetching && <Spinner />}
            {!isFetching && isDataEmpty && (
                <span className={noDataInfo}>
                    No data has been found
                </span>
            )}
        </>
    )
}