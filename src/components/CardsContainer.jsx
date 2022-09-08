import { useForm } from "../hooks/useForm";
import { FrontCard, BackCard, Input, Button } from "./";

export const CardsContainer = () => {
  const [infoCard, errors, onInputChange, onValidate] = useForm({
    cardNumber: "",
    cvc: "",
    month: "",
    name: "",
    year: "",
  });

  const onChangeFormInput = (e) => {
    onInputChange(e);
    onValidate(e);
  };

  const saveInfoCard = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="relative z-40 grid w-2/4">
        <FrontCard {...infoCard} />
        <BackCard {...infoCard} />
      </section>
      <section className="relative z-40 w-2/4">
        <form className="w-full px-28" onSubmit={saveInfoCard}>
          <div className="mb-6">
            <Input
              name="name"
              onChange={onChangeFormInput}
              label="Nombre del titular"
              placeholder="Ejem. Benito Camela"
              type="text"
            />
          </div>
          <div className="mb-6">
            <Input
              name="cardNumber"
              onChange={onChangeFormInput}
              label="número de tarjeta"
              placeholder="ejem. 1234 5678 9123 0000"
              type="number"
            />
          </div>
          <div className="flex gap-5">
            <div className="flex w-1/2 gap-3">
              <div>
                <Input
                  name="month"
                  onChange={onChangeFormInput}
                  label="expiracion"
                  placeholder="MM"
                  type="number"
                />
              </div>
              <div>
                <Input
                  name="year"
                  onChange={onChangeFormInput}
                  label="(MM/AA)"
                  placeholder="AA"
                  type="number"
                />
              </div>
            </div>
            <div className="w-1/2">
              <Input
                name="cvc"
                value={infoCard.cvc}
                onChange={onChangeFormInput}
                label="cvc"
                placeholder="ejem. 123"
                type="number"
              />
            </div>
          </div>
          <div className="mt-10">
            <Button text="confirmar" />
          </div>
        </form>
      </section>
    </>
  );
};
