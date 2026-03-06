import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function App() {

  const [valor, setValor] = useState("");

  function adicionar(num) {
    setValor(valor + num);
  }

  function limpar() {
    setValor("");
  }

  function calcular() {
    try {
      const resultado = eval(valor);
      setValor(resultado.toString());
    } catch {
      setValor("Erro");
    }
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>

        <Text style={styles.display}>{valor || "0"}</Text>

        <View style={styles.linha}>
          <Botao texto="7" onPress={() => adicionar("7")} />
          <Botao texto="8" onPress={() => adicionar("8")} />
          <Botao texto="9" onPress={() => adicionar("9")} />
          <Botao texto="/" onPress={() => adicionar("/")} />
        </View>

        <View style={styles.linha}>
          <Botao texto="4" onPress={() => adicionar("4")} />
          <Botao texto="5" onPress={() => adicionar("5")} />
          <Botao texto="6" onPress={() => adicionar("6")} />
          <Botao texto="*" onPress={() => adicionar("*")} />
        </View>

        <View style={styles.linha}>
          <Botao texto="1" onPress={() => adicionar("1")} />
          <Botao texto="2" onPress={() => adicionar("2")} />
          <Botao texto="3" onPress={() => adicionar("3")} />
          <Botao texto="-" onPress={() => adicionar("-")} />
        </View>

        <View style={styles.linha}>
          <Botao texto="0" onPress={() => adicionar("0")} />
          <Botao texto="C" onPress={limpar} />
          <Botao texto="=" onPress={calcular} />
          <Botao texto="+" onPress={() => adicionar("+")} />
        </View>

      </Card>
    </View>
  );
}

function Botao({ texto, onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },

  card: {
    padding: 20,
  },

  display: {
    fontSize: 32,
    textAlign: 'right',
    marginBottom: 20,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  botao: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 15,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 18,
  },
});