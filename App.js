/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity} from "react-native";
import AliyunPlayerView from 'react-native-aliyun-player';

const SCREEN_W = Dimensions.get('window').width;

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    handleEventCallback = evt => {
        const {event} = evt.nativeEvent;
        console.log(`Event: ${event}`);
    }

    handlePlayingCallback = evt => {
        const {currentTime, duration} = evt.nativeEvent;
        console.log(`CurrentTime: ${currentTime} duration: ${duration}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
                <AliyunPlayerView
                    style={{height: 300, width: SCREEN_W}}
                    prepareAsyncParams={{
                        type: "vidSts",
                        vid: "04aa91c809c741178d76af4b95f1b680",
                        accessKeyId: "LTAIH1j0TQwkhfjC",
                        accessKeySecret: "M8wXRq0Vq03JY8jHdMddCupyAPNvJs",
                        securityToken:
                            "eyJTZWN1cml0eVRva2VuIjoiQ0FJUzN3SjFxNkZ0NUIyeWZTaklyNG5kQjhuT25JZ1cvSWFLWldYbTEwUS9ZN2g5cWEzZHFEejJJSHBOZTNocUIrMGZzUGt3bEdsVTZmZ2Nsck1xRnNjZkhoYWVONUVxdE1RUHExUDRKcExGc3QySjZyOEpqc1ZkcE1OazNscXBzdlhKYXNEVkVma3VFNVhFTWlJNS8wMGU2TC8rY2lyWVhEN0JHSmFWaUpsaFE4MEtWdzJqRjFSdkQ4dFhJUTBRazYxOUszemRaOW1nTGlidWkzdnhDa1J2MkhCaWptOHR4cW1qL015UTV4MzFpMXYweStCM3dZSHRPY3FjYThCOU1ZMVdUc3Uxdm9oemFyR1Q2Q3BaK2psTStxQVU2cWxZNG1YcnM5cUhFa0ZOd0JpWFNaMjJsT2RpTndoa2ZLTTNOcmRacGZ6bjc1MUN0L2ZVaXA3OHhtUW1YNGdYY1Z5R0ZkMzhtcE9aUXJ6eGFvWmdLZStxQVJtWGpJRFRiS3VTbWhnL2ZIY1dPRGxOZjljY01YSnFBWFF1TUdxQWMvRDJvZzZYTzFuK0ZQamNqUDVvajRBSjVsSHA3TWVNR1YrRGVMeVF5aDBFSWFVN2EwNDQxTUtpUXVranBzUWFnQUdUcTdBbVZMOWtuV2dzMXVzd0o2bHNXZWVzaUVKU2owUmROa01ySkVOejI3R0FWdUYrVzFZQkRGNVA1dFBsYk45ZDMreE02QkQyTHJVdUdMT1dCbXE1b2JyOVJmeW95MTBNZ2FFS1NObVI0VUl1dXFSdjdweFFscnFWNmlBcGZZR0NaV1VxM0JTQW5nM0VLY1hoS1QyeTZVbVBSYW8wait5Tkk1d2o4cC8zdFE9PSIsIkF1dGhJbmZvIjoie1wiQ2FsbGVyXCI6XCJZMXN3bnBGK2RGL2g4RVVLeTBSU0xOcHVWMGxnQ3ZvSXNyUU1PcE9ROXRRPVxcclxcblwiLFwiRXhwaXJlVGltZVwiOlwiMjAxOC0wNi0wNlQwNjoxNDozMVpcIixcIk1lZGlhSWRcIjpcIjhlODgwZjRlNjg1MjQ4MzY4ZDZjMDgyMjJlNzlmMmYyXCIsXCJTaWduYXR1cmVcIjpcIkpqaHhvcmRqSVFXNXRqZVJoRW1zemNjRmVOMD1cIn0iLCJWaWRlb01ldGEiOnsiU3RhdHVzIjoiTm9ybWFsIiwiVmlkZW9JZCI6IjhlODgwZjRlNjg1MjQ4MzY4ZDZjMDgyMjJlNzlmMmYyIiwiVGl0bGUiOiLor77nqIvlvJXlhaXigJTigJTnmb3ph5Hov5jmmK"
                    }}
                    onEventCallback={this.handleEventCallback}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
