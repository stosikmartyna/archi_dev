import { useCallback, useState } from 'react';
import firebase from 'firebase';

export const useSingleOffice = () => {
    const [editingOffice, setEditingOffice] = useState();
    const [isFetching, setIsFetching] = useState(false);

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

    const handleClientDataChange = (event) => {
        setEditingOffice({
            ...editingOffice, 
            client: {
                ...editingOffice.client, [event.target.id]: event.target.value
            }
        })
    }

    return {
        isFetching,
        editingOffice,
        getSingleOffice,
        updateSingleOffice,
        handleEditOfficeChange,
        handleClientDataChange,
    }
}