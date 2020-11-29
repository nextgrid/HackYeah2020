import React from "react";
import {
  Container,
} from "shards-react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { Marker } from "react-mapbox-gl";

// const ReactMapboxGl = require('react-mapbox-gl');
// const Layer = ReactMapboxGl.Layer;
// const Feature = ReactMapboxGl.Feature;
// require('mapbox-gl/dist/mapbox-gl.css');
 
const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA'
});


const BlogPosts = () => {

  return (
    <div className="w-full h-full">
      {/* <img
        width="100%"
        src="https://storage.googleapis.com/nextgrid_github_repo_visuals/Github%20Graphics%20/poland.jpg"
        alt=""
      /> */}
      
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[20.2416815, 50.5285582]}
        zoom={[8]}
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[20.2416815, 50.5285582]} />
        </Layer>
        <Marker
          coordinates={[20.2416815, 50.5285582]}
          anchor="bottom">
            <img style={{width: "80px", height: '80px', opacity: "0.5"}} src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png"/>
        </Marker>
        <Marker
          coordinates={[20.2816815, 50.5685582]}
          anchor="bottom">
            <img style={{width: "180px", height: '180px', opacity: "0.5"}} src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png"/>
        </Marker>
        <Marker
          coordinates={[20.7816815, 50.9685582]}
          anchor="bottom">
            <img style={{width: "50px", height: '50px', opacity: "0.5"}} src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png"/>
        </Marker>
        <Marker
          coordinates={[20.4816815, 49.8685582]}
          anchor="bottom">
            <img style={{width: "50px", height: '50px', opacity: "0.5"}} src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png"/>
        </Marker>
        <Marker
          coordinates={[19.4816815, 50.3685582]}
          anchor="bottom">
            <img style={{width: "130px", height: '130px', opacity: "0.5"}} src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png"/>
        </Marker>
        <Marker
          coordinates={[18.4816815, 50.7685582]}
          anchor="bottom">
            <img style={{width: "110px", height: '110px', opacity: "0.5"}} src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Ski_trail_rating_symbol_red_circle.png"/>
        </Marker>
      </Map>

    </div>
  );
};

export default BlogPosts;
