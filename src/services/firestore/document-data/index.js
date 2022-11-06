import firestore from '@react-native-firebase/firestore';

/**
 * @type {string} Refered collection to users in Firebase Firestore
 */
export const USERS_COLLECTION = 'users';

/**
 * @param userEmail -> email from auth user
 * @returns {FirebaseFirestoreTypes.DocumentReference<FirebaseFirestoreTypes.DocumentData>}
 */
export const getDocumentData = (userEmail) => {
    return firestore().collection(USERS_COLLECTION)
        .doc(userEmail)
        .get()
}

/**
 * @param {String} userEmail -> email from auth user
 * @returns {Promise<void>}
 */
export const createDocumentData = (userEmail) => {
    return firestore().collection(USERS_COLLECTION)
        .doc(userEmail)
        .set({
            data: {
                folders: []
            },
            createdAt: firestore.FieldValue.serverTimestamp(),
        })
}