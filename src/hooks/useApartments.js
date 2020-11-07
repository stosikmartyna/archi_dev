import { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import firebase from 'firebase';

export const useApartments = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [apartments, setApartments] = useState([]);
    const [filteredApartments, setFilteredApartments] = useState([]);
    const {user} = useContext(AuthContext);

    const postFormValues = async (values) => {
        setIsFetching(true);
        try {
            await firebase.database().ref('apartments').push(
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

    const getApartments = useCallback(async (defaultFilter) => {
        setIsFetching(true);
        try {
            const response = await firebase.database().ref('apartments').once('value')
            const data = [];
            // map object entries to get array instead of nested objects from firebase
            response.forEach((element => {
                const item = element.val();
                item.key = element.key;
                
                data.push(item);
            }));
            setApartments(data);

            const filteredData = data.filter(data => data.status === defaultFilter);
            setFilteredApartments(filteredData);
        } catch (err) {
            console.warn(err.message);
        } finally {
            setIsFetching(false);
        }
    }, []);

    return {
        isFetching,
        apartments,
        filteredApartments,
        postFormValues,
        getApartments,
        filterApartments: setFilteredApartments,
    }
}