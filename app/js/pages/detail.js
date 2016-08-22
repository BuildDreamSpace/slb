import React from 'react';
import {
  Container,
  Group,
  Slider,
  Tabs,
  Grid,
  Col,
  Button,
  TabBar,
  View,
  ButtonGroup,
  Icon
} from 'amazeui-touch';

import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
  withRouter,
} from 'react-router';

export default class Detail extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  render() {
    const {
      router
    } = this.context;

    return (
      <View>
        <Container {...this.props}>
          <Slider controls={false}>
            {[
              'https://imgadapter.wn517.com//online/avatar/0ea4f1f7625e4dd8aae0300f81a3b410.jpg',
              'https://imgadapter.wn517.com//online/avatar/f30564950859499497e9d8064b58cc96.png',
              'https://imgadapter.wn517.com//online/avatar/aa64c1f66ded4fb6a1c2fe2ae167f584.jpg',
              'https://imgadapter.wn517.com//online/avatar/df7ba15ef47d4db8b75edead794c9e08.jpg'
            ].map((link, i)=> {
              return <Slider.Item key={i}>
                <a href={link}>
                  <img src={link}/>
                </a>
              </Slider.Item>
            })}
          </Slider>
          <h3>新疆吐鲁番新鲜无核白葡萄2.5kg礼盒装</h3>
          <Tabs>
            <Tabs.Item
              title="商品详情"
              key="1"
              navStyle="warning"
            >
            </Tabs.Item>
            <Tabs.Item
              title="购买须知"
              key="2"
              navStyle="warning"
            >
            </Tabs.Item>
          </Tabs>
        </Container>
        <Grid className="detail-bottom text-center">
          <Col shrink className="nav-button"><a href="/#/"><Icon name="home" className="text-warning"/>首页</a></Col>
          <Col shrink className="nav-button"><a href="/#/order"><Icon name="bars" className="text-warning"/>订单</a></Col>
          <Col className="buy-button"> 立即购买</Col>
        </Grid>
      </View>
    );
  }
}
