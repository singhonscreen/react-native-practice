import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

function Card() {
    return (
       <TouchableOpacity>
           <Image style={styles.img} source={{uri:"https://picsum.photos/200/300"} } />
       </TouchableOpacity>
    );
}

export default Card;


const styles = StyleSheet.create({
    img:{
        width:200,
    height:200,
    }
})