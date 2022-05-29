import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    Image,
    ImageBackground,
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';


const App = () => {

    function renderHeader() {
      return (
        <View style={{
            flexDirection: 'row',
            height: 70,
            alignItems: 'center',
            backgroundColor: '#ffffff',
        }}>
            {/* <TouchableOpacity
                style={{
                    alignSelf: 'center',
                    width: 25,
                    height: 25,
                    marginLeft: 15
                }}
            > */}
                <Image 
                    style={{width: 25, height: 25, marginLeft: 15, alignSelf: 'center'}} 
                    source={require('./assets/icons/pin.png')}
                    resizeMode='contain'
                />
            {/* </TouchableOpacity> */}

            <View style={{flex: 1}}>
               <View
                  style={{
                     width: '100%',
                     height: '100%',
                     justifyContent: 'center',
                     flexDirection: "column",
                     paddingStart: 15
                  }}
               >
                    <Text style={{color: 'gray', fontSize: 14, fontFamily: 'Ubuntu-Regular'}}>
                        Your current location
                        </Text>
                    <Text style={{color: 'black', fontSize: 14, fontFamily: 'Ubuntu-Regular' }}>
                      6 Ballygunge Place, Kolkata 70..
                    </Text>
               </View>
            </View>

            <TouchableOpacity
                style={{
                    width: 50,
                    justifyContent: "center",
                    marginEnd: 15,
                }}
            >
                <Image 
                    source={require('./assets/images/dp.png')}
                    style={{width: 50, height: 50, alignSelf: 'center'}}
                />
            </TouchableOpacity>
            
        </View>
      );
    }

    function renderHeader2() {
        return (
            <View style={{
                flexDirection: 'row',
                height: 65,
                alignItems: 'center',
                backgroundColor: '#FAF0D7',
                justifyContent: 'space-between',
                paddingStart: 30,
                paddingEnd: 30
            }}>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Text style={{
                        color: '#2B2B2B',
                        fontSize: 15,
                        fontFamily: 'WorkSans-Regular'
                    }}>
                        Contact ZORRRO Admin
                    </Text>
                </View>

                <TouchableOpacity
                    style={{
                        alignSelf: 'center',
                        width: 25,
                        height: 25,
                    }}
                >
                    <Image 
                        style={{width: 25, height: 25}} 
                        source={require('./assets/icons/dialer.png')}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function renderMapImage() {
        return (
            <View style={{ flexDirection: 'column' }}>
                
            {/* Map Image */}
            <View
                style={{
                    height: 250,
                    width: '100%'
                }}
            >
                <ImageBackground
                    source={require("./assets/images/map.png")}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode='cover'
                >
                    {/* Open in maps button */}
                    <TouchableOpacity
                        style={{
                            width: 112,
                            height: 32,
                            justifyContent: 'center',
                            backgroundColor: '#795334',
                            borderRadius: 6,
                            margin: 15,
                            bottom: 0,
                            left: 0,
                            position: 'absolute'
                        }}
                    >
                        <Text style={{ fontFamily: 'WorkSans-Medium', color: 'white', alignSelf: 'center', fontSize: 12.5 }}>Open in Maps</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: '#F1F1F1', height: 300, flexDirection: 'column', padding: 18 }}>

                <Text style={{ paddingLeft: 10, fontFamily: 'WorkSans-Medium',color: 'black', fontSize: 15 }}>
                    Delivery Details
                </Text>

                <Text style={{ marginTop: 16, color: 'gray', paddingLeft: 10, }}>
                    Status
                </Text>


                {/* Checkcircle View */}
                <View style={{ 
                    flexDirection: 'row', 
                    marginTop: 10,
                    marginHorizontal: 14,
                    justifyContent: 'space-between',
                }}>
                    {/* Pickup checkcircle */}
                    <View style={{flexDirection: 'row'}}>
                        <BouncyCheckbox onPress={()=>console.log('pickup pressed')}
                            size={28}
                            fillColor="#795334"
                            unfillColor='#ffffff'
                            // text='Pickup'
                            textStyle={{color: 'black', fontSize: 14, textDecorationLine: 'none' }}
                        />
                        <Text style={{
                            color: 'black', 
                            fontSize: 14, 
                            left: 35, 
                            position: 'absolute',
                            alignSelf: 'center',
                            fontFamily: 'Ubuntu-Regular'
                        }}>
                            Pick up
                        </Text>
                    </View>

                    {/* Photo checkcircle */}
                    <View style={{flexDirection: 'row', justifyContent:'center'}}>
                        <BouncyCheckbox onPress={()=>console.log('photo pressed')}
                            size={28}
                            fillColor="#795334"
                            unfillColor='#ffffff'
                            // text='Photo'
                            textStyle={{color: 'black', fontSize: 14, textDecorationLine: 'none' }}
                        />
                        <Text style={{
                            color: 'black', 
                            fontSize: 14, 
                            left: 35, 
                            position: 'absolute',
                            alignSelf: 'center',
                            fontFamily: 'Ubuntu-Regular'
                        }}>
                            Photo
                        </Text>
                    </View>

                    {/* Deliver checkcircle */}
                    <View style={{flexDirection: 'row', justifyContent:'center'}}>
                        <BouncyCheckbox onPress={()=>console.log('photo pressed')}
                            size={28}
                            fillColor="#795334"
                            unfillColor='#ffffff'
                            // text='Photo'
                            textStyle={{color: 'black', fontSize: 14, textDecorationLine: 'none' }}
                        />
                        <Text style={{
                            color: 'black', 
                            fontSize: 14, 
                            alignSelf: 'center',
                            position: 'relative',
                            right: 10,
                            fontFamily: 'Ubuntu-Regular'
                        }}>
                            Deliver
                        </Text>
                    </View>
                </View>


                {/* line */}
                <View
                    style={{
                        borderBottomColor: '#DFDFDE',
                        borderBottomWidth: 1,
                        marginVertical: 18,
                        marginHorizontal: 10
                    }}
                />

                
                <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontFamily: 'Ubuntu-Regular', color: 'black', fontSize: 14}}>Rajarshi Banerjee</Text>
                        <Text style={{ fontFamily: 'Ubuntu-Regular', color: 'black', fontSize: 14, marginTop: 6}}>34, New Alipore, Kolkata 700029</Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            height: 40, 
                            width: 40, 
                            backgroundColor: '#32CD32',
                            padding: 6,
                            position: 'absolute',
                            right: 0,
                            borderRadius: 9,
                        }}
                    >
                        <Image 
                            source={require('./assets/icons/dialer2.png')}
                            resizeMode='contain'
                            style={{width: '100%', height: '100%', }}
                        />
                    </TouchableOpacity>
                        
                </View>


                {/* line */}
                <View
                    style={{
                        borderBottomColor: '#DFDFDE',
                        borderBottomWidth: 1,
                        marginVertical: 18,
                        marginHorizontal: 10
                    }}
                />

                {/* Amount and Payment method */}
                <View style={{flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between'}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 14, color: 'gray' }}>Amount</Text>
                        <Text style={{ fontSize: 14, color: 'black', marginTop: 5 }}>Rs. 250</Text>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 14, color: 'gray' }}>Payment Method</Text>
                        <Text style={{ fontSize: 14, color: 'black', marginTop: 5 }}>Cash on Delivery</Text>
                    </View>
                </View>

                {/* Total Kms and deliver time */}
                <View style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 25}}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 14, color: 'gray' }}>Total Kms Travelled</Text>
                        <Text style={{ fontSize: 14, color: 'black', marginTop: 5 }}>16.2 Kmns</Text>
                    </View>

                    <View style={{ flexDirection: 'column', position: 'absolute', right: 32 }}>
                        <Text style={{ fontSize: 15, color: 'gray' }}>Deliver Time</Text>
                        <Text style={{ fontSize: 15, color: 'black', marginTop: 5 }}>16:20</Text>
                    </View>
                </View>

                {/* DELIVER button */}
                <TouchableOpacity style={{marginTop: 20, marginBottom: 30}}>
                    <LinearGradient colors={['#DDB45A', '#795334']}
                        style={{
                            flex: 1,
                            marginHorizontal: 10,
                            borderRadius: 8,
                            height: 40,
                            justifyContent: 'center'
                    }}>
                        <Text style={{ 
                            color: 'white', 
                            fontSize: 16, 
                            alignSelf: 'center',
                            fontFamily: 'WorkSans-Medium'
                        }}>DELIVER</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>

            </View>
        );
    }

    function renderBottomNavBar() {
        return (
            <View style={{
                heght: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                paddingVertical: 10,
                paddingHorizontal: 10,
            }}>

                <TouchableOpacity style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Image source={require('./assets/icons/bottom1.png')}
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{fontFamily: 'WorkSans-Regular', color: '#795334', fontSize: 13}}>Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Image source={require('./assets/icons/bottom2.png')}
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{color: 'gray', fontFamily: 'WorkSans-Regular', fontSize: 13}}>Finance</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Image source={require('./assets/icons/bottom3.png')}
                        style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain'
                        }}
                    />
                    <Text style={{color: 'gray', fontFamily: 'WorkSans-Regular', fontSize: 13}}>Help</Text>
                </TouchableOpacity>

            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderHeader2()}
            {renderMapImage()}
            {renderBottomNavBar()}
        </SafeAreaView>
    );
};

styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    header: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        backgroundColor: 'red'
    },
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: 'orange'
    }
})

export default App;