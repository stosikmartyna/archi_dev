import React, { useEffect } from 'react';
import { useOffices } from '../../hooks/useOffices';
import { Spinner } from '../../components/Spinner/Spinner';
import { DashboardBox } from './DashboardBox';
import { AppLogo } from '../AppLogo/AppLogo';
import { cx } from 'emotion';
import { boxes, officesBoxContent, officesBoxStatuses, officesBoxStats, boxValue } from './Dashboard.styles';

export const Dashboard = () => {
    const {getOffices, statistics, isFetching} = useOffices();

    useEffect(() => {
        getOffices(); 
    }, [getOffices])

    return (
        <>
            {isFetching && <Spinner />}
            <AppLogo />
            <div className={boxes}>
                <DashboardBox header={'Offices'}>
                    <div className={officesBoxContent}>
                        <div className={officesBoxStatuses}>
                            <span>Available</span> 
                            <span>Unavailable</span>
                            <span>Reserved</span>
                        </div>
                        <div className={cx(officesBoxStatuses, officesBoxStats)}>
                            <span>{statistics?.availableOffices}</span>
                            <span>{statistics?.unavailableOffices}</span>
                            <span>{statistics?.reservedOffices}</span>
                        </div>
                    </div>
                </DashboardBox>
                <DashboardBox header={'Total value of offices'}>
                    <span className={boxValue}>£ {statistics?.totalValue}</span>
                </DashboardBox>
                <DashboardBox header={'Total floor area'}>
                    <span className={boxValue}>{statistics?.totalArea} (m²)</span>
                </DashboardBox>
                <DashboardBox header={'Floors'}>
                    <span className={boxValue}>52</span>
                </DashboardBox>
            </div>           
        </>
    )
}