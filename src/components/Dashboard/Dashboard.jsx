import React, { useEffect } from 'react';
import { useOffices } from '../../hooks/useOffices';
import { Header } from '../../uiComponents/Header';
import { appHeader, boxes, boxContainer } from './Dashboard.styles';
import { Spinner } from '../../components/Spinner/Spinner';

export const Dashboard = () => {
    const {getOffices, statistics, isFetching} = useOffices();

    useEffect(() => {
        getOffices(); 
    }, [getOffices])

    return (
        <>
            {isFetching && <Spinner />}
            <h1 className={appHeader}>
                Archi
                <span>Dev</span>
            </h1>
            <div className={boxes}>
                <div className={boxContainer}>
                    <Header size={'small'} margin={'1.5'} fontWeight={'bolder'}>Offices</Header>
                    <p>Available {statistics?.availableOffices}</p>
                    <p>Unavailable {statistics?.unavailableOffices}</p>
                    <p>Reserved {statistics?.reservedOffices}</p>
                </div>
                <div className={boxContainer}>
                    <Header size={'small'} margin={'1.5'} fontWeight={'bolder'}>Total value of offices</Header>
                </div>
                <div className={boxContainer}>
                    <Header size={'small'} margin={'1.5'} fontWeight={'bolder'}>Total floor area</Header>
                </div>
                <div className={boxContainer}>
                    <Header size={'small'} margin={'1.5'} fontWeight={'bolder'}>Floors</Header>
                </div>
            </div>           
        </>
    )
}