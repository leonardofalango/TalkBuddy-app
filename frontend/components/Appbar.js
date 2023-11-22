import { ArrowBackIos, OpenInNew } from '@mui/icons-material';
import { StyleSheet, View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-web';
import { globalStyle } from '../globalStyle';

const AppBarComponent = (props) => {
  const { top } = useSafeAreaInsets();

  return (
    <Appbar
      style={ styles.top }
      safeAreaInsets={{ top }}
    >
      <View style={ styles.title }>
        <TouchableOpacity style={ styles.iconAndText}>
          <ArrowBackIos style={globalStyle.icon} fontSize='small' /> <Text style={  globalStyle.icon }>mensagens</Text>
        </TouchableOpacity>

        <Text style={ styles.titleText }>
          {props.title? props.title : 'Title'}
        </Text>
      </View>

      <TouchableOpacity>
        <OpenInNew style={ globalStyle.icon } />
      </TouchableOpacity>
    </Appbar>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'var(--menu-back-color)',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'space-between',
    paddingHorizontal: 13,
    height: 65,
    marginTop: 65
  },
  title: {

  },
  titleText: {
    fontSize: 34,
    fontWeight: 700,
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  messageIcon: {
    fontSize: 13
  }
})

export { AppBarComponent }