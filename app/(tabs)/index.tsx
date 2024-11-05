import { useEffect, useState } from 'react';
import { Image, StyleSheet, FlatList, Button, TextInput, Text } from 'react-native';
import { CurrentDate } from '@/components/CurrentDate'
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FAB, Modal, Portal, Provider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardScreen from '@/components/Card';

export default function HomeScreen() {

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const [items, setItems] = useState<{ id: string; text: string, date: string }[]>([]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('@items');
        if (storedItems) {
          setItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error('Failed to load items', error);
      }
    };

    loadItems();
  }, []);

  const addItem = async () => {
    const currentDate = new Date().toLocaleDateString('pt-br');
    const newItem = { id: Date.now().toString(), text, date: currentDate };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setText('');
    hideModal();

    try {
      await AsyncStorage.setItem('@items', JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Failed to save item', error);
    }
  };

  return (
    <Provider>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            resizeMode="contain"
            source={require('@/assets/images/friboi-logo.png')}
            style={styles.reactLogo}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Bem Vindo!</ThemedText>
        </ThemedView>

        <ThemedView style={styles.dateContainer}>
          <ThemedText type="subtitle">
            Data: <CurrentDate />
          </ThemedText>

          <ThemedText type="subtitle">
            Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
              items.reduce((total, item) => total + Number(item.text), 0)
            )}
          </ThemedText>
        </ThemedView>


        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CardScreen date={item.date} text={item.text}/>}
        />

        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Valor
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Informe o valor da compra"
              value={text}
              onChangeText={setText}
            />
            <Button color='red' title="Adicionar" onPress={addItem} />
          </Modal>
        </Portal>
      </ParallaxScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={showModal}
        color='white'

      />
    </Provider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 155,
    width: 450,
    bottom: 0,
    left: 0,
    position: 'absolute',
    marginBottom: 25
  },
  fab: {
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 50,
    margin: 16,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    justifyContent: 'flex-start',
    height: 180,
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    paddingVertical: 8
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalContainer: {
    margin: 16,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});
