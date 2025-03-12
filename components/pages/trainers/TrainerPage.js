import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity} from "react-native";
import { ImageBackground } from "react-native";
import { trainerStyles } from "./trainerStyle";
import Play from "./../../icons/playButtonBig";
import Back from "./../../icons/BackArrowIcon";
import Muscle from "./../../icons/WeightGrey";

const WorkoutsList = ({navigation}) => {

    const handleContacthandleExercise = (exercise) => {
        navigation.navigate("WorkoutDetails");
      };

      
      const handleContact = (exercise) => {
        navigation.navigate("TrainerContact");
      };
    return (
        <View style={{backgroundColor:"#111214", flexDirection:"column", height:"100%"}}>
            <View style={{padding:30, justifyContent:"center", alignSelf:"center"}}>
                <Text style={{color:"#FFFFFF", fontSize:24, fontWeight:600}}>Your Trainer - Name</Text>
            </View>

            <View style={{paddingLeft:30, paddingTop:20, flexDirection:"column"}}>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500}}>Subscription Expiry Date - </Text>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500, paddingTop:15}}>Goal - </Text>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500, paddingTop:15}}>Completed Trainings - </Text>
            </View>

            <TouchableOpacity onPress={handleContact} style={[trainerStyles.orangeBox, {justifyContent:"center"}]}>
                <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500}}>Chat with trainer</Text>
            </TouchableOpacity>

            <View style={[trainerStyles.card, {marginTop:20, marginLeft:20, borderColor:"#37383C", borderWidth:2}]}>
                <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:500, paddingTop:20, paddingLeft:25}}>Next Training</Text>
                
                <View style={{flexDirection:"row", paddingLeft:25, paddingTop:10}}>
                    <Muscle/>
                    <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:400, marginLeft:10}}>Surprise</Text>
                </View>

                <TouchableOpacity onPress={handleContacthandleExercise} style={[trainerStyles.greyBox, {width:160, height:40, justifyContent:"center", alignItems:"center", marginTop:15}]}>
                    <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500}}>To be Designed</Text>
                </TouchableOpacity>
            </View>

            <View style={[trainerStyles.card, {marginTop:50, marginLeft:20, borderColor:"#FF8036", borderWidth:2}]}>
                <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:500, paddingTop:20, paddingLeft:25}}>Today Training</Text>
                
                <View style={{flexDirection:"row", paddingLeft:25, paddingTop:10}}>
                    <Muscle/>
                    <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:400, marginLeft:10}}>Quads</Text>
                </View>

                <TouchableOpacity onPress={handleContacthandleExercise} style={[trainerStyles.orangeBox, {width:160, height:40, justifyContent:"center", alignItems:"center", marginTop:15}]}>
                    <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500}}>Start</Text>
                </TouchableOpacity>
            </View>

            <View style={[trainerStyles.card, {marginTop:50, marginLeft:20, borderColor:"#FF8036", borderWidth:2}]}>
                <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:500, paddingTop:20, paddingLeft:25}}>Last Training</Text>
                
                <View style={{flexDirection:"row", paddingLeft:25, paddingTop:10}}>
                    <Muscle/>
                    <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:400, marginLeft:10}}>Great Job</Text>
                </View>

                <TouchableOpacity style={[trainerStyles.orangeBox, {width:160, height:40, justifyContent:"center", alignItems:"center", marginTop:15}]}>
                    <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:500}}>Feedback</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WorkoutsList;
