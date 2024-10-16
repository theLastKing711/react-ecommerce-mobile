import { USER_URI } from "@/constants";
import { loginApi, useLogin } from "@/hooks/api/auth/useLogin";
import axios, { AxiosError } from "axios";
import React from "react";
import { Controller, Form, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
const Auth = () => {
  const theme = useTheme();

  const loginMutation = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  //   const onFinish: FormProps<ILoginForm>["onFinish"] = (values) => {
  //     console.log("values", values);

  //     login({
  //       name: values.name,
  //       password: values.password,
  //     });
  //   };

  const onSubmit = (data) => {
    loginMutation.mutate({ name: "aldj", password: "asldkj" });
  };

  return (
    <View
      style={{
        // marginVertical: 16,
        paddingHorizontal: 40,
        // backgroundColor: theme.colors.primary,
        // minHeight: "100%",
        flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        // alignItems: "center",
        // minHeight: "100%",
        backgroundColor: theme.colors.surface,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: theme.fonts.headlineLarge.fontSize,
            textAlign: "center",
            marginBottom: 20,
            color: theme.colors.onSurface,
          }}
        >
          تسجيل الدخول
        </Text>
        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Controller
            control={control}
            rules={{
              required: "اسم الستخدم مطلوب",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="اسم المستخدم"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="firstName"
          />
          {errors.firstName && <Text>{errors?.firstName.message}</Text>}
        </View>

        <View
          style={{
            marginBottom: 20,
          }}
        >
          <Controller
            control={control}
            rules={{
              required: "كلمة المرور مطلوبة",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="كلمة مرور"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="lastName"
          />
        </View>

        <Button
          mode="elevated"
          textColor={theme.colors.secondary}
          onPress={handleSubmit(onSubmit)}
        >
          حفظ
        </Button>
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    minHeight: "100%",
  },
});
