import React from 'react';
import {
  View,
  NavBar,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

import Detail from './Detail';
import NotFound from './404';

const pages = {
  Detail
};

class Page extends React.Component {
  render() {
    let page = this.props.params.page;
    // 使用 query
    console.log(this.props.location.query);

    if (page) {
      page = page.charAt(0).toUpperCase() + page.slice(1);
    }

    const Component = pages[page] || NotFound;
    const backNav = {
      component: Link,
      icon: 'left-nav',
      title: '返回',
      to: '/',
      onlyActiveOnIndex: true,
    };

    return (
      <View>
        <Component scrollable />
      </View>
    );
  }
}

export default Page;
