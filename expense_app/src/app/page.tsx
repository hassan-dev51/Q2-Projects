"use client";
import { Provider } from "react-redux";
import Hero from "./components/Home";
import { store } from "./redux/store";
export default function Home() {
  return (
    <main className="bg-blue-100">
      <Provider store={store}>
        <Hero />
      </Provider>
    </main>
  );
}
