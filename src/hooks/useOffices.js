import { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import firebase from 'firebase';

export const useOffices = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [offices, setOffices] = useState([]);
    const [filteredOffices, setFilteredOffices] = useState([]);
    const [statistics, setStatistics] = useState(undefined);

    const {user} = useContext(AuthContext);

    const postFormValues = async (values) => {
        setIsFetching(true);
        try {
            await firebase.database().ref('offices').push(
                {
                    ...values,
                    created: {
                        user: user.email,
                        date: new Date().toISOString(),
                    }
                }
            );
            alert('Sent correctly');
            return true;
        } catch (err) {
            alert(err);
        } finally {
            setIsFetching(false);
        }
    };

    const getOffices = useCallback(async (defaultFilter) => {
        setIsFetching(true);
        try {
            const response = await firebase.database().ref('offices').once('value')
            const data = [];
            // map object entries to get array instead of nested objects from firebase
            response.forEach((element => {
                const item = element.val();
                item.key = element.key;
                
                data.push(item);
            }));
            setOffices(data);

            const filteredData = data.filter(data => data.status === defaultFilter);
            setFilteredOffices(filteredData);

            setStatistics({
                availableOffices: data.filter(office => office.status === 'Available').length,
                unavailableOffices: data.filter(office => office.status === 'Unavailable').length,
                reservedOffices: data.filter(office => office.status === 'Reserved').length, 
                totalValue: data.map(office => Number(office.price)).reduce((acc, next) => acc + next),
                totalArea: data.map(office => Number(office.area)).reduce((acc, next) => acc + next),
            })
        } catch (err) {
            console.warn(err.message);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        offices,
        filteredOffices,
        statistics,
        postFormValues,
        getOffices,
        filterOffices: setFilteredOffices,
    }
}