import { Text, View, StyleSheet ,Button, Image, TouchableOpacity} from 'react-native';
import React, { Component } from 'react';

class TabButton extends Component {
  render() {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: 'gray'}}>
        <Image source={require('./Image/home.png/')} style={MainStyle.image} />
        </View>
        <Text style={{marginTop: 5, color: '#A0A0A0'}}>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

class Tab2 extends Component {
  render() {
    return(
      <View style={MainStyle.taps}>
        <TabButton name="홈" src = "./Image/home.png/" />
        <TabButton name="시간표" src = "./Images/sche.png/"/>
        <TabButton name="커뮤니티" src = "./Image/comu.png/"/>
        <TabButton name="모임" src = "./Image/menu2.png/"/>
        <TabButton name="더보기" src = "./Image/etc.png/"/>
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

  container2: {
    flex: 1,
    border: "1px solid red",
  },
  container3:
  {
    flex: 0.5,
    border: "1px solid red",
  },
  container4:
  {
    flex: 3,
    border: "solid",
    borderWidth: 1
  },
  button:
  {
  }
});

export default App;