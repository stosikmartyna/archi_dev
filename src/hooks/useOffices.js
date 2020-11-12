import { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import firebase from 'firebase';

export const useOffices = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [offices, setOffices] = useState([]);
    const [editingOffice, setEditingOffice] = useState();
    const [filteredOffices, setFilteredOffices] = useState([]);
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
        } catch (err) {
            console.warn(err.message);
        } finally {
            setIsFetching(false);
        }
    }, []);

    const getSingleOffice = useCallback(async (key) => {
        setIsFetching(true);
        try {
            const response = await firebase.database().ref(`offices/${key}`).once('value');
            setEditingOffice(response.val())
        } catch (err) {
            console.warn(err.message);
        } finally {
            setIsFetching(false);
        }
    }, []);

    const updateSingleOffice = async (key, officeData) => {
        setIsFetching(true);
        try {
            await firebase.database().ref(`offices/${key}`).update(officeData);
            alert('Edited correctly');
        } catch (err) {
            alert(err);
        } finally {
            setIsFetching(false);
        }
    };

    const handleEditOfficeChange = (event) => {
        setEditingOffice({...editingOffice, [event.target.id]: event.target.value})
    }

    return {
        isFetching,
        offices,
        filteredOffices,
        editingOffice,
        postFormValues,
        getOffices,
        getSingleOffice,
        updateSingleOffice,
        handleEditOfficeChange,
        filterOffices: setFilteredOffices,
    }
}