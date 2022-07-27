import React from 'react';
import { View, Text, ScrollView, ImageBackground, Image } from 'react-native';
import { Header } from '../../components/Header';
import Background from '../../assets/background.png';
import { Feather } from '@expo/vector-icons';
import Logo from '../../assets/splash.png';
import Profile from '../../assets/Profile.png';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './style';
import { useNavigation } from "@react-navigation/native";
import { InputProfiles } from '../../components/InputProfiles';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { profile } from '../../utils/Profile';

export function ProfileEditing() {
    const navigation = useNavigation()

    return (
        <ImageBackground style={styles.background} source={Background}>
            <View style={styles.cabecalho}>
                <Feather
                    name={'arrow-left'}
                    color={theme.colors.black}
                    size={25}
                    onPress={navigation.goBack}
                    style={styles.arrow}
                />
                <Image source={Logo} style={styles.imageContainer} />
            </View>
            <View style={styles.profileInfos}>
                <FlatList  keyExtractor={item => item.id} data={profile} renderItem={({ item }) => (
                    <View style={styles.imgProfileContainer}>
                        <Image source={item.image} style={styles.imageProfile} />
                    </View>
                )} />
                <View style={styles.title}>
                    <EvilIcons name="pencil" size={24} color={theme.colors.white} />
                    <Text style={styles.subtitle}>
                        Editar Perfil
                    </Text>
                </View>
                <View style={styles.inputs}>
                    <InputProfiles textPlace='Nome Sobrenome' />
                    <InputProfiles textPlace='Telefone' type='numeric' />
                    <InputProfiles textPlace='Email' type='email-address' />
                </View>
                <RectButton style={styles.button}>
                    <Text style={styles.textButton}>
                        Editar Perfil
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>
    );
}