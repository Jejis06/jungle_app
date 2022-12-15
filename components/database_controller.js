import AsyncStorage from '@react-native-async-storage/async-storage';

const database = {
    glass:"GLASS_SIZE",
    limit:"LIMIT",
    drunk:"DRUN",
}
const templates = {
    glass:{amm:250},
    limit:{amm:2000},
    drunk:{amm:0, date:""},
}


/* ALL CODE NEEDED FOR SAVING DATA TO PHONES STORAGE */

const clear = async () => {
    try {
        await AsyncStorage.clear();

      } catch (error) {
        console.log(error);
        return {"err":1}
      }
    
}

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
        let data = JSON.parse(raw_data);
        //console.log("red" ,data);
        return data;

      } catch (error) {
        console.log(error);
        return {"err":1}
      }
};




export  {writeData, readData, database,templates,clear};
