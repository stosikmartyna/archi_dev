import { useContext, useState } from 'react';
import firebase from 'firebase';
import { AuthContext } from '../context/AuthProvider';

export const useApartments = () => {
    const [isFetching, setIsFetching] = useState(false);
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

    return {
        isFetching,
        postFormValues,
    }
}