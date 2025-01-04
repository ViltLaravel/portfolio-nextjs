"use client";

import { store } from "@/store";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export default function MainProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}
