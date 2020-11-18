define([
    'backbone',
    'leaflet',
    'jquery'
], function (
    Backbone, L, $) {
    return Backbone.View.extend({
        initBounds: [[-25.232732932266735, 93.85489258365217], [19.985307983544566, 142.16236486638226]],
        basemaps: {
            "OSM": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
        },
        /** Initialization
         */
        initialize: function () {
            this.map = L.map('map', {zoomControl: false}).fitBounds(this.initBounds);

            // init control
            L.control.zoom({position: 'bottomleft'}).addTo(this.map);

            // add basemap
            this.basemaps['OSM'].addTo(this.map);

            // add listener
            this.listener()
        },
        /** Init listener for map
         */
        listener: function () {
            event.register(this, evt.MAP_ADD_LAYER, this.addLayer);
            event.register(this, evt.MAP_REMOVE_LAYER, this.removeLayer);
            event.register(this, evt.MAP_PAN, this.panTo);
            event.register(this, evt.MAP_FLY, this.flyTo);
        },
        /**
         * Add layer to map
         */
        addLayer: function (layer) {
            layer.addTo(this.map)
        },
        /**
         * Remove layer from map
         */
        removeLayer: function (layer) {
            try {
                this.map.removeLayer(layer)
            } catch (e) {

            }
        },
        /**
         * Pan map to lat lng
         * @param lat
         * @param lng
         * @param zoom
         */
        panTo: function (lat, lng, zoom) {
            if (zoom) {
                this.map.flyTo([lat, lng], zoom, {
                    duration: 0.5
                });
            } else {
                this.map.panTo(new L.LatLng(lat, lng));
            }
        },
        /**
         * Pan map to lat lng
         * @param bound
         * @param duration
         */
        flyTo: function (bound, duration = 1) {
            this.map.flyToBounds(bound, {'duration': duration});
        },
    });
});