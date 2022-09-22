import { Text, View, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { Component } from 'react';
import reactDom, { render } from 'react-dom';

class Storeinfo extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}>
        <View style={MainStyle.test}><Text>가게이름</Text></View>
        <View style={MainStyle.test}>
          <Text>별점</Text>
        </View>
        <View style={MainStyle.test}>
        <Text>주소</Text>
        </View>
        <View style={MainStyle.test}>
        <Text>기타</Text>
        </View>
      </View>
    )
  }
}


class Store extends Component {
  render() {
    return (
      <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: 'white', width: "100%", height: 150, flex: 1 }}>
        <View style={{
          flex: 0.5, justifyContent: "center",
          alignItems: "center"
        }}>

          <Image source={require('./Image/store.png/')} style={MainStyle.imageView} />

        </View>
        <Storeinfo name="몽그리" />

      </TouchableOpacity>
    )
  }
}


class TabButton extends Component {
  render() {
    return (
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'gray', borderRadius: 30 }}>
          <Image source={require('./Image/home.png/')} style={MainStyle.image} />
        </View>
        <Text style={{ marginTop: 5, color: '#A0A0A0' }}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

class Tab2 extends Component {
  render() {
    return (
      <View style={MainStyle.taps}>
        <TabButton name="홈" src="./Image/home.png/" />
        <TabButton name="시간표" src="./Images/sche.png/" />
        <TabButton name="커뮤니티" src="./Image/comu.png/" />
        <TabButton name="모임" src="./Image/menu2.png/" />
        <TabButton name="더보기" src="./Image/etc.png/" />
      </View>
    )

  }
}


function App() {
  return (
    <>
      <View style={MainStyle.container2}>
      </View>

      <View style={MainStyle.container4}>
        <ScrollView style={{ backgroundColor: 'gray' }}>
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />

        </ScrollView>
      </View>

      <View style={MainStyle.container3}>
        <Tab2 />
      </View>
    </>
  )
}





const MainStyle = StyleSheet.create({
  taps: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#A0A0A0',
  },
  image:
  {
    height: 30, width: 30
  },
  imageView:
  {
    height: 120, width: 120
    , backgroundColor: "red"
    , borderRadius: 10
  },

  image2:
  {
    width: "100%"
    , height: "100%"
  },

  container2: {
    flex: 1,
  },
  container3:
  {
    flex: 0.5,
  },
  container4:
  {
    flex: 3.65,
    border: "solid",
    borderWidth: 1
  },
  storename:
  {
    fontWeight: 'bold',
    fontsize: 30,
    flex: 1,
  },
  test:
  {
    border: "solid",
    // borderWidth: 1,
    flex: 0.2,
    marginTop: 5,
    marginLeft: 10,

  }
});

export default App;