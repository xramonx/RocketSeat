//just run$ yarn android (it is necessary to have the Android Studio configured correctly)
//it will be necessary to run also ../backend/ $ yarn dev

import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import api from './services/api';

//Não possuem valor semântico.
//Não possuem estilização própria
//Todos componentes possuem por padrão "display: flex" 

//View: div, footer, header, main, aside, section
//Text: p, span, strong, h1, h2, h3

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Ramon Menezes'
        });
        const project = response.data;
        setProjects([...projects, project]);
    }

    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor="#7159c1" />

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}> {project.title} </Text>
                    )}
                />
            </SafeAreaView>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.button}
                onPress={handleAddProject}
            >
                <Text style={styles.buttonText}>Adicionar Projeto </Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    title: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold'
    },

    project: {
        color: '#FFF',
        fontSize: 30
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    },

});