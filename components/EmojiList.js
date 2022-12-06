import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function EmojiList({ onSelect, onCloseModal }) {
    const [emoji] = useState([
        require('../assets/images/emoji1.png'),
        require('../assets/images/emoji2.png'),
        require('../assets/images/emoji3.png'),
        require('../assets/images/emoji4.png'),
        require('../assets/images/emoji5.png'),
        require('../assets/images/emoji6.png'),
    ]);

    return (
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false }
        data={emoji}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => {
            return(
                <Pressable
                    onPress={() => {
                        onSelect(item);
                        onCloseModal();
                    }}>
                        <Image source={item} key={index} style={styles.image} />
                </Pressable>
            );
        }}
        />
    );

}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10, 
        borderTopLeftRadius: 10, 
        paddingHorizontal: 209, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
});