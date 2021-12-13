import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Home from './src/layers/Home'

const App = () => {
  return(
    <GestureHandlerRootView>
    <Home/>
    </GestureHandlerRootView>
  )
}

export default App