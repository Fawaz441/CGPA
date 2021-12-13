import React from 'react'
import {View, Text} from 'react-native'
import { styles } from '../styles'


const Grades = () => {
  return(
    <View style={styles.grades}>
        <Text style={styles.header}>
          Grades
        </Text>
        <View style={styles.semester}>
          <View style={styles.semesterHeader}>
              <Text style={styles.semesterHeaderText}>Part 1 Harmattan</Text>
          </View>
          <View style={styles.gradeList}>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
          </View>
        </View>
        <View style={styles.semester}>
          <View style={styles.semesterHeader}>
              <Text style={styles.semesterHeaderText}>Part 1 Harmattan</Text>
          </View>
          <View style={styles.gradeList}>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
            <View style={styles.gradeListItem}>
              <Text style={styles.course}>MEE 205</Text>
              <Text style={styles.grade}>A</Text>
            </View>
          </View>
        </View>
    </View>
  )
}

export default Grades