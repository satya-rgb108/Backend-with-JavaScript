import { asyncHandler } from "../utils/asyncHandler.js";
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Satyaranjan Pattanaik the best software engineer",
  });
});

export { registerUser };
