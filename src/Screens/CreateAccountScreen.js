import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';

export default function CreateAccountScreen({ navigation }) {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={25} style={styles.chevron}/>
            <Formik
        initialValues={{
          description: '',
          curEmail: profile?.emails[0],
        }}
        validationSchema={FormSchema}
        validateOnChange
        onSubmit={() => {
          onSubmit()
        }}
      >
        {(formikProps) => (
          <>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.keyboardAvoidingViewContainer}
            >
              <ScrollView style={styles.content}>

                <View style={styles.contentNewPassword}>
                  <View style={styles.formContainer}>
                    <FormField
                      title="Email Address"
                      email
                      enabled={false}
                      defaultValue={formikProps.values.curEmail}
                      border={0}
                    />
                    <FormField
                      title={translate('description')}
                      validateDelay={false}
                      onChangeText={(text) => {
                        formikProps.handleChange('description')(text)
                        setDescription(text)
                      }}
                      isTouched={() => formikProps.setFieldTouched('description', true)}
                      placeholder={translate('description')}
                      touched={formikProps.touched.description}
                      error={description === '' && formikProps.errors.description}
                      showApiErrors
                      multiline
                    />
                    <FormFieldImagesUpload onChangeImages={(images) => {
                      setImages(images)
                    }}
                    />
                  </View>
                </View>
                {showAction && (
                <View style={styles.relativeFooterContainer}>
                  <Button
                    onPress={() => {
                      formikProps.handleSubmit()
                    }}
                    style={ownStyles.footButton}
                    loading={loading}
                    disabled={!isAllowToSubmit}
                  >
                    {translate('submit')}
                  </Button>
                </View>
                )}
              </ScrollView>
            </KeyboardAvoidingView>
          </>
        )}
      </Formik>
          </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a8c961',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
    chevron: {
        top: 70,
        paddingLeft: 30,
    },
  });