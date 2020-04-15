import { Component, OnInit, ViewChild, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DataManager } from '../services/datamanager.service';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

/*
This class implements the controller ResultsManager.
Key attributes:
 - infoContent: contains information to be displayed when a marker is 
    clicked.
 - markers: keeps track of the top recommended locations in a list
 - selections: stores the preferences and priorities input by the user
 - center: centers the map to a specific latitude and longitude on 
    initialization
 - options: determine setting variables of google map features
Key public methods:
 - zoomIn & zoomOut: button feature that allows user to magnify or 
    zoom out on the map. 
 - load_markers: fetch recommended locations from datamanager and stores
    in markers variable.
 - openInfo: pushes marker content to infoContent when marker is clicked
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