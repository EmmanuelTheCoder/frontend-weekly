import React from 'react'
import Helmet from 'react-helmet'
import base from './base.css'
import Container from './container'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Helmet>
          <script
            async
            defer
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"
          ></script>
        </Helmet>
        {children}
      </Container>
    )
  }
}

export default Template