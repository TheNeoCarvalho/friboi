import Ionicons from '@expo/vector-icons/AntDesign';
import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="customerservice" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Friboi</ThemedText>
      </ThemedView>
      <ThemedText style={{ textAlign: 'justify'}}>O aplicativo "Friboi" é uma ferramenta prática e intuitiva projetada para ajudar você a gerenciar suas finanças pessoais de forma eficiente. Com ele, você pode registrar todas as suas compras do mês, mantendo um histórico organizado e acessível de suas despesas.</ThemedText>
      <Collapsible title="Funcionalidades Principais">
        <ThemedText style={{ textAlign: 'justify'}}>
          Registro de Compras: Adicione facilmente novas compras, especificando o valor e a data. Cada entrada é salva automaticamente, garantindo que você nunca perca uma transação.
          Visualização de Gastos: Veja todas as suas compras listadas em ordem cronológica, do mais recente ao mais antigo, permitindo uma análise clara de suas despesas ao longo do mês.
          Cálculo do Total: O aplicativo calcula automaticamente o valor total de todas as suas compras, exibindo-o de forma destacada para que você possa monitorar seus gastos mensais com facilidade.
          Interface Amigável: Com um design limpo e intuitivo, o aplicativo é fácil de usar, mesmo para aqueles que não têm experiência com tecnologia.
          Armazenamento Seguro: Todas as suas informações são armazenadas de forma segura no dispositivo, garantindo privacidade e segurança dos seus dados financeiros.    
        </ThemedText>
      </Collapsible>
      <ThemedText  style={{ textAlign: 'justify'}}>
      O "Friboi" é a solução ideal para quem deseja manter suas finanças sob controle, oferecendo uma maneira simples e eficaz de acompanhar suas despesas mensais. Experimente agora e descubra como é fácil gerenciar suas finanças pessoais!
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
