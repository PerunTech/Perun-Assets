// A helper function that checks whether a given value is valid JSON
function isJSON(value) {
  value = typeof value !== 'string' ? JSON.stringify(value) : value
  try {
    value = JSON.parse(value);
  } catch (e) {
    return false
  }

  if (typeof value === 'object' && value !== null) {
    return true
  }

  return false
}

// Get the system center
const sysCenterUrl = `${window.server}/WsConf/params/get/sys/SYS_CENTER`
fetch(sysCenterUrl).then(response => response.json()).then(res => {
  if (res.VALUE) {
    if (isJSON(res.VALUE)) {
      const sysCenter = JSON.parse(res.VALUE)
      window.sysCenter = sysCenter
    }
  }
}).catch(err => {
  console.error(err)
})

// Get the system bounds
const sysBoundsUrl = `${window.server}/WsConf/params/get/sys/SYS_BOUNDS`
fetch(sysBoundsUrl).then(response => response.json()).then(res => {
  if (res.VALUE) {
    if (isJSON(res.VALUE)) {
      const sysBounds = JSON.parse(res.VALUE)
      window.sysBounds = sysBounds
    }
  }
}).catch(err => {
  console.error(err)
})

// Get the system coordinate reference system (CRS)
const sysCrsUrl = `${window.server}/WsConf/params/get/sys/SYS_CRS`
fetch(sysCrsUrl).then(response => response.json()).then(res => {
  if (res.VALUE) {
    if (isJSON(res.VALUE)) {
      const sysCrs = JSON.parse(res.VALUE)
      window.sysCrs = sysCrs
    } else {
      const sysCrs = res.VALUE
      window.sysCrs = sysCrs
    }
  }
}).catch(err => {
  console.error(err)
})

// Get the system of measurement (imperial, metric)
const measurementSystemUrl = `${window.server}/WsConf/params/get/sys/MEASUREMENT_SYSTEM`
fetch(measurementSystemUrl).then(response => response.json()).then(res => {
  if (res.VALUE) {
    window.measurementSystem = res.VALUE
  }
}).catch(err => {
  console.error(err)
})

// Check whether the order of the BBOX coordinates in the WMS paths should be switched
const switchBboxOrderUrl = `${window.server}/WsConf/params/get/sys/SWITCH_WMS_BBOX_ORDER`
fetch(switchBboxOrderUrl).then(response => response.json()).then(res => {
  if (res.VALUE) {
    window.switchBboxOrder = res.VALUE
  }
}).catch(err => {
  console.error(err)
})
