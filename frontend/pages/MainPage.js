import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Divider, Text } from 'react-native-paper';
import ContactComponent from '../components/Contact';
import { AppBarComponent } from '../components/Appbar'
import { TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { ConstructionOutlined } from '@mui/icons-material';


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

    return (
    <>  
        <AppBarComponent title='Talk-Buddy' />
        <View>
        
        <Divider />
            <FlatList
                data={list}
                renderItem={({item, i}) => (
                    <TouchableOpacity>
                        <ContactComponent
                            props={item}
                        />
                        <Divider />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            >
            </FlatList>
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222222',
    },
});