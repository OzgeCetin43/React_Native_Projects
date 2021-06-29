/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const [visible, setVisible] = useState(true)

  const changeVisibility = () => {
    setVisible(!visible);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>My First App</Text>
        <Image source={require("./src/images/menu.png")} style={styles.menu}/>
      </View>
      
      <View style={styles.main}>
          <Text style={{color: "#2e2e2e", fontSize: 30, fontWeight: "bold"}}>Hello World !!</Text>
      </View>

      <TouchableWithoutFeedback
        onPress={() => console.log("onPress")}
        onPressIn={() => console.log("onPressIn")}
        onPressOut={() => console.log("onPressOut")}
        onLongPress={() => console.log("onLongPress")}
        delayLongPress={1000}
      >
        <View style = {{justifyContent: "center", alignItems: "center"}}>
          <View style={{backgroundColor: "orange", justifyContent: "center", alignItems: "center", height: 50, width: 100, marginTop: 10}}>
            <Text style={{color: "white"}}>Bana Tıkla 1</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableHighlight 
        onPress={() => console.log("onPress")}
        onPressIn={() => console.log("onPressIn")}
        onPressOut={() => console.log("onPressOut")}
        activeOpacity={0.8}
        underlayColor="#fff"
        pressRetentionOffset={50}
        onShowUnderlay={() => console.log("onShowUnderlay")}
        onHideUnderlay={() => console.log("onHideUnderlay")}
        touchSoundDisabled={true}
      >
        <View style={{alignItems: "center", justifyContent: "center", marginVertical: 10}}>
          <View style={{backgroundColor: "red", height: 50, width: 100, alignItems: "center", justifyContent: "center"}}>
            <Text style={{color: "#fff"}}>Bana Tıkla 2</Text>
          </View>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        onPress={changeVisibility}
        onPressIn={() => console.log("onPressIn")}
        onPressOut={() => console.log("onPressOut")}
        activeOpacity={0.5}
      >
        <View style={{alignItems: "center", justifyContent: "center"}}>
          <View style={{backgroundColor: "blue", height: 50, width: 100, alignItems: "center", justifyContent: "center"}}>
            <Text style={{color: "#fff"}}>{visible ? "Gizle" : "Göster"}</Text>
          </View>
        </View>

        <View style={{display: visible ? "flex" : "none"}}> 
          <Text style={{textAlign: "center"}}>Beni görebiliyor musun?</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#fff",
    flex: 1
  },

  header : {
    height: 70,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  logo : {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginLeft: 10
  },

  menu : {
    width: 35,
    height: 35,
    marginRight: 10
  },

  main : {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dedede",
    height: 100,
  }
});

export default App;
