// import "./Custom.css";

function Card() {
  return (
    <div className="">
      <div
        id="card"
        className="flex p-4 text-2xl flex-col border-1 justify-center items-center"
      >
        <img className="w-auto" src="src\assets\Satyajeet1.jpg" alt="#" />
        <h1 className="text-3xl font-bold mt-3">Polu</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl font-semibold mt-3 cursor-pointer hover:text-black transition-all duration-300 ease-in-out hover:bg-amber-600 ">
          Know more
        </button>
      </div>
    </div>
  );
}

export default Card;
