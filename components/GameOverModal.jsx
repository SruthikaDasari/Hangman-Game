     {/* Display game result and the correct word */}
        <p className="mb-8 mt-4 text-xl max-lg:text-lg">
          {isGameWon ? "You guessed the word" : "The correct word was"}
          <br />
          <b className="font-bold uppercase text-emerald-700">{" "} {showModal && currentWord}</b>
        </p>
        {/* Display Play Again button */}
        <button
          onClick={resetGameBoard}
          className="max-lg:2 rounded-md border bg-emerald-700 px-5 py-2.5 font-medium uppercase text-white hover:bg-emerald-600 max-lg:px-4"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
export default GameOverModal;
