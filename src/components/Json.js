// @flow

import * as React from 'react';

const Json: mixed => React.Node = props => (
  <pre>{JSON.stringify(props, undefined, 2)}</pre>
);

export default Json;
