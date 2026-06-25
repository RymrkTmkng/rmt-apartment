import { StyleSheet, Text, View } from 'react-native'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { Stack, useRouter } from 'expo-router'
import { useEffect } from 'react'

const RootLayout = () => {
    const router = useRouter();
    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if(user){
                router.replace("/(tabs)/home");
            }else{
                router.replace("/auth/login");
            }
        });
        return unsubscribe;
    }, []);
    return <Stack screenOptions={{ headerShown: false }} />;
}

export default RootLayout

const styles = StyleSheet.create({})