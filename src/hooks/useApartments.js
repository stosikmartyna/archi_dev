import { useCallback, useContext, useState } from 'react';
import firebase from 'firebase';
import { AuthContext } from '../context/AuthProvider';

export const useApartments = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [apartments, setApartments] = useState([]);
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

    return {
        isFetching,
        apartments,
        postFormValues,
        getApartments,
    }
}