import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { COLORS, FONTS } from "./theme";

const {height, width} = Dimensions.get('window')
export {
    height,
    width
}

const styles = StyleSheet.create({
    welcome:{
        // flex:1,
        top:0,
        left:0,
        right:0,
        // height:height + StatusBar.currentHeight,
        width,
        backgroundColor:COLORS.orange,
        height,
        zIndex:2
        
    },
    centered:{
        justifyContent:'center',
        // alignItems:'center',
        flex:1
    },
    passTheClass:{
        color:COLORS.white,
        fontSize:60,
        fontFamily:FONTS.bold,
        lineHeight:62,
        marginLeft:0.15 * width,
        zIndex:2
    },
    relative:{position:'relative'},
    absolute:{position:'absolute'},
    fadedGrade:{
        color:COLORS.yellow,
        right:0,
        fontSize:200,
        bottom:20,
        fontFamily:FONTS.bold,
        opacity:0.2
    },
    swipeCta:{
        bottom:30,
        justifyContent:'center',
        alignItems:'center',
        width
    },
    swipeCtaText:{
        color:COLORS.blue,
        textAlign:'center',
        fontSize:18,
        fontFamily:FONTS.bold
    },
    angle:{
        width:20,
        height:20
    },
    grades:{
        height,
        width,
        backgroundColor:COLORS.yellow,
        // flex:1,
        position:'absolute',
        bottom:0,
        height,
        padding:20,
    },
    header:{
        color:COLORS.orange,
        fontSize:40,
        textAlign:'center',
        marginBottom:10,
        fontFamily:FONTS.bold
    },
    semesterHeader:{
        backgroundColor:COLORS.white,
        borderRadius:7,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    },
    semesterHeaderText:{
        color:COLORS.blue,
        fontFamily:FONTS.bold,
        fontSize:22
    },
    gradeList:{
        backgroundColor:COLORS.white,
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:7,
        marginTop:10
    },
    semester:{
        marginBottom:20
    },
    gradeListItem:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        borderBottomWidth:0.2,
        borderBottomColor:COLORS.yellow
    },
    course:{
        fontFamily:FONTS.italic,
        color:COLORS.blue,
        fontSize:16
    },
    grade:{
        fontFamily:FONTS.bold,
        color:COLORS.orange,
        fontSize:20 
    }
})

export default styles