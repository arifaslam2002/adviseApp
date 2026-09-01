
const AdviseCard = ({ advise,loading }) => {
    console.log(loading)
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
     {loading ? (
  <div className="py-6">
    <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

    <p className="text-lg font-medium text-gray-500">
      Loading advice...
    </p>
  </div>
) : (
  <>
    <p className="mb-4 text-sm text-gray-500">
      Advice #{advise.id}
    </p>

    <h2 className="text-2xl font-bold leading-relaxed text-gray-800">
      "{advise.advice}"
    </h2>
  </>
)}
              <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
          Get Advice
        </button>
    </div>
  );
};

export default AdviseCard;
