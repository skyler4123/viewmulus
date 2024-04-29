import openlayers from "openlayers"
import colormap from 'colormap';
import ApplicationController from '../../javascript/controllers/application_controller';

const Map = openlayers.Map
const View = openlayers.View
const TiltLayer = openlayers.layer.Tile
const OSM = openlayers.source.OSM
const GeoJSON = openlayers.format.GeoJSON
const VectorLayer = openlayers.layer.Vector
const VectorSource = openlayers.source.Vector
const DragAndDrop = openlayers.interaction.DragAndDrop
const Modify = openlayers.interaction.Modify
const Draw = openlayers.interaction.Draw
const Snap = openlayers.interaction.Snap
const Style = openlayers.style.Style
const Stroke = openlayers.style.Stroke
const Fill = openlayers.style.Fill
const getArea = openlayers.Sphere.getArea
const Feature = openlayers.Feature
const Point = openlayers.geom.Point
const circular = openlayers.geom.Polygon.circular



export default class Openlayers extends ApplicationController {
  static targets = ['map', 'download', 'clear']

  get typeClass() {
    return {
      default: {
        element: 'w-full h-[500px]',
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

    
    this.vectorSource = new VectorSource()
    this.osmSource = new OSM()

    this.map = new Map({
      target: this.mapTarget,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      layers: [
        new TiltLayer({
          source: this.osmSource
        })
      ]
    })

    const layer = new VectorLayer({
      source: this.vectorSource,
      style: (feature) => {
        return new Style({
          fill: new Fill({
            color: getColor(feature)
          }),
          stroke: new Stroke({
            color: 'rgba(255,255,255,0.8)'
          })
        })
      }
      // style: new Style({
      //   fill: new Fill({color: 'red'}),
      //   stroke: new Stroke({color: 'white'})
      // })
    })

    this.map.addLayer(layer)
    this.map.addInteraction(
      new DragAndDrop({
        source: this.vectorSource,
        formatConstructors: [GeoJSON]
      })
    )

    this.map.addInteraction(
      new Modify({
        source: this.vectorSource,
      })
    );

    this.map.addInteraction(
      new Draw({
        type: 'Polygon',
        source: this.vectorSource,
      })
    );

    this.map.addInteraction(
      new Snap({
        source: this.vectorSource
      })
    )







  } // connect


}



