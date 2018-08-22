import React from 'react';
import Heading from '../components/heading';

const NotFoundPage = () => (
  <main role="main" className="section" style={{ paddingBottom: '45px' }}>
    <div className="wrapper__content wrapper--padded">
      <Heading
        rank={1}
        text="NOT FOUND"
      />
      <p>You just hit a route that doesn&#39;t exist...</p>
    </div>
  </main>
)

export default NotFoundPage
