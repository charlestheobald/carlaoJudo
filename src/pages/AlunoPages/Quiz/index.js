import React, { useState } from 'react';
import { styles } from './styles';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export const Quiz = () => {

  const navigation = useNavigation();

  const handleNavigationConfigs = () => {
    navigation.navigate('UserConfigs')
  }

  const questions = [
    {
      questionText: (
        <Text style={styles.QuestionText}>Em que ano foi fundado o Judô?</Text>
      ),
      answerOptions: [
        { answerText: <Text style={styles.OptionText}>1862</Text>, isCorrect: false },
        { answerText: <Text style={styles.OptionText}>1872</Text>, isCorrect: false },
        { answerText: <Text style={styles.OptionText}>1882</Text>, isCorrect: true },
        { answerText: <Text style={styles.OptionText}>1892</Text>, isCorrect: false },
      ],
    },
    {
      questionText: (
        <Text style={styles.QuestionText}>O que significa a palavra Judô?</Text>
      ),
      answerOptions: [
        { answerText: <Text style={styles.OptionText}>Caminho forte</Text>, isCorrect: false },
        { answerText: <Text style={styles.OptionText}>Caminho suave</Text>, isCorrect: true },
        { answerText: <Text style={styles.OptionText}>Caminho incerto</Text>, isCorrect: false },
        { answerText: <Text style={styles.OptionText}>Caminho rápido</Text>, isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.App}>
        {showScore ? (
          <View style={styles.ScoreSection}>
            <Text style={styles.ResultText}>
              Você acertou {score} de {questions.length} questões!!
            </Text>
            <Text style={styles.ResultText}>
              Você conquistou {((score * 100) / 2 / 100) * 200} pontos nesse quiz!!
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.QuestionSection}>
              <View style={styles.QuestionCount}>
                <Text style={styles.CountText}>Questão {currentQuestion + 1} de {questions.length}</Text>
              </View>
              <View style={styles.QuestionText}>
                {questions[currentQuestion].questionText}
              </View>
            </View>
            <View style={styles.AnswerSection}>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <View style={styles.Button}>
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }>
                    {answerOption.answerText}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </>
        )}
      </View>
    </View>
  );
}