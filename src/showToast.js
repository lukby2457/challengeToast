import EventBus from "./eventBus";

export const showToast = {
  info: (message) => {
    EventBus.publish("SHOW_TOAST", { message });
  },

  success: (message) => {
    EventBus.publish("SHOW_TOAST", { message });
  },

  warning: (message) => {
    EventBus.publish("SHOW_TOAST", { message });
  }
};