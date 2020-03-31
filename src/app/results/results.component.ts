import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataManager } from '../services/datamanager.service';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

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

    @ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

    center = {lat: 1.357671, lng: 103.690580};
    markerOptions = {draggable: false};
    markerPositions: google.maps.LatLngLiteral[] = [];
    zoom = 8;
    display?: google.maps.LatLngLiteral;

    constructor(
        private datamanager: DataManager
    ) {
    }

    async ngOnInit() { 
        // await this.datamanager.get_googleapi_key()
        // .then(response => {
        //     this.api_key = 'https://maps.googleapis.com/maps/api/js?key=' + response.data.google_apikey;
        //     this.api_status = true;
        // })                               
    }

    addMarker(event: google.maps.MouseEvent) {
        this.markerPositions.push(event.latLng.toJSON());
    }

    move(event: google.maps.MouseEvent) {
        this.display = event.latLng.toJSON();
    }

    openInfoWindow(marker: MapMarker) {
        this.infoWindow.open(marker);
    }

    removeLastMarker() {
        this.markerPositions.pop();
    }

    public calculate_results(): void {}

    public rank_results(): void {}

    public set_results(): void {}
}