import cardLogo from "../assets/card-logo.svg";

export const FrontCard = (props) => {
  const name = props.name || "Benito Camela";
  const month = props.month || "00";
  const year = props.year || "00";
  const cardNumber = props.cardNumber || "0000000000000000";
  //Cada 4 digitos se crea un nuevo array con esos digitos
  const cardNumberSplit = cardNumber.match(/.{1,4}/g);

  return (
    <div className="w-4/5 mb-10 bg-no-repeat bg-cover shadow-lg rounded-2xl bg-front-card aspect-video">
      <div className="flex flex-col w-5/6 h-full mx-auto">
        <div className="h-1/2">
          <img src={cardLogo} alt="Card Logo" className="mt-8" />
        </div>
        <div className="flex flex-col justify-between font-semibold text-white h-1/2">
          <div className="flex justify-between mt-5 text-3xl tracking-wider">
            {cardNumberSplit.map((numbers, i) => (
              <span key={i}>{numbers}</span>
            ))}
          </div>
          <div className="flex justify-between mb-8 text-lg tracking-widest uppercase">
            <span>{name === "" ? "Benito Camela" : name}</span>
            <span>{`${month}/${year}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
