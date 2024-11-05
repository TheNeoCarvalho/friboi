import { StyleSheet, Text } from "react-native"
import { Card } from "react-native-paper"
import { ThemedText } from "./ThemedText"

export default function CardScreen(props: any) {

    return (
        <Card style={styles.card}>
            <Card.Content>
                <Text style={styles.textValueCard}>Valor da compra</Text>
                <ThemedText type="subtitle">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(props.text))}
                </ThemedText>
            </Card.Content>
            <Card.Content>
                <Text style={styles.textDateCard}>Data da compra</Text>
                <ThemedText type="subtitle">{props.date}</ThemedText>
            </Card.Content>
        </Card>
    )

}

const styles = StyleSheet.create({
    card: {
        margin: 8,
        paddingVertical: 10,
    },
    textCard: {
        color: "#fff",
        fontSize: 24
    },
    textValueCard: {
        color: "#bbb",
        fontSize: 16
    },
    textDateCard: {
        color: "#bbb",
        fontSize: 16
    },
})