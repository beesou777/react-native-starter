import Toast from "react-native-toast-message";

export const useToast = () => {
  const toast = (type: "success" | "error", message: string) => {
    Toast.show({
      type,
      position: "top",
      text1: type === "success" ? "Success!" : "Error",
      text2: message,
      text1Style: {
        fontSize: 16,
      },
      text2Style: {
        fontSize: 14,
      },
      visibilityTime: 2000,
    });
  };

  return toast
};
