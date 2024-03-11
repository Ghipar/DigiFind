import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

const CallAPI = () => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(res.data.slice(0, 5));
    } catch (error) {
      alert(error.message);
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CallAPI;

const styles = StyleSheet.create({});
