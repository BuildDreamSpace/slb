import React from 'react';
import {
  View,
  Container,
  List,
  NavBar,
  Slider,
  Button,
  Grid,
  Col
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

export default class Index extends React.Component {
  static defaultProps = {
    transition: 'rfr'
  };

  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
    $.getJSON('http://yulonh.com/test/goodlist.json', (albums)=> this.setState({albums}));
  }

  render() {
    return (
      <View>
        <Container scrollable={true}
                   fill={true}>
          <Slider controls={false}>
            {[
              'https://imgadapter.wn517.com//online/avatar/0ea4f1f7625e4dd8aae0300f81a3b410.jpg',
              'https://imgadapter.wn517.com//online/avatar/f30564950859499497e9d8064b58cc96.png',
              'https://imgadapter.wn517.com//online/avatar/aa64c1f66ded4fb6a1c2fe2ae167f584.jpg',
              'https://imgadapter.wn517.com//online/avatar/df7ba15ef47d4db8b75edead794c9e08.jpg'
            ].map((link, i)=> {
              return <Slider.Item key={i}>
                <a href="/#/detail">
                  <img src={link}/>
                </a>
              </Slider.Item>
            })}
          </Slider>
          <ul className="list margin-v-xs">
            {this.state.albums.map((item, i)=> {
              return <li target="_blank" className="item item-linked item-content" key={item.goodsId}>
                <a href="/#/detail">
                  <div className="item-main">
                    <img className="item-img margin-v-xs" src={`http://imgadapter.wn517.com/${item.banner}`}/>
                    <div className="item-title-row margin-v-xs">
                      <h3 className="item-title">{item.title}</h3>
                    </div>
                    <Grid>
                      <Col className="item-subtitle">
                        <span className="price">￥{item.price}/{item.productName}</span>
                        <div className="desc">{item.likeCount}人已购买</div>
                      </Col>
                      <Col shrink><Button amStyle="warning" className="margin-v-xs">立即购买</Button></Col>
                    </Grid>
                  </div>
                </a></li>
            })}
          </ul>
        </Container>
      </View>
    );
  }
}
