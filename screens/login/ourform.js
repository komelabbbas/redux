import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { reduxForm, Field } from "redux-form";
import styles from "./style/styles";
import { connect } from "react-redux";

const handleSignup = (navigation) => {
  //console.log(navigation);
  this.props.navigation.navigate("forgetPassword");
};
const forget = () => {
  console.log(this.props);
};

const validate = (values) => {
  const errors = {};
  if (!values.fname) {
    errors.fname = "please fill the fname";
  } else if (values.fname.length > 7) {
    errors.fname = "we need first name maximum 7";
  }

  if (!values.phonenumber) {
    errors.phonenumber = "please phone number";
  } else if (values.phonenumber.length != 10) {
    errors.phonenumber = "must be 10 digit";
  }

  if (!values.age) {
    errors.age = "please fill age";
  } else if (Number(values.age) < 18) {
    errors.age = "need above 18";
  }
  return errors;
};
const myFields = ({ label, meta: { error, touched }, input: { onChange } }) => {
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        onChangeText={onChange}
        placeholder={label}
      />
      {touched && error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
};

const myBtn = (values) => {
  console.log(values);
};
const myFormCom = (props) => {
  const { handleSubmit } = props;
  return (
    <View>
      <Field name="email" component={myFields} label="Email" />

      <Field name="password" component={myFields} label="Password" />
      <Text>{"\n"}</Text>
      <TouchableOpacity onPress={forget} style={{ alignSelf: "center" }}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text></Text>

      <TouchableOpacity style={styles.button} onPress={handleSubmit(myBtn)}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text></Text>
      <TouchableOpacity onPress={handleSignup} style={{ alignSelf: "center" }}>
        <Text style={styles.signupText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = {
  handleSignup: handleSignup,
  forget: forget,
};
const ourform = reduxForm({
  form: "something",
  validate,
})(myFormCom);

export default ourform;
