import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import H1 from "../H1";

function Header() {
  return (
    <div>
      <H1>
        Flexion - Temperature Converter Validation tool
      </H1>
    </div>
  );
}

export default Header;
