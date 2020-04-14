import { Component, OnInit, ViewChild, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DataManager } from '../services/datamanager.service';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

/*
This class implements the controller ResultsManager. 
Key public methods:
 - calculate_results(): tallies the results based on user preferences
 - rank_results(): filters the top5 results to be displayed
 - set_resutls(): stores the results in DataManager
*/
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class Results implements OnInit {

  private api_key: string = null;
  private api_status: boolean = false;

  @ViewChild(GoogleMap) map: GoogleMap;
  @ViewChild(MapInfoWindow) info: MapInfoWindow;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 8,
  };
  markers_status: boolean = false;
  markers = [];
  selections = {};
  infoContent = '';

  constructor(
    private datamanager: DataManager,
  ) {
    console.log('results component')
    this.center = {
      lat: 1.3521,
      lng: 103.8198
    }
    this.load_markers(this.datamanager.get_recommendations());
    this.selections = this.datamanager.get_selections();
    this.selections = Object.entries(this.selections);
  }

  ngOnInit() {
    // console.log(this.markers)
    // navigator.geolocation.getCurrentPosition(position => {
    //   console.log(position)
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    //   }
    //   this.markers.push({
    //     position: {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     },
    //     label: {
    //       color: 'white',
    //       text: 'Current Location',
    //     },
    //     title: 'Marker title ' + (this.markers.length + 1),
    //     info: 'Marker info ' + (this.markers.length + 1),
    //   });
    // });
  }

  initMap() { alert("ok"); }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }

  load_markers(recommendations) {
    var count = 1
    for (let location of recommendations) {
      var priorities = location[0]['LocationPriority']
      this.markers.push({
        position: {
          lat: location[0]['latitude'],
          lng: location[0]['longitude'],
        },
        label: {
          color: 'white',
          text: count.toString()
        },
        title: `${location[0]['blkNo']} ${location[0]['street']}`,
        info: `${location[0]['blkNo']} ${location[0]['street']}`
      })
      count += 1
    }
  }
}