import React from 'react';
import {Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import guides from '../../assets/data/guides';

const HomeMap = (props) => {
  const getImage = (type) => {
    if (type === 'Sight') {
      return require('../../assets/images/Sight.png');
    }
    if (type === 'Historical') {
      return require('../../assets/images/Historical.png');
    }
    return require('../../assets/images/Adventure.png');
  };
  const currentLocationImage = require('../../assets/images/CurrentLocation.png');

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 24.928268358269,
        longitude: 67.12659743723701,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {guides.map((guide) => (
        <Marker
          key={guide.id}
          coordinate={{latitude: guide.latitude, longitude: guide.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              // transform: [{
              //   rotate: `${guide.heading}deg`
              // }]
            }}
            source={getImage(guide.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
