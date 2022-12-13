import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    'Hbold': require('../assets/fonts/Heebo-Bold.ttf'),
    'Hreg': require('../assets/fonts/Heebo-Regular.ttf'),
  });

  export default useFonts;