import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';
import ContactComponent from '../components/Contact';
import { TouchableOpacity } from 'react-native';
import { HeaderMain } from '../components/HeaderMain';
import { globalStyle } from '../globalStyle';
import { Modal, Portal, PaperProvider } from 'react-native-paper';
import { ShowLastMessages } from '../components/ShowLastMessages';
import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from '../redux/userSlice';
import { ChatService } from '../services/ChatService';


export default function MainPage({ navigation }) {

    const dispatch = useDispatch();
    const { userChats } = useSelector(store => store.user);
    const { setUserChats } = userSlice.actions;

    const { token, userId } = useSelector(store => store.auth);

    useEffect(() => {
        async function getChats() {
                const chats = await ChatService.getChats(token, userId) 
                dispatch(setUserChats(chats.data))
        }
        getChats();
    }, []);

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
                    data={userChats}
                    renderItem={({item, i}) => (
                        <TouchableOpacity
                            onLongPress={ showModal }
                            onPress={() => navigation.navigate('chat', {
                                chatId: item.id,
                                contactId: item.usersId[0] == userId? item.usersId[1] : item.usersId[0]
                            })}
                        >
                            {console.log(item)}
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