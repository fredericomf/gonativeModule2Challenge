import Reactotron from 'reactotron-react-native';

// STUDY_NOTES: '__DEV__' is an envirionment variable (only disponible on NATIVE)
if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.8.21.208' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  // STUDY_NOTES: The 'console' variable is global, then I can set values on it.
  console.tron = tron;

  tron.clear();
}
