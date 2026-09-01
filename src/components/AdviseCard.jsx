const AdviseCard = ({ advise }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <p className="mb-3 text-sm font-medium text-gray-500">
          Advice #{advise.id}
        </p>

        <h2 className="text-2xl font-bold leading-relaxed text-gray-800">
          "{advise.advice}"
        </h2>

        <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
          Get Advice
        </button>
      </div>
    </div>
  );
};

export default AdviseCard;