import { CardsContainer } from "./components/CardsContainer";

const App = () => {
  return (
    <main className="w-full h-screen before:content-[''] before:w-1/3 before:h-screen before:bg-slate-800 before:block before:absolute before:bg-main before:bg-no-repeat	before:bg-cover">
      <section className="flex items-center justify-center w-full h-full max-w-screen-xl gap-10 mx-auto">
        <CardsContainer />
      </section>
    </main>
  );
};

export default App;
