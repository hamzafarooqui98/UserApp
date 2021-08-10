import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';
import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/types';

const UberTypes = ({origin, destination}) => {
  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  const confirm = async () => {
    console.warn('confirm');
    console.log(originLoc);
    console.log(destinationLoc);

    const res = await fetch(`https://24b0f8290ca2.ngrok.io/client`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        originLatitude: originLoc.latitude,
        originLongitude: originLoc.longitude,
        destLatitude: destinationLoc.latitude,
        destLongitude: destinationLoc.longitude,
      }),
    });
  };

  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow type={type.type} key={type.id} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: '#53A979',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Guide</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
