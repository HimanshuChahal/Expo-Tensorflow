import { View, StatusBar } from 'react-native'
import TensorflowDetection from "./src/TensorflowDetection"

const App = () => {

  return (
    <View style = {{ flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: 'white', borderWidth: 10 }}>
      <TensorflowDetection/>
    </View>
  )
}

export default App
