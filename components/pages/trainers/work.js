import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity} from "react-native";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native-web";
import Back from "../../icons/BackArrowIcon";
import Timer from "../../icons/timeSmallIcon";
import Endurance from "../../icons/WeightGrey";
import Weight from "../../icons/WeightGrey";
import Line from "../../icons/VerticalLine";
import { trainerStyles } from "./TrainerStyles";
import Play from "../../icons/OrangePlayButton";
import ExPhoto from "../../icons/Apple";
import Timer2 from "../../icons/stopWatch";

const WorkoutDetails = () => {
    return (
        <ScrollView style={{backgroundColor:"#24262B", width:"100%"}}>
            <View style={{flexDirection:"column", height:350}}>  {/*background photo*/} 
                <TouchableOpacity style={{paddingTop:50, paddingLeft:50}}>
                    <Back/>
                </TouchableOpacity>

                <View style={{justifyContent:"center", alignItems:"center", paddingTop:200}}>
                    <Text style={{color:"#FFFFFF", fontSize:32, fontWeight:500}}>Chest Training</Text>
                    <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:500}}>With Vlad Nicoara</Text>
                </View>
            </View>

            <View style={{justifyContent:"center", alignItems:"center", paddingLeft:20, paddingRight:20, paddingTop:30}}>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:400, textAlign:"center"}}>Check carefully every exercise's description, the intensity, the goal or the technique may be different based on your trainer specification.</Text>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:400, textAlign:"center"}}>Good luck, you need it!</Text>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around", paddingTop:30, marginHorizontal:40}}>
                <View style={{flexDirection:"column", alignItems:"center", height:60, justifyContent:"space-between"}}>
                    <Timer/>
                    <Text style={{color:"#FFFFFF", fontSize:14, fontWeight:500}}>75min</Text>
                    <Text style={{color:"#9EA0A5", fontSize:14, fontWeight:500}}>Time</Text>
                </View>

                <Line/>

                <View style={{flexDirection:"column", alignItems:"center", height:60, justifyContent:"space-between"}}>
                    <Endurance/>
                    <Text style={{color:"#FFFFFF", fontSize:14, fontWeight:500}}>High</Text>
                    <Text style={{color:"#9EA0A5", fontSize:14, fontWeight:500}}>Intensity</Text>
                </View>

                <Line/>

                <View style={{flexDirection:"column", alignItems:"center", height:60, justifyContent:"space-between"}}>
                    <Weight/>
                    <Text style={{color:"#FFFFFF", fontSize:14, fontWeight:500}}>6</Text>
                    <Text style={{color:"#9EA0A5", fontSize:14, fontWeight:500}}>Exercises</Text>
                </View>
            </View>

            <View style={[trainerStyles.card, {marginHorizontal:20, marginTop:20, flexDirection:"row", justifyContent:"space-around"}]}>
                <View style={{justifyContent:"center"}}>
                    <ExPhoto/>  {/*exercise photo*/}
                </View>

                <View style={{flexDirection:"column", marginVertical:20, justifyContent:"space-around"}}>
                    <Text style={{color:"#9EA0A5", fontSize:16, fontWeight:500}}>Exercise 1</Text>
                    <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500}}>Exercise Name</Text>
                    
                    <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                        <Timer/>
                        <Text style={{color:"#9EA0A5", fontSize:16, fontWeight:500}}>5 minutes</Text>
                    </View>
                </View>

                <TouchableOpacity style={{justifyContent:"center"}}>
                    <Play/>
                </TouchableOpacity>
            </View>

            <View style={[trainerStyles.card, {marginHorizontal:20, marginVertical:20, flexDirection:"row", justifyContent:"space-around"}]}>
                <View style={{justifyContent:"center"}}>
                    <ExPhoto/>
                </View>

                <View style={{flexDirection:"column", marginVertical:20, justifyContent:"space-around"}}>
                    <Text style={{color:"#9EA0A5", fontSize:16, fontWeight:500}}>Exercise 2</Text>
                    <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500}}>Exercise Name</Text>
                    
                    <View style={{flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                        <Timer/>
                        <Text style={{color:"#9EA0A5", fontSize:16, fontWeight:500}}>5 minutes</Text>
                    </View>
                </View>

                <TouchableOpacity style={{justifyContent:"center"}}>
                    <Play/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[trainerStyles.orangeBox, {marginHorizontal:20, justifyContent:"center", alignItems:"center", marginTop:0}]}>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500}}>Start Workout</Text>
                <Timer2/>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default WorkoutDetails;
