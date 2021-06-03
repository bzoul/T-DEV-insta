import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Photos from '../../views/Photos';
import Albums from '../../views/Albums';
import AppareilPhoto from '../../views/AppareilPhoto';
import React from 'react';


const Tab = createBottomTabNavigator();
const Tabs = () => {
    console.log("hrbgelj")
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Photos" component={Photos}/>
            <Tab.Screen name = "Albums" component={Albums}/>
            <Tab.Screen name = "AppareilPhoto" component={AppareilPhoto}/>
        </Tab.Navigator>
    );
}

export default Tabs;