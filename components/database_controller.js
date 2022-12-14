import AsyncStorage from '@react-native-async-storage/async-storage';


/* ALL CODE NEEDED FOR SAVING DATA TO PHONES STORAGE */


const writeData = async (key,data) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));

      } catch (error) {
        console.log(error);
        return {"err":1}
      }
};


const readData = async (key) => {
    try {
        const raw_data = await AsyncStorage.getItem(key);
        const data = JSON.parse(raw_data);
        console.log(data);
        return data;

      } catch (error) {
        console.log(error);
        return {"err":1}
      }
};

export  {writeData, readData};
