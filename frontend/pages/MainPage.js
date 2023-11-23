import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Divider, Text } from 'react-native-paper';
import ContactComponent from '../components/Contact';
import { TouchableOpacity } from 'react-native';
import { HeaderMain } from '../components/HeaderMain';
import { globalStyle } from '../globalStyle';
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';
import { ShowLastMessages } from '../components/ShowLastMessages';


export default function MainPage({ navigation }) {

    const [list, setList] = useState([
        {
            id: 1,
            name: 'Não é o Falas',
            number : '+55 98714-1533',
            image: 'https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg',
            lastMessage : 'Eu quero morrer!Eu quero morrer!Eu quero morrer!Eu quero morrer!Eu quero morrer!Eu quero morrer!Eu quero morrer!Eu quero morrer!',
            isYourMessage: false,
            lastmessageTime : '12:00',
            isRead: false,
            unreadMessages: 85,
        },
        {
            id: 2,
            name: 'Contato numero 2',
            number : '+55 98849-3956',
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.twinkl.co.uk%2Fparenting-wiki%2Fthird-person&psig=AOvVaw2bZhjp9ZiV80iuv87p764G&ust=1700680265207000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjLgurl1YIDFQAAAAAdAAAAABAJ',
            lastMessage : 'Falo manow, vou sim e vc?',
            isYourMessage: true,
            lastmessageTime : '16:14',
            isRead: true,
            unreadMessages: 0,
        },
    ])

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
    <> 
        <View style={globalStyle.container}>
        <PaperProvider>
        <HeaderMain />
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal}>
                    <ShowLastMessages />
                    </Modal>
                </Portal>

                <Divider/>
                
                <FlatList
                    data={list}
                    renderItem={({item, i}) => (
                        <TouchableOpacity onLongPress={showModal}>
                            <ContactComponent
                                props={item}
                            />
                            <Divider />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                >
                </FlatList>
        </PaperProvider>
        </View>
    </>
    )
}