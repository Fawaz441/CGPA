import React, {useState} from 'react'
import { View, SafeAreaView, Text, StatusBar, Image, Animated as _ } from 'react-native'
import { styles } from '../styles'
import { ICONS, COLORS } from '../styles/theme'
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    interpolate
  } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { height, width } from '../styles/styles';
import Grades from './Grades';


const Home = () => {
    const top = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
          ctx.startY = 0;
        },
        onActive: (event, ctx) => {
        if(event.translationY > 0 ){
            return
        }
        let position = ctx.startY - event.translationY
        if(position > (height/3)){
            top.value = withSpring(height)
        }
        else{
            top.value = withSpring(position);
        }
        },
        onEnd: (_) => {
            if(top.value < height/3){
                top.value = withSpring(0)
            }
        },
      });

      const style = useAnimatedStyle(() => {
        return {
          transform: [
            {
                translateY: -top.value,
            },
          ],
        };
      });



    return (
        <SafeAreaView>
            <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.welcome,style]}>
                <View style={[styles.centered]}>
                    <View style={styles.relative}>
                        <Text style={styles.passTheClass}>Pass{"\n"}the{"\n"}Class</Text>
                        <Text style={[styles.fadedGrade, styles.absolute]}>
                            A+
                        </Text>
                    </View>
                </View>
                <View style={[styles.absolute, styles.swipeCta]}>
                    <Text style={styles.swipeCtaText}>Swipe up</Text>
                    <View>
                        <Image style={styles.angle} source={ICONS.angleUp}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </Animated.View>
            </PanGestureHandler>
        <Grades/>
        </SafeAreaView>
    )
}

export default Home