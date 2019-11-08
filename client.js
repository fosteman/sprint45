// sprint demo 45
import {
  Location,
  ReactInstance,
  Surface,
} from 'react-360-web'

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: false,
    ...options,
  })

  // Render cylinder surface
  const leftPanel = new Surface(300, 600, Surface.SurfaceShape.Flat)
  leftPanel.setAngle(-0.6, 0)
  const middlePanel = new Surface(300, 600, Surface.SurfaceShape.Flat)
  middlePanel.setAngle(0, 0)
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat)
  rightPanel.setAngle(0.6, 0)

  //Surface rendering
  r360.renderToSurface(
    r360.createRoot('TopPosts'), //Like-Dislike panel
    leftPanel,
  )
  r360.renderToSurface(
    r360.createRoot('LocationBackground'),
    middlePanel,
  )
  r360.renderToSurface(
    r360.createRoot('CurrentPost'), //LocationDetail Sections
    rightPanel,
  )
  // Camera View
  r360.renderToLocation(
    r360.createRoot('ModelView'),
    new Location([0, -2, -10]),
  )

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'))
}

window.React360 = {init}
