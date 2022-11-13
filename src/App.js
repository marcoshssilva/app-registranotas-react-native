import React from 'react';
import RootNavigator from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";
import theme from './theme';
import { StatusBar } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {ModalCreateFolder} from "./components/modal-create-folder";
import {ModalSettingsConfig} from "./components/modal-settings-config";
import {ModalCreateNotes} from "./components/modal-create-notes";

GoogleSignin.configure({
    webClientId: '%REPLACE_ID_HERE%', // gooogle-services.json -> oauth_client.client_id
    offlineAccess: true
});

const App = () => (
    <PaperProvider theme={theme}>
        <StatusBar translucent={true} backgroundColor={theme.colors.primary} />
        <RootNavigator />
        <ModalCreateFolder />
        <ModalSettingsConfig />
        <ModalCreateNotes />
    </PaperProvider>
);
export default App;
