import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SamuraiDesign from './src/SamuraiDesign';
// import ColorTheme from './src/ColorTheme';
// import InterpolateAnim from './src/InterpolateAnim';
// import Begin from './src/Begin';
// import PanGasture from './src/PanGasture';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <SamuraiDesign />
      </SafeAreaView>
      {/* <Begin /> */}
      {/* <PanGasture /> */}
      {/* <InterpolateAnim /> */}
      {/* <ColorTheme /> */}
    </SafeAreaProvider>
  );
};

export default App;
