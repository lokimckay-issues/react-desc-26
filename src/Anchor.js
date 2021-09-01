// Anchor.js

import React from 'react';
import ReactPropTypes from 'prop-types';
import { describe, PropTypes } from 'react-desc';

const Anchor = (props) => {
  const { path, ...rest } = props;
  return (
    <a href={path} {...rest}>{props.children}</a>
  );
};

export const AnchorWithSchema = describe(Anchor)
  .availableAt([
    {
      badge: 'https://codesandbox.io/static/img/play-codesandbox.svg',
      url: 'https://codesandbox.io/s/github/grommet/grommet-site?initialpath=anchor&amp;module=%2Fscreens%2FAnchor.js',
    },
  ])
  .description('A text link');

AnchorWithSchema.propTypes = {
  path: PropTypes.string.describe('React-router path to navigate to when clicked').isRequired,
  href: PropTypes.string.describe('link location').deprecated('use path instead'),
  id: ReactPropTypes.string, // this will be ignored for documentation purposes
  title: PropTypes.custom(() => {}).description('title used for accessibility').format('XXX-XX'),
  target: PropTypes.string.describe('target link location').defaultValue('_blank'),
};

export default Anchor;