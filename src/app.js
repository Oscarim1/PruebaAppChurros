import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Item, Input } from 'native-base';
import { StyleSheet } from 'react-native'
import {FontAwesome} from '@expo/vector-icons'
export class churrosapp extends Component {
    render() {
        return (<Container>
            <Header />
            <Content padder contentContainerStyle={styles.content}>
                <Card>
                    <CardItem header bordered style={styles.fondo}>
                        <Text style={styles.texCenter}>Inicio de sesion</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body style={styles.body}>
                            <Item inlineLabel>
                                <FontAwesome name='user' size={20}></FontAwesome>
                                <Input placeholder='Nombre de usuario' />
                            </Item>
                            <Item inlineLabel last>
                                <FontAwesome name='lock' size={20}></FontAwesome>
                                <Input placeholder='Contraseña' />
                            </Item>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered>
                        <Button primary style={styles.boton}>
                            <Text> Entrar </Text>
                        </Button>
                    </CardItem>
                </Card>
            </Content>
        </Container>
        );
    }
}
const styles = StyleSheet.create({
    textCenter: {
        textAlign : 'center',
        width : '100%'
    },
    content: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#E27319'
    },
    boton: {
        marginLeft : '70%'
    },
    body: {
        paddingVertical: 30
    },
    fondo: {
        backgroundColor: 'white'
    }
})

export default churrosapp