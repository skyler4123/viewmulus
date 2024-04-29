import openlayers from "openlayers"
import colormap from 'colormap';
import ApplicationController from '../../javascript/controllers/application_controller';

const Map = openlayers.Map
const View = openlayers.View
const Feature = openlayers.Feature

const TiltLayer = openlayers.layer.Tile
const VectorLayer = openlayers.layer.Vector

const OSM = openlayers.source.OSM
const VectorSource = openlayers.source.Vector
const Stamen = openlayers.source.Stamen
const XYZ = openlayers.source.XYZ

const GeoJSON = openlayers.format.GeoJSON
const KML = openlayers.format.KML

const DragAndDrop = openlayers.interaction.DragAndDrop
const Modify = openlayers.interaction.Modify
const Draw = openlayers.interaction.Draw
const Snap = openlayers.interaction.Snap

const Style = openlayers.style.Style
const Stroke = openlayers.style.Stroke
const Fill = openlayers.style.Fill
const Text = openlayers.style.Text
const CircleStyle = openlayers.style.Circle
const Icon = openlayers.style.Icon

const getArea = openlayers.Sphere.getArea

const fromExtent = openlayers.geom.Polygon.fromExtent
const Point = openlayers.geom.Point
const MultiPoint = openlayers.geom.MultiPoint
const circular = openlayers.geom.Polygon.circular

const VectorContext = openlayers.render.VectorContext

const toLonLat = openlayers.proj.toLonLat
const fromLonLat = openlayers.proj.fromLonLat

const toStringHDMS = openlayers.coordinate.toStringHDMS

const Overlay = openlayers.Overlay


export default class Openlayers extends ApplicationController {
  static targets = ['map', 'download', 'clear', 'popupContainer', 'popupCloser', 'popupContent']

  get typeClass() {
    return {
      default: {
        element: 'relative w-full h-[500px]',
        mapTarget: 'w-full h-full',
        downloadTarget: 'text-red-500',
        clearTarget: ''
      }
    }
  }

  initParams() {
    this.setParams({name: 'type', defaultValue: 'default'})
  }

  initAction() {
    this.addAction(this.clearTarget, `click->${this.identifier}#clear`)
  }

  clear() {
    this.source.clear()
  }

  connect() {

    
    const vectorSource = new VectorSource()
    const vectorStyle = new Style({
      stroke: new Stroke({
        color: 'red'
      }),
      fill: new Fill({
        color: 'green'
      })
    })
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: (feature, resolution) => {
        return vectorStyle
      }
    })

    const osmSource = new OSM()
    const osmLayer = new TiltLayer({
      source: osmSource
    })
    
    this.map = new Map({
      target: this.mapTarget,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      layers: [
        osmLayer
      ]
    })



    this.map.addLayer(vectorLayer)

    this.map.addInteraction(
      new DragAndDrop({
        source: vectorSource,
        formatConstructors: [GeoJSON]
      })
    )

    // console.log(vectorSource)
    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://openlayers.org/en/latest/examples/data/icon.png',
      }),
    });
    const iconSource = new VectorSource({
      features: [
        new Feature({
          geometry: new Point(fromLonLat([10, 10])),
          labelPoint: 'Label Demo',
          name: "demo name",
          id: 1,
        }),
        new Feature({
          geometry: new Point(fromLonLat([0, 0])),
          labelPoint: 'Label Demo',
          name: "demo name",
          id: 2,
        }),
        new Feature({
          geometry: new Point(fromLonLat([50, 0])),
          labelPoint: 'Label Demo',
          name: "demo name",
          id: 3,
        }),
        new Feature({
          geometry: new Point([10000000, -1000000]),
          labelPoint: 'Label Demo',
          name: "demo name",
          id: 4,
        })
      ]
    })
    const iconLayer = new VectorLayer({
      source: iconSource,
      style: iconStyle
    })

    this.map.addLayer(iconLayer)
    console.log(iconSource)

    // const overlay = new Overlay({
    //   element: this.popupContainerTarget,
    //   autoPan: {
    //     animation: {
    //       duration: 250,
    //     },
    //   },
    // });
    // this.popupCloserTarget.onclick = function () {
    //   overlay.setPosition(undefined);
    //   this.popupCloserTarget.blur();
    //   return false;
    // };

    // this.map.addOverlay(overlay)

    // this.map.on('singleclick', function (evt) {
    //   const coordinate = evt.coordinate;
    //   const hdms = toStringHDMS(toLonLat(coordinate));
    
    //   this.popupContentTarget.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
    //   overlay.setPosition(coordinate);
    // });
    // console.log(style)
    // this.map.addInteraction(
    //   new Modify({
    //     source: vectorSource,
    //   })
    // );

    // this.map.addInteraction(
    //   new Draw({
    //     type: 'Polygon',
    //     source: vectorSource,
    //   })
    // );

    // this.map.addInteraction(
    //   new Snap({
    //     source: vectorSource
    //   })
    // )









  } // connect


}



