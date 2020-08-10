# dgtek-polygons

### Install
```
yarn add dgtek-polygons
```

### Import

```
import 'dgtek-polygons'
import 'dgtek-polygons/dist/dgtek-polygons.css'
```

### Usage

```
<Polygons :saveData.sync="saveData" />
```

### App.vue

```
data: () => ({
  saveData: false
}),
watch: {
  saveData (val) {
    if (val) this.savePolygons()
  }
},
methods: {
  async savePolygons () {
    await axios.post(..., { data: JSON.stringify(localStorage.getAllPolygons()) })
    this.saveData = false
  }
}
```

______________________________________________

## [Demo](https://garevna.github.io/dgtek-polygons-editor-demo/)
