import React, { Component } from 'react';
import {GeoJSON, MapContainer} from 'react-leaflet';
import mapData from '../data/countries.json';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

class MyMap extends Component {
	state = { }

	componentDidMount() {
		// console.log(mapData);
	}

	countryStyle = {
		fillColor: 'red',
		fillOpacity: .8,
		color: 'black',
		weight: 2,
		dashArray: 2,
	};

	changeCountryColor = e => {
		e.target.setStyle({
			color: 'green',
			fillColor: 'yellow',
			fillOpacity: .8,
		});
	}

	onEachCountry = (feature, layer) => {
		const countryName = feature.properties.ADMIN;
		// console.log(countryName)
		layer.bindPopup(`${countryName} ^^`);

		layer.on({
			click: this.changeCountryColor,
			mouseover: e => {
				// console.log(e.target.feature.properties.ISO_A3);
			}
		});
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
						onEachFeature={this.onEachCountry}
					/>
				</MapContainer>
			</div>
		);
	}
}

export default MyMap;