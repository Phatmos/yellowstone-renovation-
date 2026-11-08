import React, { useEffect } from 'react';
import SEO from './SEO';

export default function LegacyDeckRedirect({ target = '/decking/' }) {
  useEffect(() => { window.location.replace(target + window.location.search + window.location.hash); }, [target]);
  return <><SEO title="Deck building | Yellowstone Renovation" description="Explore deck building services and real Yellowstone projects in Central Kentucky." pathname={target} noIndex /><main><p>This page has moved. <a href={target}>Explore our deck services.</a></p></main></>;
}
