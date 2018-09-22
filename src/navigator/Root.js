import {createStackNavigator} from 'react-navigation'
import HomeScreen from './../screens/HomeScreen'
import CreateScreen from './../screens/CreateScreen'
import DetailScreen from './../screens/DetailScreen'
import EditScreen from './../screens/EditScreen'

const Root = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Contact List"
    }
  },
  Create: {
    screen: CreateScreen,
    navigationOptions: {
      title: "Create new contact"
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      header:null
    }
  },
  Edit: {
    screen : EditScreen
  }
})

export default Root