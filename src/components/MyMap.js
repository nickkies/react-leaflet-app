import React, { Component } from 'react';
import {GeoJSON, MapContainer} from 'react-leaflet';
import mapData from '../data/countries.json';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

class MyMap extends Component {
	state = { }

	componentDidMount() {
		console.log(mapData);
	}

	countryStyle = {
		fillColor: 'red',
		fillOpacity: 0.8,
		color: 'black',
		weight: 2,
		dashArray: 2,
	};

	render() {
		return (
			<div style={{width: '100vh'}}>
				<h1 style={{textAlign: 'center'}}>My Map</h1>
				<MapContainer
					style={{height: "80vh"}}
					zoom={2}
					center={[20, 100]}
					scrollWheelZoom={true}
					attributionControl={false}
				>
					<GeoJSON
						data={mapData.features}
						style={this.countryStyle}
					/>
				</MapContainer>
			</div>
		);
	}
}

export default MyMap;