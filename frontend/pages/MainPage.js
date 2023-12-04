import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Dialog, Divider, TextInput } from 'react-native-paper';
import ContactComponent from '../components/Contact';
import { TouchableOpacity } from 'react-native';
import { HeaderMain } from '../components/HeaderMain';
import { globalStyle } from '../globalStyle';

import { Modal, Portal, PaperProvider, Button, Text } from 'react-native-paper';

import { ShowLastMessages } from '../components/ShowLastMessages';
import { useSelector, useDispatch } from 'react-redux';
import { userSlice } from '../redux/userSlice';
import { ChatService } from '../services/ChatService';
import { UserService } from '../services/UserService';


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
    
    const [visibleDialog, setVisibleDialog] = useState(false);
    const showDialog = () => setVisibleDialog(true);
    const hideDialog = () => setVisibleDialog(false);
    
    const [searchUser, setSearchUser] = useState('');
    const createConversation = async () => {

        const searchedUser = await UserService.findUserByEmail(token, searchUser)
        const id = searchedUser.data.id
    
        const resp = await ChatService.createChat(token, userId, id)
        
        navigation.navigate('chat', {
            chatId: resp.data.id,
            contactId: resp.data.usersId[0] == userId? resp.data.usersId[1] : resp.data.usersId[0]
        })
       
    }
    
    return (
    <> 
        <View style={globalStyle.container}>
        <PaperProvider>

        <Portal>
            <Dialog visible={visibleDialog} onDismiss={hideDialog}>
                <Dialog.Title>Nova conversa</Dialog.Title>
                <Dialog.Content>
                <TextInput
                    placeholder='Email ou usuário'
                    onChangeText={(e) => setSearchUser(e)}
                    value={searchUser}
                />
                </Dialog.Content>
                <Dialog.Actions>
                <Button onPress={createConversation}>Done</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>

        <HeaderMain
            showDialog={showDialog}
        />
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