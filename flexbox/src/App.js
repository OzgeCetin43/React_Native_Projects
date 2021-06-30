import React from 'react'
import {View, Text, Image} from 'react-native'
import { styles } from './style';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Header</Text>
                <Image source={require('./images/menu.png')} style={styles.headerIcon}/>
            </View>

            <View style={styles.main}>
                <View style={styles.side}>
                    <Text style={styles.sideText}>Home</Text>
                    <Text style={styles.sideText}>About Us</Text>
                    <Text style={styles.sideText}>Mission</Text>
                    <Text style={styles.sideText}>Vision</Text>
                    <Text style={styles.sideText}>Blog</Text>
                    <Text style={styles.sideText}>News</Text>
                    <Text style={styles.sideText}>Contact</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.contentHeader}>Home</Text>
                    <Image source={require('./images/image1.jpg')} style={styles.contentImage}/>
                    <Text style={styles.contentText}>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus.</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Created by Özge Çetin</Text>
            </View>
            
        </View>
    );
}

export default App;