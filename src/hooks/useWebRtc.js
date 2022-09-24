import { useState } from "react";
import { useStateWithCallback } from "./useStateWithCallback";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const users = [

    {
        id: 1,
        name: 'Rakesh k',
    },
    {
        id: 2,
        name: 'John Doe',
    },

]
export const useWebRTC = (roomId, user) => {
    const [clients, setClients] = useStateWithCallback(users);
    const audioElements = useRef({})
    const connections = useRef({});
    const localMediaStreem = useRef(null);

    const provideRef = (instance, userId) => {
        audioElements.current[userId] = instance;
    };

    const addNewClients = useCallback(
        (newClient, cb) => {
            const lookingFor = clients.find((client) => client.id === newClient.id);

            if (lookingFor === undefined) {
                setClients((existingClients) => [...existingClients, newClient], cb)
            }
        },
        [clients, setClients],
    )

    //CApture media

    useEffect(() => {
        const startCapture = async () => {
            localMediaStreem.current = await navigator.mediaDevices.getUserMedia({
                audio: true
            })
        };
        startCapture().then(() => {
            addNewClients(user, () => {
                const localElement = audioElements.current[user.id];
                if(localElement){
                    localElement.volume = 0;
                    localElement.srcObject = localMediaStreem.current;
                }
            })
        })
    }, [])

    return { clients, provideRef };
}