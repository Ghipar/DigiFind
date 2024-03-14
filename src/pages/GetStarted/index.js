import React, {useState, useRef, useEffect} from 'react';
import {View, Dimensions, FlatList, Animated, StyleSheet} from 'react-native';
import {DigiFind} from '../../assets';
import {Gap, Button, Onboarding} from '../../components';
import slides from './slides';

const {width, height} = Dimensions.get('window');

const GetStarted = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScroll) {
        setCurrentIndex(prevIndex =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
        );
        if (slideRef.current) {
          slideRef.current.scrollToIndex({
            index: currentIndex === slides.length - 1 ? 0 : currentIndex + 1,
            animated: true,
          });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, autoScroll]);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const renderPagination = () => {
    return (
      <View style={styles.pagination}>
        {slides.map((_, index) => {
          const isActive = index === currentIndex; // Menyimpan status aktif
          return (
            <View
              key={index}
              style={[
                styles.paginationDot,
                {
                  backgroundColor: isActive ? '#3E86FA' : '#ccc',
                  width: isActive ? 18 : 8,
                  height: isActive ? 6 : 8,
                  borderRadius: isActive ? 4 : 4,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View className="bg-whitebg flex-1 justify-between">
      <View className="items-center">
        <DigiFind className="mt-[72px]" />
      </View>

      <FlatList
        ref={slideRef}
        data={slides}
        renderItem={({item}) => <Onboarding item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
      />

      {/* <View style={styles.footer}> */}
      <View className="p-2 justify-between">
        {renderPagination()}
        <View className="p-2 justify-between">
          <View className="px-4">
            <Gap height={20} />
            <Button
              type="main"
              title="Mulai"
              onPress={() => navigation.navigate('Login')}
            />
            <Gap height={10} />
            <Button
              type="secondary"
              title="Daftar"
              onPress={() => navigation.navigate('Register')}
            />
            <Gap height={15} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default GetStarted;
