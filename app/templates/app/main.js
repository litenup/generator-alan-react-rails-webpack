'use strict';

// expose jQuery for jquery_ujs and React for react_ujs
require('expose?jQuery!expose?$!jquery');
require('expose?React!react/addons');
require('expose?_!lodash');

import $      from 'jquery';
import React  from 'react/addons';
import _      from 'lodash';