import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
<<<<<<< HEAD
=======
import { Input, SearchBar } from '../../components';
>>>>>>> ghifari-dev

const CallAPI = () => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(res.data.slice(0, 5));
    } catch (error) {
<<<<<<< HEAD
      alert(error.message);
=======
      // alert(error.message);
>>>>>>> ghifari-dev
    }
  };

  useEffect(() => {
    // console.log("halo");
    getData();
  }, []);
  return (
    <>
      {/* {console.log(data)} */}
      <SafeAreaView>
        <ScrollView>
          {data &&
            data.map((item, i) => <Text key={item.id}>{item.title + i}</Text>)}
<<<<<<< HEAD
=======
            <SearchBar placeholder={'SearchBar'}/>
>>>>>>> ghifari-dev
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CallAPI;

const styles = StyleSheet.create({});
