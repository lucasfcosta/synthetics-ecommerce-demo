import React from "react";
import { init as initApm } from '@elastic/apm-rum'

const apm = initApm({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'e-shop',

  // Use if APM Server requires a token
  secretToken: '61HGmShJteIN7oPdfT',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'https://22e4079e6a4645eb9dcd8b6a477e3969.apm.us-west2.gcp.elastic-cloud.com:443',
})

export const ApmContext = React.createContext({ apm })
