import React from 'react'
import Dispatcher from 'redux-devtools-dispatch'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SlideMonitor from 'redux-slider-monitor'
import ChartMonitor from 'redux-devtools-chart-monitor'
import { createDevTools } from 'redux-devtools'
import MultipleMonitors from 'redux-devtools-multiple-monitors'

const DevTools = createDevTools(
  <DockMonitor
    // defaultSize={0.15}
    defaultPosition="bottom"
    changeMonitorKey="ctrl-m"
    changePositionKey="ctrl-q"
    toggleVisibilityKey="ctrl-h"
  >
    <MultipleMonitors>
      <LogMonitor theme="tomorrow" preserveScrollTop={false} />
      <Dispatcher />
    </MultipleMonitors>
    <ChartMonitor keyboardEnabled />
    <SlideMonitor keyboardEnabled />
  </DockMonitor>
)

export default DevTools
