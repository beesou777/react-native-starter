import Toast from "react-native-toast-message";

export const useToast = () => {
  const toast = (type: "success" | "error", message: string) => {
    Toast.show({
      type,
      position: "top",
      text1: type === "success" ? "Success!" : "Error",
      text2: message,
    });
  };

  return toast
};
